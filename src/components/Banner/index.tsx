'use client'

function Header ({urlImage, title, descript}: {urlImage: any, title: any, descript: any}) {
  return (
    <div className="relative">
      <img src={urlImage} alt="Background" className="lg:w-full lg:h-full object-cover" />
      <div className="absolute md:top-[35%] top-[30%] md:ml-24 ml-8 left-0 h-full flex flex-col justify-between">
        <div>
          <div className="xl:text-[86px] md:text-6xl text-3xl font-bold ">
            <span>{title}</span>
          </div>
          <p className="md:mt-3 mt-0 lg:text-2xl md:text-xl text-xs">{descript}</p>
        </div>
      </div>
    </div>
  )
};

export default Header;
