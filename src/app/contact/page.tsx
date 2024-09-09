'use client'

import { useTranslation } from "react-i18next";
import '@/app/i18n';
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Banner from "@/components/Banner";
import emailjs from 'emailjs-com';
import { useState } from "react";
import { uploadToDropbox } from "@/api/upload";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [fileError, setFileError] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  const isValidate = () => {
    if (!name) setNameError(t('validate.required'));
    if (!email) setEmailError(t('validate.required'));
    if (!phone) setPhoneError(t('validate.required'));
    if (!file) setFileError(t('validate.required'));
    return !name || !email || !phone;
  }

  const onSubmitEmail = async () => {
    setLoading(true);
    if (!process.env.NEXT_PUBLIC_SERVER_ID || !process.env.NEXT_PUBLIC_TEMPLATE_ID) {
      setLoading(false);
      return;
    }
    if (isValidate()) return;
    if (file) {
      const linkUpload = await uploadToDropbox(file);

      if (!linkUpload) {
        setLoading(false);
        toast.error(t('toast.upload_cv_error'));
        return;
      }

      const templateParams = {
        subject: name,
        email: email,
        phone: phone,
        message: message,
        link: linkUpload
      }
      emailjs.send(
        process.env.NEXT_PUBLIC_SERVER_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
      ).then(function() {
        resetForm();
        toast.success(t('toast.upload_cv_success'));
        setLoading(false);
      }, function(err) {
        toast.error(t('toast.upload_cv_error'));
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
    setFileError('');
  };
  
  return (
    <div className="bg-black text-white min-h-screen">
      <ToastContainer />
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
              <div className="space-y-4">
                <div>
                  <input
                    value={name}
                    type="text"
                    placeholder={t('contact.placeholder.name')}
                    className="w-full lg:p-6 md:p-4 p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e => { setName(e.currentTarget.value); setNameError(''); }}
                  />
                  <div className="text-red-500 mt-1">{nameError}</div>
                </div>
                <div>
                  <input
                    value={email}
                    type="email"
                    placeholder={t('contact.placeholder.email')}
                    className="w-full lg:p-6 md:p-4 p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e => { setEmail(e.currentTarget.value); setEmailError(''); }}
                  />
                  <p className="text-red-500 mt-1">{emailError}</p>
                </div>
                <div>
                  <input
                    value={phone}
                    type="tel"
                    placeholder={t('contact.placeholder.phone')}
                    className="w-full lg:p-6 md:p-4 p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e => { setPhone(e.currentTarget.value); setPhoneError(''); }}
                  />
                  <p className="text-red-500 mt-1">{phoneError}</p>
                </div>
                <textarea
                  value={message}
                  placeholder="Enter your message"
                  className="w-full lg:h-36 md:h-28 h-20 lg:p-6 md:p-4 p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={e => { setMessage(e.currentTarget.value); }}
                >
                </textarea>
                <div>
                  <div className="w-full border-dashed border-2 border-gray-300 rounded-lg flex items-center justify-center p-5 bg-slate-100">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <img 
                        src="/images/icon_upload.png" 
                        alt="Upload Icon" 
                        className="mr-4"
                      />
                      <span className="text-gray-700 text-lg font-medium">
                        {t('contact.upload_cv')}
                      </span>
                    </label>
                    {file && <p className="text-green-500 mt-2">{file.name}</p>}
                  </div>
                  <p className="text-red-500 mt-1">{fileError}</p>
                </div>
                <div className="w-full text-center pt-3">
                  <button type="submit" onClick={() => onSubmitEmail()} className="w-9/12 lg:p-6 md:p-4 p-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">{t('contact.send')}</button>
                </div>
              </div>
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
