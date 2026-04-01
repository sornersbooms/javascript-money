import React from 'react';
import { motion } from 'framer-motion';
import FallingLuxury from '../components/FallingLuxury';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
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
                        <Shield size={48} color="#fcd34d" style={{ marginBottom: '1rem' }} />
                        <h1 className="text-gold" style={{ fontSize: '2.5rem' }}>Política de Privacidad</h1>
                        <p style={{ color: '#94a3b8' }}>Última actualización: 1 de abril de 2026</p>
                    </div>

                    <div style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
                        <section style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>1. Información que Recopilamos</h2>
                            <p>En **Javascript Money**, valoramos tu privacidad. Nuestras extensiones de navegador están diseñadas para funcionar localmente. No recopilamos datos sensibles de tus cuentas de redes sociales. La única información que procesamos es:</p>
                            <ul>
                                <li>Información de contacto (Email) cuando te registras.</li>
                                <li>Datos de facturación procesados de forma segura por **Paddle**.</li>
                                <li>Logs de uso técnico anónimos para mejorar el rendimiento del software.</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>2. Uso de la Información</h2>
                            <p>Utilizamos tu información exclusivamente para:</p>
                            <ul>
                                <li>Validar tu licencia de uso de las extensiones.</li>
                                <li>Brindarte soporte técnico personalizado.</li>
                                <li>Enviarte actualizaciones críticas de seguridad o nuevas funciones.</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>3. Seguridad de los Datos</h2>
                            <p>Implementamos medidas de seguridad de nivel industrial. Tus credenciales de redes sociales nunca salen de tu navegador; las extensiones interactúan con las plataformas directamente desde tu sesión activa, garantizando que nosotros nunca tengamos acceso a tus contraseñas.</p>
                        </section>

                        <section>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>4. Contacto</h2>
                            <p>Si tienes dudas sobre cómo tratamos tus datos, puedes contactarnos a través de nuestra comunidad oficial o al correo de soporte indicado en tu panel de usuario.</p>
                        </section>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Privacy;
