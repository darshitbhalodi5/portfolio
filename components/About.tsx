import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import AnimatedElement from './AnimatedElement';

const About = () => {
  return (
    <AnimatedSection id="about" variant="fadeIn" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <AnimatedElement
            variant="fadeInLeft"
            className="lg:w-1/2 relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0 mb-8 lg:mb-0">
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-lg"></div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/10 rounded-lg"></div>
              
              {/* Profile image */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-lg">
                <Image
                  src="/profile.png" 
                  alt="Darshit Bhalodi" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement
            variant="fadeInRight"
            delay={0.2}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-lg mb-4 text-foreground/80">
              I&apos;m a blockchain developer with a passion for building decentralized applications that revolutionize how we interact with technology and each other.
            </p>
            
            <p className="text-lg mb-6 text-foreground/80">
              With over 5 years of experience in Web3 development, I&apos;ve worked on everything from smart contracts and DeFi protocols to NFT platforms and DAO governance systems. I believe in the power of blockchain to create more transparent, efficient, and equitable systems.
            </p>
            
            <AnimatedElement
              variant="fadeInUp"
              delay={0.4}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="bg-accent/10 px-4 py-2 rounded-lg border border-accent/20">
                <span className="text-accent font-bold">5+</span>
                <p className="text-sm">Years Experience</p>
              </div>
              
              <div className="bg-accent/10 px-4 py-2 rounded-lg border border-accent/20">
                <span className="text-accent font-bold">30+</span>
                <p className="text-sm">Projects Completed</p>
              </div>
              
              <div className="bg-accent/10 px-4 py-2 rounded-lg border border-accent/20">
                <span className="text-accent font-bold">15+</span>
                <p className="text-sm">Smart Contracts</p>
              </div>
            </AnimatedElement>
            
            <div className="flex flex-wrap gap-2">
              <AnimatedElement
                variant="fadeInUp"
                delay={0.6}
                className="inline-block"
              >
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <span>Download Resume</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </a>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About; 