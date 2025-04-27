"use client";
import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";

import Carousel, { Modal, ModalGateway } from "react-images";
import type { ViewStylesBase, FooterStylesBase, HeaderStylesBase, NavigationStylesBase } from "react-images";

interface GalleryItem {
    id: number;
    image_url: string;
}

interface PhotoProps {
    src: string;
    width: number;
    height: number;
    alt?: string;
    srcSet?: string;
}

const customStyles = {
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
    carouselStyles: {
        view: (base: ViewStylesBase): ViewStylesBase => ({
            ...base,
            padding: 20,
            height: "calc(100vh - 120px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }),
        footer: (base: FooterStylesBase): FooterStylesBase => ({
            ...base,
            color: "#fff",
            padding: "20px 0",
            textAlign: "center",
        }),
        header: (base: HeaderStylesBase): HeaderStylesBase => ({
            ...base,
            padding: "20px 0",
        }),
        navigationPrev: (base: NavigationStylesBase): NavigationStylesBase => ({
            ...base,
            color: "#fff",
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "50%",
            padding: 10,
            width: 40,
            height: 40,
            marginLeft: 10,
        }),
        navigationNext: (base: NavigationStylesBase): NavigationStylesBase => ({
            ...base,
            color: "#fff",
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "50%",
            padding: 10,
            width: 40,
            height: 40,
            marginRight: 10,
        }),
    },
};

export default function GalleryImg() {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);
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

    const openLightbox = useCallback((event: React.MouseEvent, { index }: { index: number }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const galleryOptions = {
        margin: 5,
        targetRowHeight: 250,
    };

    if (loading) {
        return (
            <div>
                <h1>Photo Gallery</h1>
                <div>Loading gallery images...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={customStyles.gallery}>
                <h1>Photo Gallery</h1>
                <div>{error}</div>
            </div>
        );
    }

    if (photos.length === 0) {
        return (
            <div style={customStyles.gallery}>
                <h1>Photo Gallery</h1>
                <div>No gallery images available.</div>
            </div>
        );
    }

    return (
        <div style={customStyles.gallery}>
            <Gallery
                photos={photos}
                onClick={openLightbox}
                margin={galleryOptions.margin}
                targetRowHeight={galleryOptions.targetRowHeight}
            />

            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((x) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.alt,
                            }))}
                            styles={customStyles.carouselStyles}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}
