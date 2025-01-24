'use client'

import { useTranslation } from "react-i18next";
import '@/app/i18n';
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Banner from "@/components/Banner";
import { useRouter } from "next/navigation";

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  function getLastDayOfCurrentMonth(): string {
    // Lấy ngày hiện tại
    const today = new Date();
  
    // Tạo đối tượng Date cho ngày đầu tiên của tháng kế tiếp
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  
    // Trừ 1 ngày từ timestamp (số miligiây)
    const lastDayOfMonth = new Date(nextMonth.getTime() - 1);
  
    // Lấy ngày, tháng, năm
    const day = String(lastDayOfMonth.getDate()).padStart(2, '0'); // Đảm bảo 2 chữ số
    const month = String(lastDayOfMonth.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = lastDayOfMonth.getFullYear(); // Lấy năm đầy đủ
  
    // Trả về định dạng dd/mm/yyyy
    return `${day}/${month}/${year}`;
  }

  const currentDate = getLastDayOfCurrentMonth()

  const values = [
    { id: 1, title: '[ Unisoft Product] Android Developer Intern /Fresher', local: ' Ha Noi', salary: ' Up to 500$', date: currentDate},
    { id: 2, title: '[ Unisoft Product] Android Developer Junior / Senior', local: ' Ha Noi', salary: 'Up to 1000$', date: currentDate},
    { id: 3, title: '[ Unisoft Product] User Acquisition (Intern )', local: ' Ha Noi', salary: 'Up to 1000$', date: currentDate},
    { id: 4, title: '[ Unisoft Product] UI/ UX Designer', local: ' Ha Noi', salary: ' Up to 800$', date: currentDate},
    { id: 5, title: '[ Unisoft Product] User Acquisition (Jun/Sen )', local: ' Ha Noi', salary: 'Up to 1000$', date: currentDate},
    { id: 6, title: '[ Unisoft Product] IOS Developer', local: ' Ha Noi', salary: 'Up to 1000$', date: currentDate},
    { id: 7, title: '[ Unisoft Product] Video Editor Fresher', local: ' Ha Noi', salary: 'Up to 500$', date: '31/03/2025'},
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

  const slides = [
    { image: '/images/about_slide_1.png' },
    { image: '/images/about_slide_2.png' },
    { image: '/images/about_slide_3.png' },
    { image: '/images/about_slide_4.png' },
  ]

  const lifes = [
    { title: 'Teambuilding Quý 1 /2024', image: '/images/life/event_1.png', date: 'Jun 24,2024' },
    { title: 'Unisoft Happy Women day', image: '/images/life/event_2.png', date: 'Jun 24,2024' },
    { title: 'Unisoft x Applovin Event', image: '/images/life/event_3.png', date: 'Jun 24,2024' },
  ]
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <Header />
      {/* banner */}
      <Banner urlImage="/images/careers_bg.png" title={t('menu.careers')} descript={t('careers.home_careers')} />

      <div className="container mx-auto xl:pt-12 pt-4">
        {/* Top Position */}
        <div className="md:mb-16 mb-6">
          <h2 className="text-center lg:text-5xl md:text-3xl text-xl font-bold md:mb-20 mb-10">{t('careers.top_position')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8 gap-6">
            {values.map((value, index) => (
              <div
              key={index}
              className="pt-5 pr-2 pb-5 pl-5 bg-gray-800 text-white rounded-lg shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Title và hình ảnh "New" */}
                <div className="flex justify-between">
                  <h3 className="md:text-xl text-lg font-semibold mb-2">{value.title}</h3>
                  <img
                    src="/images/new.png"
                    alt="New"
                    className="w-10 h-6"
                  />
                </div>
            
                {/* Địa điểm */}
                <div className="flex items-center md:text-base mb-2 text-sm md-3">
                  <img src="/images/footer_icon_map.png" alt="Location Icon" className="lg:w-6 w-6" />: {value.local}
                </div>
            
                {/* Lương */}
                <p className="md:mb-3 mb-2">
                  <span className="md:text-base text-sm md-3">{t('careers.salary')} </span>
                  <span className="font-bold">{value.salary}</span>
                </p>
            
                {/* Ngày hết hạn */}
                <p className="md:mb-3 mb-2">
                  <span className="md:text-base md:mb-3 text-sm md-3">{t('careers.expiration_date')} </span>
                  <span className="font-bold">{value.date}</span>
                </p>
              </div>
            
              {/* Link View JD */}
              <p
                className="md:text-base text-sm text-blue-500 mt-auto cursor-pointer"
                rel="noopener noreferrer"
                onClick={() => router.push(`/careers/${value.id}`)}
              >
                {t('careers.view_jd')}
              </p>
            </div>
            
            ))}
          </div>
        </div>

        {/* Be a part of Unisoft */}
        <div className="md:mt-16 mt-12 text-center">
          <h2 className="lg:text-5xl md:text-3xl text-xl font-bold lg:mb-8 mb-4">{t('careers.be_a_part')}</h2>
          <p className="md:text-2xl text-base md:mb-16 mb-12 text-white text-opacity-50 px-[15%]">
            {t('careers.get_your_chance')}
          </p>
          
          {/* Bọc hình ảnh trong một div có overflow-x: scroll và ẩn thanh cuộn */}
          <div className="grid grid-cols-4 gap-4 mx-auto">
            {slides.map((slide, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img src={slide.image} alt="Image 1" />
              </div>
            ))}
          </div>
        </div>

        {/* Join with Us */}
        <div className="text-center md:mt-24 mt-12 md:my-14 my-6 md:mb-40 mb-16">
          <h2 className="lg:text-5xl md:text-3xl text-xl font-bold md:mb-28 mb-12">{t('careers.join_with_us')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-y-28 gap-y-14">
            {/* Example Icon */}
            {salarys.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="md:mb-8 mb-4">{item.icon}</div>
                <h3 className="md:text-2xl text-base">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container md:my-14 my-6 md:mb-14 mb-12">
        <div className="text-center">
          <h2 className="lg:text-5xl md:text-3xl text-xl font-bold md:mb-8 mb-4">{t('careers.life')}</h2>
          <p className="md:text-2xl text-base md:mb-14 mb-10 text-white text-opacity-50 px-[15%]">
            {t('careers.our_latest')}
          </p>
        </div>
        {/* Grid cho các ứng dụng */}
        <div className="grid grid-cols-3 ld:gap-14 sm:gap-10 gap-8 mt-14">
          {/* App 1 */}
          {lifes.map((life, index) => (
            <div key={index} className="flex flex-col group relative ">
              <div>
                <img src={life.image} alt="Live Wallpaper" className="mx-auto rounded-lg transition-opacity duration-300 group-hover:opacity-20" />
                <p className="sm:mt-8 mt-4 lg:text-2xl sm:text-xl text-xs font-semibold px-1">{life.title}</p>
                <p className="sm:mt-4 mt-2 lg:text-xl sm:text-lg text-xs px-1">{life.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
