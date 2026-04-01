import React from 'react';
import { motion } from 'framer-motion';
import FallingLuxury from '../components/FallingLuxury';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Refund: React.FC = () => {
    return (
        <div className="legal-container" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', padding: '4rem 2rem' }}>
            <FallingLuxury />
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}
            >
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fcd34d', textDecoration: 'none', marginBottom: '2rem' }}>
                    <ArrowLeft size={20} />
                    Volver al Inicio
                </Link>

                <div className="glass-panel" style={{ padding: '3rem', background: 'rgba(15, 23, 42, 0.8)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <RotateCcw size={48} color="#fcd34d" style={{ marginBottom: '1rem' }} />
                        <h1 className="text-gold" style={{ fontSize: '2.5rem' }}>Política de Reembolso</h1>
                        <p style={{ color: '#94a3b8' }}>Última actualización: 1 de abril de 2026</p>
                    </div>

                    <div style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
                        <section style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>1. Periodo de Prueba Gratuita</h2>
                            <p>En **Javascript Money**, ofrecemos a todos nuestros usuarios un **periodo de prueba gratuita de 3 días**. Este tiempo es suficiente para verificar la funcionalidad completa del software y asegurar que se adapta perfectamente a tus necesidades de negocio antes de realizar cualquier pago inicial.</p>
                        </section>

                        <section style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>2. Excepción de Reembolso</h2>
                            <p>Al ser productos digitales que se entregan de forma inmediata tras el pago y habiendo ofrecido un periodo de prueba previo, **por regla general no se realizan reembolsos** una vez transcurrido el tiempo de prueba. El usuario tiene plena libertad para cancelar su suscripción en cualquier momento antes de que finalice el siguiente ciclo de facturación.</p>
                        </section>

                        <section style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>3. Casos Excepcionales</h2>
                            <p>Únicamente se considerarán reembolsos en casos específicos donde se demuestre un fallo técnico crítico e irreparable del software que impida su uso básico, siempre que no sea resultado de actualizaciones externas en las redes sociales que estén fuera de nuestro control inmediato.</p>
                        </section>

                        <section style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>4. Gestión de Pagos (Paddle)</h2>
                            <p>Como **Paddle** es nuestro gestor de pagos oficial, cualquier disputa o reclamación financiera podrá ser enviada directamente a su plataforma desde tu recibo de compra digital original.</p>
                        </section>

                        <section>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>5. Cancelación</h2>
                            <p>Puedes gestionar y cancelar tu suscripción en cualquier momento desde el área de miembros o plataforma de pago sin penalizaciones adicionales.</p>
                        </section>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Refund;
