'use client'

import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Header/Menu";

export default function Home() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const values = [
    { icon: <img src="/images/group_1.png" className="xl:w-full lg:w-16"/>, text: 'Push for speed' },
    { icon: <img src="/images/group_2.png" className="xl:w-full lg:w-16"/>, text: 'Take Risks' },
    { icon: <img src="/images/group_3.png" className="xl:w-full lg:w-16"/>, text: 'Share & Accept feedback' },
    { icon: <img src="/images/group_4.png" className="xl:w-full lg:w-16"/>, text: 'Fight BS & politics' },
    { icon: <img src="/images/group_5.png" className="xl:w-full lg:w-16"/>, text: 'Set the highest standards' },
    { icon: <img src="/images/group_6.png" className="xl:w-full lg:w-16"/>, text: 'Act like an owner' },
    { icon: <img src="/images/group_7.png" className="xl:w-full lg:w-16"/>, text: 'Disrupt the status quo' },
    { icon: <img src="/images/group_8.png" className="xl:w-full lg:w-16"/>, text: 'Put the company’s interest first' },
    { icon: <img src="/images/group_9.png" className="xl:w-full lg:w-16"/>, text: 'Think Big' },
    { icon: <img src="/images/group_10.png" className="xl:w-full lg:w-16"/>, text: 'Think long-term' },
  ];

  const products = [
    {
      icon: <img src="/images/product_icon_1.png" className="xl:w-full lg:w-16 w-14" />,
      title: 'Tools',
      image: '/images/product_img_1.png',
    },
    {
      icon: <img src="/images/product_icon_2.png" className="xl:w-full lg:w-16 w-14"/>,
      title: 'Personalization',
      image: '/images/product_img_2.png',
    },
    {
      icon: <img src="/images/product_icon_3.png" className="xl:w-full lg:w-16 w-14"/>,
      title: 'Music & Audio',
      image: '/images/product_img_3.png',
    },
  ];

  const topPartners = [
    { icon: <img src="/images/partner_1.png" />},
    { icon: <img src="/images/partner_2.png" />},
    { icon: <img src="/images/partner_3.png" />},
    { icon: <img src="/images/partner_4.png" />},
    { icon: <img src="/images/partner_5.png" />},
    { icon: <img src="/images/partner_6.png" />},
    { icon: <img src="/images/partner_7.png" />},
    { icon: <img src="/images/partner_8.png" />},
    { icon: <img src="/images/partner_9.png" />},
  ]
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="relative">
        <img src="/images/background_xl.png" alt="Background" className="lg:w-full lg:h-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
          <div>
            <div className="xl:ml-20 lg:ml-14 ml-4 xl:mr-28 lg:mr-20 mr-4 mx-auto flex justify-between items-center lg:py-8 md:py-4 py-2 h-auto">
              <div className="flex items-center space-x-4">
                <img src="/images/logo.png" alt="Logo" className="xl:w-24 xl:h-16 md:w-14 md:h-10 w-10 h-6" />
              </div>
              <Menu />
            </div>

            <div className="md:py-8 py-2 lg:px-24 px-10">
              <h1 className="xl:text-[85px] lg:text-4xl md:text-2xl font-bold xl:leading-tight lg:leading-snug">
                <p>Innovation</p>
                <div className="xl:px-24 lg:px-16 md:px-10 px-4">Creativity
                  <p className="xl:px-28 lg:px-20 md:px-16 px-8">Go beyond</p>
                </div>
              </h1>
            </div>

            <div className="flex justify-center items-center md:mt-12 mt-auto">
              <button className="xl:py-6 xl:px-24 lg:py-3 lg:px-14 md:py-2 md:px-8 py-1.5 px-3 bg-gradient-to-r from-blue-600 to-green-400 rounded-md xl:text-2xl lg:text-lg md:text-base text-[10px] font-semibold flex items-center duration-300 hover:scale-105 hover:brightness-125">
                Learn More
                <svg className="ml-3 lg:w-[18px] lg:h-[19px] w-3 h-3" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 17.5L16.9995 1.5M16.9995 1.5H2.53267M16.9995 1.5V15.3378" stroke="white" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Đoạn text Leading Corporations ở cuối */}
          <div className="text-center xl:text-[56px] lg:text-4xl text-lg text-blue-500 font-bold">
            Leading Corporations
          </div>
        </div>
      </div>

      {/* Leading Corporations Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:gap-12 xl:gap-4 md:gap-6 gap-1 mt-6 lg:mt-12 xl:mt-24 mb-9">
          {/* Card 1 */}
          <div className="bg-gray-900 p-6 md:p-2 lg:p-3 xl:p-9 rounded-lg text-center duration-300 hover:scale-105 hover:brightness-125 mx-auto 2xl:w-[300px] 2xl:h-[500px] xl:w-[265px] xl:h-[446px] lg:w-[200px] lg:h-[335px] md:w-[165px] md:h-[261px] w-full"
              style={{ backgroundImage: "url('/images/tag.png')", backgroundSize: "100%" }}>
            <div className="rounded-full mb-4 lg:mb-9">
              <img src="/images/leading.png" alt="leading" className="w-14 xl:w-20 lg:w-16 mx-auto" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-6xl font-bold text-blue-500">20+</h2>
            <p className="leading-6 lg:leading-10 mt-8 lg:mt-9 text-lg xl:text-2xl">Partners have collaborated to release</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-6 md:p-2 lg:p-3 xl:p-9 rounded-lg text-center duration-300 hover:scale-105 hover:brightness-125 mx-auto 2xl:w-[300px] 2xl:h-[500px] xl:w-[265px] xl:h-[446px] lg:w-[200px] lg:h-[335px] md:w-[165px] md:h-[261px] w-full"
              style={{ backgroundImage: "url('/images/tag.png')", backgroundSize: "100%" }}>
            <div className="rounded-full mb-4 lg:mb-9">
              <img src="/images/leading_1.png" alt="leading" className="w-14 xl:w-20 lg:w-16 mx-auto" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-6xl font-bold text-blue-500">20+</h2>
            <p className="leading-6 lg:leading-10 mt-8 lg:mt-9 text-lg xl:text-2xl">Unisoft members create apps every day</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-6 md:p-2 lg:p-3 xl:p-9 rounded-lg text-center duration-300 hover:scale-105 hover:brightness-125 mx-auto 2xl:w-[300px] 2xl:h-[500px] xl:w-[265px] xl:h-[446px] lg:w-[200px] lg:h-[335px] md:w-[165px] md:h-[261px] w-full"
              style={{ backgroundImage: "url('/images/tag.png')", backgroundSize: "100%" }}>
            <div className="rounded-full mb-4 lg:mb-9">
              <img src="/images/leading_2.png" alt="leading" className="w-14 xl:w-20 lg:w-16 mx-auto" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-6xl font-bold text-blue-500">100+</h2>
            <p className="leading-6 lg:leading-10 mt-8 lg:mt-9 text-lg xl:text-2xl">Released apps/games products</p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 p-6 md:p-2 lg:p-3 xl:p-9 rounded-lg text-center duration-300 hover:scale-105 hover:brightness-125 mx-auto 2xl:w-[300px] 2xl:h-[500px] xl:w-[265px] xl:h-[446px] lg:w-[200px] lg:h-[335px] md:w-[165px] md:h-[261px] w-full"
              style={{ backgroundImage: "url('/images/tag.png')", backgroundSize: "100%" }}>
            <div className="rounded-full mb-4 lg:mb-9">
              <img src="/images/leading_3.png" alt="leading" className="w-14 xl:w-20 lg:w-16 mx-auto" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-6xl font-bold text-blue-500">100M+</h2>
            <p className="leading-6 lg:leading-10 mt-8 lg:mt-9 text-lg xl:text-2xl">Downloads, Daily active</p>
          </div>
        </div>
      </div>

      {/* image tag */}
      <div className="flex flex-wrap justify-center gap-14 mt-14 h-full 2xl:px-10">
        <div className="w-full lg:w-5/12 group">
          <div className="relative">
            <img src="/images/tag1-main.png" alt="About Us" className="lg:w-full w-11/12 mx-auto h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:brightness-125 brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg transition-opacity duration-300 group-hover:bg-opacity-0">
              <h3 className="text-white text-3xl font-bold">About Us</h3>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col justify-between">
          <div className="relative group">
            <img src="/images/tag2-main.png" alt="Vision" className="lg:w-full w-11/12 mx-auto h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:brightness-100 brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg transition-opacity duration-300 group-hover:bg-opacity-0">
              <h3 className="text-white text-3xl font-bold">Vision</h3>
            </div>
          </div>

          <div className="relative mt-6 flex-grow flex items-end group">
            <img src="/images/tag3-main.png" alt="Core & Value" className="lg:w-full w-11/12 mx-auto h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:brightness-100 brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg transition-opacity duration-300 group-hover:bg-opacity-0">
              <h3 className="text-white text-3xl font-bold">Core & Value</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto">
      <div className="bg-black text-white lg:pt-36 pt-12 lg:mb-24 mb-12">
        <h2 className="xl:text-5xl lg:text-4xl text-lg font-bold text-center text-blue-500 lg:mb-24 mb-12">Our Values</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-20 2xl:gap-y-28 xl:px-1 lg:px-8 mx-auto">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center duration-300 hover:scale-110 hover:brightness-100">
              <div>{value.icon}</div>
              <p className="mt-4 text-center 2xl:text-2xl xl:text-xl lg:text-base">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* products */}
      <h2 className="xl:text-5xl lg:text-4xl text-lg font-bold text-center text-blue-500 xl:pt-14 lg:pt-4 pt-2">
        Best of Products
      </h2>
      <div className="text-white relative xl:p-20 lg:p-10 p-4">
        {/* Thẻ cha sẽ có chiều cao bằng chiều ngang của ảnh */}
        <div className="relative w-full aspect-square">
          <img
            src="/images/best_product_bg.png"
            alt="Best of Products Background"
            className="absolute inset-0 object-cover z-0 w-full h-full"
          />

          {/* Nội dung chính */}
          <div className="absolute inset-0 grid grid-cols-3 gap-8 max-w-6xl 2xl:max-w-7xl xl:mx-auto lg:mx-8 z-10 mt-12">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <div className="duration-300 hover:scale-105 hover:brightness-100">
                  <div className="flex justify-center xl:mb-8 lg:mb-4 mb-3">
                    <div className="rounded-full">
                      <span>{product.icon}</span>
                    </div>
                  </div>
                  <p className="xl:text-3xl lg:text-lg text-xs font-semibold xl:mb-24 lg:mb-16 mb-8">
                    {product.title}
                  </p>
                </div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="2xl:w-full w-72 aspect-square mx-auto rounded-lg duration-300 hover:scale-105 hover:brightness-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white container mx-auto">
        {/* Top Partners Section */}
        <div className="bg-black text-white pt-16 mb-24">
          <h2 className="xl:text-5xl lg:text-4xl font-bold text-center text-blue-500 mb-24">Top Partners</h2>

          {/* First set of logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-20 gap-x-10 lg:mx-16 lg:mx-12 mx-6 xl:mb-16 mb-10 2xl:mb-20">
            {topPartners.map((value, index) => (
              <div
                key={index}
                className="flex justify-center items-center opacity-50 hover:opacity-100 duration-300 hover:scale-105 hover:brightness-100"
              >
                <div>{value.icon}</div>
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
