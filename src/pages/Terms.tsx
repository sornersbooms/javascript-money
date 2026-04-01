import React from 'react';
import { motion } from 'framer-motion';
import FallingLuxury from '../components/FallingLuxury';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
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
                        <FileText size={48} color="#fcd34d" style={{ marginBottom: '1rem' }} />
                        <h1 className="text-gold" style={{ fontSize: '2.5rem' }}>Condiciones del Servicio</h1>
                        <p style={{ color: '#94a3b8' }}>Última actualización: 1 de abril de 2026</p>
                    </div>

                    <div style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
                        <section style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>1. Introducción</h2>
                            <p>Bienvenido a **Javascript Money**. Al acceder a nuestro sitio web y utilizar nuestras herramientas de automatización, aceptas cumplir con los siguientes términos y condiciones. Estas reglas han sido diseñadas para proteger tanto al usuario como a la integridad de nuestra plataforma.</p>
                        </section>

                        <section style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>2. Licencia de Uso</h2>
                            <p>Te otorgamos una licencia limitada, no exclusiva e intransferible para instalar y utilizar nuestras extensiones de navegador. Está prohibido el uso de ingeniería inversa o la redistribución no autorizada de cualquier fragmento de código propiedad de Javascript Money.</p>
                        </section>

                        <section style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>3. Uso Ético de la Automatización</h2>
                            <p>Nuestras herramientas están diseñadas para la optimización de procesos de venta y productividad. El usuario es el único responsable por el uso ético y legal de las mismas, incluyendo el cumplimiento de las políticas de terceros (como las de Facebook Inc. o WhatsApp Inc.). No nos hacemos responsables por el mal uso que derive en bloqueos o baneos por parte de dichas plataformas externos.</p>
                        </section>

                        <section style={{ marginBottom: '2rem' }}>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>4. Pagos y Suscripciones</h2>
                            <p>Todos los pagos son gestionados por **Paddle**, nuestro "Merchant of Record". Paddle gestionará cobros, impuestos y cualquier reclamación financiera. El acceso a las herramientas se mantendrá mientras la suscripción esté activa.</p>
                        </section>

                        <section>
                            <h2 style={{ color: '#fcd34d', marginBottom: '1rem' }}>5. Modificaciones</h2>
                            <p>Nos reservamos el derecho de actualizar estos términos para reflejar cambios legales o técnicos. Notificaremos a los usuarios activos ante cualquier cambio sustancial.</p>
                        </section>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Terms;
