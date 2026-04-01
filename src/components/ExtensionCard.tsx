import type { Extension } from '../data/extensions';
import { Icon } from './Icon';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

interface ExtensionCardProps {
    extension: Extension;
}

export const ExtensionCard: React.FC<ExtensionCardProps> = ({ extension }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { trackEvent } = useAnalytics();

    // Get top 3 features for preview pills
    const topFeatures = extension.features.slice(0, 3);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{ height: '100%' }} // Allow grid to control height
        >
            <Link
                to={`/extension/${extension.id}`}
                style={{ textDecoration: 'none', height: '100%', display: 'block' }}
                onClick={() => trackEvent('click', { action: 'view_extension', extension_id: extension.id, extension_title: extension.title })}
            >
                <div className="glass-panel" style={{
                    padding: '1.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'var(--bg-card)',
                    borderColor: isHovered ? 'var(--accent-color)' : 'transparent',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                }}>

                    {/* Header: Icon + Title + Status */}
                    <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                background: isHovered ? 'var(--accent-color)' : 'rgba(255,255,255,0.05)',
                                color: isHovered ? '#fff' : 'var(--accent-color)',
                                borderRadius: '8px',
                                padding: '10px',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Icon name={extension.icon} size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>{extension.title}</h3>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></span>
                                    v3.0 Stable
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Body: Description */}
                    <p style={{
                        color: '#d4af37', /* Amarillo Oro Opaco (Metallic Gold) */
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        lineHeight: '1.5',
                        marginBottom: '1.5rem',
                        flex: 1 // Push footer down
                    }}>
                        {extension.shortDescription}
                    </p>

                    {/* Footer: Feature Tags + CTA */}
                    <div style={{ marginTop: 'auto' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                            {topFeatures.map((feat, i) => (
                                <span key={i} style={{
                                    fontSize: '0.75rem',
                                    background: 'rgba(34, 197, 94, 0.1)', /* Subtle Green Tint */
                                    border: '1px solid #22c55e', /* Green Border */
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    color: '#ffffff', /* White Text */
                                    fontWeight: 500,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '100%'
                                }}>
                                    {feat.split('(')[0]} {/* Clean text */}
                                </span>
                            ))}
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderTop: '1px solid var(--border-color)',
                            paddingTop: '1rem',
                            color: isHovered ? 'var(--accent-color)' : 'var(--text-primary)',
                            transition: 'color 0.3s ease',
                            fontWeight: 600,
                            fontSize: '0.9rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ color: '#22c55e', fontSize: '1rem' }}>{extension.plans?.[0]?.price || '$30 USD'}</span>
                                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/mes</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span>Ver detalles</span>
                                <ChevronRight size={16} style={{
                                    transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                                    transition: 'transform 0.3s ease'
                                }} />
                            </div>
                        </div>
                    </div>

                    {/* Development Badge */}
                    {extension.isUnderDevelopment && (
                        <div style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: '#f59e0b',
                            color: '#fff',
                            fontSize: '0.65rem',
                            fontWeight: 'bold',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            textTransform: 'uppercase'
                        }}>
                            Dev Base
                        </div>
                    )}
                </div>
            </Link>
        </motion.div>
    );
};
