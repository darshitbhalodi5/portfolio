const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Hi there! I&apos;m Darshit, a passionate Web3 developer with expertise in blockchain technologies and decentralized applications. I enjoy working at the intersection of cutting-edge technology and practical applications.
            </p>
            <p className="text-lg mb-4">
              My journey in Web3 began several years ago when I first discovered Bitcoin. Since then, I&apos;ve been fascinated by the potential of blockchain to transform various industries and have dedicated my career to building in this space.
            </p>
            <p className="text-lg mb-4">
              I specialize in developing smart contracts, DeFi protocols, NFT platforms, and integrating Web2 applications with blockchain technology. My goal is to create secure, efficient, and user-friendly decentralized solutions.
            </p>
            <p className="text-lg">
              When I&apos;m not coding, you can find me researching new blockchain protocols, participating in hackathons, or contributing to open-source projects in the Web3 ecosystem.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-accent/30 to-primary/30 blur-xl opacity-70"></div>
              <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-accent/10">
                <h3 className="font-bold text-xl mb-4 gradient-text">My Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Smart Contract Development (Solidity)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    DeFi Protocol Development
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    NFT Solutions & Marketplaces
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Web3 Integration with Web2 Applications
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Full-Stack Web Development (Next.js, React)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Blockchain Architecture & Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 