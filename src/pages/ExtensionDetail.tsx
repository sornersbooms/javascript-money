import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { extensions } from '../data/extensions';
import { Icon } from '../components/Icon';
import { motion } from 'framer-motion';

const ExtensionDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const extension = extensions.find(e => e.id === id);

    if (!extension) {
        return <div style={{ padding: '4rem', color: 'white' }}>Extensión no encontrada.</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="detail-container"
            style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}
        >
            <Link to="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: '#94a3b8',
                marginBottom: '2rem',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.2s'
            }}>
                <Icon name="ArrowLeft" size={20} style={{ marginRight: '8px' }} />
                Volver al Stand
            </Link>

            {/* Seccion principal: Cabecera Hero */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    position: 'relative',
                    background: 'linear-gradient(145deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.9) 100%)',
                    borderRadius: '24px',
                    padding: 'clamp(2rem, 5vw, 4rem)',
                    marginBottom: '3rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    overflow: 'hidden'
                }}
            >
                {/* Brillo de fondo sutil */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}></div>

                <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    padding: '1.5rem',
                    borderRadius: '20px',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <Icon name={extension.icon} size={56} style={{ color: '#818cf8' }} />
                </div>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    lineHeight: 1.1,
                    color: '#ffffff',
                    marginBottom: '1rem',
                    fontWeight: 900,
                    letterSpacing: '-1px',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {extension.title}
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: '#94a3b8',
                    maxWidth: '800px',
                    lineHeight: 1.6,
                    marginBottom: '2.5rem',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {extension.fullDescription}
                </p>

                <motion.a
                    href={extension.downloadLink || '#'}
                    target="_blank"
                    rel="noopener"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(52,211,153,0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem 3rem',
                        fontSize: '1.1rem',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        borderRadius: '50px',
                        color: 'white',
                        textDecoration: 'none',
                        border: 'none',
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    Probar Gratis (3 Días)
                </motion.a>
                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b', position: 'relative', zIndex: 1 }}>
                    * Sin tarjeta de crédito. Instalación instantánea.
                </div>
            </motion.div>

            {/* Malla de info: Caracteristicas y Especificaciones */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
            }}>
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        background: 'rgba(30,41,59,0.4)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: '20px',
                        padding: '2rem',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                        <div style={{ width: '8px', height: '24px', background: '#3b82f6', borderRadius: '4px' }}></div>
                        <h3 style={{ fontSize: '1.5rem', color: '#f8fafc', margin: 0 }}>Características Core</h3>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {extension.features.map((feature, i) => (
                            <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', background: 'rgba(0,0,0,0.2)', padding: '12px 16px', borderRadius: '12px' }}>
                                <span style={{ color: '#3b82f6', marginRight: '12px', fontSize: '1.2rem', lineHeight: '1' }}>✦</span>
                                <span style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.4' }}>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        background: 'rgba(30,41,59,0.4)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: '20px',
                        padding: '2rem',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                        <div style={{ width: '8px', height: '24px', background: '#8b5cf6', borderRadius: '4px' }}></div>
                        <h3 style={{ fontSize: '1.5rem', color: '#f8fafc', margin: 0 }}>Modulos Técnicos</h3>
                    </div>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {extension.technicalSpecs.map((spec, i) => (
                            <div key={i} style={{
                                background: 'rgba(15,23,42,0.6)',
                                padding: '1rem',
                                borderRadius: '12px',
                                fontSize: '0.95rem',
                                color: '#94a3b8',
                                borderLeft: '3px solid #8b5cf6',
                                display: 'flex',
                                alignItems: 'center',
                                fontFamily: 'monospace'
                            }}>
                                <span style={{ color: '#8b5cf6', marginRight: '8px' }}>&gt;_</span> {spec}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Pricing Section (Full Width Grid) */}
            {extension.plans && (
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <h3 style={{
                        fontSize: '2rem',
                        marginBottom: '2rem',
                        color: '#f8fafc',
                        textAlign: 'center',
                        fontWeight: 800
                    }}>Invierte en tu Negocio</h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {extension.plans.map((plan, i) => {
                            const isPro = plan.name.toLowerCase().includes('pro');
                            return (
                                <div key={i} style={{
                                    background: isPro ? 'linear-gradient(180deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.9) 100%)' : 'rgba(30,41,59,0.4)',
                                    padding: '2.5rem 2rem',
                                    borderRadius: '24px',
                                    border: isPro ? '2px solid rgba(139,92,246,0.5)' : '1px solid rgba(255,255,255,0.05)',
                                    position: 'relative',
                                    boxShadow: isPro ? '0 20px 40px -10px rgba(139,92,246,0.15)' : 'none',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    {isPro && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-12px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
                                            padding: '4px 16px',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            letterSpacing: '1px'
                                        }}>
                                            MÁS POPULAR
                                        </div>
                                    )}
                                    <h4 style={{ color: isPro ? '#c4b5fd' : '#94a3b8', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{plan.name}</h4>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '2rem', color: '#fff' }}>{plan.price}</div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                                        {plan.features.map((feat, j) => (
                                            <li key={j} style={{
                                                marginBottom: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: '#cbd5e1',
                                                fontSize: '1rem'
                                            }}>
                                                <span style={{ color: isPro ? '#8b5cf6' : '#64748b', marginRight: '10px' }}>✓</span>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            )}

            {extension.youtubeUrl && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ marginTop: '5rem', marginBottom: '2rem' }}
                >
                    <h2 style={{
                        textAlign: 'center',
                        fontSize: '2rem',
                        marginBottom: '2rem',
                        background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                    }}>Ver en Acción</h2>

                    <div style={{
                        position: 'relative',
                        paddingBottom: '56.25%', /* 16:9 aspect ratio */
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '24px',
                        boxShadow: '0 0 50px rgba(99, 102, 241, 0.2)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: '#000'
                    }}>
                        <iframe
                            src={extension.youtubeUrl}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 0
                            }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube demo"
                        />
                    </div>
                </motion.div>
            )}

            {/* Footer / Disclaimer */}
            <div style={{ marginTop: '4rem', textAlign: 'center', color: '#4b5563', fontSize: '0.9rem' }}>
                <p>Javascript Money © 2026. Todos los derechos reservados.</p>
            </div>
        </motion.div>
    );
};

export default ExtensionDetail;
