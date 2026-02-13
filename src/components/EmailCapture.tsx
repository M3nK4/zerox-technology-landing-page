import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzd5j9eW918t9l_ptH8RtZWpBmIjwja2Jm69_nMAs85ad_njYDFZprBVw0YVjgQQuN1/exec';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FONT = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

interface EmailCaptureProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: {
    emailCapture: {
      title: string;
      description: string;
      placeholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      duplicate: string;
      invalid: string;
      empty: string;
      privacy: string;
    };
  };
}

type FeedbackType = 'error' | 'duplicate' | 'invalid' | 'empty' | null;

const EmailCapture: React.FC<EmailCaptureProps> = ({ isOpen, onClose, currentLang }) => {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackType>(null);
  const [sent, setSent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setFeedback(null);
      setSending(false);
      setSent(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!sent) return;
    const timer = setTimeout(() => onClose(), 2200);
    return () => clearTimeout(timer);
  }, [sent, onClose]);

  const handleSubmit = async () => {
    if (sending) return;

    const trimmed = email.trim();

    if (!trimmed) {
      setFeedback('empty');
      return;
    }

    if (!EMAIL_REGEX.test(trimmed)) {
      setFeedback('invalid');
      return;
    }

    setSending(true);
    setFeedback(null);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });
      setSent(true);
    } catch {
      setFeedback('error');
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const t = currentLang.emailCapture;

  // Success view — clean confirmation, auto-closes
  if (sent) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-black border-green-500/30 text-green-400 max-w-[calc(100vw-2rem)] sm:max-w-md" style={{ fontFamily: FONT }}>
          <div className="flex flex-col items-center py-4 sm:py-6 gap-3 sm:gap-4">
            <span className="text-2xl sm:text-3xl" style={{ color: '#00ff99' }}>&#10003;</span>
            <p className="text-sm sm:text-base text-center px-2" style={{ color: '#00ff99', fontWeight: 300 }}>
              {t.success}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Form view
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border-green-500/30 text-green-400 max-w-[calc(100vw-2rem)] sm:max-w-md" style={{ fontFamily: FONT }}>
        <DialogHeader>
          <DialogTitle className="text-green-400 text-base sm:text-lg" style={{ fontWeight: 400, letterSpacing: '0.5px' }}>
            {t.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-5">
          <p className="text-sm sm:text-base leading-relaxed" style={{ fontWeight: 300, color: 'rgba(255,255,255,0.65)' }}>
            {t.description}
          </p>

          <div className="space-y-3">
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setFeedback(null); }}
              onKeyDown={handleKeyDown}
              placeholder={t.placeholder}
              disabled={sending}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-base rounded outline-none placeholder:text-gray-600"
              style={{
                backgroundColor: 'rgba(0, 255, 153, 0.05)',
                border: '1px solid rgba(0, 255, 153, 0.25)',
                color: '#00ff99',
                fontFamily: FONT,
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#00ff99';
                e.target.style.boxShadow = '0 0 8px 1px rgba(0, 255, 153, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(0, 255, 153, 0.25)';
                e.target.style.boxShadow = 'none';
              }}
            />

            {feedback && (
              <p
                className="text-xs sm:text-sm"
                style={{
                  color: feedback === 'duplicate' ? '#ffaa00' : '#ff4444',
                }}
              >
                {t[feedback]}
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={sending}
              className="w-full py-2.5 sm:py-3 text-sm sm:text-base rounded transition-opacity hover:opacity-80 disabled:opacity-50"
              style={{
                backgroundColor: '#00ff99',
                color: '#000',
                fontFamily: FONT,
                fontWeight: 500,
                letterSpacing: '0.5px',
                boxShadow: '0 0 6px 1px rgba(0, 255, 153, 0.3)',
              }}
            >
              {sending ? (
                <span className="inline-flex items-center gap-2">
                  <span
                    className="inline-block w-3.5 h-3.5 rounded-full animate-spin"
                    style={{
                      border: '2px solid #000',
                      borderTopColor: 'transparent',
                    }}
                  />
                  {t.sending}
                </span>
              ) : (
                t.submit
              )}
            </button>
          </div>

          <p className="text-center" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>
            {t.privacy}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailCapture;
