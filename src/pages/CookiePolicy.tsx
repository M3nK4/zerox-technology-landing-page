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
      lastUpdated: "Last updated: February 10, 2025",
      sections: {
        intro: {
          title: "What Are Cookies",
          content: "Cookies are small text files stored on your device when you visit the website. They enable core functionality and help improve the browsing experience."
        },
        types: {
          title: "Cookies Used",
          content: "Necessary:\n\u2022 cookie-consent, cookie-preferences \u2014 store your cookie choices\n\u2022 Duration: 12 months\n\u2022 Cannot be disabled\n\nAnalytics (optional):\n\u2022 Provide anonymized usage statistics\n\u2022 Can be disabled in cookie settings\n\nMarketing (optional):\n\u2022 Used for cross-site tracking\n\u2022 Can be disabled in cookie settings"
        },
        management: {
          title: "Management",
          content: "You can manage cookies through the cookie banner on first visit, cookie settings accessible from the footer, or your browser settings."
        }
      }
    },
    it: {
      title: "Politica sui Cookie",
      backText: "Torna alla Home",
      lastUpdated: "Ultimo aggiornamento: 10 febbraio 2025",
      sections: {
        intro: {
          title: "Cosa Sono i Cookie",
          content: "I cookie sono piccoli file di testo memorizzati sul dispositivo durante la visita del sito. Consentono il funzionamento delle funzionalit\u00e0 essenziali e migliorano l\u2019esperienza di navigazione."
        },
        controller: {
          title: "Titolare del Trattamento",
          content: "zerox.technology\nSito Web: https://zerox.technology"
        },
        types: {
          title: "Cookie Utilizzati",
          content: "Necessari:\n\u2022 cookie-consent, cookie-preferences \u2014 memorizzano le scelte sui cookie\n\u2022 Durata: 12 mesi\n\u2022 Non disattivabili\n\nAnalitici (opzionali):\n\u2022 Forniscono statistiche anonime di utilizzo\n\u2022 Disattivabili nelle impostazioni cookie\n\nMarketing (opzionali):\n\u2022 Utilizzati per il tracciamento cross-site\n\u2022 Disattivabili nelle impostazioni cookie"
        },
        management: {
          title: "Gestione",
          content: "Puoi gestire i cookie tramite il banner alla prima visita, le impostazioni cookie accessibili dal footer o le impostazioni del browser."
        },
        legalRef: {
          title: "Riferimenti Normativi",
          content: "\u2022 Regolamento (UE) 2016/679 (GDPR)\n\u2022 Direttiva 2002/58/CE (ePrivacy)\n\u2022 D.Lgs. 196/2003 e successive modifiche\n\u2022 Linee guida del Garante per la Protezione dei Dati Personali (10 giugno 2021)"
        }
      }
    },
    es: {
      title: "Pol\u00edtica de Cookies",
      backText: "Volver al Inicio",
      lastUpdated: "\u00daltima actualizaci\u00f3n: 10 de febrero de 2025",
      sections: {
        intro: {
          title: "Qu\u00e9 Son las Cookies",
          content: "Las cookies son peque\u00f1os archivos de texto almacenados en su dispositivo al visitar el sitio. Permiten funciones esenciales y mejoran la experiencia de navegaci\u00f3n."
        },
        types: {
          title: "Cookies Utilizadas",
          content: "Necesarias:\n\u2022 Esenciales para el funcionamiento del sitio\n\u2022 No se pueden desactivar\n\nAnal\u00edticas (opcionales):\n\u2022 Estad\u00edsticas an\u00f3nimas de uso\n\u2022 Desactivables en configuraci\u00f3n\n\nMarketing (opcionales):\n\u2022 Seguimiento entre sitios\n\u2022 Desactivables en configuraci\u00f3n"
        },
        management: {
          title: "Gesti\u00f3n",
          content: "Puede gestionar las cookies a trav\u00e9s del banner en la primera visita, la configuraci\u00f3n accesible desde el pie de p\u00e1gina o la configuraci\u00f3n del navegador."
        }
      }
    },
    zh: {
      title: "Cookie\u653f\u7b56",
      backText: "\u8fd4\u56de\u9996\u9875",
      lastUpdated: "\u6700\u540e\u66f4\u65b0\uff1a2025\u5e742\u670810\u65e5",
      sections: {
        intro: {
          title: "\u4ec0\u4e48\u662fCookie",
          content: "Cookie\u662f\u60a8\u8bbf\u95ee\u7f51\u7ad9\u65f6\u5b58\u50a8\u5728\u8bbe\u5907\u4e0a\u7684\u5c0f\u578b\u6587\u672c\u6587\u4ef6\u3002\u5b83\u4eec\u786e\u4fdd\u6838\u5fc3\u529f\u80fd\u8fd0\u884c\u5e76\u6539\u5584\u6d4f\u89c8\u4f53\u9a8c\u3002"
        },
        types: {
          title: "\u4f7f\u7528\u7684Cookie",
          content: "\u5fc5\u8981Cookie\uff1a\n\u2022 \u7f51\u7ad9\u6b63\u5e38\u8fd0\u884c\u5fc5\u9700\n\u2022 \u65e0\u6cd5\u7981\u7528\n\n\u5206\u6790Cookie\uff08\u53ef\u9009\uff09\uff1a\n\u2022 \u533f\u540d\u4f7f\u7528\u7edf\u8ba1\n\u2022 \u53ef\u5728\u8bbe\u7f6e\u4e2d\u7981\u7528\n\n\u8425\u9500Cookie\uff08\u53ef\u9009\uff09\uff1a\n\u2022 \u8de8\u7ad9\u8ddf\u8e2a\n\u2022 \u53ef\u5728\u8bbe\u7f6e\u4e2d\u7981\u7528"
        },
        management: {
          title: "\u7ba1\u7406",
          content: "\u60a8\u53ef\u4ee5\u901a\u8fc7\u9996\u6b21\u8bbf\u95ee\u65f6\u7684\u6a2a\u5e45\u3001\u9875\u811a\u4e2d\u7684cookie\u8bbe\u7f6e\u6216\u6d4f\u89c8\u5668\u8bbe\u7f6e\u6765\u7ba1\u7406cookie\u3002"
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
