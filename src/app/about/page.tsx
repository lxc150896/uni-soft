'use client'

import { useTranslation } from "react-i18next";
import '@/app/i18n';
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  const { t } = useTranslation();

  const cores = [
    { icon: <img src="/images/core_1.png" />, text: 'Ambition' },
    { icon: <img src="/images/core_2.png"/>, text: 'Think BIG' },
    { icon: <img src="/images/core_3.png" />, text: 'Creation' },
    { icon: <img src="/images/core_4.png" />, text: 'Autonomy' },
    { icon: <img src="/images/core_5.png" />, text: 'Respect' },
  ];
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <Header />
      {/* banner */}
      <Banner urlImage="/images/about_us_bg.png" title="About Us" descript="Home / About Us" />

      <div className="container bg-black text-white flex flex-col items-center lg:py-28 md:py-16 py-10">
        {/* Section: We are Unisoft */}
        <div className="text-center lg:mb-30 md:mb-20 mb-10 px-4">
          <h2 className="text-center xl:text-[56px] lg:text-4xl md:text-3xl text-xl font-bold lg:mb-14 md:mb-6 mb-4">We are Unisoft!</h2>
          <p className="md:text-lg sm:text-sm text-xs leading-relaxed">
            Unisoft was founded in 2023, starting from a small but passionate team with big dreams to become a top Technological Corporation in Vietnam. After a 5-year journey full of experiments, we remain steadfast with our Technology Vision as we strive to create exciting experiences for billions of users around the world. We are getting closer to achieving that Vision day by day. We are warriors and will fight with great technology and a warrior spirit!
          </p>
        </div>

        {/* Section: Core Values */}
        <div className="text-center lg:mb-16 mb-8">
          <h2 className="xl:text-[56px] lg:text-4xl md:text-3xl text-xl font-bold lg:mb-16 md:mb-12 mb-8">Core Values</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:gap-x-16 lg:gap-x-6 md:gap-3 sm:gap-6 gap-4">
            {cores.map((value, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-800 lg:py-14 md:py-10 sm:py-8 py-6 sm:px-10 px-6 rounded-lg border-blue-500 border-solid border">
                <div>{value.icon}</div>
                <p className="lg:mt-12 md:mt-4 mt-8 text-center 2xl:text-2xl xl:text-xl lg:text-base">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Quote */}
        <div className="">
          <img src="/images/we_go.png" alt="we" />
        </div>

        {/* Vision Section */}
        <div className="flex relative w-full xl:pt-28 md:mt-20 mt-16 items-center">
          <img
            src="/images/our_vision.png" // Đường dẫn tới ảnh của bạn
            alt="Team Photo"
            className="object-cover w-1/2 h-full"
          />
          <div className="absolute right-0 bg-blue-600 text-white lg:py-10 md:py-6 sm:py-4 py-2 px-2 w-[55%] h-[70%] my-auto text-center">
            <h2 className="xl:text-[56px] lg:text-4xl md:text-xl sm:text-lg text-sm font-bold text-white lg:mb-10 sm:mb-4 mb-1">
              Our <span className="text-green-500">Vision</span>
            </h2>
            <p className="xl:text-2xl lg:text-base md:text-sm sm:text-xs text-[8px]">
              We aim to become one of the leaders in the industry by creating heartfelt experiences for our users with qualified and trendy products. Besides, we continue to be a reliable companion by bringing value and equality to the relationship between us and our partners.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex w-full lg:pt-16 md:pt-10 mt-8 items-center ">
          <div className="bg-blue-600 text-white lg:py-10 md:py-6 sm:py-4 py-2 px-2 w-3/4 h-[70%] my-auto text-center quote-container z-10 mr-[-25%]">
            <h2 className="xl:text-[56px] lg:text-4xl md:text-xl sm:text-lg text-sm font-bold text-white lg:mb-10 sm:mb-4 mb-1 w-9/12">
              Our <span className="text-green-500">Mision</span>
            </h2>
            <p className="xl:text-2xl lg:text-base md:text-sm sm:text-xs text-[8px] w-9/12">
              Delight billions of users all over the world with exceptional experiences by creating top notch tech products that enter in every aspect of human lives.
            </p>
          </div>
          <img
            src="/images/our_mision.png"
            alt="Tech Background"
            className="object-cover w-1/2 h-full right-0"
          />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
