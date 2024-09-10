'use client'

import { useTranslation } from "react-i18next";
import '@/app/i18n';
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Banner from "@/components/Banner";
import { getCookie } from 'cookies-next';
import { useState } from "react";

export default function Home() {
  const { t } = useTranslation();
  const [selectedFeature, setSelectedFeature] = useState<any | null>(null);
  const [hoverSrc, setHoverSrc] = useState('/images/core/core_hover_default.png');

  const cores = [
    { id: 1, icon: <img src="/images/core_1.png" />, src: '/images/core/core_hover_1.png', text: t('about.ambition') },
    { id: 2, icon: <img src="/images/core_2.png"/>, src: '/images/core/core_hover_2.png', text: t('about.think_big') },
    { id: 3, icon: <img src="/images/core_3.png" />, src: '/images/core/core_hover_3.png', text: t('about.creation') },
    { id: 4, icon: <img src="/images/core_4.png" />, src: '/images/core/core_hover_4.png', text: t('about.autonomy') },
    { id: 5, icon: <img src="/images/core_5.png" />, src: '/images/core/core_hover_5.png', text: t('about.respect') },
  ];

  const handleHover = (feature: any) => {
    setSelectedFeature(feature);
    setHoverSrc(feature.src);
  };

  const handleLeaveHover = () => {
    setSelectedFeature(null);
    setHoverSrc('/images/core/core_hover_default.png');
  }
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <Header />
      {/* banner */}
      <Banner urlImage="/images/about_us_bg.png" title={t('menu.about')} descript={t('about.home_about')} />

      <div className="bg-black text-white flex flex-col items-center lg:py-28 md:py-16 py-10 px-[5%]">
        {/* Section: We are Unisoft */}
        <div className="text-center lg:mb-30 md:mb-20 mb-10 px-4">
          <p className="md:text-lg sm:text-sm text-xs leading-relaxed">
            {t('about.unisoft_was')}
          </p>
        </div>

        <div className="container text-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-xl font-bold lg:mb-16 md:mb-12 mb-8">{t('about.core_value')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:gap-x-16 lg:gap-x-6 md:gap-3 sm:gap-6 gap-4 lg:mb-16 mb-8">
            {cores.map((core) => (
              <div
                key={core.id}
                className={`flex flex-col items-center lg:py-8 md:py-8 sm:py-8 py-6 sm:px-10 px-6 rounded-lg border-blue-500 border-solid border text-white ${
                  selectedFeature && selectedFeature.id === core.id ? 'bg-blue-500' : 'bg-gray-800'
                }`}
                onMouseEnter={() => handleHover(core)}
                onMouseLeave={() => handleLeaveHover()}
              >
                <div>{core.icon}</div>
                <p className="lg:mt-10 md:mt-4 mt-8 text-center 2xl:text-2xl xl:text-xl lg:text-base">{core.text}</p>
              </div>
            ))}
          </div>

          {/* Section: Quote */}
          <div className="">
            <img src={hoverSrc} alt="we" />
          </div>
        </div>

        {/* Vision Section */}
        <div className="container">
          <div className="flex relative w-full xl:pt-28 md:mt-20 mt-16 items-center">
            <img
              src="/images/our_vision.png"
              alt="Team Photo"
              className="object-cover w-1/2 h-full"
            />
            <div className="absolute right-0 bg-gray1 text-white lg:py-10 md:py-6 sm:py-4 py-2 px-4 w-[55%] h-[60%] my-auto text-center">
              <h2 className="xl:text-5xl lg:text-4xl md:text-xl sm:text-lg text-sm font-bold text-white lg:mb-10 sm:mb-4 mb-1">
                {getCookie('language') === 'vn' ? '' : t('about.our') } <span>{t('about.vision')}</span>
              </h2>
              <p className="xl:text-xl lg:text-base md:text-sm sm:text-xs text-[8px] xl:leading-loose">
                {t('about.we_aim_to')}
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex w-full h-full lg:pt-16 md:pt-10 mt-8 items-center">
            <div className="bg-gray1 text-white lg:py-10 md:py-6 sm:py-4 py-2 md:px-6 px-4 h-[60%] text-center z-10 mr-[-5%]">
              <h2 className="xl:text-5xl lg:text-4xl md:text-xl sm:text-lg text-sm font-bold text-white lg:mb-10 sm:mb-4 mb-1">
                {getCookie('language') === 'vn' ? '' : t('about.our')} <span>{t('about.mision')}</span>
              </h2>
              <p className="xl:text-xl lg:text-base md:text-sm sm:text-xs text-[8px] md:mb-20 mb-10 xl:leading-loose">
                {t('about.delight_billions')}
              </p>
            </div>
            <img
              src="/images/our_mision.png"
              alt="Tech Background"
              className="object-cover w-1/2 h-full right-0"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
