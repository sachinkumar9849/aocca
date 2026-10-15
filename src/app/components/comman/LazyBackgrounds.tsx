"use client";
import { useEffect } from "react";

const SELECTOR = "[data-lazy-bg]:not(.bg-visible)";

export default function LazyBackgrounds() {
    useEffect(() => {
        const intersection = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    entry.target.classList.add("bg-visible");
                    intersection.unobserve(entry.target);
                }
            },
            { rootMargin: "400px 0px" },
        );

        const observeAll = () => {
            document.querySelectorAll(SELECTOR).forEach((element) => intersection.observe(element));
        };

        observeAll();
        const mutation = new MutationObserver(observeAll);
        mutation.observe(document.body, { childList: true, subtree: true });

        return () => {
            mutation.disconnect();
            intersection.disconnect();
        };
    }, []);

    return null;
}
