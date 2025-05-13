"use client";
import React, { useState, useEffect } from "react";

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

export default function GalleryImgFooter() {
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
            <div className="max-w-7xl mx-auto py-24">
                <h1 className="text-center mb-5 text-3xl font-sans text-gray-800">Photo Gallery</h1>
                <div className="text-center py-12 text-lg">Loading gallery images...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto py-24">
                <h1 className="text-center mb-5 text-3xl font-sans text-gray-800">Photo Gallery</h1>
                <div>{error}</div>
            </div>
        );
    }

    if (photos.length === 0) {
        return (
            <div className="max-w-7xl mx-auto py-24">
                <h1 className="text-center mb-5 text-3xl font-sans text-gray-800">Photo Gallery</h1>
                <div>No gallery images available.</div>
            </div>
        );
    }
    const displayedPhots = photos.slice(0, 6);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid  md:grid-cols-3 grid-cols-2 gap-5">
                {displayedPhots.map((photo, index) => (
                    <div
                        key={index}
                        className="cursor-pointer overflow-hidden rounded aspect-4/3"
                        onClick={() => openLightbox(index)}
                    >
                        <img
                            style={{ height: "100px" }}
                            src={photo.src}
                            alt={photo.alt || `Gallery image ${index}`}
                            className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-110"
                        />
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
