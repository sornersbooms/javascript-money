export interface Extension {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    technicalSpecs: string[];
    icon: string; // We will use a placeholder or Lucide icon name
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
            "Publicación Automática Masiva (Llega a miles de personas mientras duermes 😴)",
            "Redactor IA Contextual (Crea publicaciones irresistibles que venden solos 🤖)",
            "Limpieza de Metadatos 'Modo Ninja' (Burla el algoritmo y evita el shadowban 🥷)",
            "Soporte Spintax Avanzado (Variaciones infinitas para burlar el spam 🔄)",
            "Programación de Campañas (Trabaja 1 hora, vende toda la semana 📅)",
            "Simulación Humana Biométrica (Protege tu cuenta de bloqueos 🛡️)"
        ],
        technicalSpecs: [
            "Algoritmo: Simulación Biométrica de Teclado (Human-Typing)",
            "Anti-Ban: Retardos Estocásticos y Jitter Aleatorio",
            "Seguridad: Limpieza de Metadatos/Hash de Imágenes (Modo Ninja)",
            "Interacción: Eventos Nativos de Drag & Drop y Clics",
            "Navegación: Detección Contextual de Campos (Multi-Selector)",
            "Protección: Timeouts de Seguridad y Manejo de Errores"
        ],
        icon: "Megaphone",
        folderName: "ExtAutoPostGruposFB",
        plans: [
            { name: "Plan Basic", price: "$10 USD/mes", features: ["1 Grupo a la vez", "Publicación Lenta", "Soporte Básico"] },
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Multi-Grupos Ilimitado", "Velocidad Turbo", "Soporte Prioritario VIP"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1KUbngvNinNCK0XMywgk-ojaQP2yC49UH/view?usp=drive_link"
    },
    {
        id: "respondssenger",
        title: "Respondssenger",
        youtubeUrl: "https://www.youtube.com/embed/1eqW3VMw1R0",
        shortDescription: "Cierra ventas en segundos con respuestas rápidas optimizadas para el marketplace de facebook.",
        fullDescription: "Domina el caos del Marketplace de Facebook y convierte chats en ventas instantáneas. RespondSSenger pone tus mejores scripts de cierre y respuestas frecuentes literalmente al alcance de un clic. Elimina la fricción, responde en milisegundos y profesionaliza tu atención al cliente para que nunca más pierdas una venta por tardar en contestar. Velocidad es dinero.",
        features: [
            "Librería de Scripts de Cierre (Tus mejores argumentos a un clic 🖱️)",
            "Detección de Contexto Inteligente (Sabe qué responder según la pregunta del cliente 🧠)",
            "Envío Masivo de Reactivación (Recupera ventas perdidas en segundos ♻️)",
            "Modo 'Focus' Minimalista (Interfaz limpia para máxima velocidad ⚡)",
            "Anti-Ban Typing (Simulamos escritura humana real para proteger tu cuenta ️)",
            "Categorización por Etiquetas (Organiza tus respuestas por producto o etapa de venta 🏷️)"
        ],
        technicalSpecs: [
            "Core: Intervalos Aleatorios (Jitter) para naturalidad",
            "Input: Simulación Nativa de Eventos de Teclado (Trusted Events)",
            "UI: React Portal Overlay (No intrusivo)",
            "Storage: Local Chrome Sync (Tus scripts te siguen)",
            "Security: Sandbox Aislado del DOM Principal"
        ],
        icon: "MessageSquare",
        folderName: "ExtCloserMarketplace",
        plans: [
            { name: "Plan Basic", price: "$10 USD/mes", features: ["10 Scripts Guardados", "Respuestas Manuales", "Soporte Email"] },
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Scripts Ilimitados", "Auto-Respuesta IA", "Soporte WhatsApp Directo"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1qBSBzBxgfrnDlbnxJ4VIQgk3OAys_JEG/view?usp=drive_link"
    },
    {
        id: "marketmoneypost",
        title: "MarketMoneyPost",
        youtubeUrl: "https://www.youtube.com/embed/L0bXkutLERg",
        shortDescription: "Tu máquina de ventas 24/7 en Facebook Marketplace. Extrae productos de dropi a precio bajo y publicalos en facebook marketplace a un precio alto 😉",
        fullDescription: "Convierte tu marketplace de Facebook en una mina de oro. Esta herramienta extrae automáticamente miles de productos ganadores de Dropi (a precio de proveedor) y los publica masivamente en tu Marketplace con el precio de venta que tú elijas. Olvídate de copiar y pegar manualmente; llena tu tienda en minutos, domina el mercado y genera ventas en piloto automático.",
        features: [
            "Extracción Masiva de Dropi (Clona catálogos enteros en segundos ⚡)",
            "Llenado 'Smart Fill' en Facebook (Publica sin escribir ni una letra 🤖)",
            "Descarga de Imágenes 'Modo Fantasma' (Bypassea protecciones de descarga 👻)",
            "Calculadora de Margen Automática (Ajusta tus precios al instante 💰)",
            "Selectores de Respaldo Dinámicos (Si Facebook cambia, nosotros nos adaptamos )",
            "Protección de Cuenta Anti-Spam (Comportamiento humano aleatorio ️)"
        ],
        technicalSpecs: [
            "Scraping: Heurística de DOM Avanzada (Selectores resilientes)",
            "Automation: Simulación de Eventos de Usuario (Trusted Types)",
            "Network: Manejo de Blobs y Canvas para imágenes",
            "Anti-Detection: Server-Side Selectors (Actualización remota)",
            "Core: Comunicación Background-Content Script Segura"
        ],
        icon: "ShoppingBag",
        folderName: "ExtFBMarketplace",
        plans: [
            { name: "Plan Basic", price: "$10 USD/mes", features: ["50 Productos/día", "Publicación Manual", "Soporte Básico"] },
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Productos Ilimitados", "Publicación Automática", "Soporte VIP"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1blDx9K0R8Np9E7XSdgW8ZvZfjijUGr7j/view?usp=drive_link"
    },
    {
        id: "traffic-wa",
        title: "Traffic WA",
        youtubeUrl: "https://www.youtube.com/embed/CsyTDqoSXfw",
        shortDescription: "Extrae Numeros y Envia 20 o 30 mensajes Diarios en WhatsApp a Numeros Desconocidos",
        fullDescription: "Olvídate de guardar contactos uno por uno. Esta herramienta extrae automáticamente números de tus grupos de WhatsApp y envía, de forma segura, entre 20 y 30 mensajes diarios a clientes potenciales desconocidos. Es la forma más efectiva de prospectar en frío y llenar tu agenda de nuevos interesados todos los días, sin riesgo de bloqueos por exceso de actividad.",
        features: [
            "Envío Masivo Nativo (Usa la API oculta de WhatsApp Web para máxima entrega )",
            "Extractor de Miembros de Grupos (Obtén cientos de leads calificados en segundos )",
            "CRM Contextual Inteligente (Detecta automáticamente el nombre del grupo 🧠)",
            "Modo 'Native Flow' Anti-Bloqueo (Simula clicks y escritura real 🛡️)",
            "Intervalos de Seguridad (Pausas aleatorias entre mensajes para evitar spam ⏱️)",
            "Limpieza Automática (Filtra números inválidos o duplicados 🧹)"
        ],
        technicalSpecs: [
            "Core: Inyección en React Shadow DOM de WhatsApp",
            "Input: Simulación Nativa 'insertText' (Indetectable)",
            "Anti-Ban: Delays Configurables y Jitter Aleatorio",
            "Data: Exportación a CSV/Excel Compatible",
            "State: Persistencia de Sesión Segura"
        ],
        icon: "Megaphone",
        folderName: "ExtCloserWhatsapp",
        plans: [
            { name: "Plan Basic", price: "$10 USD/mes", features: ["100 Contactos/día", "Envío Lento", "Sin Reportes"] },
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Contactos Ilimitados", "Envío Optimizado", "Reportes de Entrega"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1kCk5A16gUbiepHWAB3Y8JuKm0mgCA53t/view?usp=sharing"
    },
    {
        id: "seoTube",
        title: "SEO Tube",
        youtubeUrl: "https://www.youtube.com/embed/rY2rOte87Wo",
        shortDescription: "Posiciona tus videos #1 con el poder de la IA.",
        fullDescription: "¿Te cuesta destacar en YouTube? Usa el poder de la Inteligencia Artificial para generar títulos, descripciones y etiquetas que el algoritmo AMA. Sube de ranking, gana más visitas y haz crecer tu canal sin necesidad de ser un experto en SEO.",
        features: [
            "Generador de Títulos Virales (IA entrenada con los mejores Youtubers )",
            "Extractor de Tags de Competencia (Espía qué etiquetas usan los #1 🕵️)",
            "Optimizador de Descripción Persuasiva (Textos que invitan al clic 🖱️)",
            "Análisis de Tendencias en Tiempo Real (Súbete a la ola antes que nadie 🌊)",
            "Integración Directa en YouTube Studio (Sin copiar y pegar 🔗)",
            "Sistema 'Always-Alive' (Tu asistente SEO siempre activo en segundo plano )"
        ],
        technicalSpecs: [
            "AI Core: Prompt Engineering Dinámico (Context-Aware)",
            "Connection: Bridge de Comunicación Cross-Tab (Seguro)",
            "UI: Shadow DOM Aislado (No rompe estilos de YouTube)",
            "Input: Simulación Nativa 'insertText' (Anti-Bot Detection)",
            "Anti-Throttling: Oscilador de Audio 'Silent Scream' (Mantiene el SW vivo)"
        ],
        icon: "LineChart",
        folderName: "ExtYoutubeSeoGPT",
        plans: [
            { name: "Plan Basic", price: "$10 USD/mes", features: ["10 Videos/mes", "Análisis Básico", "Soporte Email"] },
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Videos Ilimitados", "Auditoría de Canal", "Soporte VIP"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1EVfQ0SBmG1Ic8Z3QnV_Zx0r9OZYeGu61/view?usp=drive_link"
    },
    {
        id: "prospect-ia",
        title: "Prospect IA",
        youtubeUrl: "https://www.youtube.com/embed/WhwZNBTVhIk",
        shortDescription: "Encuentra y contacta a tu cliente ideal automáticamente.",
        fullDescription: "La herramienta definitiva para prospección masiva. Deja que la IA identifique miembros cualificados en grupos y los contacte en piloto automático. Llena tu embudo de ventas con leads calientes listos para comprar, sin mover un dedo.",
        features: [
            "Motor de Extracción Heurística en Tiempo Real (Detecta prospectos al instante ⚡)",
            "Filtrado Inteligente de 'Nuevos Miembros' (Encuentra leads frescos )",
            "Tecnología 'Human-Type' Anti-Ban (Escribe como tú, no como un robot 🤖)",
            "Sistema de Variación Spintax (Mensajes únicos para evitar filtros de spam 🔀)",
            "Detección Preventiva de Restricciones (Para antes de que Facebook sospeche 🛡️)",
            "Navegación Contextual Híbrida (Scroll y Click natural 🖱️)"
        ],
        technicalSpecs: [
            "Engine: Observer de Mutaciones DOM con Debounce",
            "Safety: Kill-Switch automático por detección de palabras clave",
            "Input: Simulación de Eventos de Teclado (Keydown/Keyup/Input)",
            "Scrolling: Algoritmo 'Smart Scroll' con inercia variable",
            "Logic: Máquina de Estados Finita para flujo de prospección"
        ],
        icon: "Users",
        folderName: "Prospect IA",
        plans: [
            {
                name: "Plan Pro VIP",
                price: "$67 USD/mes",
                features: [
                    "Extracción de Miembros de Grupos Ilimitada",
                    "Spintax Avanzado y Anti-Ban",
                    "Soporte Estratégico",
                    "Extracción Masiva de Comentaristas en Posts (NUEVO🚀)",
                    "Extracción Masiva de Reacciones/Likes en Posts (NUEVO🔥)"
                ]
            }
        ],
        downloadLink: "https://drive.google.com/file/d/13q9Yx9eHKVJOJKgKXG4je83uhHiSub7f/view?usp=drive_link"
    },
    {
        id: "TexteaIA",
        title: "Textea IA",
        youtubeUrl: "https://www.youtube.com/embed/_EpcBdrFjeY",
        shortDescription: "Un empleado virtual que vende o se deja entrenar por ti como tu quieras, trabaja en WhatsApp y Messenger.",
        fullDescription: "Convierte tu WhatsApp y Messenger en máquinas de ventas 24/7. Textea IA no es solo un chatbot; es un empleado virtual que puedes entrenar a tu gusto con tus propios scripts y productos, o dejar que la IA venda por ti de forma autónoma. Responde al instante, califica prospectos y cierra ventas mientras tú descansas.",
        features: [
            "Cerebro Proactivo (Sabe cuándo hablar y cuándo usar el token `[SILENCE]` 🤫)",
            "Acumulación de Mensajes 'Smart Wait' (Espera al cliente, no spamea ⏳)",
            "Humanización de Burbujas (Divide textos largos en mensajes naturales 💬)",
            "Comprensión de Audios (Whisper) (Escucha notas de voz y responde texto 👂)",
            "Velocidad LPU Groq (Respuestas en milisegundos ⚡)",
            "Simulación de Escritura Orgánica (Tiempos de espera variables ✍️)"
        ],
        technicalSpecs: [
            "AI Model: Compatible con Groq (LLaMA 3) y OpenAI",
            "Logic: Buffer de Acumulación Temporal (State Machine)",
            "Context: Inyección de Prompt del Sistema Dinámica",
            "Audio: Pipeline de Transcripción Whisper API",
            "Timing: Algoritmo de Retraso Variable (Longitud de texto * ms)"
        ],
        icon: "Bot",
        folderName: "Textea IA",
        plans: [
            { name: "Plan Basic", price: "$10 USD/mes", features: ["100 Mensajes IA/día", "Solo Texto", "Soporte Email"] },
            { name: "Plan Pro", price: "$30 USD/mes", features: ["IA Ilimitada", "Comprensión de Audios", "Entrenamiento Personalizado"] }
        ],
        downloadLink: "https://drive.google.com/file/d/1bo09XRgipoyO-slK0Gc5GwSGT9CRI4Sx/view?usp=drive_link"
    },
    {
        id: "Auto-clipping",
        title: "Auto clipping Pro",
        youtubeUrl: "https://www.youtube.com/embed/EL_ID_DEL_VIDEO",
        shortDescription: "La herramienta definitiva para recortar y extraer video clips cortos a partir de videos largos.",
        fullDescription: "¡Prepárate para la revolución del contenido viral! Auto Clipping Pro detecta y extrae automáticamente los momentos más épicos y virales de cualquier video largo (YouTube, Streams, etc.). Convierte horas de contenido en decenas de Shorts, TikToks y Reels listos para explotar en redes sociales, todo en cuestión de segundos.",
        features: [
            "Detector de Viralidad por Risa (Escanea el chat en tiempo real buscando 'LOL', 'JAJA' para encontrar los mejores clips 📈)",
            "Buffer de Retroceso Inteligente (Salva los últimos 60s de gloria aunque no estuvieras grabando ⏪)",
            "Inyección de Upload en TikTok (Sube tus clips directamente sin llenar tu disco duro de archivos basura 📤)",
            "Simulación de Drag & Drop (Comportamiento humano para evitar shadowbans en TikTok 🤖)",
            "Modo 'Viral Watch' (Deja la herramienta corriendo y captura automáticamente cada pico de audiencia 🔥)",
            "Edición Instantánea (Recorta y ajusta el momento exacto antes de subir ✂️)"
        ],
        technicalSpecs: [
            "Motor: Análisis Heurístico de Chat (Densidad de Keywords/segundo)",
            "Core: Grabación de Streams en Memoria (Blob Buffer Ring)",
            "Automatización: Inyección de Eventos 'DataTransfer' (Fake Drag-and-Drop)",
            "Seguridad: Navegación Simulada en TikTok Studio (DOM Manipulation)",
            "Input: Generación Sintética de Eventos de Teclado para Captions",
            "Almacenamiento: Chrome Local Storage optimizado para historial viral"
        ],
        icon: "Scissors",
        folderName: "ExtClipping",
        plans: [
            { name: "Plan Basic", price: "$10 USD/mes", features: ["10 Clips/día", "Resolución 720p", "Marca de Agua"] },
            { name: "Plan Pro", price: "$30 USD/mes", features: ["Clips Ilimitados", "4K Ready", "Auto-Subida TikTok"] }
        ],
        downloadLink: "/downloads/auto-clipping.zip"
    }
];
