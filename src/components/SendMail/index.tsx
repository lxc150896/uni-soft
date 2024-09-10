'use client'

import { useTranslation } from "react-i18next";
import '@/app/i18n';
import emailjs from 'emailjs-com';
import { useState } from "react";
import { uploadToDropbox } from "@/api/upload";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SendMail = () => {
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

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const regex = /^[0-9]+$/;
    return regex.test(phone);
  };

  const isValidate = () => {
    if (!name) setNameError(t('validate.required'));
    if (!email) {
      setEmailError(t('validate.required'))
    } else if (!validateEmail(email)) {
      setEmailError(t('validate.email'))
    }
    if (!phone) {
      setPhoneError(t('validate.required'))
    } else if (!validatePhone(phone)) {
      setPhoneError(t('validate.phone'))
    };
    if (!file) setFileError(t('validate.required'));

    return !name || !email || !phone || !validateEmail(email) || !validatePhone(phone) || !file;
  }

  const onSubmitEmail = async () => {
    setLoading(true);
    if (!process.env.NEXT_PUBLIC_SERVER_ID || !process.env.NEXT_PUBLIC_TEMPLATE_ID) {
      setLoading(false);
      return;
    }
    if (isValidate()) {
      setLoading(false);
      return;
    }

    if (file) {
      let linkUpload = await uploadToDropbox(file);

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
    <>
      <ToastContainer />
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
          <div className="mt-4 sm:p-5 p-4 border-dashed border-2 border-blue-500 rounded text-center bg-gray-700">
            <span className="flex justify-center items-center space-x-2">
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
                  className="sm:mr-6 mr-2 sm:w-5 w-4"
                />
                <span className="xl:text-lg text-base text-sm font-medium text-gray-400">
                  {t('contact.upload_cv')}
                </span>
              </label>
            </span>
          </div>
          {file && !fileError && <div className="flex mt-4"><img src='/images/paperclip_32.png' className="sm:mr-4 mr-2 w-6 h-6" /><p>{file.name}</p></div>}
          {!file && <p className="text-red-500 mt-1">{fileError}</p>}
        </div>
        <div className="w-full text-center pt-3">
          <button
            disabled={loading}
            type="submit"
            onClick={() => onSubmitEmail()}
            className="sm:w-9/12 w-full lg:p-6 md:p-4 p-3 bg-customBlue text-white font-semibold rounded hover:bg-blue-600 md:text-2xl text-xl">
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                {t('contact.sending')}
              </div>
            ) : (
              t('contact.send')
            )}
          </button>
        </div>
      </div>
    </>
  )
}
