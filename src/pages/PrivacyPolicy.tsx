import React from 'react';
import { useSearchParams } from 'react-router-dom';
import LegalLayout from '@/components/LegalLayout';

const PrivacyPolicy = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  const content = {
    en: {
      title: "Privacy Policy",
      backText: "Back to Home",
      lastUpdated: "Last updated: February 10, 2025",
      sections: {
        intro: {
          title: "Overview",
          content: "zerox.technology is committed to protecting your personal data in compliance with the General Data Protection Regulation (EU) 2016/679 (GDPR). This policy describes how we collect, process, and protect your information."
        },
        controller: {
          title: "Data Controller",
          content: "zerox.technology\nLocation: Italy\nWebsite: https://zerox.technology"
        },
        dataCollection: {
          title: "Data Collected",
          content: "\u2022 Contact data provided voluntarily\n\u2022 Technical data: IP address, browser type, device information\n\u2022 Usage data: interaction patterns with the website\n\u2022 Cookie data as described in our Cookie Policy"
        },
        legalBasis: {
          title: "Legal Basis",
          content: "\u2022 Consent: voluntary submission of contact data or acceptance of optional cookies\n\u2022 Legitimate interests: analytics, security, service improvement\n\u2022 Legal obligations: when required by applicable law"
        },
        dataSharing: {
          title: "Data Sharing and Retention",
          content: "Personal data is not sold or transferred to third parties without consent, except to service providers assisting website operations or when required by law.\n\nRetention periods:\n\u2022 Contact data: until deletion is requested\n\u2022 Technical data: maximum 24 months\n\u2022 Cookie data: as specified in the Cookie Policy"
        },
        rights: {
          title: "Your Rights",
          content: "Under GDPR you have the right to access, rectify, erase, restrict, object to processing, and port your data. You may withdraw consent at any time and lodge a complaint with a supervisory authority.\n\nTo exercise these rights, contact us through the website."
        }
      }
    },
    it: {
      title: "Informativa sulla Privacy",
      backText: "Torna alla Home",
      lastUpdated: "Ultimo aggiornamento: 10 febbraio 2025",
      sections: {
        intro: {
          title: "Panoramica",
          content: "zerox.technology si impegna a proteggere i dati personali degli utenti in conformit\u00e0 al Regolamento (UE) 2016/679 (GDPR). La presente informativa descrive le modalit\u00e0 di raccolta, trattamento e protezione delle informazioni."
        },
        controller: {
          title: "Titolare del Trattamento",
          content: "zerox.technology\nLocalizzazione: Italia\nSito Web: https://zerox.technology"
        },
        dataCollection: {
          title: "Dati Raccolti",
          content: "\u2022 Dati di contatto forniti volontariamente\n\u2022 Dati tecnici: indirizzo IP, tipo di browser, informazioni sul dispositivo\n\u2022 Dati di utilizzo: modalit\u00e0 di interazione con il sito\n\u2022 Dati relativi ai cookie come descritto nella Politica sui Cookie"
        },
        legalBasis: {
          title: "Base Giuridica",
          content: "\u2022 Consenso: conferimento volontario di dati di contatto o accettazione dei cookie opzionali\n\u2022 Interessi legittimi: analisi, sicurezza, miglioramento del servizio\n\u2022 Obblighi di legge: quando richiesto dalla normativa applicabile"
        },
        dataSharing: {
          title: "Condivisione e Conservazione",
          content: "I dati personali non vengono venduti n\u00e9 trasferiti a terzi senza consenso, salvo a fornitori di servizi che assistono nelle operazioni del sito o quando richiesto dalla legge.\n\nPeriodi di conservazione:\n\u2022 Dati di contatto: fino alla richiesta di cancellazione\n\u2022 Dati tecnici: massimo 24 mesi\n\u2022 Dati cookie: come specificato nella Politica sui Cookie"
        },
        rights: {
          title: "Diritti dell'Interessato",
          content: "Ai sensi del GDPR hai diritto di accesso, rettifica, cancellazione, limitazione, opposizione al trattamento e portabilit\u00e0 dei dati. Puoi revocare il consenso in qualsiasi momento e presentare reclamo al Garante per la Protezione dei Dati Personali.\n\nPer esercitare questi diritti, contattaci attraverso il sito web."
        }
      }
    },
    es: {
      title: "Pol\u00edtica de Privacidad",
      backText: "Volver al Inicio",
      lastUpdated: "\u00daltima actualizaci\u00f3n: 10 de febrero de 2025",
      sections: {
        intro: {
          title: "Descripci\u00f3n General",
          content: "zerox.technology se compromete a proteger los datos personales de acuerdo con el Reglamento (UE) 2016/679 (RGPD). Esta pol\u00edtica describe c\u00f3mo recopilamos, tratamos y protegemos su informaci\u00f3n."
        },
        controller: {
          title: "Responsable del Tratamiento",
          content: "zerox.technology\nUbicaci\u00f3n: Italia\nSitio Web: https://zerox.technology"
        },
        rights: {
          title: "Sus Derechos",
          content: "Bajo el RGPD tiene derecho a acceder, rectificar, suprimir, limitar, oponerse al tratamiento y portar sus datos. Puede retirar su consentimiento en cualquier momento.\n\nPara ejercer estos derechos, cont\u00e1ctenos a trav\u00e9s del sitio web."
        }
      }
    },
    zh: {
      title: "\u9690\u79c1\u653f\u7b56",
      backText: "\u8fd4\u56de\u9996\u9875",
      lastUpdated: "\u6700\u540e\u66f4\u65b0\uff1a2025\u5e742\u670810\u65e5",
      sections: {
        intro: {
          title: "\u6982\u8ff0",
          content: "zerox.technology \u81f4\u529b\u4e8e\u4f9d\u636e\u300a\u901a\u7528\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b(EU) 2016/679 (GDPR) \u4fdd\u62a4\u60a8\u7684\u4e2a\u4eba\u6570\u636e\u3002\u672c\u653f\u7b56\u8bf4\u660e\u6211\u4eec\u5982\u4f55\u6536\u96c6\u3001\u5904\u7406\u548c\u4fdd\u62a4\u60a8\u7684\u4fe1\u606f\u3002"
        },
        controller: {
          title: "\u6570\u636e\u63a7\u5236\u8005",
          content: "zerox.technology\n\u4f4d\u7f6e\uff1a\u610f\u5927\u5229\n\u7f51\u7ad9\uff1ahttps://zerox.technology"
        },
        rights: {
          title: "\u60a8\u7684\u6743\u5229",
          content: "\u6839\u636eGDPR\uff0c\u60a8\u6709\u6743\u8bbf\u95ee\u3001\u66f4\u6b63\u3001\u5220\u9664\u3001\u9650\u5236\u3001\u53cd\u5bf9\u5904\u7406\u548c\u8f6c\u79fb\u60a8\u7684\u6570\u636e\u3002\u60a8\u53ef\u4ee5\u968f\u65f6\u64a4\u56de\u540c\u610f\u3002\n\n\u8981\u884c\u4f7f\u8fd9\u4e9b\u6743\u5229\uff0c\u8bf7\u901a\u8fc7\u7f51\u7ad9\u8054\u7cfb\u6211\u4eec\u3002"
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

export default PrivacyPolicy;
