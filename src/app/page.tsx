export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <header className="relative from-blue-900 to-black text-white" style={{ backgroundImage: "url('/images/background.png')"}}>
        <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
          <div className="flex items-center space-x-4">
            <img src="/images/logo.png" alt="Logo" className="w-28 h-20" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">En | Vi</a>
          </nav>
        </div>
        <div className="text-center py-24">
          <h1 className="text-5xl font-bold leading-tight">
            Innovation<br />Creativity<br />Go beyond
          </h1>
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-600 rounded-full text-lg font-semibold">
            Learn More &rarr;
          </button>
        </div>
      </header>

      {/* Leading Corporations Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-4xl mx-auto mt-8">
        <div className="bg-black text-white flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-10">Leading Corporations</h1>
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
