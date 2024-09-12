'use client'

import i18n from "i18next";
import { useTranslation } from "react-i18next";
import '@/app/i18n';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setCookie } from "cookies-next";

export const Menu = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [keyMenu, setKeyMenu] = useState('');

  useEffect(() => {
    const parts = pathname.split('/').filter(part => part);
    setKeyMenu(parts[0] || 'home')
  }, [pathname]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCookie('language', lng);
  };

  const changerMenu = (key: string) => {
    switch (key) {
      case 'home':
        router.push('/');
        break;
      case 'about':
        router.push('/about');
        break;
      case 'careers':
        router.push('/careers');
        break;
      case 'contact':
        router.push('/contact');
        break;
    }
  }

  return (
    <nav className="flex xl:space-x-14 lg:space-x-10 md:space-x-6 space-x-2 xl:text-xl lg:text-lg md:text-sm text-[10px]">
      <button onClick={() => changerMenu('home')} className={`menu-item ${keyMenu === 'home' ? 'active' : ''}`}>{t('menu.home')}</button>
      <button onClick={() => changerMenu('about')} className={`menu-item ${keyMenu === 'about' ? 'active' : ''}`}>{t('menu.about')}</button>
      <button onClick={() => changerMenu('careers')} className={`menu-item ${keyMenu === 'careers' ? 'active' : ''}`}>{t('menu.careers')}</button>
      <button onClick={() => changerMenu('contact')} className={`menu-item ${keyMenu === 'contact' ? 'active' : ''}`}>{t('menu.contact')}</button>
      <div>
        <button className="hover:underline lg:mr-2 mr-1" onClick={() => changeLanguage('en')}>En</button>|
        <button className="hover:underline lg:ml-2 ml-1" onClick={() => changeLanguage('vi')}>Vi</button>
      </div>
    </nav>
  )
};
