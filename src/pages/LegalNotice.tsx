import React from 'react';
import { useSearchParams } from 'react-router-dom';
import LegalLayout from '@/components/LegalLayout';

const LegalNotice = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  const content = {
    en: {
      title: "Legal Notice",
      backText: "Back to Home",
      lastUpdated: "Last updated: February 10, 2025",
      sections: {
        company: {
          title: "Company",
          content: "zerox.technology\nLocation: Italy\nWebsite: https://zerox.technology"
        },
        ownership: {
          title: "Ownership",
          content: "This website is owned and operated by zerox.technology. All content, design, and intellectual property rights are protected by applicable laws."
        },
        disclaimer: {
          title: "Disclaimer",
          content: "The information on this website is provided for general informational purposes. No representations or warranties are made regarding the completeness, accuracy, or availability of the website or its content."
        }
      }
    },
    it: {
      title: "Informativa Legale",
      backText: "Torna alla Home",
      lastUpdated: "Ultimo aggiornamento: 10 febbraio 2025",
      sections: {
        company: {
          title: "Azienda",
          content: "zerox.technology\nLocalizzazione: Italia\nSito Web: https://zerox.technology"
        },
        law: {
          title: "Informazioni ai sensi del D.Lgs. 70/2003",
          content: "Ai sensi dell\u2019art. 7 del D.Lgs. 70/2003:\n\u2022 Denominazione: zerox.technology\n\u2022 Sito Web: https://zerox.technology"
        },
        ownership: {
          title: "Propriet\u00e0",
          content: "Il sito web \u00e8 di propriet\u00e0 e gestito da zerox.technology. Tutti i contenuti, il design e i diritti di propriet\u00e0 intellettuale sono protetti dalle leggi applicabili."
        },
        disclaimer: {
          title: "Esclusione di Responsabilit\u00e0",
          content: "Le informazioni presenti sul sito sono fornite a scopo informativo. Non si rilasciano dichiarazioni o garanzie in merito a completezza, accuratezza o disponibilit\u00e0 del sito o dei suoi contenuti."
        }
      }
    },
    es: {
      title: "Aviso Legal",
      backText: "Volver al Inicio",
      lastUpdated: "\u00daltima actualizaci\u00f3n: 10 de febrero de 2025",
      sections: {
        company: {
          title: "Empresa",
          content: "zerox.technology\nUbicaci\u00f3n: Italia\nSitio Web: https://zerox.technology"
        },
        ownership: {
          title: "Propiedad",
          content: "Este sitio es propiedad de zerox.technology. Todo el contenido, dise\u00f1o y derechos de propiedad intelectual est\u00e1n protegidos por las leyes aplicables."
        },
        disclaimer: {
          title: "Descargo de Responsabilidad",
          content: "La informaci\u00f3n proporcionada es solo para fines informativos. No se hacen representaciones ni garant\u00edas sobre la integridad, precisi\u00f3n o disponibilidad del sitio o su contenido."
        }
      }
    },
    zh: {
      title: "\u6cd5\u5f8b\u58f0\u660e",
      backText: "\u8fd4\u56de\u9996\u9875",
      lastUpdated: "\u6700\u540e\u66f4\u65b0\uff1a2025\u5e742\u670810\u65e5",
      sections: {
        company: {
          title: "\u516c\u53f8\u4fe1\u606f",
          content: "zerox.technology\n\u4f4d\u7f6e\uff1a\u610f\u5927\u5229\n\u7f51\u7ad9\uff1ahttps://zerox.technology"
        },
        ownership: {
          title: "\u6240\u6709\u6743",
          content: "\u672c\u7f51\u7ad9\u7531zerox.technology\u62e5\u6709\u548c\u8fd0\u8425\u3002\u6240\u6709\u5185\u5bb9\u3001\u8bbe\u8ba1\u548c\u77e5\u8bc6\u4ea7\u6743\u5747\u53d7\u9002\u7528\u6cd5\u5f8b\u4fdd\u62a4\u3002"
        },
        disclaimer: {
          title: "\u514d\u8d23\u58f0\u660e",
          content: "\u672c\u7f51\u7ad9\u4fe1\u606f\u4ec5\u4f9b\u53c2\u8003\u3002\u6211\u4eec\u4e0d\u5bf9\u7f51\u7ad9\u6216\u5176\u5185\u5bb9\u7684\u5b8c\u6574\u6027\u3001\u51c6\u786e\u6027\u6216\u53ef\u7528\u6027\u4f5c\u4efb\u4f55\u9648\u8ff0\u6216\u4fdd\u8bc1\u3002"
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

export default LegalNotice;
