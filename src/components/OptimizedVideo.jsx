"use client";

import React, { useRef, useEffect, useState } from "react";
import { useDeviceCapabilities } from "../utils/useDeviceCapabilities";

const OptimizedVideo = ({ src, poster, style, className }) => {
    const videoRef = useRef(null);
    const [canPlay, setCanPlay] = useState(false);
    const { isMobile, isLowPower, isIOS } = useDeviceCapabilities();

    // On low power or mobile devices, we might default to NOT playing automatically
    // or only playing when strictly in view.
    // For iOS, strictly require playsinline and muted for any chance of autoplay.

    useEffect(() => {
        // If it's a very low-end device, never load the video to save bandwidth/memory
        if (isLowPower && isMobile) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!videoRef.current) return;

                    if (entry.isIntersecting) {
                        // Only attempt play if intersecting
                        // Use a promise to handle play() rejections (common on iOS)
                        const playPromise = videoRef.current.play();
                        if (playPromise !== undefined) {
                            playPromise.catch((error) => {
                                console.log("Autoplay prevented:", error);
                                // Expected on some devices, just leave it paused showing poster
                            });
                        }
                    } else {
                        videoRef.current.pause();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        // Delay actual source setting to prioritize LCP (Poster)
        const timeout = setTimeout(() => {
            setCanPlay(true);
        }, 1500); // Wait 1.5s after mount to set video source, letting main thread breathe

        return () => {
            observer.disconnect();
            clearTimeout(timeout);
        };
    }, [isLowPower, isMobile]);

    // If very low power mobile, just return image (handled by parent or fallback?)
    // Actually, let's just return the video tag with poster, but NO source if we want to completely disable it.
    // But for now, we'll rely on the 'canPlay' state to inject the source.

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            className={className}
            style={style}
            preload="none" // Important: force browser to lazy load
        >
            {canPlay && (!(isLowPower && isMobile)) && (
                <source src={src} type="video/webm" />
            )}
        </video>
    );
};

export default OptimizedVideo;
