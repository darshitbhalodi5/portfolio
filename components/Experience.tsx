const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies
}: {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}) => {
  return (
    <div className="mb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-sm text-accent font-mono mt-1 sm:mt-0">{period}</span>
      </div>
      <p className="text-lg font-semibold mb-2">{company}</p>
      <ul className="list-disc pl-5 mb-3 space-y-1">
        {description.map((item, index) => (
          <li key={index} className="text-foreground/80">{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-3">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Senior Blockchain Engineer",
      company: "DeFi Protocol Inc.",
      period: "2021 - Present",
      description: [
        "Lead the development of a decentralized lending protocol with over $50M in TVL",
        "Designed and implemented smart contracts with advanced security features and gas optimizations",
        "Worked closely with auditors to ensure contract security and fix vulnerabilities",
        "Built the protocol's governance system and token distribution mechanism"
      ],
      technologies: ["Solidity", "Ethereum", "Hardhat", "React", "Ethers.js", "The Graph"]
    },
    {
      title: "Blockchain Developer",
      company: "NFT Marketplace Studio",
      period: "2019 - 2021",
      description: [
        "Developed smart contracts for NFT minting, trading, and royalty distribution",
        "Integrated multiple blockchain networks to create a cross-chain NFT platform",
        "Created auction mechanisms with various bidding strategies",
        "Built metadata storage solutions using IPFS and decentralized file storage"
      ],
      technologies: ["Solidity", "ERC-721/ERC-1155", "IPFS", "Polygon", "React", "Node.js"]
    },
    {
      title: "Full Stack Developer",
      company: "Web3 Startup",
      period: "2018 - 2019",
      description: [
        "Built web interfaces for blockchain applications focusing on wallet integration",
        "Developed RESTful APIs to interact with various blockchain networks",
        "Created a dashboard for tracking on-chain metrics and portfolio management",
        "Contributed to open-source Web3 libraries and tools"
      ],
      technologies: ["React", "TypeScript", "Web3.js", "Node.js", "MongoDB", "Docker"]
    },
    {
      title: "Smart Contract Auditor (Freelance)",
      company: "Various Web3 Projects",
      period: "2017 - 2018",
      description: [
        "Conducted security audits for smart contracts and blockchain protocols",
        "Identified critical vulnerabilities and recommended fixes",
        "Provided guidance on best practices for secure smart contract development",
        "Developed automated testing tools to identify common security issues"
      ],
      technologies: ["Solidity", "Security Analysis", "Formal Verification", "Testing Frameworks"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              technologies={exp.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 