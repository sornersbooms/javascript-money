import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

const TutorialWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Reemplaza el ID en src/data/config.ts
    const videoId = SITE_CONFIG.tutorialVideoId; 
    const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    return (
        <>
            {/* Botón Flotante */}
            <div 
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    pointerEvents: 'none'
                }}
            >
                <AnimatePresence>
                    {(isHovered || !isOpen) && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            style={{
                                background: 'rgba(15, 23, 42, 0.9)',
                                backdropFilter: 'blur(8px)',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                border: '1px solid var(--accent-color)',
                                color: 'white',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                whiteSpace: 'nowrap',
                                pointerEvents: 'auto',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => setIsOpen(true)}
                        >
                            ¿Cómo instalar las extensiones?
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    className="tutorial-widget-btn"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setIsOpen(true)}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--accent-color) 0%, #16a34a 100%)',
                        border: 'none',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 0 20px rgba(34, 197, 128, 0.4)',
                        pointerEvents: 'auto',
                        position: 'relative'
                    }}
                >
                    <motion.div
                        animate={{ 
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Play fill="white" size={24} style={{ marginLeft: '4px' }} />
                    </motion.div>
                </motion.button>
            </div>

            {/* Modal del Video */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.9)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 10000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px'
                        }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            style={{
                                width: '100%',
                                maxWidth: '900px',
                                position: 'relative',
                                background: 'var(--bg-card)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid var(--border-color)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header del Modal */}
                            <div style={{
                                padding: '20px 30px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: '1px solid var(--border-color)',
                                background: 'rgba(255, 255, 255, 0.03)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <HelpCircle color="var(--accent-color)" size={24} />
                                    <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Guía de Instalación</h3>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        border: 'none',
                                        color: 'white',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Contenedor del Video Aspect Ratio 16:9 */}
                            <div style={{
                                position: 'relative',
                                paddingTop: '56.25%', // 16:9
                                width: '100%',
                                background: 'black'
                            }}>
                                <iframe
                                    src={youtubeUrl}
                                    title="Tutorial de Instalación"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%'
                                    }}
                                ></iframe>
                            </div>

                            {/* Footer informativo */}
                            <div style={{
                                padding: '15px 30px',
                                background: 'rgba(0, 0, 0, 0.2)',
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                textAlign: 'center'
                            }}>
                                <p>Sigue estos pasos para activar tu extensión en menos de 2 minutos.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TutorialWidget;
