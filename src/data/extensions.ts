export interface Extension {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    technicalSpecs: string[];
    icon: string;
    price?: string;
    folderName: string;
    screenshots?: string[];
    youtubeUrl?: string;
    isUnderDevelopment?: boolean;
    plans?: Array<{ name: string; price: string; features: string[] }>;
    downloadLink?: string;
}

export const extensions: Extension[] = [
    {
        id: "fb-auto-grupost",
        title: "FB Auto GruPost",
        youtubeUrl: "https://www.youtube.com/embed/ArrIOLKdlmQ",
        shortDescription: "Publica en miles de Grupos de Facebook en segundos. (Sin Baneo)",
        fullDescription: "Olvídate de la tarea tediosa de publicar manualmente en cientos de grupos. Con FB Auto GruPost, tu mensaje llega a miles de personas mientras duermes. Aumenta tu alcance orgánico exponencialmente sin esfuerzo y concéntrate en cerrar ventas mientras el software trabaja por ti.",
        features: [
            "Publicación Automática Masiva",
            "Redactor IA Contextual",
            "Limpieza de Metadatos 'Modo Ninja'",
            "Soporte Spintax Avanzado",
            "Programación de Campañas",
            "Simulación Humana Biométrica"
        ],
        technicalSpecs: [
            "Algoritmo: Simulación Biométrica de Teclado (Human-Typing)",
            "Anti-Ban: Retardos Estocásticos y Jitter Aleatorio",
            "Seguridad: Limpieza de Metadatos/Hash de Imágenes",
            "Interacción: Eventos Nativos de Drag & Drop y Clics",
            "Navegación: Detección Contextual de Campos",
            "Protección: Timeouts de Seguridad y Manejo de Errores"
        ],
        icon: "Megaphone",
        folderName: "ExtAutoPostGruposFB",
        plans: [
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Multi-Grupos Ilimitado", "Velocidad Turbo", "Soporte Prioritario VIP"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1KUbngvNinNCK0XMywgk-ojaQP2yC49UH/view?usp=drive_link"
    },
    {
        id: "respondssenger",
        title: "Respondssenger",
        youtubeUrl: "https://www.youtube.com/embed/1eqW3VMw1R0",
        shortDescription: "Cierra ventas en segundos con respuestas rápidas en Facebook Messenger.",
        fullDescription: "Domina el caos del Marketplace de Facebook y convierte chats en ventas instantáneas. RespondSSenger pone tus mejores scripts de cierre y respuestas frecuentes literalmente al alcance de un clic. Elimina la fricción, responde en milisegundos y profesionaliza tu atención al cliente.",
        features: [
            "Librería de Scripts de Cierre",
            "Detección de Contexto Inteligente",
            "Envío Masivo de Reactivación",
            "Modo 'Focus' Minimalista",
            "Anti-Ban Typing",
            "Categorización por Etiquetas"
        ],
        technicalSpecs: [
            "Core: Intervalos Aleatorios (Jitter)",
            "Input: Simulación Nativa de Eventos de Teclado",
            "UI: React Portal Overlay",
            "Storage: Local Chrome Sync",
            "Security: Sandbox Aislado del DOM Principal"
        ],
        icon: "MessageSquare",
        folderName: "ExtCloserMarketplace",
        plans: [
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Scripts Ilimitados", "Auto-Respuesta IA", "Soporte WhatsApp Directo"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1qBSBzBxgfrnDlbnxJ4VIQgk3OAys_JEG/view?usp=drive_link"
    },
    {
        id: "marketmoneypost",
        title: "MarketMoneyPost",
        youtubeUrl: "https://www.youtube.com/embed/L0bXkutLERg",
        shortDescription: "Tu máquina de ventas 24/7 en Facebook Marketplace.",
        fullDescription: "Convierte tu marketplace de Facebook en una mina de oro. Esta herramienta extrae automáticamente miles de productos ganadores de Dropi (a precio de proveedor) y los publica masivamente en tu Marketplace con el precio de venta que tú elijas.",
        features: [
            "Extracción Masiva de Dropi",
            "Llenado 'Smart Fill' en Facebook",
            "Descarga de Imágenes 'Modo Fantasma'",
            "Calculadora de Margen Automática",
            "Selectores de Respaldo Dinámicos",
            "Protección de Cuenta Anti-Spam"
        ],
        technicalSpecs: [
            "Scraping: Heurística de DOM Avanzada",
            "Automation: Simulación de Eventos de Usuario",
            "Network: Manejo de Blobs y Canvas",
            "Anti-Detection: Server-Side Selectors",
            "Core: Comunicación Background-Content Script"
        ],
        icon: "ShoppingBag",
        folderName: "ExtFBMarketplace",
        plans: [
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Productos Ilimitados", "Publicación Automática", "Soporte VIP"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1blDx9K0R8Np9E7XSdgW8ZvZfjijUGr7j/view?usp=drive_link"
    },
    {
        id: "traffic-wa",
        title: "Traffic WA",
        youtubeUrl: "https://www.youtube.com/embed/CsyTDqoSXfw",
        shortDescription: "Extrae Numeros y Envia 20 o 30 mensajes Diarios en WhatsApp.",
        fullDescription: "Olvídate de guardar contactos uno por uno. Esta herramienta extrae automáticamente números de tus grupos de WhatsApp y envía, de forma segura, entre 20 y 30 mensajes diarios a clientes potenciales desconocidos.",
        features: [
            "Envío Masivo Nativo",
            "Extractor de Miembros de Grupos",
            "CRM Contextual Inteligente",
            "Modo 'Native Flow' Anti-Bloqueo",
            "Intervalos de Seguridad",
            "Limpieza Automática"
        ],
        technicalSpecs: [
            "Core: Inyección en React Shadow DOM",
            "Input: Simulación Nativa 'insertText'",
            "Anti-Ban: Delays Configurables",
            "Data: Exportación a CSV/Excel",
            "State: Persistencia de Sesión Segura"
        ],
        icon: "Megaphone",
        folderName: "ExtCloserWhatsapp",
        plans: [
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Contactos Ilimitados", "Envío Optimizado", "Reportes de Entrega"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1kCk5A16gUbiepHWAB3Y8JuKm0mgCA53t/view?usp=sharing"
    },
    {
        id: "seoTube",
        title: "SEO Tube",
        youtubeUrl: "https://www.youtube.com/embed/rY2rOte87Wo",
        shortDescription: "Posiciona tus videos #1 con el poder de la IA.",
        fullDescription: "¿Te cuesta destacar en YouTube? Usa el poder de la Inteligencia Artificial para generar títulos, descripciones y etiquetas que el algoritmo AMA. Sube de ranking, gana más visitas y haz crecer tu canal.",
        features: [
            "Generador de Títulos Virales",
            "Extractor de Tags de Competencia",
            "Optimizador de Descripción Persuasiva",
            "Análisis de Tendencias",
            "Integración Directa en YouTube Studio",
            "Sistema 'Always-Alive'"
        ],
        technicalSpecs: [
            "AI Core: Prompt Engineering Dinámico",
            "Connection: Bridge Cross-Tab Seguro",
            "UI: Shadow DOM Aislado",
            "Input: Simulación 'insertText'",
            "Anti-Throttling: Mantenimiento de Service Worker"
        ],
        icon: "LineChart",
        folderName: "ExtYoutubeSeoGPT",
        plans: [
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Videos Ilimitados", "Auditoría de Canal", "Soporte VIP"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1EVfQ0SBmG1Ic8Z3QnV_Zx0r9OZYeGu61/view?usp=drive_link"
    },
    {
        id: "prospect-ia",
        title: "Prospect IA",
        youtubeUrl: "https://www.youtube.com/embed/WhwZNBTVhIk",
        shortDescription: "Encuentra y contacta a tu cliente ideal automáticamente.",
        fullDescription: "La herramienta definitiva para prospección masiva. Deja que la IA identifique miembros cualificados en grupos y los contacte en piloto automático. Llena tu embudo de ventas con leads calientes listos para comprar.",
        features: [
            "Motor de Extracción Heurística",
            "Filtrado Inteligente de 'Nuevos Miembros'",
            "Tecnología 'Human-Type' Anti-Ban",
            "Sistema de Variación Spintax",
            "Detección Preventiva de Restricciones",
            "Navegación Contextual Híbrida"
        ],
        technicalSpecs: [
            "Engine: Observer de Mutaciones DOM",
            "Safety: Kill-Switch automático",
            "Input: Simulación de Eventos de Teclado",
            "Scrolling: Algoritmo 'Smart Scroll'",
            "Logic: Máquina de Estados Finita"
        ],
        icon: "Users",
        folderName: "Prospect IA",
        plans: [
            { name: "Plan Pro VIP", price: "$67 USD/mes", features: ["Extracción Ilimitada", "Spintax Avanzado", "Soporte VIP", "Extracción de Comentaristas"] }
        ],
        downloadLink: "https://drive.google.com/file/d/13q9Yx9eHKVJOJKgKXG4je83uhHiSub7f/view?usp=drive_link"
    },
    {
        id: "TexteaIA",
        title: "Textea IA",
        youtubeUrl: "https://www.youtube.com/embed/_EpcBdrFjeY",
        shortDescription: "Un empleado virtual que vende o se deja entrenar por ti.",
        fullDescription: "Convierte tu WhatsApp y Messenger en máquinas de ventas 24/7. Textea IA no es solo un chatbot; es un empleado virtual que puedes entrenar a tu gusto con tus propios scripts y productos.",
        features: [
            "Cerebro Proactivo Inteligente",
            "Acumulación de Mensajes 'Smart Wait'",
            "Humanización de Burbujas",
            "Comprensión de Audios (Whisper)",
            "Velocidad LPU Groq",
            "Simulación de Escritura Orgánica"
        ],
        technicalSpecs: [
            "AI Model: Groq (LLaMA 3) y OpenAI",
            "Logic: Buffer de Acumulación Temporal",
            "Context: System Prompt Dinámico",
            "Audio: Pipeline Whisper API",
            "Timing: Retraso Variable Adaptativo"
        ],
        icon: "Bot",
        folderName: "Textea IA",
        plans: [
            { name: "Plan Pro", price: "$30 USD/mes", features: ["IA Ilimitada", "Comprensión de Audios", "Entrenamiento VIP"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1bo09XRgipoyO-slK0Gc5GwSGT9CRI4Sx/view?usp=drive_link"
    },
    {
        id: "Auto-clipping-yt",
        title: "AutoClipping YT",
        youtubeUrl: "https://www.youtube.com/embed/GJnzzxr5Efc",
        shortDescription: "Corta secciones de videos largos en YouTube y descárgalas.",
        fullDescription: "La herramienta definitiva para creadores de contenido. Inyecta una interfaz neuronal (HUD) flotante directamente en el reproductor de YouTube, permitiéndote marcar tiempos de inicio y fin con precisión de fotogramas.",
        features: [
            "Interfaz Neuronal (HUD) Flotante",
            "Marcadores de Alta Precisión",
            "Bypass de Descarga yt-dlp",
            "Memoria Activa Local",
            "Exportación Masiva Batch",
            "Protección por Licencia HWID"
        ],
        technicalSpecs: [
            "UI Core: React Portals + Framer Motion",
            "State: Sincronización requestAnimationFrame",
            "Export: Scripts .bat On-the-Fly",
            "Security: Validación HWID",
            "Download Engine: Integración yt-dlp"
        ],
        icon: "Scissors",
        folderName: "AutoClippingYT",
        plans: [
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Cortes Ilimitados", "Exportación Batch Masiva", "Soporte VIP"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1APM_myyx4nd4ampTZMPiAnfv54iD_HfP/view?usp=sharing"
    }
];
