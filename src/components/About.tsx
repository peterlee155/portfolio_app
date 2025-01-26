export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-gray-600 mb-4">
              Hello! I'm Peter Lee, a dedicated Next.js developer with a unique journey that has shaped my passion for technology and innovation. Originally from Myanmar, I overcame numerous challenges to pursue my dream of becoming a developer.
            </p>
            <p className="text-gray-600 mb-4">
              Born in Myanmar, I relocated to Malaysia to explore better opportunities. While working, I self-taught programming during breaks and late nights. This determination allowed me to bridge the gap between my dreams and reality. Every line of code I write reflects my commitment to growth and excellence.
            </p>
            <p className="text-gray-600">
              Beyond coding, I aspire to build a city as dynamic as New York—where people thrive and opportunities abound. This dream fuels my ambition and keeps me striving for greatness.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Technical Expertise</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-blue-600">Frontend Expertise</h4>
                <p className="text-gray-600">
                  Developing responsive and visually engaging interfaces with React.js and Next.js.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-blue-600">Backend Integration</h4>
                <p className="text-gray-600">
                  Connecting dynamic frontends with secure and efficient backends.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-blue-600">Performance Optimization</h4>
                <p className="text-gray-600">
                  Crafting web apps that deliver seamless user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}