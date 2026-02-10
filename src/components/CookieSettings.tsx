
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: Record<string, boolean>) => void;
  currentLang: {
    cookieSettings: {
      title: string;
      description: string;
      necessary: {
        name: string;
        description: string;
      };
      analytics: {
        name: string;
        description: string;
      };
      marketing: {
        name: string;
        description: string;
      };
      saveSettings: string;
      acceptAll: string;
      alwaysActive: string;
    };
  };
}

const CookieSettings: React.FC<CookieSettingsProps> = ({
  isOpen,
  onClose,
  onSave,
  currentLang
}) => {
  const [categories, setCategories] = useState<CookieCategory[]>([
    {
      id: 'necessary',
      name: currentLang.cookieSettings.necessary.name,
      description: currentLang.cookieSettings.necessary.description,
      required: true,
      enabled: true
    },
    {
      id: 'analytics',
      name: currentLang.cookieSettings.analytics.name,
      description: currentLang.cookieSettings.analytics.description,
      required: false,
      enabled: false
    },
    {
      id: 'marketing',
      name: currentLang.cookieSettings.marketing.name,
      description: currentLang.cookieSettings.marketing.description,
      required: false,
      enabled: false
    }
  ]);

  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookie-preferences');
    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      setCategories(prev => prev.map(cat => ({
        ...cat,
        enabled: cat.required || preferences[cat.id] || false
      })));
    }
  }, []);

  const handleToggle = (categoryId: string) => {
    setCategories(prev => prev.map(cat =>
      cat.id === categoryId && !cat.required
        ? { ...cat, enabled: !cat.enabled }
        : cat
    ));
  };

  const handleSave = () => {
    const preferences = categories.reduce((acc, cat) => {
      acc[cat.id] = cat.enabled;
      return acc;
    }, {} as Record<string, boolean>);
    
    onSave(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    const allEnabled = categories.reduce((acc, cat) => {
      acc[cat.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    
    onSave(allEnabled);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border-green-500/30 text-green-400 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-green-400 font-mono text-xl">
            {currentLang.cookieSettings.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            {currentLang.cookieSettings.description}
          </p>
          
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.id} className="border border-green-500/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-green-400 font-mono font-semibold">
                    {category.name}
                  </h3>
                  <Switch
                    checked={category.enabled}
                    onCheckedChange={() => handleToggle(category.id)}
                    disabled={category.required}
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
                <p className="text-gray-400 font-mono text-sm">
                  {category.description}
                </p>
                {category.required && (
                  <p className="text-yellow-500 font-mono text-xs mt-1">
                    {currentLang.cookieSettings.alwaysActive}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSave}
              className="font-mono flex-1 px-4 py-2 rounded-md transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#00ff99', color: '#000000' }}
            >
              {currentLang.cookieSettings.saveSettings}
            </button>
            <button
              onClick={handleAcceptAll}
              className="font-mono flex-1 px-4 py-2 rounded-md transition-opacity hover:opacity-80"
              style={{ border: '1px solid #00ff99', color: '#00ff99', backgroundColor: 'transparent' }}
            >
              {currentLang.cookieSettings.acceptAll}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings;
