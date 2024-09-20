'use client'

import { useTranslation } from "react-i18next";
import '@/app/i18n';
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getJob } from "@/api/jobs";
import Loading from "@/components/PageLoading";
import { IJob } from "@/api/lib/types/job";
import Modal from "@/components/Modal";

export default function Home() {
  const { t } = useTranslation();

  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const [jobData, setJobData] = useState<IJob>();
  const [modalState, setModalState] = useState(false)


  const values = [
    { id: 1, title: '[ Unisoft Product] Android Developer Intern /Fresher', local: ' Ha Noi', salary: ' Up to 500$', date: ' 10/10/2024'},
    { id: 2, title: '[ Unisoft Product] Android Developer Junior / Senior', local: ' Ha Noi', salary: 'Up to 1000$', date: '10/10/2024'},
    { id: 3, title: '[ Unisoft Product] User Acquisition (Intern )', local: ' Ha Noi', salary: 'Up to 1000$', date: '10/10/2024'},
    { id: 4, title: '[ Unisoft Product] UI/ UX Designer', local: ' Ha Noi', salary: ' Up to 800$', date: ' 10/10/2024'},
    { id: 5, title: '[ Unisoft Product] User Acquisition (Jun/Sen )', local: ' Ha Noi', salary: 'Up to 1000$', date: '10/10/2024'},
    { id: 6, title: '[ Unisoft Product] IOS Developer', local: ' Ha Noi', salary: 'Up to 1000$', date: '10/10/2024'},
  ];

  useEffect(() => {
    const data = getJob(id as '1' | '2' | '3' | '4' | '5' | '6');
    setJobData(data);
  }, []);

  if (!jobData) {
    return <Loading />;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <Header />

      <div className="mx-[5%] xl:my-28 lg:my-24 md:my-16 sm:my-14 my-10">
        <div className="">
          {/* Tiêu đề công việc */}
          <div className="flex justify-between">
            <h1 className="lg:text-4xl sm:text-2xl text-lg font-bold text-white mb-4 w-3/5">
              {jobData.company}
            </h1>
            <div className="flex justify-end w-2/5 h-full">
              <button onClick={() => setModalState(true)} className="top-0 xl:py-5 xl:px-10 lg:py-4 lg:px-8 md:py-3 md:px-8 sm:py-3 sm:px-4 py-2 px-2 bg-blue-500 hover:bg-blue-600 rounded xl:text-2xl lg:text-lg md:text-sm text-xs font-semibold flex items-center duration-300 hover:scale-105 hover:brightness-125">
                {t('careers.apply_job')}
                <svg className="sm:ml-3 ml-1 lg:w-[18px] lg:h-[19px] w-3 h-3" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 17.5L16.9995 1.5M16.9995 1.5H2.53267M16.9995 1.5V15.3378" stroke="white" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Thông tin chung */}
          <div className="sm:flex justify-between items-center lg:mt-16 sm:mt-12 mt-4 xl:text-2xl md:text-xl sm:text-base text-sm">
            <div className="text-gray-300 sm:mb-0 mb-2">
              <span>Location:</span>{' '}
              <span className="text-blue-400">{jobData.location}</span>
            </div>
            <div className="text-gray-300 sm:mb-0 mb-2">
              <span>Salary:</span>{' '}
              <span className="text-blue-400">{jobData.salary}</span>
            </div>
            <div className="text-gray-300 sm:mb-0 mb-2">
              <span>Expiration date:</span>{' '}
              <span className="text-blue-400">{jobData.expirationDate}</span>
            </div>
          </div>

          {/* Mô tả công việc */}
          <div className="text-gray-300 xl:mt-28 md:mt-20 sm:mt-14 mt-8">
            <h2 className="xl:text-2xl md:text-xl text-lg font-semibold text-white">Mô tả công việc</h2>
            <ul className="xl:text-2xl md:text-xl text-lg list-disc list-inside space-y-2 sm:mt-8 mt-4">
              {jobData.jobDescription.map((desc, index) => (
                <li className="font-thin leading-loose" key={index}>{desc}</li>
              ))}
            </ul>
          </div>

          {/* Yêu cầu ứng viên */}
          <div className="text-gray-300 sm:mt-4 mt-2">
            <h2 className="xl:text-2xl md:text-xl text-lg font-semibold text-white">Yêu cầu ứng viên</h2>
            <div className="sm:mt-10 mt-6">
              <ul className="xl:text-2xl md:text-xl text-lg list-disc list-inside space-y-2 sm:mt-4 mt-2">
                {jobData.requirements.map((requirement, index) => (
                  <li className="font-thin leading-loose" key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quyền lợi */}
          <div className="text-gray-300 sm:my-12 my-8">
            <h2 className="xl:text-2xl md:text-xl text-lg font-semibold text-white">Quyền lợi</h2>
            <ul className="xl:text-2xl md:text-xl text-lg list-disc list-inside space-y-2 sm:mt-8 mt-4">
              {jobData.benefits.map((benefit, index) => (
                <li className="font-thin leading-loose" key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Cách thức ứng tuyển */}
          <div className="text-gray-300 sm:mt-12 mt-8">
            <h2 className="xl:text-2xl md:text-xl text-lg font-semibold text-white">Cách thức ứng tuyển</h2>
            <ul className="xl:text-2xl md:text-xl text-lg list-disc list-inside space-y-2 sm:mt-4 mt-2">
                <li className="font-thin leading-loose">
                  💌 Ứng viên gửi CV về email: hatv.hr@unisoftstudio.com
                </li>
                <li className="font-thin leading-loose">
                  ➡️Hotline: 024 6662 5287 | HR Department
                </li>
                <li className="font-thin leading-loose">
                  ➡️Head Office: Tầng6, toà Up Office,75 Trần Thái Tông, Cầu Giấy, Hà Nội
                </li>
            </ul>
          </div>
        </div>
        
        {/* Top Position */}
        <div className="md:mb-12 mb-6 lg:mt-20 sm:mt-16 mt-12">
          <h2 className="md:text-2xl text-xl font-bold lg:mb-9 mb-6">{t('careers.related_jobs')}</h2>
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
      </div>

      {/* modal upload cv */}

      {modalState && <Modal setModalState={setModalState} company={jobData?.company} /> }

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
