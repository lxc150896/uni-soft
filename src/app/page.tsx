'use client'

import { useTranslation } from "react-i18next";
import '@/app/i18n';
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Header/Menu";
import { useState } from "react";

export default function Home() {
  const { t } = useTranslation();

  const values = [
    { icon: <img src="/images/group_1.png" className="xl:w-full lg:w-16"/>, text: t('home.push_for_speed') },
    { icon: <img src="/images/group_2.png" className="xl:w-full lg:w-16"/>, text: t('home.take_risks') },
    { icon: <img src="/images/group_3.png" className="xl:w-full lg:w-16"/>, text: t('home.share_accept_feedback') },
    { icon: <img src="/images/group_4.png" className="xl:w-full lg:w-16"/>, text: t('home.fight_politics') },
    { icon: <img src="/images/group_5.png" className="xl:w-full lg:w-16"/>, text: t('home.set_the_highest_standards') },
    { icon: <img src="/images/group_6.png" className="xl:w-full lg:w-16"/>, text: t('home.act_like_an_owner') },
    { icon: <img src="/images/group_7.png" className="xl:w-full lg:w-16"/>, text: t('home.disrupt_the_status_quo') },
    { icon: <img src="/images/group_8.png" className="xl:w-full lg:w-16"/>, text: t('home.put_the_company') },
    { icon: <img src="/images/group_9.png" className="xl:w-full lg:w-16"/>, text: t('home.think_big') },
    { icon: <img src="/images/group_10.png" className="xl:w-full lg:w-16"/>, text: t('home.think_long_term') },
  ];

  const products = [
    {
      icon: <img src="/images/product_icon_1.png" className="xl:w-[86px] lg:w-14 sm:w-10 w-8" />,
      title: 'Tools',
      image: '/images/product_img_1.png',
    },
    {
      icon: <img src="/images/product_icon_2.png" className="xl:w-[86px] lg:w-14 sm:w-10 w-8"/>,
      title: 'Personalization',
      image: '/images/product_img_2.png',
    },
    {
      icon: <img src="/images/product_icon_3.png" className="xl:w-[86px] lg:w-14 sm:w-10 w-8"/>,
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

  const apps_not_show = [
    { title: t('home.app.live_wallpaper'), image: '/images/app_1.png' },
    { title: t('home.app.piano_learn'), image: '/images/app_2.png' },
    { title: t('home.app.cast_to_tv'), image: '/images/app_3.png' },
    { title: t('home.app.tv_remote'), image: '/images/app_4.png' },
  ]

  const apps_show = [
    { title: t('home.app.beauty_camera'), image: '/images/app_5.png' },
    { title: t('home.app.document_reader'), image: '/images/app_6.png' },
    { title: t('home.app.flashlight_find'), image: '/images/app_7.png' },
    { title: t('home.app.dj_mixer'), image: '/images/app_8.png' },
    { title: t('home.app.volume_booster'), image: '/images/app_9.png' },
    { title: t('home.app.phone_tracker'), image: '/images/app_10.png' },
    { title: t('home.app.ar_sketch'), image: '/images/app_11.png' },
    { title: t('home.app.voice_changer'), image: '/images/app_12.png' },
  ]

  const cards = [
    { title: t('home.partners_have'), number: '20+', icon: '/images/leading.png' },
    { title: t('home.unisoft_member'), number: '20+', icon: '/images/leading_1.png' },
    { title: t('home.released_product'), number: '100+', icon: '/images/leading_2.png' },
    { title: t('home.download_active'), number: '100M+', icon: '/images/leading_3.png' },
  ]

  const [apps, setApps] = useState(apps_not_show);
  const [isShow, setIsShow] = useState(false);

  const setAppsShow = () => {
    if (!isShow) {
      setApps(apps_not_show.concat(apps_show));
    } else {
      setApps(apps_not_show);
    }

    setIsShow(!isShow);
  }
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="relative">
        <img src="/images/background_xl.png" alt="Background" className="lg:w-full lg:h-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
          <div>
            <div className="sm:mt-0 mt-2 xl:ml-20 xl:mr-24 lg:ml-14 ml-4 lg:mr-20 mr-4 mx-auto flex justify-between items-center lg:py-8 md:py-4 py-2 h-auto">
              <div className="flex items-center space-x-4">
                <img src="/images/logo.png" alt="Logo" className="xl:w-28 xl:h-20 md:w-14 md:h-10 w-10 h-6" />
              </div>
              <Menu />
            </div>
            {/* <div className="absolute right-0"> */}
              <img src="/images/global.png" alt="Background" className="absolute right-0 rotate-image sm:mt-3 mt-0 2xl:mr-[2%] sm:mr-[2%] mr-[4%] 2xl:w-[35%] md:w-[38%] w-[35%]" />
            {/* </div> */}

            <div className="px-[7%] pt-[2%]">
              <h1 className="xl:text-[86px] lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold lg:leading-snug md:leading-snug">
                <p>{t('home.innovation')}</p>
                <div className="sm:px-[7%] px-[8%]">{t('home.creativity')}</div>
                <p className="sm:px-[14%] px-[16%]">{t('home.go_beyond')}</p>
              </h1>
            </div>

            <div className="flex justify-center items-center mt-[5%]">
              <button className="xl:py-6 xl:px-24 lg:py-3 lg:px-14 md:py-2 md:px-8 py-1.5 px-3 bg-customBlue rounded-md xl:text-2xl lg:text-lg md:text-base text-[10px] flex items-center duration-300 hover:scale-105 hover:brightness-125">
              {t('home.learn_more')}
                <svg className="ml-3 lg:w-[18px] lg:h-[19px] w-3 h-3" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 17.5L16.9995 1.5M16.9995 1.5H2.53267M16.9995 1.5V15.3378" stroke="white" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>

          
        </div>
      </div>

      {/* Đoạn text Leading Corporations ở cuối */}
      <div className="xl:text-5xl lg:text-4xl text-center sm:text-lg text-base font-bold sm:mt-[2%] mt-0">
        {t('home.leading_corporations')}
      </div>

      {/* Leading Corporations Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 xl:gap-12 lg:gap-6 sm:gap-4 gap-4 sm:mt-14 mt-10">
          {/* Cards */}
          {cards.map((card, index) => (
            <div key={index} className="w-full bg-customerGray rounded-md">
              {/* Nội dung chính */}
              <div className="inset-0 sm:pt-6 pt-4 sm:pb-10 pb-8 sm:px-5 px-3">
                <div key={index} className="text-center">
                  <div className="rounded-full mb-2 lg:mb-4">
                    <img src={card.icon} alt="leading" className="w-12 xl:w-14 lg:w-12 mx-auto" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold py-2">{card.number}</h2>
                  <p className="text-white text-opacity-50 mt-3 lg:mt-4 md:text-[18px] xl:text-2xl sm:text-xs text-lg xl:leading-relaxed lg:leading-10 leading-6">{card.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* image tag */}
      <div className="container flex flex-wrap justify-center grid sm:grid-cols-2 grid-cols-1 gap-14 mt-14 h-full">
        <div className="group">
          <div className="relative group">
            <img 
              src="/images/tag1-main.png" 
              alt="About Us" 
              className="lg:w-full w-11/12 mx-auto h-auto rounded-lg shadow-md transition-transform duration-300 brightness-75" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg">
              <div className="w-full h-full px-[8%] flex flex-col items-center justify-center transition-all duration-300 group-hover:translate-y-[-20%] mt-[30%]">
                {/* Text hiện tại */}
                <h3 className="text-white 2xl:text-5xl xl:text-4xl text-3xl font-bold transition-all duration-300">
                  {t('home.about_us')}
                </h3>
                {/* Text mới sẽ hiển thị khi hover */}
                <p className="text-center text-white 2xl:text-xl lg:text-lg text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 xl:mt-10 mt-6">
                  {t('home.tag_1')}
                </p>
                <div className="flex justify-center items-center 2xl:mt-28 xl:mt-24 mt-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="2xl:py-6 2xl:px-24 lg:py-3 lg:px-14 md:py-2 md:px-8 py-1.5 px-3 bg-gradient-to-r from-blue-600 to-green-400 rounded-md xl:text-2xl lg:text-lg md:text-base text-[10px] font-semibold flex items-center duration-300 hover:scale-105 hover:brightness-125">
                    {t('home.learn_more')}
                    <svg className="ml-3 lg:w-[18px] lg:h-[19px] w-3 h-3" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 17.5L16.9995 1.5M16.9995 1.5H2.53267M16.9995 1.5V15.3378" stroke="white" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="relative group">
            <img src="/images/tag2-main.png" alt="Vision" className="lg:w-full w-11/12 mx-auto h-auto rounded-lg shadow-md transition-transform duration-300 brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg">
              <div className="w-full h-full px-[8%] flex flex-col items-center justify-center transition-all duration-300 group-hover:translate-y-[-45%] lg:mt-[45%] mt-[35%]">
                {/* Text hiện tại */}
                <h3 className="text-white 2xl:text-5xl xl:text-4xl text-3xl font-bold transition-all duration-300">
                  {t('home.vision')}
                </h3>
                {/* Text mới sẽ hiển thị khi hover */}
                <p className="text-center text-white 2xl:text-xl lg:text-lg text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 xl:mt-4 mt-2"
                  dangerouslySetInnerHTML={{ __html: t('home.tag_2') }}>
                </p>
                <div className="flex justify-center items-center 2xl:mt-12 xl:mt-10 mt-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="2xl:py-6 2xl:px-24 lg:py-3 lg:px-14 md:py-2 md:px-8 py-1.5 px-3 bg-gradient-to-r from-blue-600 to-green-400 rounded-md xl:text-2xl lg:text-lg md:text-base text-[10px] font-semibold flex items-center duration-300 hover:scale-105 hover:brightness-125">
                    {t('home.learn_more')}
                    <svg className="ml-3 lg:w-[18px] lg:h-[19px] w-3 h-3" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 17.5L16.9995 1.5M16.9995 1.5H2.53267M16.9995 1.5V15.3378" stroke="white" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-6 flex-grow flex items-end group">
            <img src="/images/tag3-main.png" alt="Core & Value" className="lg:w-full w-11/12 mx-auto h-auto rounded-lg shadow-md transition-transform duration-300 brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg">
              <div className="w-full h-full xl:px-[8%] px-4 flex flex-col items-center justify-center transition-all duration-300 group-hover:translate-y-[-45%] xl:mt-[45%] lg:mt-[50%] mt-[40%]">
                {/* Text hiện tại */}
                <h3 className="text-white 2xl:text-5xl xl:text-4xl text-3xl font-bold transition-all duration-300">
                  {t('home.core_value')}
                </h3>
                {/* Text mới sẽ hiển thị khi hover */}
                <p className="text-center text-white 2xl:text-xl lg:text-lg text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 xl:mt-4 mt-2">
                  {t('home.tag_3')}
                </p>
                <div className="flex justify-center items-center 2xl:mt-12 xl:mt-10 mt-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="2xl:py-6 2xl:px-24 lg:py-3 lg:px-14 md:py-2 md:px-8 py-1.5 px-3 bg-gradient-to-r from-blue-600 to-green-400 rounded-md xl:text-2xl lg:text-lg md:text-base text-[10px] font-semibold flex items-center duration-300 hover:scale-105 hover:brightness-125">
                    {t('home.learn_more')}
                    <svg className="ml-3 lg:w-[18px] lg:h-[19px] w-3 h-3" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 17.5L16.9995 1.5M16.9995 1.5H2.53267M16.9995 1.5V15.3378" stroke="white" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      {/* <div className="container mx-auto">
      <div className="bg-black text-white lg:pt-36 pt-12 lg:mb-24 mb-12">
        <h2 className="xl:text-5xl lg:text-4xl text-lg font-bold text-center text-blue-500 lg:mb-24 mb-12">{t('home.our_values')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 sm:gap-y-20 2xl:gap-y-28 gap-y-12 xl:px-1 lg:px-8 mx-auto">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center duration-300 hover:scale-110 hover:brightness-100">
              <div>{value.icon}</div>
              <p className="mt-4 text-center 2xl:text-2xl xl:text-xl lg:text-base">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
      </div> */}

      {/* products */}
      <h2 className="xl:text-5xl lg:text-4xl text-lg font-bold text-center xl:pt-20 lg:pt-10 pt-8">
        {t('home.best_of_product')}
      </h2>
      <div className="text-white relative xl:pt-9 lg:pt-8 pt-4 relative ">
        {/* Thẻ cha sẽ có chiều cao bằng chiều ngang của ảnh */}
        <div className="relative w-full">
          <img
            src="/images/best_product_bg.png"
            alt="Best of Products Background"
            className="inset-0 object-cover z-0 w-full"
          />

          {/* Nội dung chính */}
          <div className="absolute inset-0 grid md:gap-8 gap-4 xl:mt-12 lg:mt-4 mx-[11%]">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <div className="flex duration-300 hover:scale-105 hover:brightness-100 items-center ">
                  <div className="xl:mr-16 lg:mr-12 sm:mr-8 mr-4">{product.icon}</div>
                  <p className="xl:text-2xl lg:text-lg text-xs font-semibold">
                    {product.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black text-white lg:pt-24 sm:pt-20 pt-14">
          <div className="container mx-auto">
            {/* Tiêu đề và mô tả */}
            <div className="flex">
              <div className="w-4/5">
                <h2 className="md:text-5xl text-2xl font-bold">{t("home.experience")}</h2>
                <p className="md:text-xl text-xs mt-4 text-white text-opacity-50 mr-4" dangerouslySetInnerHTML={{ __html: t('home.discover_the_awesome') }}></p>
              </div>

              {/* Số liệu tải xuống */}
              <div className="w-1/5">
                <div className="float-right">
                  <div className="font-bold text-blue-500 md:text-5xl text-2xl">1B+</div> <div className="md:text-xl text-sm">{t("home.dowload")}</div>
                </div>
              </div>
            </div>

            {/* Grid cho các ứng dụng */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 ld:gap-14 sm:gap-10 gap-8 mt-14">
              {/* App 1 */}
              {apps.map((app, index) => (
                <div key={index} className="flex flex-col items-center text-center group relative ">
                  <div>
                    <img src={app.image} alt="Live Wallpaper" className="mx-auto rounded-lg transition-opacity duration-300 group-hover:opacity-20" />
                    <p className="mt-7 lg:text-2xl sm:text-xl text-lg px-1">{app.title}</p>
                  </div>
                  <div className="absolute object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 mt-[20%]">
                    <img
                      src={app.image}
                      alt="Small Image"
                      className="m-auto w-[30%]"
                    />
                    <img
                      src="/images/app_google.png"
                      alt="Google Play Icon"
                      className="mx-auto object-contain mt-7"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Nút Show more */}
            <div className="w-full text-center item-center justify-center lg:mt-20 mt-10">
              <button className="px-[105px] py-5 bg-customBlue hover:bg-blue-700 text-white rounded text-2xl" onClick={() => setAppsShow()}>
                {!isShow ? t("home.show_more") : t("home.show_less")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white container mx-auto block mt-2">
        {/* Top Partners Section */}
        <div className="bg-black text-white pt-16 mb-24">
          <h2 className="xl:text-[40px] lg:text-4xl font-bold text-center mb-24">{t('home.top_partners')}</h2>

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
