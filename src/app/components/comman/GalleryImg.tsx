"use client";
import React, { useState, useEffect } from "react";
import type { CSSProperties } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryItem {
    id: number;
    image_url: string;
}

interface PhotoProps {
    src: string;
    width: number;
    height: number;
    alt?: string;
}

const customStyles: Record<string, CSSProperties> = {
    gallery: {
        margin: "0 auto",
        maxWidth: "1200px",
        padding: "100px 0",
    },
    heading: {
        textAlign: "center",
        margin: "20px 0",
        fontFamily: "sans-serif",
        color: "#333",
    },
    loading: {
        textAlign: "center",
        padding: "50px",
        fontSize: "18px",
    },
    imageGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "10px",
    },
    imageContainer: {
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "4px",
        aspectRatio: "4/3",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover" as const,
        transition: "transform 0.3s ease",
    },
};

export default function GalleryImg() {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [photos, setPhotos] = useState<PhotoProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGalleryImages = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_URL}/toper-testimonial-team?type=gallery&status=published`,
                );

                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }

                const data: GalleryItem[] = await response.json();

                const formattedPhotos: PhotoProps[] = data.map((item) => ({
                    src: item.image_url,
                    width: 4,
                    height: 3,
                    alt: `Gallery image ${item.id}`,
                }));

                setPhotos(formattedPhotos);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching gallery images:", err);
                setError("Failed to load gallery images. Please try again later.");
                setLoading(false);
            }
        };

        fetchGalleryImages();
    }, []);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    if (loading) {
        return (
            <div style={customStyles.gallery}>
                <h1 style={customStyles.heading}>Photo Gallery</h1>
                <div style={customStyles.loading}>Loading gallery images...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={customStyles.gallery}>
                <h1 style={customStyles.heading}>Photo Gallery</h1>
                <div>{error}</div>
            </div>
        );
    }

    if (photos.length === 0) {
        return (
            <div style={customStyles.gallery}>
                <h1 style={customStyles.heading}>Photo Gallery</h1>
                <div>No gallery images available.</div>
            </div>
        );
    }

    return (
        <div style={customStyles.gallery}>
            <div style={customStyles.imageGrid}>
                {photos.map((photo, index) => (
                    <div key={index} style={customStyles.imageContainer} onClick={() => openLightbox(index)}>
                        <img src={photo.src} alt={photo.alt || `Gallery image ${index}`} style={customStyles.image} />
                    </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={currentIndex}
                slides={photos.map((photo) => ({ src: photo.src, alt: photo.alt }))}
            />
        </div>
    );
}
