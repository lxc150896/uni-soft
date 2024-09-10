'use client'

import { useTranslation } from "react-i18next";
import '@/app/i18n';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
    <div className="text-white relative lg:p-4 p-0 my-auto flex items-center justify-center lg:h-[140px] xl:h-[164px] 2xl:h-[200px] md:h-[98px] h-14">
      {/* Hình nền */}
      {/* <img
        src="/images/footer_bg.png"
        alt="Best of Products Background"
        className="absolute inset-0 object-cover z-0 w-full lg:h-[140px] xl:h-[164px] 2xl:h-[200px] md:h-[98px] h-14"
      /> */}

      {/* Nội dung chính */}
      <div className="grid grid-cols-5 xl:gap-4 lg:gap-2 2xl:gap-12 gap-0 mx-auto relative z-10 h-full 2xl:h-[250px]">
        <div className="flex justify-center items-center">
          <img src="/images/logo.png" alt="Logo" className="xl:w-28 lg:w-20 lg:mr-10 xl:mr-6 mr-3 md:w-14 w-8" />
        </div>
        
        <div className="flex justify-center items-center sm:ml-0 ml-[-10px]">
          <img src="/images/footer_icon_email.png" alt="Logo" className="lg:w-11 md:w-8 w-5" />
          <div className="xl:p-3 lg:p-1">
            <p className="md:mb-1 mb-0 lg:text-xs xl:text-base 2xl:text-lg md:text-[10px] text-[8px]">{t('footer.email')}</p> <p className="lg:text-[10px] xl:text-xs 2xl:text-sm md:text-[8px] text-[6px]">hatv.hr@unisoftstudio.com</p>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <img src="/images/footer_icon_phone.png" alt="Logo" className="lg:w-11 md:w-8 w-5"/>
          <div className="xl:p-3 lg:p-1">
            <p className="md:mb-1 mb-0 lg:text-xs xl:text-base 2xl:text-lg md:text-[10px] text-[8px]">{t('footer.mobile')}</p><p className="lg:text-[10px] xl:text-xs 2xl:text-sm md:text-[8px] text-[6px]"> (+84) 967468114</p>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <img src="/images/footer_icon_map.png" alt="Logo" className="lg:w-11 md:w-8 w-5" />
          <div className="xl:p-3 lg:p-1">
            <p className="md:mb-1 mb-0 lg:text-xs xl:text-base 2xl:text-lg md:text-[10px] text-[8px]">{t('footer.address')}</p> <p className="lg:text-[10px] xl:text-xs 2xl:text-sm md:text-[8px] text-[6px]">Up Office, No9 /75 Tran Thai Tong, Cau Giay, Ha Noi</p>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 md:mx-2 2xl:mx-3"
          >
            <img src="/images/facebook-icon.png" alt="Facebook" className="lg:w-6 md:w-4 w-3" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 md:mx-2 2xl:mx-3"
          >
            <img src="/images/linkedin-icon.png" alt="LinkedIn" className="lg:w-6 md:w-4 w-3" />
          </a>
        </div>
      </div>
    </div>
    </div>
  )
};
