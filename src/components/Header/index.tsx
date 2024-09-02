import i18n from "i18next";
import { useTranslation } from "react-i18next";
import '@/app/i18n';

export const Header = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="relative">
      <img src="/images/header_bg.png" alt="Background" className="md:w-full md:h-full object-cover" />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between ">
        <div>
          <div className="xl:ml-20 lg:ml-14 ml-4 xl:mr-28 lg:mr-20 mr-4 mx-auto flex justify-between items-center lg:py-8 py-2 h-auto">
            <div className="flex items-center space-x-4">
              <img src="/images/logo.png" alt="Logo" className="xl:w-24 xl:h-16 md:w-14 md:h-10 w-10 h-6" />
            </div>
            <nav className="flex xl:space-x-20 lg:space-x-10 space-x-2 lg:text-xl xl:text-2xl text-xs">
              <button className="hover:underline">Home</button>
              <button className="hover:underline">About Us</button>
              <button className="hover:underline">Careers</button>
              <button className="hover:underline">Contact</button>
              <div>
                <button className="hover:underline lg:mr-2 mr-1" onClick={() => changeLanguage('en')}>En</button>|
                <button className="hover:underline lg:ml-2 ml-1" onClick={() => changeLanguage('vi')}>Vi</button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
};
