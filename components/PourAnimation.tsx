"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useTransform, useMotionValueEvent, useMotionValue } from "framer-motion";

const TOTAL_FRAMES = 192; // 0 to 191

interface PourAnimationProps {
    progress?: MotionValue<number>;
}

export default function PourAnimation({ progress }: PourAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const fallbackProgress = useMotionValue(0);
    const validProgress = progress || fallbackProgress;

    // Mapping scroll progress exactly to frame index.
    // The animation finishes playing exactly when the pinned container begins to unpin.
    const frameIndex = useTransform(validProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // Removed opacity fade to keep animation fully visible

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            // Format number to 3 digits (000, 001, ..., 191)
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `/pour-sequence/frame_${paddedIndex}_delay-0.041s.jpg`;
            img.onload = () => {
                loadedCount++;
                setImagesLoaded(loadedCount);
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Make canvas render dynamically respecting the window scale without clipping
    const renderFrame = (index: number) => {
        if (!canvasRef.current || images.length !== TOTAL_FRAMES) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[Math.floor(index)];
        if (!img || !img.complete) return;

        // Get true window dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // We want the image to act like an object-fit: cover so it fills the screen
        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            // Canvas is wider than image (landscape) - fit to width to OVERFILL height
            drawWidth = canvas.width;
            drawHeight = img.height * (canvas.width / img.width);
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            // Canvas is taller than image (portrait) - fit to height to OVERFILL width
            drawHeight = canvas.height;
            drawWidth = img.width * (canvas.height / img.height);
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        // Fill the deep luxury void color first
        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Initially render current frame once images load
    useEffect(() => {
        if (imagesLoaded === TOTAL_FRAMES) {
            renderFrame(frameIndex.get());
        }
    }, [imagesLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

    // Render on scroll
    useMotionValueEvent(frameIndex, "change", (latest) => {
        renderFrame(latest);
    });

    // Re-render when resizing so that canvas bounds stay sharp
    useEffect(() => {
        const handleResize = () => renderFrame(frameIndex.get());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [imagesLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-alypios-bg overflow-hidden z-0">
            <canvas ref={canvasRef} className="w-full h-full object-cover" />

            {imagesLoaded < TOTAL_FRAMES && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-alypios-bg text-white">
                    <p className="font-serif text-2xl mb-4 tracking-widest text-alypios-accent animate-pulse">
                        PREPARING
                    </p>
                    <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-alypios-accent transition-all duration-300 ease-out"
                            style={{ width: `${(imagesLoaded / TOTAL_FRAMES) * 100}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
