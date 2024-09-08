'use client'

import { useTranslation } from "react-i18next";
import '@/app/i18n';
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getJob } from "@/api/jobs";
import Loading from "@/components/PageLoading";

export default function Home() {
  const { t } = useTranslation();

  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const [jobData, setJobData] = useState(null);


  const values = [
    { id: 1, title: '[ Unisoft Product] Developer Android All Level', local: 'Ha Noi', salary: 'Up to 1500$', date: '10/10/2024', link: 'https://docs.google.com/document/d/1ckyABjmBygErxtockROKL4oSlE8jsg4Rg9hYwDOf5X8/edit' },
    { id: 2, title: '[ Unisoft Product] Developer Swift Junior', local: 'Ha Noi', salary: 'Up to 1500$', date: '10/10/2024', link: 'https://docs.google.com/document/d/1bjUCd15T5nukIyvcHhxkiUW7rFDzPe7fIukvO1bEXlw/edit' },
    { id: 3, title: '[ Unisoft Product] Performance Marketing Specialist - User Acquisition', local: 'Ha Noi', salary: 'Up to 1000$', date: '10/10/2024', link: 'https://docs.google.com/document/d/1vGZB22uaI2hErUfx8JTS6iSvIsLZaCAQ2Fua-dnyshk/edit?pli=1' },
  ];

  useEffect(() => {
    const data = getJob(id);
    setJobData(data);
  }, []);

  if (!jobData) {
    return <Loading />;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <Header />

      <div className="mx-[5%] md:my-28 my-16">
        <div className="">
          {/* Tiêu đề công việc */}
          <div className="flex justify-between">
            <h1 className="lg:text-4xl sm:text-2xl text-lg font-bold text-white mb-4 w-3/5">
              {jobData.company}
            </h1>
            <div className="flex justify-center w-2/5 h-full">
              <button className="top-0 xl:py-5 xl:px-10 lg:py-4 lg:px-8 md:py-3 md:px-8 sm:py-3 sm:px-4 py-2 px-2 bg-blue-500 hover:bg-blue-600 rounded xl:text-2xl lg:text-lg md:text-sm text-xs font-semibold flex items-center duration-300 hover:scale-105 hover:brightness-125">
              {t('careers.apply_job')}
                <svg className="sm:ml-3 ml-1 lg:w-[18px] lg:h-[19px] w-3 h-3" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 17.5L16.9995 1.5M16.9995 1.5H2.53267M16.9995 1.5V15.3378" stroke="white" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Thông tin chung */}
          <div className="flex justify-between items-center mb-8 lg:mt-16 mt-12">
            <div className="text-gray-300">
              <span className="font-semibold">Location:</span>{' '}
              <span className="text-blue-400">{jobData.location}</span>
            </div>
            <div className="text-gray-300">
              <span className="font-semibold">Salary:</span>{' '}
              <span className="text-blue-400">{jobData.salary}</span>
            </div>
            <div className="text-gray-300">
              <span className="font-semibold">Expiration date:</span>{' '}
              <span className="text-blue-400">{jobData.expirationDate}</span>
            </div>
          </div>

          {/* Mô tả công việc */}
          <div className="text-gray-300 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Mô tả công việc</h2>
            <ul className="list-disc list-inside space-y-2">
              {jobData.jobDescription.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>

          {/* Yêu cầu ứng viên */}
          <div className="text-gray-300 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Yêu cầu ứng viên</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">Kinh nghiệm</h3>
              <ul className="list-disc list-inside space-y-2">
                {jobData.requirements.experience.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Kỹ năng</h3>
              <ul className="list-disc list-inside space-y-2">
                {jobData.requirements.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quyền lợi */}
          <div className="text-gray-300 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Quyền lợi</h2>
            <ul className="list-disc list-inside space-y-2">
              {jobData.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Cách thức ứng tuyển */}
          <div className="text-gray-300 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Cách thức ứng tuyển</h2>
            <ul className="list-disc list-inside space-y-2">
              {jobData.applyInstructions.content.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
            <p className="mt-4 italic text-gray-400">{jobData.applyInstructions.note}</p>
          </div>
        </div>
        
        {/* Top Position */}
        <div className="md:mb-12 mb-6">
          <h2 className="md:text-2xl text-xl font-bold lg:mb-9 mb-6">{t('careers.related_jobs')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-800 text-white rounded-lg shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h3 className="md:text-xl text-lg font-semibold md:mb-4 mb-2">{value.title}</h3>
                    <div className="flex items-center md:text-base md:mb-4 mb-2 text-sm md-3">
                      <img src="/images/footer_icon_map.png" alt="Logo" className="lg:w-10 w-6" />: {value.local}
                    </div>
                    <p className="md:mb-4 mb-2">
                      <span className="md:text-base text-sm md-3">{t('careers.salary')} </span><span className="font-bold">{value.salary}</span>
                    </p>
                    <p className="md:mb-4 mb-2">
                      <span className="md:text-base md:mb-4 text-sm md-3">{t('careers.expiration_date')} </span><span className="font-bold">{value.date}</span>
                    </p>
                  </div>
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
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
