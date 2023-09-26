'use client';
import React, { useState, useEffect } from 'react';

export interface SlotMachineTextProps {
    texts: string[];
    finalText: string;
    duration?: number;
    cycles?: number;
}

export default function SlotMachineText({ texts, finalText, duration = 1000, cycles = 5 }: SlotMachineTextProps) {
    const [currentText, setCurrentText] = useState(texts[0]);
    const [index, setIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const fadeDuration = 150;

    useEffect(() => {
        let cycleCount = 0;
        const maxCycles = cycles * texts.length;

        const changeText = () => {
            // Fade out
            setOpacity(0);

            setTimeout(() => {
                // Increment text index and reset if it goes beyond the array length
                setIndex(prevIndex => {
                    const newIndex = (prevIndex + 1) % texts.length;
                    setCurrentText(texts[newIndex]);
                    return newIndex;
                });

                // Fade in
                setOpacity(1);

                cycleCount++;

                if (cycleCount === maxCycles) {
                    setCurrentText(finalText);
                }
            }, fadeDuration);
        }

        const interval = setInterval(changeText, duration / cycles);
        return () => clearInterval(interval);
    }, [texts, finalText, duration, cycles]);

    return (
        <span className="transition-opacity duration-150" style={{ opacity: opacity }}>
            {currentText}
        </span>
    );
}