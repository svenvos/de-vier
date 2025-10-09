import { useEffect } from 'react';

export default function PerformanceMonitor() {
    useEffect(() => {
        // Monitor image loading performance
        const images = document.querySelectorAll('img');
        let loadedImages = 0;
        const totalImages = images.length;

        const handleImageLoad = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                console.log(`🚀 All ${totalImages} images loaded!`);
                
                // Log performance metrics
                if (window.performance && window.performance.timing) {
                    const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
                    console.log(`⏱️  Page load time: ${loadTime}ms`);
                }
            }
        };

        images.forEach(img => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener('load', handleImageLoad);
            }
        });

        return () => {
            images.forEach(img => {
                img.removeEventListener('load', handleImageLoad);
            });
        };
    }, []);

    return null; // This component doesn't render anything
}
