import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CHARACTERS = [
    '💎', '💵', '💰', '💸'
];

interface Particle {
    id: number;
    char: string;
    top: number;
    left: number;
    duration: number;
    size: number;
    rotation: number;
    floatY: number;
    floatX: number;
}

const FallingLuxury: React.FC = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate particles scattered randomly across the screen
        const initialParticles = Array.from({ length: 35 }).map((_, i) => ({
            id: i,
            char: CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
            top: Math.random() * 100, // %
            left: Math.random() * 100, // %
            duration: 8 + Math.random() * 12, // Slow duration (8-20s)
            size: 15 + Math.random() * 30, // Random size
            rotation: Math.random() * 360,
            floatY: 30 + Math.random() * 50, // Float range
            floatX: 20 + Math.random() * 40
        }));
        setParticles(initialParticles);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 0,
                overflow: 'hidden'
            }}
        >
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        y: [0, -p.floatY, 0], // Float up and down
                        x: [0, p.floatX, 0],  // Float sideways
                        rotate: [p.rotation, p.rotation + 45, p.rotation], // Gentle rotation
                        opacity: [0, 0.4, 0.6, 0.4, 0], // Fade in/out slowly
                        scale: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 5
                    }}
                    style={{
                        position: 'absolute',
                        top: `${p.top}%`,
                        left: `${p.left}%`,
                        fontSize: `${p.size}px`,
                        filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))'
                    }}
                >
                    {p.char}
                </motion.div>
            ))}

            {/* Background Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(5, 16, 37, 0.8) 100%)',
                zIndex: 1
            }} />
        </div>
    );
};

export default FallingLuxury;
