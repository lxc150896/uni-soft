'use client'

import { useTranslation } from "react-i18next";
import '@/app/i18n';
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <Header />
      {/* banner */}
      <Banner urlImage="/images/contact_bg.png" title={t('menu.contact')} descript={t('contact.home_contact')} />

      <div className="container mx-auto md:my-14 my-0 xl:pt-16 pt-4">
        {/* Contact */}
        <h2 className="text-center xl:text-[56px] lg:text-4xl md:text-3xl text-xl font-bold lg:mb-20 md:mb-14 mb-8">{t('contact.contact_with')} <span className="text-blue-500">{t('contact.unisoft')}</span></h2>
        <div className="bg-black flex justify-center items-center p-4 bg-gray-900 rounded-lg">
          <div className="w-full max-w-7xl bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="w-full md:w-2/5 bg-blue-600 text-white xl:px-8 xl:py-20 lg:px-6 lg:py-14 px-4 py-8 rounded-lg">
              <h2 className="lg:text-[28px] text-lg font-semibold md:mb-2 mb-1">{t('contact.contact_information')}</h2>
              <p className="xl:mb-24 lg:mb-16 mb-10 lg:text-lg text-base text-gray-400">{t('contact.say_something')}</p>
              <div className="space-y-4">
                <div className="flex items-center mb-5">
                  <img src="/images/footer_icon_email.png" alt="Logo" className="lg:w-11 md:w-8 w-5 lg:mr-5 mr-2" />
                  <div className="">
                    <p className="lg:text-lg md:text-sm text-xs">{t('contact.email')}</p> <p className="lg:text-lg md:text-sm text-xs">Unisoftapplication.com.vn</p>
                  </div>
                </div>
                <div className="flex items-center mb-5">
                  <img src="/images/footer_icon_phone.png" alt="Logo" className="lg:w-11 md:w-8 w-5 lg:mr-5 mr-2"/>
                  <div className="">
                    <p className="lg:text-lg md:text-sm text-xs">{t('contact.mobile')}</p><p className="lg:text-lg md:text-sm text-xs"> (+84) 356790472</p>
                  </div>
                </div>
                <div className="flex items-center mb-5">
                  <img src="/images/footer_icon_map.png" alt="Logo" className="lg:w-11 md:w-8 w-5 lg:mr-5 mr-2" />
                  <div className="">
                    <p className="lg:text-lg md:text-sm text-xs">{t('contact.address')}</p> <p className="lg:text-lg md:text-sm text-xs">No9 /75 Tran Thai Tong, Cau Giay, Ha Noi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-3/5 bg-gray-900 md:p-8 md-0 xl:pl-16 lg:pl-12 md:pl-8 pl-0 md:pt-0 pt-4">
              <form className="space-y-4">
                <input type="text" placeholder="Enter your Name" className="w-full lg:p-6 md:p-4 p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Enter your email" className="w-full lg:p-6 md:p-4 p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="tel" placeholder="Enter your phone number" className="w-full lg:p-6 md:p-4 p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea placeholder="Enter your message" className="w-full lg:h-36 md:h-28 h-20 lg:p-6 md:p-4 p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <div className="w-full text-center">
                  <button type="submit" className="w-9/12 lg:p-6 md:p-4 p-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">{t('contact.send')}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="container mx-auto xl:mb-32 lg:mb-24 md:mb-16 mb-8">
        <img src="/images/map_address.png" alt="map" />
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  )
}
