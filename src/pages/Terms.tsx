import React from 'react';
import { useSearchParams } from 'react-router-dom';
import LegalLayout from '@/components/LegalLayout';

const Terms = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  const content = {
    en: {
      title: "Terms of Service",
      backText: "Back to Home",
      lastUpdated: "Last updated: February 10, 2025",
      sections: {
        intro: {
          title: "Acceptance",
          content: "By accessing zerox.technology you agree to these terms. If you do not agree, do not use the website."
        },
        provider: {
          title: "Service Provider",
          content: "zerox.technology\nWebsite: https://zerox.technology"
        },
        use: {
          title: "Permitted Use",
          content: "The website may be used for lawful purposes only. You agree not to:\n\u2022 Violate applicable laws\n\u2022 Attempt unauthorized access to our systems\n\u2022 Interfere with website operations\n\u2022 Upload or transmit harmful content"
        },
        ip: {
          title: "Intellectual Property",
          content: "All content on this website \u2014 text, graphics, logos, and software \u2014 is the property of zerox.technology and protected by applicable intellectual property laws."
        },
        liability: {
          title: "Limitation of Liability",
          content: "zerox.technology is not liable for indirect, incidental, special, or consequential damages arising from the use of the website."
        },
        law: {
          title: "Governing Law",
          content: "These terms are governed by the laws of Italy and the European Union. Disputes are subject to the exclusive jurisdiction of Italian courts."
        }
      }
    },
    it: {
      title: "Termini di Servizio",
      backText: "Torna alla Home",
      lastUpdated: "Ultimo aggiornamento: 10 febbraio 2025",
      sections: {
        intro: {
          title: "Accettazione",
          content: "Accedendo a zerox.technology accetti i presenti termini. Se non li condividi, non utilizzare il sito."
        },
        provider: {
          title: "Fornitore del Servizio",
          content: "zerox.technology\nSito Web: https://zerox.technology"
        },
        use: {
          title: "Utilizzo Consentito",
          content: "Il sito pu\u00f2 essere utilizzato esclusivamente per scopi leciti. \u00c8 vietato:\n\u2022 Violare le leggi applicabili\n\u2022 Tentare accessi non autorizzati ai sistemi\n\u2022 Interferire con il funzionamento del sito\n\u2022 Caricare o trasmettere contenuti dannosi"
        },
        ip: {
          title: "Propriet\u00e0 Intellettuale",
          content: "Tutti i contenuti del sito \u2014 testi, grafica, loghi e software \u2014 sono propriet\u00e0 di zerox.technology e protetti dalle leggi sulla propriet\u00e0 intellettuale."
        },
        liability: {
          title: "Limitazione di Responsabilit\u00e0",
          content: "zerox.technology non \u00e8 responsabile per danni indiretti, incidentali, speciali o consequenziali derivanti dall\u2019utilizzo del sito."
        },
        changes: {
          title: "Modifiche",
          content: "Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche sono efficaci dalla pubblicazione su questa pagina."
        },
        law: {
          title: "Legge Applicabile",
          content: "I presenti termini sono regolati dalle leggi italiane e dell\u2019Unione Europea. Le controversie sono soggette alla giurisdizione esclusiva dei tribunali italiani."
        }
      }
    },
    es: {
      title: "T\u00e9rminos de Servicio",
      backText: "Volver al Inicio",
      lastUpdated: "\u00daltima actualizaci\u00f3n: 10 de febrero de 2025",
      sections: {
        intro: {
          title: "Aceptaci\u00f3n",
          content: "Al acceder a zerox.technology acepta estos t\u00e9rminos. Si no est\u00e1 de acuerdo, no utilice el sitio."
        },
        provider: {
          title: "Proveedor del Servicio",
          content: "zerox.technology\nSitio Web: https://zerox.technology"
        },
        use: {
          title: "Uso Permitido",
          content: "El sitio solo puede usarse con fines l\u00edcitos. Queda prohibido:\n\u2022 Violar las leyes aplicables\n\u2022 Intentar acceso no autorizado\n\u2022 Interferir con el funcionamiento del sitio\n\u2022 Subir o transmitir contenido da\u00f1ino"
        },
        law: {
          title: "Ley Aplicable",
          content: "Estos t\u00e9rminos se rigen por las leyes de Italia y la Uni\u00f3n Europea. Las disputas se someten a la jurisdicci\u00f3n exclusiva de los tribunales italianos."
        }
      }
    },
    zh: {
      title: "\u670d\u52a1\u6761\u6b3e",
      backText: "\u8fd4\u56de\u9996\u9875",
      lastUpdated: "\u6700\u540e\u66f4\u65b0\uff1a2025\u5e742\u670810\u65e5",
      sections: {
        intro: {
          title: "\u63a5\u53d7\u6761\u6b3e",
          content: "\u8bbf\u95eeszerox.technology\u5373\u8868\u793a\u63a5\u53d7\u672c\u6761\u6b3e\u3002\u5982\u4e0d\u540c\u610f\uff0c\u8bf7\u52ff\u4f7f\u7528\u672c\u7f51\u7ad9\u3002"
        },
        provider: {
          title: "\u670d\u52a1\u63d0\u4f9b\u8005",
          content: "zerox.technology\n\u7f51\u7ad9\uff1ahttps://zerox.technology"
        },
        ip: {
          title: "\u77e5\u8bc6\u4ea7\u6743",
          content: "\u672c\u7f51\u7ad9\u6240\u6709\u5185\u5bb9\u2014\u2014\u6587\u672c\u3001\u56fe\u5f62\u3001\u6807\u5fd7\u548c\u8f6f\u4ef6\u2014\u2014\u5747\u4e3azerox.technology\u7684\u8d22\u4ea7\uff0c\u53d7\u77e5\u8bc6\u4ea7\u6743\u6cd5\u4fdd\u62a4\u3002"
        },
        law: {
          title: "\u9002\u7528\u6cd5\u5f8b",
          content: "\u672c\u6761\u6b3e\u53d7\u610f\u5927\u5229\u548c\u6b27\u76df\u6cd5\u5f8b\u7ba1\u8f96\u3002\u4e89\u8bae\u7531\u610f\u5927\u5229\u6cd5\u9662\u4e13\u5c5e\u7ba1\u8f96\u3002"
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

export default Terms;
