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

export const sendTelegramNotification = async (event: AnalyticsEvent) => {
    if (TELEGRAM_CONFIG.BOT_TOKEN === 'TU_BOT_TOKEN_AQUI' || TELEGRAM_CONFIG.CHAT_ID === 'TU_CHAT_ID_AQUI') {
        console.warn('Telegram no está configurado. Evento no enviado:', event);
        return;
    }

    const visitorId = getVisitorId();
    const device = getDeviceInfo();
    const timestamp = new Date().toLocaleString('es-ES', { timeZone: 'America/New_York' });

    let emoji = 'ℹ️';
    switch (event.event) {
        case 'page_view': emoji = '👁️'; break;
        case 'click': emoji = '🖱️'; break;
        case 'purchase_intent': emoji = '💰'; break;
        case 'install_intent': emoji = '🚀'; break;
        case 'error': emoji = '❌'; break;
    }

    const message = `
${emoji} *Nuevo Evento Detectado*
*Stand:* JavascriptMoneyStand
*Evento:* \`${event.event}\`
*Ruta:* ${event.path}
*Visitante:* \`${visitorId}\`
*Dispositivo:* ${device}
*Fecha:* ${timestamp}

*Detalles:*
${event.details ? '```json\n' + JSON.stringify(event.details, null, 2) + '\n```' : 'Ninguno'}
  `.trim();

    const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`;

    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CONFIG.CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            }),
        });
    } catch (error) {
        console.error('Error enviando notificación a Telegram:', error);
    }
};
