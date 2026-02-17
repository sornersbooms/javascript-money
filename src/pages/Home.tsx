import React from 'react';
import { ExtensionCard } from '../components/ExtensionCard';
import { extensions } from '../data/extensions';
import { motion, AnimatePresence } from 'framer-motion';
import FallingLuxury from '../components/FallingLuxury';
import { Shield, Gem, DollarSign } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <div className="home-container" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            <FallingLuxury />

            <header style={{
                padding: '6rem 0 4rem',
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 10
            }}>
                {/* Logo Design based on user image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '2rem'
                    }}
                >
                    <div style={{
                        position: 'relative',
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                        border: '4px solid #fcd34d',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 50px rgba(252, 211, 77, 0.3)'
                    }}>
                        <DollarSign size={80} color="#22c55e" style={{
                            position: 'absolute',
                            zIndex: 1,
                            left: '15px',
                            top: '25px',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                        }} />
                        <div style={{ position: 'relative', zIndex: 2, marginLeft: '30px', marginBottom: '10px' }}>
                            <Shield size={60} fill="#fcd34d" color="#f59e0b" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))' }} />
                            <span style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: '#0f172a',
                                fontWeight: '900',
                                fontSize: '24px',
                                fontFamily: 'monospace',
                                zIndex: 3,
                                textShadow: 'none'
                            }}>JS</span>
                        </div>

                        {/* Decorative excessive bling */}
                        <Gem size={24} color="#60a5fa" style={{ position: 'absolute', top: -10, right: 0, filter: 'drop-shadow(0 0 5px #60a5fa)' }} />
                        <Gem size={18} color="#60a5fa" style={{ position: 'absolute', bottom: 10, left: -5, filter: 'drop-shadow(0 0 5px #60a5fa)' }} />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gold"
                    style={{
                        fontSize: '3.5rem',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}
                >
                    Javascript Money
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        fontSize: '1.25rem',
                        color: '#94a3b8',
                        maxWidth: '700px',
                        margin: '0 auto 3rem',
                        lineHeight: 1.6,
                        fontWeight: 300,
                        position: 'relative'
                    }}
                >
                    <span style={{ color: '#22c55e', fontWeight: 600 }}>Herramientas para vender más y trabajar menos.</span> Automatiza la búsqueda de clientes y cierra ventas en piloto automático sin complicaciones técnicas.
                </motion.p>

                <div style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #fcd34d, transparent)',
                    width: '60%',
                    margin: '0 auto',
                    opacity: 0.5
                }}></div>
            </header>

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                padding: '0 2rem',
                position: 'relative',
                zIndex: 10
            }}>
                <AnimatePresence>
                    {extensions.map((ext, idx) => (
                        <motion.div
                            key={ext.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx }}
                        >
                            <ExtensionCard extension={ext} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* About Me Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                    maxWidth: '800px',
                    margin: '8rem auto 4rem',
                    padding: '0 2rem',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10
                }}
            >
                <div className="glass-panel" style={{
                    padding: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    background: 'rgba(15, 23, 42, 0.6)'
                }}>
                    <div style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '12px', /* More square/dashboard like */
                        overflow: 'hidden',
                        border: '2px solid var(--accent-color)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        position: 'relative'
                    }}>
                        <img
                            src="/profile.jpg"
                            alt="Yefer Sorners Boom"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                                e.currentTarget.src = 'https://ui-avatars.com/api/?name=Yefer+Sorners&background=0f172a&color=22c55e&size=150';
                            }}
                        />
                    </div>

                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                            Yefer Sorners Boom
                        </h2>
                        <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Master en JavaScript & Automatización (6 Años)
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '650px', margin: '0 auto' }}>
                            "Llevo 6 años convirtiendo café ☕ en código que imprime dinero 💵. Mi filosofía es simple: si tienes que hacerlo más de dos veces, ¡automatízalo! Me dedico a crear robots para que tú puedas dedicarte a vivir la vida (o a ver memes en horario laboral 😉)."
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
