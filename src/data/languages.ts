
export const languages = {
  en: {
    label: "EN",
    description: "zerox is a technological innovation lab where distributed systems, artificial intelligence, blockchain, cryptocurrencies and cybersecurity converge to explore new technological frontiers",
    more: "more",
    emailPlaceholder: "enter your email",
    submit: "Submit",
    htmlLang: "en",
    emailConsent: "I agree to the processing of my personal data according to the",
    privacyPolicy: "Privacy Policy",
    and: "and",
    cookiePolicy: "Cookie Policy",
    cookieBanner: {
      title: "Cookie Preferences",
      description: "We use cookies to enhance your browsing experience and analyze our traffic. You can choose which cookies to accept.",
      acceptAll: "Accept All",
      acceptNecessary: "Accept Necessary",
      settings: "Settings",
      privacyPolicy: "Privacy Policy"
    },
    cookieSettings: {
      title: "Cookie Settings",
      description: "Manage your cookie preferences. You can enable or disable different types of cookies below.",
      necessary: {
        name: "Necessary Cookies",
        description: "These cookies are essential for the website to function and cannot be switched off."
      },
      analytics: {
        name: "Analytics Cookies",
        description: "These cookies help us understand how visitors interact with our website."
      },
      marketing: {
        name: "Marketing Cookies",
        description: "These cookies are used to track visitors across websites for marketing purposes."
      },
      saveSettings: "Save Settings",
      acceptAll: "Accept All"
    }
  },
  it: {
    label: "IT", 
    description: "zerox è un laboratorio di innovazione tecnologica in cui sistemi distribuiti, intelligenza artificiale, blockchain, criptovalute e cybersecurity convergono per esplorare nuove frontiere tecnologiche",
    more: "scopri di più",
    emailPlaceholder: "inserisci email",
    submit: "Invia",
    htmlLang: "it",
    emailConsent: "Acconsento al trattamento dei miei dati personali secondo l'",
    privacyPolicy: "Informativa sulla Privacy",
    and: "e la",
    cookiePolicy: "Politica sui Cookie",
    cookieBanner: {
      title: "Preferenze Cookie",
      description: "Utilizziamo i cookie per migliorare la tua esperienza di navigazione e analizzare il nostro traffico. Puoi scegliere quali cookie accettare.",
      acceptAll: "Accetta Tutti",
      acceptNecessary: "Accetta Necessari",
      settings: "Impostazioni",
      privacyPolicy: "Informativa Privacy"
    },
    cookieSettings: {
      title: "Impostazioni Cookie",
      description: "Gestisci le tue preferenze sui cookie. Puoi abilitare o disabilitare diversi tipi di cookie qui sotto.",
      necessary: {
        name: "Cookie Necessari",
        description: "Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disattivati."
      },
      analytics: {
        name: "Cookie Analitici",
        description: "Questi cookie ci aiutano a capire come i visitatori interagiscono con il nostro sito web."
      },
      marketing: {
        name: "Cookie di Marketing",
        description: "Questi cookie vengono utilizzati per tracciare i visitatori attraverso i siti web per scopi di marketing."
      },
      saveSettings: "Salva Impostazioni",
      acceptAll: "Accetta Tutti"
    }
  },
  es: {
    label: "ES",
    description: "zerox es un laboratorio de innovación tecnológica donde los sistemas distribuidos, la inteligencia artificial, la cadena de bloques, las criptomonedas y la ciberseguridad convergen para explorar nuevas fronteras tecnológicas",
    more: "más",
    emailPlaceholder: "introduce email", 
    submit: "Enviar",
    htmlLang: "es",
    emailConsent: "Acepto el procesamiento de mis datos personales según la",
    privacyPolicy: "Política de Privacidad",
    and: "y la",
    cookiePolicy: "Política de Cookies",
    cookieBanner: {
      title: "Preferencias de Cookies",
      description: "Utilizamos cookies para mejorar tu experiencia de navegación y analizar nuestro tráfico. Puedes elegir qué cookies aceptar.",
      acceptAll: "Aceptar Todas",
      acceptNecessary: "Aceptar Necesarias",
      settings: "Configuración",
      privacyPolicy: "Política de Privacidad"
    },
    cookieSettings: {
      title: "Configuración de Cookies",
      description: "Gestiona tus preferencias de cookies. Puedes habilitar o deshabilitar diferentes tipos de cookies a continuación.",
      necessary: {
        name: "Cookies Necesarias",
        description: "Estas cookies son esenciales para que el sitio web funcione y no se pueden desactivar."
      },
      analytics: {
        name: "Cookies Analíticas",
        description: "Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web."
      },
      marketing: {
        name: "Cookies de Marketing",
        description: "Estas cookies se utilizan para rastrear visitantes a través de sitios web con fines de marketing."
      },
      saveSettings: "Guardar Configuración",
      acceptAll: "Aceptar Todas"
    }
  },
  zh: {
    label: "中",
    description: "zerox 是一个技术创新实验室，在这里分布式系统、人工智能、区块链、加密货币和网络安全交汇，探索新的技术前沿",
    more: "更多",
    emailPlaceholder: "输入您的邮箱",
    submit: "提交", 
    htmlLang: "zh-Hans",
    emailConsent: "我同意根据",
    privacyPolicy: "隐私政策",
    and: "和",
    cookiePolicy: "Cookie政策",
    cookieBanner: {
      title: "Cookie偏好",
      description: "我们使用cookie来增强您的浏览体验并分析我们的流量。您可以选择接受哪些cookie。",
      acceptAll: "接受全部",
      acceptNecessary: "接受必要",
      settings: "设置",
      privacyPolicy: "隐私政策"
    },
    cookieSettings: {
      title: "Cookie设置",
      description: "管理您的cookie偏好。您可以在下面启用或禁用不同类型的cookie。",
      necessary: {
        name: "必要Cookie",
        description: "这些cookie对网站功能至关重要，无法关闭。"
      },
      analytics: {
        name: "分析Cookie",
        description: "这些cookie帮助我们了解访问者如何与我们的网站互动。"
      },
      marketing: {
        name: "营销Cookie",
        description: "这些cookie用于跨网站跟踪访问者以进行营销。"
      },
      saveSettings: "保存设置",
      acceptAll: "接受全部"
    }
  },
};

export const languageOrder = ["en", "it", "es", "zh"] as const;
export type LanguageKey = typeof languageOrder[number];
