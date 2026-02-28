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
                    background: '#1e293b',
                    borderRadius: '8px',
                    padding: '3rem 2rem',
                    marginBottom: '3rem',
                    border: '1px solid #334155',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >
                <div style={{
                    background: '#0f172a',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    border: '1px solid #334155'
                }}>
                    <Icon name={extension.icon} size={48} style={{ color: '#60a5fa' }} />
                </div>

                <h1 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    color: '#f8fafc',
                    marginBottom: '1rem',
                    fontWeight: 'bold'
                }}>
                    {extension.title}
                </h1>

                <p style={{
                    fontSize: '1.1rem',
                    color: '#cbd5e1',
                    maxWidth: '800px',
                    lineHeight: 1.6,
                    marginBottom: '2rem'
                }}>
                    {extension.fullDescription}
                </p>

                <motion.a
                    href={extension.downloadLink || '#'}
                    target="_blank"
                    rel="noopener"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        background: '#22c55e',
                        borderRadius: '6px',
                        color: 'white',
                        textDecoration: 'none',
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}
                >
                    Probar Gratis (3 Días)
                </motion.a>
                <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#94a3b8' }}>
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
                        background: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        padding: '2rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid #3b82f6', paddingBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.3rem', color: '#f8fafc', margin: 0 }}>Características Core</h3>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {extension.features.map((feature, i) => (
                            <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                                <span style={{ color: '#22c55e', marginRight: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>✓</span>
                                <span style={{ fontSize: '1rem', color: '#e2e8f0', lineHeight: '1.5' }}>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        background: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        padding: '2rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid #6366f1', paddingBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.3rem', color: '#f8fafc', margin: 0 }}>Módulos Técnicos</h3>
                    </div>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {extension.technicalSpecs.map((spec, i) => (
                            <div key={i} style={{
                                background: '#0f172a',
                                padding: '1rem',
                                borderRadius: '6px',
                                fontSize: '0.9rem',
                                color: '#cbd5e1',
                                borderLeft: '4px solid #6366f1',
                                borderTop: '1px solid #334155',
                                borderRight: '1px solid #334155',
                                borderBottom: '1px solid #334155',
                                display: 'flex',
                                alignItems: 'center',
                                fontFamily: 'Arial, sans-serif'
                            }}>
                                {spec}
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
                                    background: isPro ? '#0f172a' : '#1e293b',
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    border: isPro ? '2px solid #3b82f6' : '1px solid #334155',
                                    position: 'relative',
                                    boxShadow: isPro ? '0 8px 16px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    {isPro && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-12px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: '#3b82f6',
                                            padding: '4px 16px',
                                            borderRadius: '4px',
                                            fontSize: '0.8rem',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            letterSpacing: '1px'
                                        }}>
                                            MÁS POPULAR
                                        </div>
                                    )}
                                    <h4 style={{ color: isPro ? '#60a5fa' : '#94a3b8', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{plan.name}</h4>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#fff' }}>{plan.price}</div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                                        {plan.features.map((feat, j) => (
                                            <li key={j} style={{
                                                marginBottom: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: '#e2e8f0',
                                                fontSize: '1rem'
                                            }}>
                                                <span style={{ color: isPro ? '#3b82f6' : '#94a3b8', marginRight: '10px', fontWeight: 'bold' }}>✓</span>
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
