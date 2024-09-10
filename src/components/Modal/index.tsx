import { SendMail } from "../SendMail";

const Modal = (props: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => props.setModalState(false)}
      ></div>

      {/* Modal Content */}
      <div className="bg-[#1E1E1E] rounded-lg shadow-lg xl:w-[55%] lg:w-[60%] sm:w-[80%] w-[90%] sm:p-8 p-4 relative z-10">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white md:text-5xl text-3xl focus:outline-none"
          onClick={() => props.setModalState(false)}
        >
          &times;
        </button>

        {/* Modal Header */}
        <h2 className="md:text-2xl sm:text-xl text-lg font-bold text-white md:py-9 py-4 md:mr-4 mr-1">
          CV here for <span className="text-blue-500">{props.company}</span>
        </h2>

        {/* Form */}
        <SendMail />
      </div>
    </div>
  );
};

export default Modal;
