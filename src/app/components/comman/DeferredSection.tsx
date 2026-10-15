"use client";
import React, { useEffect, useRef, useState } from "react";

interface DeferredSectionProps {
    children: React.ReactNode;
    minHeight?: string;
}

export default function DeferredSection({ children, minHeight = "60vh" }: DeferredSectionProps) {
    const [visible, setVisible] = useState(false);
    const placeholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const placeholder = placeholderRef.current;
        if (!placeholder) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px 0px" },
        );
        observer.observe(placeholder);

        return () => observer.disconnect();
    }, []);

    if (visible) return <>{children}</>;

    return <div ref={placeholderRef} style={{ minHeight }} aria-hidden="true" />;
}
