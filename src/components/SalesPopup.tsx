import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { extensions } from '../data/extensions';

// Nombres generados aleatoriamente para simular compras orgánicas
const firstNames = ['Carlos', 'Andrés', 'Miguel', 'Diego', 'Alejandro', 'Juan', 'Santiago', 'David', 'Jorge', 'Daniel', 'Camilo', 'Sebastián', 'Mateo', 'Felipe', 'Pablo'];
const lastNames = ['Gómez', 'Rodríguez', 'López', 'Martínez', 'Pérez', 'García', 'Sánchez', 'Ramírez', 'Torres', 'Díaz', 'Muñoz', 'Rojas', 'Vargas', 'Jiménez'];
const countries = ['Colombia', 'México', 'Perú', 'Argentina', 'Chile', 'España', 'Estados Unidos', 'Ecuador'];
const plans = ['Plan Pro', 'Plan VIP', 'Plan Básico', 'una Prueba Gratis'];

// Generación de data aleatoria pero persistente en memoria para evitar cambios bruscos al re-renderizar
const generateRandomPurchase = () => {
    const fn = firstNames[Math.floor(Math.random() * firstNames.length)];
    const ln = lastNames[Math.floor(Math.random() * lastNames.length)];
    const country = countries[Math.floor(Math.random() * countries.length)];
    // Elegimos una extensión al azar del catálogo
    const extension = extensions[Math.floor(Math.random() * extensions.length)];
    const plan = plans[Math.floor(Math.random() * plans.length)];
    const time = Math.floor(Math.random() * 59) + 1; // 1 a 59 minutos

    return {
        id: Math.random().toString(36).substring(7),
        name: `${fn} ${ln.substring(0, 1)}.`,
        location: country,
        product: extension.title,
        plan: plan,
        timeMsg: `Hace ${time} min`,
        color: plan.includes('Pro') || plan.includes('VIP') ? '#10b981' : '#3b82f6' // Verde para planes pagos, Azul para gratis
    };
};

export const SalesPopup = () => {
    const [currentPurchase, setCurrentPurchase] = useState<ReturnType<typeof generateRandomPurchase> | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Retraso inicial antes de mostrar el primer popup (para no asustar al entrar)
        const initialDelay = setTimeout(() => {
            showNewPopup();
        }, 3000);

        return () => clearTimeout(initialDelay);
    }, []);

    const showNewPopup = () => {
        setCurrentPurchase(generateRandomPurchase());
        setIsVisible(true);

        // Ocultar después de unos segundos
        setTimeout(() => {
            setIsVisible(false);

            // Programar el siguiente popup (tiempo aleatorio entre 10 y 25 segundos)
            const nextDelay = Math.floor(Math.random() * 15000) + 10000;
            setTimeout(() => {
                showNewPopup();
            }, nextDelay);

        }, 6000); // 6 segundos visible
    };

    return (
        <AnimatePresence>
            {isVisible && currentPurchase && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        left: '30px',
                        backgroundColor: '#ffffff',
                        borderRadius: '12px',
                        padding: '16px',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
                        border: '1px solid #f3f4f6',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        zIndex: 9999,
                        maxWidth: '360px',
                        userSelect: 'none'
                    }}
                >
                    {/* Icono animado */}
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: `${currentPurchase.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}>
                        <CheckCircle size={22} color={currentPurchase.color} />
                    </div>

                    {/* Texto del Popup */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '0.9rem', color: '#374151', lineHeight: '1.4' }}>
                            <span style={{ fontWeight: '600' }}>{currentPurchase.name}</span> desde {currentPurchase.location}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '2px' }}>
                            adquirió <span style={{ fontWeight: '600', color: '#111827' }}>{currentPurchase.product}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                            <span style={{
                                fontSize: '0.75rem',
                                backgroundColor: currentPurchase.color,
                                color: 'white',
                                padding: '2px 8px',
                                borderRadius: '10px',
                                fontWeight: '500'
                            }}>
                                {currentPurchase.plan}
                            </span>
                            <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{currentPurchase.timeMsg}</span>
                        </div>
                    </div>

                    {/* Botón de cerrar (UX) */}
                    <button
                        onClick={() => setIsVisible(false)}
                        style={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#9ca3af',
                            fontSize: '16px',
                            padding: '4px',
                            lineHeight: '1'
                        }}
                    >
                        ×
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
