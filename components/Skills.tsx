const SkillCategory = ({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: string[] 
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-4 py-2 bg-background rounded-full border border-muted/50 text-sm font-medium hover:border-accent/50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Blockchain Technologies",
      skills: [
        "Ethereum", 
        "Solana", 
        "Polygon", 
        "Avalanche", 
        "Binance Smart Chain", 
        "Layer 2 Solutions", 
        "Sidechains"
      ]
    },
    {
      title: "Smart Contract Development",
      skills: [
        "Solidity", 
        "Rust", 
        "Hardhat", 
        "Truffle", 
        "Foundry", 
        "OpenZeppelin", 
        "ERC Standards", 
        "Gas Optimization"
      ]
    },
    {
      title: "Web3 Tools & Libraries",
      skills: [
        "Ethers.js", 
        "Web3.js", 
        "Wallet Connect", 
        "Metamask", 
        "The Graph", 
        "IPFS", 
        "Chainlink Oracles"
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        "React", 
        "Next.js", 
        "TypeScript", 
        "Tailwind CSS", 
        "JavaScript", 
        "HTML/CSS", 
        "Redux", 
        "Framer Motion"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js", 
        "Express", 
        "REST APIs", 
        "GraphQL", 
        "MongoDB", 
        "PostgreSQL", 
        "Firebase"
      ]
    },
    {
      title: "Dev Tools & Practices",
      skills: [
        "Git", 
        "CI/CD", 
        "Testing", 
        "Docker", 
        "AWS", 
        "Vercel", 
        "Agile Development"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 