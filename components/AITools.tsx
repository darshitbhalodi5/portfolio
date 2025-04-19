import Image from 'next/image';
import React from 'react';

interface AITool {
  name: string;
  description: string;
  url: string;
  icon: string;
  category?: string;
}

const AITools: React.FC = () => {
  const aiTools: AITool[] = [
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that helps write better code faster. Used for code completion and generation throughout this project.",
      url: "https://github.com/features/copilot",
      icon: "/icons/copilot.svg",
      category: "Development"
    },
    {
      name: "Claude",
      description: "Advanced AI assistant for content creation, brainstorming ideas, and debugging complex issues in this portfolio.",
      url: "https://claude.ai",
      icon: "/icons/claude.svg",
      category: "Content & Problem-Solving"
    },
    {
      name: "Midjourney",
      description: "AI image generation tool used to create custom visual elements and inspiration for the design of this portfolio.",
      url: "https://midjourney.com",
      icon: "/icons/midjourney.svg",
      category: "Design"
    },
    {
      name: "ChatGPT",
      description: "Versatile AI assistant used for brainstorming, content refinement, and researching technical solutions.",
      url: "https://chat.openai.com",
      icon: "/icons/chatgpt.svg",
      category: "Content & Problem-Solving"
    },
    {
      name: "Cursor",
      description: "AI-powered code editor that enhances coding workflow with intelligent suggestions and explanations.",
      url: "https://cursor.sh",
      icon: "/icons/cursor.svg",
      category: "Development"
    },
    {
      name: "RunwayML",
      description: "Creative AI tools that assisted with generating visual assets and design elements.",
      url: "https://runwayml.com",
      icon: "/icons/runway.svg",
      category: "Design"
    }
  ];

  // Group tools by category
  const categorizedTools: {[key: string]: AITool[]} = {};
  aiTools.forEach(tool => {
    const category = tool.category || "Other";
    if (!categorizedTools[category]) {
      categorizedTools[category] = [];
    }
    categorizedTools[category].push(tool);
  });
  
  return (
    <section id="ai-tools" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          AI <span className="gradient-text">Corner</span>
        </h2>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          AI tools that enhance my development workflow, creative process, and problem-solving abilities
        </p>
        
        {Object.entries(categorizedTools).map(([category, tools]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                        <Image src={tool.icon} alt={tool.name} width={48} height={48} className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold">{tool.name}</h3>
                    </div>
                    <p className="text-foreground/80 mb-4">{tool.description}</p>
                    <a 
                      href={tool.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:underline font-medium"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AITools; 