'use client'

import i18n from "i18next";
import { useTranslation } from "react-i18next";
import '@/app/i18n';
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  const { t } = useTranslation();

  const values = [
    { title: '[ Unisoft Product] Android Developer', local: 'Ha Noi', salary: 'Up to 1000$', date: '10/09/2024'  },
    { title: '[ Unisoft Product] Android Developer', local: 'Ha Noi', salary: 'Up to 1000$', date: '10/09/2024'  },
    { title: '[ Unisoft Product] Android Developer', local: 'Ha Noi', salary: 'Up to 1000$', date: '10/09/2024'  },
    { title: '[ Unisoft Product] Android Developer', local: 'Ha Noi', salary: 'Up to 1000$', date: '10/09/2024'  },
    { title: '[ Unisoft Product] Android Developer', local: 'Ha Noi', salary: 'Up to 1000$', date: '10/09/2024'  },
    { title: '[ Unisoft Product] Android Developer', local: 'Ha Noi', salary: 'Up to 1000$', date: '10/09/2024'  },
  ];

  const salarys = [
    { title: 'Competitive salary', icon: <img src="/images/salary_icon_1.png" /> },
    { title: 'Profit sharing', icon: <img src="/images/salary_icon_2.png" /> },
    { title: 'Promotion path', icon: <img src="/images/salary_icon_3.png" /> },
    { title: 'Performance management', icon: <img src="/images/salary_icon_4.png" /> },
    { title: 'Society passion', icon: <img src="/images/salary_icon_5.png" /> },
    { title: 'Welfare', icon: <img src="/images/salary_icon_6.png" /> },
    { title: 'Culture of thinking', icon: <img src="/images/salary_icon_7.png" /> },
    { title: 'Working equipment', icon: <img src="/images/salary_icon_8.png" /> },
  ]
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <Header />
      {/* banner */}
      <div className="relative">
        <img src="/images/about_bg.png" alt="Background" className="lg:w-full lg:h-full object-cover" />
        <div className="absolute md:top-[50%] top-[20%] md:ml-24 ml:16 left-0 h-full flex flex-col justify-between">
          <div>
            <div className="lg:text-[85px] md:text-6xl text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-600 via-green-500 to-green-400 animate-text">
              <span>Careers</span>
            </div>
            <p className="mt-3 lg:text-2xl md:text-xl text-base">Home / Careers</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:my-14 my-0 md:pt-16 pt-8">
        {/* Top Position */}
        <div className="md:mb-12 mb-6">
          <h2 className="text-center lg:text-[56px] md:text-5xl text-3xl font-bold md:mb-20 mb-10">Top Position</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Example card */}
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 text-white rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                <div className="flex items-center text-base mb-4">
                  <img src="/images/footer_icon_map.png" alt="Logo" className="lg:w-10 w-6" />: {value.local}
                </div>
                <p className="text-base mb-4">Salary: {value.salary}</p>
                <p className="text-base mb-4">Salary: {value.date}</p>
                <p className="text-base mb-4 text-blue-500">{'View JD' + '>'}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Be a part of Unisoft */}
        <div className="md:mt-44 mt-16 text-center">
          <h2 className="lg:text-[56px] md:text-5xl text-3xl font-bold mb-4">Be a part of Unisoft</h2>
          <p className="md:text-2xl text-base md:mb-32 mb-16">
            Get your chance to work with creative and like-minded people and together we empower the world.
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
          <h2 className="lg:text-[56px] md:text-5xl text-3xl font-bold md:mb-28 mb-12">Join with Us</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-y-44 gap-y-20">
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