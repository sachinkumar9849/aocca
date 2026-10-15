"use client";
import React, { useEffect, useRef, useState } from "react";

interface CourseSectionMenuProps {
    items: { id: string | number; slug: string; title: string }[];
}

export default function CourseSectionMenu({ items }: CourseSectionMenuProps) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

        const handlePointerDown = (event: PointerEvent) => {
            if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
        };
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open]);

    if (items.length === 0) return null;

    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
        event.preventDefault();
        document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <div ref={menuRef} className={`page_link${open ? " is-open" : ""}`}>
            <button
                type="button"
                className="page_link_toggle"
                aria-expanded={open}
                aria-controls="course-section-menu"
                aria-label={open ? "Hide section menu" : "Show section menu"}
                onClick={() => setOpen((value) => !value)}
            >
                <span aria-hidden="true">{open ? "‹" : "›"}</span>
            </button>
            <ul id="course-section-menu">
                {items.map((item) => (
                    <li key={item.id}>
                        <a href={`#${item.slug}`} onClick={(event) => scrollToSection(event, item.slug)}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
