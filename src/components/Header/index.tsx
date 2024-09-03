import '@/app/i18n';
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <div className="relative">
      <img src="/images/header_bg.png" alt="Background" className="md:w-full md:h-full object-cover max-h-32" />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
        <div>
          <div className="xl:ml-20 lg:ml-14 ml-4 xl:mr-28 lg:mr-20 mr-4 mx-auto flex justify-between items-center lg:py-8 md:py-4 py-2 h-auto">
            <div className="flex items-center space-x-4">
              <img src="/images/logo.png" alt="Logo" className="xl:w-24 xl:h-16 md:w-14 md:h-10 w-10 h-6" />
            </div>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  )
};
