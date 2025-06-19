
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
      lastUpdated: "Last updated: December 19, 2024",
      sections: {
        intro: {
          title: "Introduction",
          content: "These Terms of Service govern your use of the Zerox Technology website. By accessing or using our website, you agree to be bound by these terms."
        },
        use: {
          title: "Use of Website",
          content: "You may use our website for lawful purposes only. You agree not to:\n• Use the website in any way that violates applicable laws\n• Attempt to gain unauthorized access to our systems\n• Interfere with the proper functioning of the website\n• Upload or transmit harmful content"
        },
        content: {
          title: "Content and Intellectual Property",
          content: "All content on this website, including text, graphics, logos, and software, is the property of Zerox Technology and is protected by copyright and other intellectual property laws."
        },
        liability: {
          title: "Limitation of Liability",
          content: "Zerox Technology shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the website."
        },
        privacy: {
          title: "Privacy",
          content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information."
        },
        changes: {
          title: "Changes to Terms",
          content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page."
        },
        contact: {
          title: "Contact Information",
          content: "If you have any questions about these Terms of Service, please contact us through our website."
        }
      }
    },
    it: {
      title: "Termini di Servizio",
      backText: "Torna alla Home",
      lastUpdated: "Ultimo aggiornamento: 19 dicembre 2024",
      sections: {
        intro: {
          title: "Introduzione",
          content: "Questi Termini di Servizio disciplinano l'uso del sito web Zerox Technology. Accedendo o utilizzando il nostro sito web, accetti di essere vincolato da questi termini."
        },
        use: {
          title: "Uso del Sito Web",
          content: "Puoi utilizzare il nostro sito web solo per scopi legali. Accetti di non:\n• Utilizzare il sito web in modo che violi le leggi applicabili\n• Tentare di ottenere accesso non autorizzato ai nostri sistemi\n• Interferire con il corretto funzionamento del sito web\n• Caricare o trasmettere contenuti dannosi"
        },
        content: {
          title: "Contenuto e Proprietà Intellettuale",
          content: "Tutto il contenuto di questo sito web, inclusi testo, grafica, loghi e software, è proprietà di Zerox Technology ed è protetto da copyright e altre leggi sulla proprietà intellettuale."
        },
        liability: {
          title: "Limitazione di Responsabilità",
          content: "Zerox Technology non sarà responsabile per eventuali danni indiretti, incidentali, speciali o consequenziali derivanti dal tuo utilizzo del sito web."
        },
        privacy: {
          title: "Privacy",
          content: "La tua privacy è importante per noi. Consulta la nostra Informativa sulla Privacy per capire come raccogliamo e utilizziamo le tue informazioni."
        },
        changes: {
          title: "Modifiche ai Termini",
          content: "Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche saranno efficaci immediatamente dopo la pubblicazione su questa pagina."
        },
        contact: {
          title: "Informazioni di Contatto",
          content: "Se hai domande su questi Termini di Servizio, contattaci attraverso il nostro sito web."
        }
      }
    },
    es: {
      title: "Términos de Servicio",
      backText: "Volver al Inicio",
      lastUpdated: "Última actualización: 19 de diciembre de 2024",
      sections: {
        intro: {
          title: "Introducción",
          content: "Estos Términos de Servicio rigen el uso del sitio web de Zerox Technology. Al acceder o usar nuestro sitio web, aceptas estar sujeto a estos términos."
        },
        use: {
          title: "Uso del Sitio Web",
          content: "Puedes usar nuestro sitio web solo para propósitos legales. Aceptas no:\n• Usar el sitio web de manera que viole las leyes aplicables\n• Intentar obtener acceso no autorizado a nuestros sistemas\n• Interferir con el funcionamiento adecuado del sitio web\n• Subir o transmitir contenido dañino"
        },
        content: {
          title: "Contenido y Propiedad Intelectual",
          content: "Todo el contenido de este sitio web, incluyendo texto, gráficos, logotipos y software, es propiedad de Zerox Technology y está protegido por derechos de autor y otras leyes de propiedad intelectual."
        },
        liability: {
          title: "Limitación de Responsabilidad",
          content: "Zerox Technology no será responsable de ningún daño indirecto, incidental, especial o consecuente que surja de tu uso del sitio web."
        },
        privacy: {
          title: "Privacidad",
          content: "Tu privacidad es importante para nosotros. Revisa nuestra Política de Privacidad para entender cómo recopilamos y usamos tu información."
        },
        changes: {
          title: "Cambios en los Términos",
          content: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en esta página."
        },
        contact: {
          title: "Información de Contacto",
          content: "Si tienes preguntas sobre estos Términos de Servicio, contáctanos a través de nuestro sitio web."
        }
      }
    },
    zh: {
      title: "服务条款",
      backText: "返回首页",
      lastUpdated: "最后更新：2024年12月19日",
      sections: {
        intro: {
          title: "介绍",
          content: "这些服务条款管理您对Zerox Technology网站的使用。通过访问或使用我们的网站，您同意受这些条款的约束。"
        },
        use: {
          title: "网站使用",
          content: "您只能将我们的网站用于合法目的。您同意不：\n• 以违反适用法律的方式使用网站\n• 试图未经授权访问我们的系统\n• 干扰网站的正常运行\n• 上传或传输有害内容"
        },
        content: {
          title: "内容和知识产权",
          content: "本网站的所有内容，包括文本、图形、标志和软件，均为Zerox Technology的财产，受版权和其他知识产权法保护。"
        },
        liability: {
          title: "责任限制",
          content: "Zerox Technology不对因您使用网站而产生的任何间接、偶然、特殊或后果性损害承担责任。"
        },
        privacy: {
          title: "隐私",
          content: "您的隐私对我们很重要。请查看我们的隐私政策以了解我们如何收集和使用您的信息。"
        },
        changes: {
          title: "条款变更",
          content: "我们保留随时修改这些条款的权利。更改将在本页面发布后立即生效。"
        },
        contact: {
          title: "联系信息",
          content: "如果您对这些服务条款有任何疑问，请通过我们的网站联系我们。"
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
