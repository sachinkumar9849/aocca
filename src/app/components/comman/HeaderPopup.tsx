"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export interface PopupItem {
    id: number;
    title: string;
    image_url: string;
    link_url?: string;
    status: string;
    display_order: number;
    created_at?: string;
}

const getApiBase = (): string => {
    const envUrl = (process.env.NEXT_PUBLIC_URL || "").replace(/"/g, "").trim();
    if (typeof window !== "undefined") {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            if (envUrl.includes("localhost")) {
                return envUrl;
            }
            return "http://localhost:8082/api/v1";
        }
    }
    return envUrl || "https://api.aoc.edu.np/api/v1";
};

export const resolvePopupImageUrl = (url?: string): string => {
    if (!url) return "";
    let clean = url.trim();

    if (clean.startsWith("/")) {
        const base = (process.env.NEXT_PUBLIC_IMG_URL || "https://api.aoc.edu.np").replace(/\/$/, "");
        return `${base}${clean}`;
    }

    if (
        typeof window !== "undefined" &&
        window.location.hostname !== "localhost" &&
        window.location.hostname !== "127.0.0.1"
    ) {
        if (clean.includes("localhost:8082") || clean.includes("127.0.0.1:8082")) {
            const prodImgBase = (process.env.NEXT_PUBLIC_IMG_URL || "https://api.aoc.edu.np").replace(/\/$/, "");
            clean = clean.replace(/^https?:\/\/(localhost|127\.0\.0\.1):8082/, prodImgBase);
        }
    }

    if (typeof window !== "undefined" && window.location.protocol === "https:" && clean.startsWith("http://")) {
        clean = clean.replace(/^http:\/\//, "https://");
    }

    return clean;
};

const HeaderPopup: React.FC = () => {
    const [popups, setPopups] = useState<PopupItem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        let isMounted = true;

        const fetchActivePopups = async () => {
            const base = getApiBase();
            const candidateUrls = [`${base}/popups/active`, `${base}/popups?status=active`];

            if (typeof window !== "undefined" && window.location.hostname === "localhost" && !base.includes("8082")) {
                candidateUrls.push("http://localhost:8082/api/v1/popups/active");
            }

            for (const url of candidateUrls) {
                try {
                    const res = await fetch(url, {
                        headers: {
                            Accept: "application/json",
                        },
                    });

                    if (!res.ok) {
                        continue;
                    }

                    const json = await res.json();
                    const list: PopupItem[] = Array.isArray(json) ? json : Array.isArray(json?.data) ? json.data : [];

                    const activePopups = list.filter(
                        (p) => p && p.image_url && (p.status === "active" || p.status === "published"),
                    );

                    if (activePopups.length > 0 && isMounted) {
                        activePopups.sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));
                        setPopups(activePopups);
                        return;
                    }
                } catch (error) {
                    void error;
                }
            }
        };

        fetchActivePopups();

        return () => {
            isMounted = false;
        };
    }, []);

    const openPopup = useCallback(() => {
        setCurrentIndex(0);
        setIsOpen(true);
        setTimeout(() => {
            setIsVisible(true);
        }, 50);
    }, []);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    }, []);

    useEffect(() => {
        if (pathname === "/" && popups.length > 0) {
            const timer = setTimeout(() => {
                openPopup();
            }, 400);
            return () => clearTimeout(timer);
        } else if (pathname !== "/") {
            setIsVisible(false);
            setIsOpen(false);
        }
    }, [pathname, popups.length, openPopup]);

    useEffect(() => {
        const handleHomeLinkClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;

            const link = target.closest('a[href="/"]') as HTMLAnchorElement | null;
            if (link) {
                if (popups.length > 0) {
                    setTimeout(() => {
                        openPopup();
                    }, 150);
                }
            }
        };

        document.addEventListener("click", handleHomeLinkClick);
        return () => {
            document.removeEventListener("click", handleHomeLinkClick);
        };
    }, [popups.length, openPopup]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                handleClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, handleClose]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;
        const diff = touchStartX.current - touchEndX.current;
        const threshold = 40;

        if (diff > threshold) {
            setCurrentIndex((prev) => (prev === popups.length - 1 ? 0 : prev + 1));
        } else if (diff < -threshold) {
            setCurrentIndex((prev) => (prev === 0 ? popups.length - 1 : prev - 1));
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    if (pathname !== "/" || !isOpen || popups.length === 0) {
        return null;
    }

    const currentPopup = popups[currentIndex];
    const hasMultiple = popups.length > 1;

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? popups.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === popups.length - 1 ? 0 : prev + 1));
    };

    const isInternalLink =
        currentPopup.link_url && (currentPopup.link_url.startsWith("/") || currentPopup.link_url.startsWith("#"));

    return (
        <div
            className={`fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-300 ${
                isVisible ? "bg-black/65 backdrop-blur-xs opacity-100" : "bg-black/0 opacity-0 pointer-events-none"
            }`}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label={currentPopup.title || "Promotional Announcement"}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={`relative w-full max-w-[92vw] sm:max-w-lg md:max-w-xl max-h-[88vh] sm:max-h-[92vh] bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col ${
                    isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-3 opacity-0"
                }`}
            >
                {}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-30 w-8 h-8 sm:w-9 sm:h-9 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur-xs border border-white/20 transition-all duration-200 shadow-lg active:scale-90 focus:outline-hidden"
                    aria-label="Close popup"
                >
                    <X size={18} />
                </button>

                {}
                {hasMultiple && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-black/55 hover:bg-black/80 active:scale-90 text-white rounded-full flex items-center justify-center backdrop-blur-xs transition-all shadow-md"
                            aria-label="Previous popup"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-black/55 hover:bg-black/80 active:scale-90 text-white rounded-full flex items-center justify-center backdrop-blur-xs transition-all shadow-md"
                            aria-label="Next popup"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}

                {}
                <div className="relative w-full bg-gray-50 flex items-center justify-center overflow-hidden max-h-[60vh] sm:max-h-[70vh]">
                    {currentPopup.link_url ? (
                        isInternalLink ? (
                            <Link
                                href={currentPopup.link_url}
                                onClick={handleClose}
                                className="block w-full group cursor-pointer"
                            >
                                <img
                                    src={resolvePopupImageUrl(currentPopup.image_url)}
                                    alt={currentPopup.title || "Promotional banner"}
                                    className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                                />
                            </Link>
                        ) : (
                            <a
                                href={currentPopup.link_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleClose}
                                className="block w-full group cursor-pointer"
                            >
                                <img
                                    src={resolvePopupImageUrl(currentPopup.image_url)}
                                    alt={currentPopup.title || "Promotional banner"}
                                    className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                                />
                            </a>
                        )
                    ) : (
                        <img
                            src={resolvePopupImageUrl(currentPopup.image_url)}
                            alt={currentPopup.title || "Promotional banner"}
                            className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain mx-auto"
                        />
                    )}
                </div>

                {}
                {(currentPopup.title || currentPopup.link_url) && (
                    <div className="p-3 sm:p-4 bg-white border-t border-gray-100 flex items-center justify-between gap-2.5">
                        {currentPopup.title ? (
                            <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base line-clamp-1 flex-1">
                                {currentPopup.title}
                            </h3>
                        ) : (
                            <span className="text-[11px] sm:text-xs text-gray-400">Academy of Commerce</span>
                        )}

                        {currentPopup.link_url &&
                            (isInternalLink ? (
                                <Link
                                    href={currentPopup.link_url}
                                    onClick={handleClose}
                                    className="shrink-0 inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors active:scale-95 shadow-xs"
                                >
                                    <span>Learn More</span>
                                    <ExternalLink size={12} className="hidden sm:inline" />
                                </Link>
                            ) : (
                                <a
                                    href={currentPopup.link_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleClose}
                                    className="shrink-0 inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors active:scale-95 shadow-xs"
                                >
                                    <span>Learn More</span>
                                    <ExternalLink size={12} className="hidden sm:inline" />
                                </a>
                            ))}
                    </div>
                )}

                {}
                {hasMultiple && (
                    <div className="py-1.5 sm:py-2 bg-gray-50 flex items-center justify-center gap-1.5 border-t border-gray-100">
                        {popups.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(idx);
                                }}
                                className={`h-1.5 sm:h-2 rounded-full transition-all ${
                                    idx === currentIndex
                                        ? "w-5 sm:w-6 bg-blue-600"
                                        : "w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderPopup;
