
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import LegalLayout from '@/components/LegalLayout';

const CookiePolicy = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  const content = {
    en: {
      title: "Cookie Policy",
      backText: "Back to Home",
      lastUpdated: "Last updated: December 19, 2024",
      sections: {
        intro: {
          title: "What are Cookies?",
          content: "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow certain features to function properly."
        },
        types: {
          title: "Types of Cookies We Use",
          content: "Necessary Cookies:\n• cookie-consent: Stores your cookie preferences\n• cookie-preferences: Stores granular cookie settings\n• Essential for the website to function properly\n• Duration: 12 months\n• Cannot be disabled\n\nAnalytics Cookies (Optional):\n• Help us understand how visitors use our website\n• Provide statistics on page views and user behavior\n• No third-party analytics currently implemented\n• Can be disabled in cookie settings\n\nMarketing Cookies (Optional):\n• Used to track visitors across websites\n• Help us display relevant content\n• No third-party marketing cookies currently implemented\n• Can be disabled in cookie settings"
        },
        management: {
          title: "Managing Cookies",
          content: "You can control cookies through:\n• Our cookie banner when you first visit\n• Cookie settings accessible at any time\n• Your browser settings\n• Third-party opt-out tools"
        },
        thirdParty: {
          title: "Third-Party Cookies",
          content: "We may use services from third parties that set their own cookies. These include:\n• Analytics providers (Google Analytics)\n• Content delivery networks\n• Social media platforms"
        },
        contact: {
          title: "Contact Us",
          content: "If you have questions about our use of cookies, please contact us through our website."
        }
      }
    },
    it: {
      title: "Politica sui Cookie",
      backText: "Torna alla Home",
      lastUpdated: "Ultimo aggiornamento: 19 dicembre 2024",
      sections: {
        intro: {
          title: "Cosa sono i Cookie?",
          content: "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti il nostro sito web. Ci aiutano a fornirti una migliore esperienza di navigazione e consentono a certe funzionalità di funzionare correttamente."
        },
        types: {
          title: "Tipi di Cookie che Utilizziamo",
          content: "Cookie Necessari:\n• cookie-consent: Memorizza le tue preferenze sui cookie\n• cookie-preferences: Memorizza le impostazioni granulari dei cookie\n• Essenziali per il corretto funzionamento del sito web\n• Durata: 12 mesi\n• Non possono essere disabilitati\n\nCookie Analitici (Opzionali):\n• Ci aiutano a capire come i visitatori utilizzano il nostro sito web\n• Forniscono statistiche su visualizzazioni di pagina e comportamento utente\n• Nessun sistema di analytics di terze parti attualmente implementato\n• Possono essere disabilitati nelle impostazioni dei cookie\n\nCookie di Marketing (Opzionali):\n• Utilizzati per tracciare i visitatori attraverso i siti web\n• Ci aiutano a mostrare contenuti rilevanti\n• Nessun cookie di marketing di terze parti attualmente implementato\n• Possono essere disabilitati nelle impostazioni dei cookie"
        },
        management: {
          title: "Gestione dei Cookie",
          content: "Puoi controllare i cookie attraverso:\n• Il nostro banner dei cookie quando visiti per la prima volta\n• Le impostazioni dei cookie accessibili in qualsiasi momento\n• Le impostazioni del tuo browser\n• Strumenti di opt-out di terze parti"
        },
        thirdParty: {
          title: "Cookie di Terze Parti",
          content: "Potremmo utilizzare servizi di terze parti che impostano i propri cookie. Questi includono:\n• Fornitori di analisi (Google Analytics)\n• Reti di distribuzione dei contenuti\n• Piattaforme di social media"
        },
        contact: {
          title: "Contattaci",
          content: "Se hai domande sul nostro utilizzo dei cookie, contattaci attraverso il nostro sito web."
        }
      }
    },
    es: {
      title: "Política de Cookies",
      backText: "Volver al Inicio",
      lastUpdated: "Última actualización: 19 de diciembre de 2024",
      sections: {
        intro: {
          title: "¿Qué son las Cookies?",
          content: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a brindarte una mejor experiencia de navegación y permiten que ciertas funciones funcionen correctamente."
        },
        types: {
          title: "Tipos de Cookies que Utilizamos",
          content: "Cookies Necesarias:\n• Esenciales para que el sitio web funcione correctamente\n• Recuerdan tus preferencias de cookies\n• No se pueden desactivar\n\nCookies Analíticas:\n• Nos ayudan a entender cómo los visitantes usan nuestro sitio web\n• Proporcionan estadísticas sobre vistas de página y comportamiento del usuario\n• Se pueden desactivar en la configuración de cookies\n\nCookies de Marketing:\n• Utilizadas para rastrear visitantes a través de sitios web\n• Nos ayudan a mostrar contenido relevante\n• Se pueden desactivar en la configuración de cookies"
        },
        management: {
          title: "Gestión de Cookies",
          content: "Puedes controlar las cookies a través de:\n• Nuestro banner de cookies cuando visitas por primera vez\n• Configuración de cookies accesible en cualquier momento\n• La configuración de tu navegador\n• Herramientas de exclusión de terceros"
        },
        thirdParty: {
          title: "Cookies de Terceros",
          content: "Podemos usar servicios de terceros que establecen sus propias cookies. Estos incluyen:\n• Proveedores de análisis (Google Analytics)\n• Redes de entrega de contenido\n• Plataformas de redes sociales"
        },
        contact: {
          title: "Contáctanos",
          content: "Si tienes preguntas sobre nuestro uso de cookies, contáctanos a través de nuestro sitio web."
        }
      }
    },
    zh: {
      title: "Cookie政策",
      backText: "返回首页",
      lastUpdated: "最后更新：2024年12月19日",
      sections: {
        intro: {
          title: "什么是Cookie？",
          content: "Cookie是当您访问我们的网站时存储在您设备上的小文本文件。它们帮助我们为您提供更好的浏览体验，并允许某些功能正常运行。"
        },
        types: {
          title: "我们使用的Cookie类型",
          content: "必要Cookie：\n• 对网站正常运行必不可少\n• 记住您的cookie偏好\n• 无法禁用\n\n分析Cookie：\n• 帮助我们了解访问者如何使用我们的网站\n• 提供页面浏览量和用户行为统计\n• 可在cookie设置中禁用\n\n营销Cookie：\n• 用于跨网站跟踪访问者\n• 帮助我们显示相关内容\n• 可在cookie设置中禁用"
        },
        management: {
          title: "管理Cookie",
          content: "您可以通过以下方式控制cookie：\n• 首次访问时的cookie横幅\n• 随时可访问的cookie设置\n• 您的浏览器设置\n• 第三方退出工具"
        },
        thirdParty: {
          title: "第三方Cookie",
          content: "我们可能使用设置自己cookie的第三方服务。这些包括：\n• 分析提供商（Google Analytics）\n• 内容分发网络\n• 社交媒体平台"
        },
        contact: {
          title: "联系我们",
          content: "如果您对我们使用cookie有疑问，请通过我们的网站联系我们。"
        }
      }
    }
  };

  const currentContent = content[lang as keyof typeof content] || content.en;

  return (
    <LegalLayout title={currentContent.title} backText={currentContent.backText}>
      <p className="text-sm text-gray-400 mb-8">{currentContent.lastUpdated}</p>
      
      {Object.entries(currentContent.sections).map(([key, section]) => (
        <section key={key} className="mb-8">
          <h2 className="text-xl font-semibold text-green-400 mb-4">{section.title}</h2>
          <div className="whitespace-pre-line text-gray-300 leading-relaxed">
            {section.content}
          </div>
        </section>
      ))}
    </LegalLayout>
  );
};

export default CookiePolicy;
