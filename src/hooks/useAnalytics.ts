import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sendTelegramNotification, type AnalyticsEvent } from '../services/telegramService';

export const usePageTracking = () => {
    const location = useLocation();

    // Track Page Views Automatically
    useEffect(() => {
        sendTelegramNotification({
            event: 'page_view',
            path: location.pathname,
            details: { search: location.search },
        });
    }, [location.pathname]);

    // Track Global Errors
    useEffect(() => {
        const handleError = (error: ErrorEvent) => {
            sendTelegramNotification({
                event: 'error',
                path: window.location.pathname,
                details: {
                    message: error.message,
                    filename: error.filename,
                    lineno: error.lineno,
                    colno: error.colno,
                },
            });
        };

        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
            sendTelegramNotification({
                event: 'error',
                path: window.location.pathname,
                details: {
                    message: event.reason?.message || 'Unhandled Promise Rejection',
                    reason: String(event.reason),
                },
            });
        };

        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleUnhandledRejection);

        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        };
    }, []);
};

export const useAnalytics = () => {
    const location = useLocation();

    const trackEvent = (event: AnalyticsEvent['event'], details?: any) => {
        sendTelegramNotification({
            event,
            path: location.pathname,
            details,
        });
    };

    return { trackEvent };
};
