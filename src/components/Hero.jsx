import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Sol taraf: Yazılar */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Hi, I’m Eyüp Efe
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            also known as <span className="font-semibold">SweetieBirdX</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              to="/mini-apps"
              className="bg-white text-blue-700 px-5 sm:px-6 py-2 rounded shadow font-semibold text-sm sm:text-base"
            >
              Projects
            </Link>
            <a
              href="#blog"
              className="bg-white text-blue-700 px-5 sm:px-6 py-2 rounded shadow font-semibold text-sm sm:text-base"
            >
              Blog
            </a>
          </div>
        </div>

        {/* Sağ taraf: Word cloud */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg font-semibold text-white/80">
          {[
            'Web3',
            'Web2',
            'Blockchain',
            'Smart Contracts',
            'Hackathons',
            'Self-Improvement',
            'Education',
            'Developer',
            'METU',
            'React',
            'HTML',
            'GitHub',
            'Solidity',
            'Tailwind',
            'JavaScript',
            'CSS',
          ].map((word, index) => (
            <span key={index} className="hover:text-white transition">
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
