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
      lastUpdated: "Last updated: January 15, 2025",
      sections: {
        project: {
          title: "Project Information",
          content: "Project Name: Zerox Technology\nType: Personal/Portfolio Project\nWebsite: https://zerox.technology\n\nThis is a personal project and technology showcase. No commercial company is currently registered."
        },
        owner: {
          title: "Website Owner",
          content: "Owner: [Your Name/Nickname]\nLocation: Italy\nEmail: [Your personal email or contact]\nWebsite: https://zerox.technology\n\nNote: This website does not represent a registered commercial entity. It is a personal technology project and portfolio."
        },
        contact: {
          title: "Contact Information",
          content: "For inquiries about this project:\nEmail: [Your contact email]\nWebsite: https://zerox.technology\nGitHub: [Your GitHub profile - optional]\n\nThis is a non-commercial educational/portfolio project."
        },
        ownership: {
          title: "Website Ownership",
          content: "This website is owned and operated by Zerox Technology.\n\nThe content, design, and all intellectual property rights relating to this website are protected by copyright and other applicable laws."
        },
        disclaimer: {
          title: "Disclaimer",
          content: "The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained herein."
        }
      }
    },
    it: {
      title: "Informativa Legale",
      backText: "Torna alla Home",
      lastUpdated: "Ultimo aggiornamento: 15 gennaio 2025",
      sections: {
        project: {
          title: "Informazioni sul Progetto",
          content: "Nome Progetto: Zerox Technology\nTipo: Progetto Personale/Portfolio\nSito Web: https://zerox.technology\n\nQuesto è un progetto personale e una vetrina tecnologica. Non è attualmente registrata alcuna società commerciale."
        },
        owner: {
          title: "Proprietario del Sito",
          content: "Proprietario: [Il tuo Nome/Nickname]\nLocalizzazione: Italia\nEmail: [La tua email personale o di contatto]\nSito Web: https://zerox.technology\n\nNota: Questo sito web non rappresenta un'entità commerciale registrata. È un progetto tecnologico personale e portfolio."
        },
        contact: {
          title: "Contatti",
          content: "Per informazioni su questo progetto:\nEmail: [La tua email di contatto]\nSito Web: https://zerox.technology\nGitHub: [Il tuo profilo GitHub - opzionale]\n\nQuesto è un progetto non commerciale educativo/portfolio."
        },
        ownership: {
          title: "Proprietà del Sito",
          content: "Questo sito web è di proprietà e gestito da Zerox Technology.\n\nI contenuti, il design e tutti i diritti di proprietà intellettuale relativi a questo sito web sono protetti da copyright e altre leggi applicabili."
        },
        disclaimer: {
          title: "Clausola di Esclusione della Responsabilità",
          content: "Le informazioni fornite su questo sito web sono solo a scopo informativo generale. Pur impegnandoci a mantenere le informazioni aggiornate e corrette, non forniamo dichiarazioni o garanzie di alcun tipo, esplicite o implicite, in merito alla completezza, accuratezza, affidabilità, idoneità o disponibilità del sito web o delle informazioni in esso contenute."
        }
      }
    },
    es: {
      title: "Aviso Legal",
      backText: "Volver al Inicio",
      lastUpdated: "Última actualización: 15 de enero de 2025",
      sections: {
        company: {
          title: "Información de la Empresa",
          content: "Razón Social: Zerox Technology\nForma Legal: [POR COMPLETAR]\nDomicilio Social: [POR COMPLETAR - Dirección Completa]\nSede Operativa: [POR COMPLETAR]"
        },
        registration: {
          title: "Datos de Registro",
          content: "NIF/CIF: [POR COMPLETAR]\nCódigo Fiscal: [POR COMPLETAR]\nRegistro Mercantil: [POR COMPLETAR]\nNúmero REA: [POR COMPLETAR]\nCapital Social: [POR COMPLETAR]"
        },
        contact: {
          title: "Información de Contacto",
          content: "Email: [POR COMPLETAR - ej. info@zerox.technology]\nEmail Certificado: [POR COMPLETAR]\nTeléfono: [POR COMPLETAR]\nSitio Web: https://zerox.technology"
        },
        ownership: {
          title: "Propiedad del Sitio Web",
          content: "Este sitio web es propiedad y está operado por Zerox Technology.\n\nEl contenido, el diseño y todos los derechos de propiedad intelectual relacionados con este sitio web están protegidos por derechos de autor y otras leyes aplicables."
        },
        disclaimer: {
          title: "Descargo de Responsabilidad",
          content: "La información proporcionada en este sitio web es solo para fines informativos generales. Si bien nos esforzamos por mantener la información actualizada y correcta, no hacemos representaciones ni garantías de ningún tipo, expresas o implícitas, sobre la integridad, precisión, confiabilidad, idoneidad o disponibilidad del sitio web o la información contenida en él."
        }
      }
    },
    zh: {
      title: "法律声明",
      backText: "返回首页",
      lastUpdated: "最后更新：2025年1月15日",
      sections: {
        company: {
          title: "公司信息",
          content: "商业名称：Zerox Technology\n法律形式：[待完成]\n注册地址：[待完成 - 完整地址]\n运营总部：[待完成]"
        },
        registration: {
          title: "注册详情",
          content: "增值税号：[待完成]\n税号：[待完成]\n商会注册：[待完成]\nREA号码：[待完成]\n股本：[待完成]"
        },
        contact: {
          title: "联系信息",
          content: "电子邮件：[待完成 - 例如 info@zerox.technology]\n认证邮箱：[待完成]\n电话：[待完成]\n网站：https://zerox.technology"
        },
        ownership: {
          title: "网站所有权",
          content: "本网站由Zerox Technology拥有和运营。\n\n与本网站相关的内容、设计和所有知识产权均受版权和其他适用法律保护。"
        },
        disclaimer: {
          title: "免责声明",
          content: "本网站提供的信息仅供一般参考。虽然我们努力保持信息的最新和准确，但我们不对网站或其中包含的信息的完整性、准确性、可靠性、适用性或可用性作出任何明示或暗示的陈述或保证。"
        }
      }
    }
  };

  const currentContent = content[lang as keyof typeof content] || content.en;

  return (
    <LegalLayout title={currentContent.title} backText={currentContent.backText}>
      <p className="text-sm text-gray-400 mb-8">{currentContent.lastUpdated}</p>

      {/* Important notice for Italian version */}
      {lang === 'it' && (
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-8">
          <p className="text-blue-400 text-sm font-mono">
            ℹ️ <strong>NOTA:</strong> Questo è un progetto personale/portfolio senza scopo commerciale.
            Non essendo un'attività commerciale registrata, non sono richieste Partita IVA o altri dati societari.
            Inserisci i tuoi dati personali di contatto nei campi indicati.
          </p>
        </div>
      )}

      {lang === 'en' && (
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-8">
          <p className="text-blue-400 text-sm font-mono">
            ℹ️ <strong>NOTE:</strong> This is a personal/portfolio project without commercial purpose.
            As it's not a registered business, VAT number and other company details are not required.
            Fill in your personal contact information in the indicated fields.
          </p>
        </div>
      )}

      {Object.entries(currentContent.sections).map(([key, section]) => (
        <section key={key} className="mb-8">
          <h2 className="text-xl font-semibold text-green-400 mb-4">{section.title}</h2>
          <div className="whitespace-pre-line text-gray-300 leading-relaxed">
            {section.content}
          </div>
        </section>
      ))}

      {/* Additional note for Italian compliance */}
      {lang === 'it' && (
        <section className="mt-12 p-6 bg-gray-900/50 border border-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-green-400 mb-3">Note sulla Compliance per Progetti Personali</h3>
          <div className="text-gray-300 text-sm space-y-2">
            <p>
              <strong>Per progetti personali NON commerciali:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Non è richiesta Partita IVA (necessaria solo per attività commerciali)</li>
              <li>Non servono registrazione CCIAA, REA, o PEC</li>
              <li>È sufficiente fornire i dati personali del proprietario del sito</li>
              <li>Consigliato: nome/nickname, email di contatto, località</li>
            </ul>
            <p className="mt-4 text-blue-400">
              <strong>Se in futuro aprirai un'attività commerciale, dovrai aggiornare questa pagina con i dati aziendali completi.</strong>
            </p>
            <p className="mt-2 text-gray-400 text-xs">
              Il D.Lgs. 70/2003 (Decreto E-commerce) si applica principalmente a siti con scopo commerciale.
              Per progetti personali/portfolio è comunque buona prassi fornire informazioni di contatto chiare.
            </p>
          </div>
        </section>
      )}
    </LegalLayout>
  );
};

export default LegalNotice;
