import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import AnimatedElement from './AnimatedElement';

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  demoUrl, 
  codeUrl,
  index
}: {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
  index: number;
}) => {
  return (
    <AnimatedElement
      variant="fadeInUp"
      delay={0.1 + index * 0.1}
      className="card overflow-hidden flex flex-col h-full group"
      whileHover="scale"
    >
      <div className="relative h-52 w-full bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          className="object-contain p-4 transition-transform group-hover:scale-110 duration-300"
        />
      </div>
      <div className="flex-1 p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-foreground/80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between p-6 pt-0 border-t border-accent/10 mt-4">
        {demoUrl && (
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium flex items-center hover:scale-105 transition-transform"
          >
            <span>Demo</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        )}
        {codeUrl && (
          <a 
            href={codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium flex items-center hover:scale-105 transition-transform"
          >
            <span>Code</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </a>
        )}
      </div>
    </AnimatedElement>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "DeFi Lending Protocol",
      description: "A decentralized lending protocol built on Ethereum that allows users to lend and borrow crypto assets with algorithmically determined interest rates.",
      tags: ["Solidity", "Hardhat", "React", "Ethers.js", "DeFi"],
      imageUrl: "/projects/placeholder.svg",
      demoUrl: "https://example.com/defi-lending",
      codeUrl: "https://github.com/darshit/defi-lending"
    },
    {
      title: "NFT Marketplace",
      description: "A full-featured NFT marketplace with minting, buying, selling, and auction capabilities. Supports multiple blockchains via cross-chain bridges.",
      tags: ["Solidity", "Next.js", "IPFS", "Polygon", "NFT"],
      imageUrl: "/projects/placeholder.svg",
      demoUrl: "https://example.com/nft-marketplace",
      codeUrl: "https://github.com/darshit/nft-marketplace"
    },
    {
      title: "DAO Governance Platform",
      description: "A decentralized autonomous organization platform with proposal creation, voting mechanisms, and treasury management capabilities.",
      tags: ["Solidity", "The Graph", "React", "TypeScript", "DAO"],
      imageUrl: "/projects/placeholder.svg",
      demoUrl: "https://example.com/dao-platform",
      codeUrl: "https://github.com/darshit/dao-platform"
    },
    {
      title: "Web3 Authentication SDK",
      description: "A JavaScript SDK that simplifies Web3 authentication and wallet management for decentralized applications.",
      tags: ["TypeScript", "Web3.js", "Wallet Connect", "EIP-712"],
      imageUrl: "/projects/placeholder.svg",
      demoUrl: "https://example.com/web3-auth",
      codeUrl: "https://github.com/darshit/web3-auth"
    },
    {
      title: "Cross-Chain Token Bridge",
      description: "A secure bridge for transferring tokens between different blockchain networks using atomic swaps and relayer nodes.",
      tags: ["Solidity", "Cosmos SDK", "Go", "Cross-chain"],
      imageUrl: "/projects/placeholder.svg",
      demoUrl: "https://example.com/token-bridge",
      codeUrl: "https://github.com/darshit/token-bridge"
    },
    {
      title: "DeFi Portfolio Manager",
      description: "A dashboard to track, analyze, and optimize DeFi investments across various protocols and blockchains.",
      tags: ["React", "Redux", "Web3.js", "DeFi", "Analytics"],
      imageUrl: "/projects/placeholder.svg",
      demoUrl: "https://example.com/defi-portfolio",
      codeUrl: "https://github.com/darshit/defi-portfolio"
    }
  ];

  return (
    <AnimatedSection id="projects" variant="fadeIn" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement variant="fadeInUp" className="text-3xl font-bold mb-12 text-center">
          My <span className="gradient-text">Projects</span>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects; 