export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Peter Lee</h1>
            <h2 className="text-2xl text-gray-300 mb-4">Full Stack Web Developer</h2>
            <p className="text-xl mb-8">
              Transforming ideas into elegant digital solutions
            </p>
            <div className="space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg inline-block"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 text-center">
            <img
              src="/peter_lee.jpg"
              alt="Peter Lee"
              className="rounded-full shadow-2xl mx-auto w-64 h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}