
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
      lastUpdated: "Last updated: December 19, 2024",
      sections: {
        intro: {
          title: "Introduction",
          content: "At Zerox Technology, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you visit our website."
        },
        controller: {
          title: "Data Controller",
          content: "Data Controller: [Your Name/Nickname]\nProject: Zerox Technology (Personal Portfolio)\nLocation: Italy\nEmail: [Your personal email]\nWebsite: https://zerox.technology\n\nNote: This is a personal project without commercial purpose. For any questions regarding this privacy policy or your personal data, please contact us at the email address above."
        },
        dataCollection: {
          title: "Data We Collect",
          content: "We collect the following types of information:\n• Email addresses when you subscribe to our newsletter\n• Technical data such as IP address, browser type, and device information\n• Usage data about how you interact with our website"
        },
        dataUse: {
          title: "How We Use Your Data",
          content: "We use your personal data to:\n• Send you updates about our technology innovations\n• Improve our website and services\n• Analyze website usage patterns\n• Comply with legal obligations"
        },
        dataSharing: {
          title: "Data Sharing",
          content: "We do not sell, trade, or otherwise transfer your personal data to third parties without your consent, except:\n• To trusted service providers who assist us in operating our website\n• When required by law or to protect our rights"
        },
        cookies: {
          title: "Cookies",
          content: "Our website uses cookies to enhance your browsing experience. You can control cookie preferences through our cookie banner and settings."
        },
        legalBasis: {
          title: "Legal Basis for Processing",
          content: "We process your personal data based on the following legal grounds:\n• Consent: When you subscribe to our newsletter or accept cookies\n• Legitimate interests: For website analytics and security\n• Legal obligations: When required by applicable laws"
        },
        dataRetention: {
          title: "Data Retention",
          content: "We retain your personal data only for as long as necessary to fulfill the purposes outlined in this privacy policy:\n• Newsletter subscribers: Until you unsubscribe\n• Technical data: Maximum 24 months\n• Contact form submissions: Maximum 36 months"
        },
        rights: {
          title: "Your Rights",
          content: "Under GDPR, you have the right to:\n• Access your personal data\n• Correct inaccurate data\n• Delete your data (right to be forgotten)\n• Object to processing\n• Data portability\n• Withdraw consent at any time\n• Lodge a complaint with a supervisory authority"
        },
        contact: {
          title: "Contact Us",
          content: "If you have any questions about this privacy policy or wish to exercise your rights, please contact us at the email address provided in the Data Controller section above."
        }
      }
    },
    it: {
      title: "Informativa sulla Privacy",
      backText: "Torna alla Home",
      lastUpdated: "Ultimo aggiornamento: 19 dicembre 2024",
      sections: {
        intro: {
          title: "Introduzione",
          content: "In Zerox Technology, rispettiamo la tua privacy e ci impegniamo a proteggere i tuoi dati personali. Questa informativa sulla privacy spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni quando visiti il nostro sito web."
        },
        controller: {
          title: "Titolare del Trattamento",
          content: "Titolare del Trattamento: [Il tuo Nome/Nickname]\nProgetto: Zerox Technology (Portfolio Personale)\nLocalizzazione: Italia\nEmail: [La tua email personale]\nSito Web: https://zerox.technology\n\nNota: Questo è un progetto personale senza scopo commerciale. Per qualsiasi domanda riguardo questa informativa sulla privacy o i tuoi dati personali, contattaci all'indirizzo email sopra indicato.\n\nAi sensi del Regolamento UE 2016/679 (GDPR), hai diritto di contattare il Garante per la Protezione dei Dati Personali."
        },
        dataCollection: {
          title: "Dati che Raccogliamo",
          content: "Raccogliamo i seguenti tipi di informazioni:\n• Indirizzi email quando ti iscrivi alla nostra newsletter\n• Dati tecnici come indirizzo IP, tipo di browser e informazioni del dispositivo\n• Dati di utilizzo su come interagisci con il nostro sito web"
        },
        dataUse: {
          title: "Come Utilizziamo i Tuoi Dati",
          content: "Utilizziamo i tuoi dati personali per:\n• Inviarti aggiornamenti sulle nostre innovazioni tecnologiche\n• Migliorare il nostro sito web e i servizi\n• Analizzare i modelli di utilizzo del sito web\n• Rispettare gli obblighi legali"
        },
        dataSharing: {
          title: "Condivisione dei Dati",
          content: "Non vendiamo, scambiamo o trasferiamo in altro modo i tuoi dati personali a terze parti senza il tuo consenso, eccetto:\n• A fornitori di servizi fidati che ci assistono nel gestire il nostro sito web\n• Quando richiesto dalla legge o per proteggere i nostri diritti"
        },
        cookies: {
          title: "Cookies",
          content: "Il nostro sito web utilizza cookies per migliorare la tua esperienza di navigazione. Puoi controllare le preferenze dei cookies attraverso il nostro banner e le impostazioni dei cookies."
        },
        legalBasis: {
          title: "Base Giuridica del Trattamento",
          content: "Trattiamo i tuoi dati personali sulla base dei seguenti fondamenti giuridici:\n• Consenso: Quando ti iscrivi alla nostra newsletter o accetti i cookie\n• Interessi legittimi: Per analisi del sito web e sicurezza\n• Obblighi legali: Quando richiesto dalle leggi applicabili"
        },
        dataRetention: {
          title: "Conservazione dei Dati",
          content: "Conserviamo i tuoi dati personali solo per il tempo necessario a soddisfare gli scopi descritti in questa informativa:\n• Iscritti alla newsletter: Fino alla disiscrizione\n• Dati tecnici: Massimo 24 mesi\n• Richieste tramite modulo di contatto: Massimo 36 mesi"
        },
        rights: {
          title: "I Tuoi Diritti",
          content: "Ai sensi del GDPR, hai il diritto di:\n• Accedere ai tuoi dati personali\n• Correggere dati inesatti\n• Cancellare i tuoi dati (diritto all'oblio)\n• Opporti al trattamento\n• Portabilità dei dati\n• Revocare il consenso in qualsiasi momento\n• Presentare un reclamo al Garante per la Protezione dei Dati Personali"
        },
        contact: {
          title: "Contattaci",
          content: "Se hai domande su questa informativa sulla privacy o desideri esercitare i tuoi diritti, contattaci all'indirizzo email fornito nella sezione Titolare del Trattamento sopra."
        }
      }
    },
    es: {
      title: "Política de Privacidad",
      backText: "Volver al Inicio",
      lastUpdated: "Última actualización: 19 de diciembre de 2024",
      sections: {
        intro: {
          title: "Introducción",
          content: "En Zerox Technology, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos tu información cuando visitas nuestro sitio web."
        },
        controller: {
          title: "Responsable del Tratamiento",
          content: "Responsable del Tratamiento: [Tu Nombre/Apodo]\nProyecto: Zerox Technology (Portfolio Personal)\nLocalización: Italia\nEmail: [Tu email personal]\nSitio Web: https://zerox.technology\n\nNota: Este es un proyecto personal sin fines comerciales. Para cualquier pregunta sobre esta política de privacidad o tus datos personales, contáctanos en la dirección de correo electrónico anterior."
        },
        dataCollection: {
          title: "Datos que Recopilamos",
          content: "Recopilamos los siguientes tipos de información:\n• Direcciones de correo electrónico cuando te suscribes a nuestro boletín\n• Datos técnicos como dirección IP, tipo de navegador e información del dispositivo\n• Datos de uso sobre cómo interactúas con nuestro sitio web"
        },
        dataUse: {
          title: "Cómo Utilizamos tus Datos",
          content: "Utilizamos tus datos personales para:\n• Enviarte actualizaciones sobre nuestras innovaciones tecnológicas\n• Mejorar nuestro sitio web y servicios\n• Analizar patrones de uso del sitio web\n• Cumplir con obligaciones legales"
        },
        dataSharing: {
          title: "Compartir Datos",
          content: "No vendemos, intercambiamos o transferimos de otra manera tus datos personales a terceros sin tu consentimiento, excepto:\n• A proveedores de servicios de confianza que nos ayudan a operar nuestro sitio web\n• Cuando lo requiera la ley o para proteger nuestros derechos"
        },
        cookies: {
          title: "Cookies",
          content: "Nuestro sitio web utiliza cookies para mejorar tu experiencia de navegación. Puedes controlar las preferencias de cookies a través de nuestro banner y configuración de cookies."
        },
        rights: {
          title: "Tus Derechos",
          content: "Bajo el GDPR, tienes derecho a:\n• Acceder a tus datos personales\n• Corregir datos inexactos\n• Eliminar tus datos\n• Oponerte al procesamiento\n• Portabilidad de datos"
        },
        contact: {
          title: "Contáctanos",
          content: "Si tienes preguntas sobre esta política de privacidad, contáctanos a través del formulario de contacto de nuestro sitio web."
        }
      }
    },
    zh: {
      title: "隐私政策",
      backText: "返回首页",
      lastUpdated: "最后更新：2024年12月19日",
      sections: {
        intro: {
          title: "介绍",
          content: "在Zerox Technology，我们尊重您的隐私并致力于保护您的个人数据。本隐私政策解释了您访问我们网站时我们如何收集、使用和保护您的信息。"
        },
        controller: {
          title: "数据控制者",
          content: "数据控制者：[您的姓名/昵称]\n项目：Zerox Technology（个人作品集）\n位置：意大利\n电子邮件：[您的个人电子邮件]\n网站：https://zerox.technology\n\n注意：这是一个非商业性的个人项目。如对本隐私政策或您的个人数据有任何疑问，请通过上述电子邮件地址与我们联系。"
        },
        dataCollection: {
          title: "我们收集的数据",
          content: "我们收集以下类型的信息：\n• 当您订阅我们的通讯时的电子邮件地址\n• 技术数据，如IP地址、浏览器类型和设备信息\n• 关于您如何与我们网站互动的使用数据"
        },
        dataUse: {
          title: "我们如何使用您的数据",
          content: "我们使用您的个人数据来：\n• 向您发送关于我们技术创新的更新\n• 改进我们的网站和服务\n• 分析网站使用模式\n• 遵守法律义务"
        },
        dataSharing: {
          title: "数据共享",
          content: "未经您的同意，我们不会向第三方出售、交易或以其他方式转移您的个人数据，除非：\n• 向协助我们运营网站的可信服务提供商\n• 法律要求或为保护我们的权利时"
        },
        cookies: {
          title: "Cookies",
          content: "我们的网站使用cookies来增强您的浏览体验。您可以通过我们的cookie横幅和设置控制cookie偏好。"
        },
        rights: {
          title: "您的权利",
          content: "根据GDPR，您有权：\n• 访问您的个人数据\n• 更正不准确的数据\n• 删除您的数据\n• 反对处理\n• 数据可移植性"
        },
        contact: {
          title: "联系我们",
          content: "如果您对此隐私政策有任何疑问，请通过我们网站的联系表单与我们联系。"
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
