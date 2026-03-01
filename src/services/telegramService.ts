export const TELEGRAM_CONFIG = {
    BOT_TOKEN: '8735634376:AAEKl6M43eZTOgQKWXF_0iGVzwHnGm5Cnhc', // Reemplaza con tu Bot Token real
    CHAT_ID: '6432018838',     // Reemplaza con tu Chat ID real
};

export interface AnalyticsEvent {
    event: 'page_view' | 'click' | 'purchase_intent' | 'install_intent' | 'error';
    path: string;
    details?: any;
}

const getVisitorId = () => {
    let visitorId = localStorage.getItem('stand_visitor_id');
    if (!visitorId) {
        visitorId = 'v_' + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('stand_visitor_id', visitorId);
    }
    return visitorId;
};

const getDeviceInfo = () => {
    const ua = navigator.userAgent;
    let device = 'Desktop';
    if (/android/i.test(ua)) {
        device = 'Android';
    } else if (/iPad|iPhone|iPod/.test(ua)) {
        device = 'iOS';
    }
    return device;
};

// Cooldown para evitar mensajes duplicados (React StrictMode o renders múltiples)
const recentlySent = new Set<string>();

export const sendTelegramNotification = async (event: AnalyticsEvent) => {
    // 0. Prevenir mensajes duplicados idénticos en menos de 2 segundos
    const cacheKey = `${event.event}_${event.path}_${JSON.stringify(event.details || {})}`;
    if (recentlySent.has(cacheKey)) {
        return;
    }
    recentlySent.add(cacheKey);
    setTimeout(() => recentlySent.delete(cacheKey), 2000);

    if (TELEGRAM_CONFIG.BOT_TOKEN === 'TU_BOT_TOKEN_AQUI' || TELEGRAM_CONFIG.CHAT_ID === 'TU_CHAT_ID_AQUI') {
        console.warn('Telegram no está configurado. Evento no enviado:', event);
        return;
    }

    const visitorId = getVisitorId();
    const device = getDeviceInfo();
    const timestamp = new Date().toLocaleString('es-ES', { timeZone: 'America/New_York' });

    let header = '';
    let emoji = 'ℹ️';
    let isImportant = false;

    switch (event.event) {
        case 'page_view':
            emoji = '👁️';
            header = 'NUEVA VISITA';
            break;
        case 'click':
            emoji = '👆';
            header = 'INTERACCIÓN (CLIC)';
            break;
        case 'purchase_intent':
            emoji = '💰';
            header = '✅ INTENCIÓN DE COMPRA';
            isImportant = true;
            break;
        case 'install_intent':
            emoji = '🚀';
            header = '🔥 INTENCIÓN DE INSTALACIÓN';
            isImportant = true;
            break;
        case 'error':
            emoji = '❌';
            header = '⚠️ ERROR DETECTADO';
            isImportant = true;
            break;
    }

    // Extraer información relevante si existe
    const extensionName = event.details?.extension_title || 'N/A';
    const actionName = event.details?.action || 'N/A';

    // Format details cleanly
    let formattedDetails = '';
    if (event.details) {
        const safeDetails = { ...event.details };
        delete safeDetails.extension_title; // Ya lo mostramos
        delete safeDetails.action; // Ya lo mostramos

        if (Object.keys(safeDetails).length > 0) {
            formattedDetails = Object.entries(safeDetails)
                .map(([key, value]) => `• *${key}:* \`${value}\``)
                .join('\n');
        }
    }

    // TODO: Reemplazar con la URL de tu Google Apps Script (Web App)
    // Cuando lo publiques, debería empezar por 'https://script.google.com/macros/s/...'
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwk7jDCcpJzRvT1XDyw5_Mwee-l0MXwRpov4YSTMNy79N_yb5E6JnOagyin-sKxCMj-/exec';

    // ============================================
    // LÓGICA 1: Enviar mensaje directo a Telegram
    // ============================================
    const message = `
${emoji} *${header}* ${emoji}
━━━━━━━━━━━━━━━━━━━━
${event.event === 'page_view' ? `📍 *Página:* \`${event.path}\`` : `📦 *Extensión:* *${extensionName}*`}
${actionName !== 'N/A' ? `🎯 *Acción:* \`${actionName}\`\n` : ''}
👤 *Visitante:* \`${visitorId}\`
📱 *Dispositivo:* ${device}
🕒 *Hora:* ${timestamp}
${formattedDetails ? `\n📊 *Detalles Extra:*\n${formattedDetails}` : ''}
${isImportant ? '━━━━━━━━━━━━━━━━━━━━\n_Atención requerida_ 👀' : ''}
  `.trim();

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`;

    try {
        // Mandamos la alerta inmediata a Telegram
        await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CONFIG.CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            }),
        });
    } catch (error) {
        console.error('Error enviando notificación a Telegram:', error);
    }

    // ============================================
    // LÓGICA 2: Guardar en Sheet para el Resumen Diario
    // ============================================
    if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.startsWith('https://')) {
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                // Ojo: en Google Apps Script a veces usar 'text/plain' evita conflictos molestos de CORS preflight
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({
                    event: event.event,
                    path: event.path,
                    visitorId: visitorId,
                    device: device,
                    details: event.details || {}
                }),
            });
        } catch (error) {
            console.error('Error guardando estadística en Google Sheet:', error);
        }
    }
};
