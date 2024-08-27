'use client'

import i18n from "i18next";
import { useTranslation } from "react-i18next";
import './i18n';

export default function Home() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="w-full bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/background_xl.png')"}}>
        <div className="ml-20 mr-28 mx-auto flex justify-between items-center py-8 h-[144px]">
          <div className="flex items-center space-x-4">
            <img src="/images/logo.png" alt="Logo" className="w-28 h-20" />
          </div>
          <nav className="hidden md:flex space-x-20 text-2xl">
            <button className="hover:underline">Home</button>
            <button className="hover:underline">About Us</button>
            <button className="hover:underline">Careers</button>
            <button className="hover:underline">Contact</button>
            <div>
              <button className="hover:underline mr-2" onClick={() => changeLanguage('en')}>En</button>|
              <button className="hover:underline ml-2" onClick={() => changeLanguage('vi')}>Vi</button>
            </div>
          </nav>
        </div>
        <div className="py-8 px-24">
          <h1 className="text-[85px] font-bold leading-tight">
            <p>Innovation</p>
            <p className="px-24">Creativity
              <p className="px-28">Go beyond</p>
            </p>
          </h1>
        </div>
        <div className="flex justify-center items-center mt-7 pb-[180px]">
          <button className="py-6 px-24 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-2xl font-semibold flex items-center">
            Learn More
            <svg className="ml-3" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 17.5L16.9995 1.5M16.9995 1.5H2.53267M16.9995 1.5V15.3378" stroke="white" stroke-width="2"/>
            </svg>
          </button>
        </div>
        <div className="text-center text-[56px] text-blue-500 font-bold mb-20">Leading Corporations</div>
      </div>

      {/* Leading Corporations Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-4xl mx-auto mt-8">
        <div className="bg-black text-white flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-4xl">
            {/* Card 1 */}
            <div className="bg-gray-900 p-6 rounded-lg text-center flex flex-col items-center">
              <div className="bg-green-600 p-2 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v14" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold">20+</h2>
              <p className="text-gray-400 mt-2">Partners have collaborated to release</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 p-6 rounded-lg text-center flex flex-col items-center">
              <div className="bg-green-600 p-2 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold">20+</h2>
              <p className="text-gray-400 mt-2">Unisoft members create apps every day</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 p-6 rounded-lg text-center flex flex-col items-center">
              <div className="bg-green-600 p-2 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l6-6M8 6l6 6" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold">100+</h2>
              <p className="text-gray-400 mt-2">Released apps/games products</p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-900 p-6 rounded-lg text-center flex flex-col items-center">
              <div className="bg-green-600 p-2 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v14" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold">100M+</h2>
              <p className="text-gray-400 mt-2">Downloads, Daily active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
