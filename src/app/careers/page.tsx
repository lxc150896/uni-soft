'use client'

import { useTranslation } from "react-i18next";
import '@/app/i18n';
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  const { t } = useTranslation();

  const values = [
    { title: '[ Unisoft Product] Developer Android All Level', local: 'Ha Noi', salary: 'Up to 1500$', date: '10/10/2024', link: 'https://docs.google.com/document/d/1ckyABjmBygErxtockROKL4oSlE8jsg4Rg9hYwDOf5X8/edit' },
    { title: '[ Unisoft Product] Developer Swift Junior', local: 'Ha Noi', salary: 'Up to 1500$', date: '10/10/2024', link: 'https://docs.google.com/document/d/1bjUCd15T5nukIyvcHhxkiUW7rFDzPe7fIukvO1bEXlw/edit' },
    { title: '[ Unisoft Product] Performance Marketing Specialist - User Acquisition', local: 'Ha Noi', salary: 'Up to 1000$', date: '10/10/2024', link: 'https://docs.google.com/document/d/1vGZB22uaI2hErUfx8JTS6iSvIsLZaCAQ2Fua-dnyshk/edit?pli=1' },
  ];

  const salarys = [
    { title: t('careers.competitive_salary'), icon: <img src="/images/salary_icon_1.png" /> },
    { title: t('careers.profit_sharing'), icon: <img src="/images/salary_icon_2.png" /> },
    { title: t('careers.promotion_path'), icon: <img src="/images/salary_icon_3.png" /> },
    { title: t('careers.performance_management'), icon: <img src="/images/salary_icon_4.png" /> },
    { title: t('careers.society_passion'), icon: <img src="/images/salary_icon_5.png" /> },
    { title: t('careers.welfare'), icon: <img src="/images/salary_icon_6.png" /> },
    { title: t('careers.culture_of_thinking'), icon: <img src="/images/salary_icon_7.png" /> },
    { title: t('careers.working_equipment'), icon: <img src="/images/salary_icon_8.png" /> },
  ]
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <Header />
      {/* banner */}
      <Banner urlImage="/images/careers_bg.png" title={t('menu.careers')} descript={t('careers.home_careers')} />

      <div className="container mx-auto md:my-14 my-0 xl:pt-16 pt-4">
        {/* Top Position */}
        <div className="md:mb-12 mb-6">
          <h2 className="text-center lg:text-[56px] md:text-3xl text-xl font-bold md:mb-20 mb-10">{t('careers.top_position')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 text-white rounded-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="md:text-2xl text-lg font-semibold md:mb-4 mb-2">{value.title}</h3>
                  <div className="flex items-center md:text-base md:mb-4 text-sm md-3">
                    <img src="/images/footer_icon_map.png" alt="Logo" className="lg:w-10 w-6" />: {value.local}
                  </div>
                  <p className="md:text-base md:mb-4 text-sm md-3">{t('careers.salary')} {value.salary}</p>
                  <p className="md:text-base md:mb-4 text-sm md-3">{t('careers.expiration_date')} {value.date}</p>
                </div>
                <a
                  className="md:text-base text-sm text-blue-500 mt-auto"
                  href={value.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('careers.view_jd')}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Be a part of Unisoft */}
        <div className="md:mt-32 mt-16 text-center">
          <h2 className="lg:text-[56px] md:text-3xl text-xl font-bold lg:mb-8 mb-4">{t('careers.be_a_part')}</h2>
          <p className="md:text-2xl text-base md:mb-24 mb-16">
            {t('careers.get_your_chance')}
          </p>
          
          {/* Bọc hình ảnh trong một div có overflow-x: scroll và ẩn thanh cuộn */}
          <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
            <img src="/images/about_slide_1.png" alt="Image 1" className="md:min-w-[600px] min-w-[200px]" />
            <img src="/images/about_slide_2.png" alt="Image 2" className="md:min-w-[600px] min-w-[200px]" />
            <img src="/images/about_slide_3.png" alt="Image 3" className="md:min-w-[600px] min-w-[200px]" />
          </div>
        </div>

        {/* Join with Us */}
        <div className="text-center md:mt-24 mt-12 md:my-14 my-6 md:mb-40 mb-16">
          <h2 className="lg:text-[56px] md:text-3xl text-xl font-bold md:mb-28 mb-12">{t('careers.join_with_us')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-y-28 gap-y-14">
            {/* Example Icon */}
            {salarys.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="md:mb-8 mb-4">{item.icon}</div>
                <h3 className="md:text-2xl text-base font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
