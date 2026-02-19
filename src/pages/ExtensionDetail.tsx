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

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(2rem, 5vw, 4rem)',
                alignItems: 'start'
            }}>
                {/* Left Column: Visual & Persuasive */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ flex: '1 1 400px', minWidth: '300px' }}
                >
                    <div style={{
                        background: 'var(--bg-card)', /* Cement Gray */
                        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                        borderRadius: '12px',
                        marginBottom: '2rem',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            width: 'fit-content',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            marginBottom: '2rem',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <Icon name={extension.icon} size={64} style={{ color: 'var(--accent-color)' }} />
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            lineHeight: 1.1,
                            color: '#ffffff',
                            marginBottom: '1.5rem',
                            fontWeight: 800
                        }}>
                            {extension.title}
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                            color: '#d4af37', /* Gold Opaque */
                            lineHeight: 1.6,
                            marginBottom: '2.5rem',
                            fontWeight: 500
                        }}>
                            {extension.fullDescription}
                        </p>

                        <motion.a
                            href={extension.downloadLink || '#'}
                            target="_blank"
                            rel="noopener"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary"
                            style={{
                                display: 'block',
                                textAlign: 'center',
                                width: '100%',
                                padding: '1.2rem',
                                fontSize: '1.2rem',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                fontWeight: 800,
                                background: '#22c55e', /* Sales Green */
                                boxShadow: '0 10px 20px -5px rgba(34, 197, 94, 0.4)',
                                marginBottom: '1rem',
                                textDecoration: 'none',
                                color: 'white'
                            }}
                        >
                            Instalar y Probar Gratis (30 Días)
                        </motion.a>

                        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#9ca3af', marginBottom: '2rem' }}>
                            * No requiere tarjeta de crédito. Activación vía Email/WhatsApp.
                        </p>

                        {/* Pricing Anchor Section */}
                        {extension.plans && (
                            <div style={{
                                marginTop: '2rem',
                                borderTop: '1px solid rgba(255,255,255,0.1)',
                                paddingTop: '2rem'
                            }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                                    Precios después del periodo de prueba
                                </h3>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {extension.plans.map((plan, i) => (
                                        <div key={i} style={{
                                            flex: 1,
                                            background: i === 1 ? 'rgba(34, 197, 94, 0.05)' : 'rgba(255,255,255,0.03)',
                                            padding: '1.5rem',
                                            borderRadius: '8px',
                                            border: i === 1 ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(255,255,255,0.05)',
                                            position: 'relative'
                                        }}>
                                            {i === 1 && <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#22c55e', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold', color: 'white' }}>RECOMENDADO</div>}
                                            <h4 style={{ color: i === 1 ? '#22c55e' : '#fff', marginBottom: '0.5rem' }}>{plan.name}</h4>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>{plan.price}</div>
                                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: '#9ca3af' }}>
                                                {plan.features.map((feat, j) => (
                                                    <li key={j} style={{ marginBottom: '6px' }}>• {feat}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Right Column: Features & Tech Stats */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ flex: '1 1 400px', minWidth: '300px' }}
                >
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#60a5fa' }}>Características Clave</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {extension.features.map((feature, i) => (
                                <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                                    <span style={{ color: '#34d399', marginRight: '10px', marginTop: '4px' }}>✓</span>
                                    <span style={{ fontSize: '1.1rem', color: '#e5e7eb' }}>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '2rem 0' }}></div>

                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#94a3b8' }}>Especificaciones Técnicas</h3>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            {extension.technicalSpecs.map((spec, i) => (
                                <div key={i} style={{
                                    background: 'rgba(0,0,0,0.3)',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    color: '#9ca3af',
                                    borderLeft: '2px solid #6366f1'
                                }}>
                                    {spec}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

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
