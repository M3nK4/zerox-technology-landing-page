
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: any;
  languageOrder: readonly string[];
  currentLangIndex: number;
}

const EmailModal: React.FC<EmailModalProps> = ({ 
  isOpen, 
  onClose, 
  currentLang, 
  languageOrder, 
  currentLangIndex 
}) => {
  const [email, setEmail] = useState('');
  const [emailConsent, setEmailConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!email.trim()) {
      toast({
        title: currentLang.error || "Error",
        description: currentLang.emailError || "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    if (!emailConsent) {
      toast({
        title: currentLang.error || "Error", 
        description: currentLang.consentError || "Please accept the privacy policy to continue",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ 
          email: email.trim()
        }]);

      if (error) {
        throw error;
      }

      toast({
        title: currentLang.success || "Success!",
        description: currentLang.thankYou || "Thank you for subscribing!",
      });
      
      setEmail('');
      setEmailConsent(false);
      onClose();
    } catch (error: any) {
      console.error('Error saving contact:', error);
      toast({
        title: currentLang.error || "Error",
        description: currentLang.genericError || "An error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="email-modal" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="email-modal-content">
        <input
          type="email"
          placeholder={currentLang.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="modal-input"
          required
        />
        
        <div className="text-left my-4">
          <label className="flex items-start gap-2 text-xs text-gray-400 cursor-pointer">
            <input
              type="checkbox"
              checked={emailConsent}
              onChange={(e) => setEmailConsent(e.target.checked)}
              className="mt-1"
              style={{ accentColor: 'rgb(0, 255, 153)' }}
            />
            <span className="leading-relaxed">
              {currentLang.emailConsent}{" "}
              <Link 
                to={`/privacy?lang=${languageOrder[currentLangIndex]}`}
                className="underline"
                style={{ color: 'rgb(0, 255, 153)' }}
                target="_blank"
              >
                {currentLang.privacyPolicy}
              </Link>
              {" "}{currentLang.and}{" "}
              <Link 
                to={`/cookies?lang=${languageOrder[currentLangIndex]}`}
                className="underline"
                style={{ color: 'rgb(0, 255, 153)' }}
                target="_blank"
              >
                {currentLang.cookiePolicy}
              </Link>
            </span>
          </label>
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || !emailConsent}
          className="modal-button"
        >
          {isSubmitting ? (currentLang.sending || 'Sending...') : currentLang.submit}
        </button>
      </div>
    </div>
  );
};

export default EmailModal;
