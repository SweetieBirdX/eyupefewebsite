import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">About me</h2>

        <p className="text-base sm:text-lg leading-relaxed text-center">
          Hello! My name is <span className="font-semibold text-white">Eyüp Efe</span>, aka{' '}
          <span className="font-semibold text-white">SweetieBirdX</span>. Software developing, playing games and recent updates about technology get my attention.
        </p>

        <div className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-center">
          Ever since I can remember, technological developments have always aroused my curiosity.
          Now I express myself with my projects.
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center gap-3 sm:gap-4 flex-wrap">
          <span className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-full text-xs sm:text-sm shadow-lg">
            Web3 Enthusiast
          </span>
          <span className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-full text-xs sm:text-sm shadow-lg">
            Smart Contract Developer
          </span>
          <span className="px-4 py-2 bg-white text-green-600 font-semibold rounded-full text-xs sm:text-sm shadow-lg">
            Frontend/Backend Developer
          </span>
          <span className="px-4 py-2 bg-white text-yellow-600 font-semibold rounded-full text-xs sm:text-sm shadow-lg">
            Lifelong Learner
          </span>
          <span className="px-4 py-2 bg-white text-red-600 font-semibold rounded-full text-xs sm:text-sm shadow-lg">
            Game Lover
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
