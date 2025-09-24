import React from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Link as LinkIcon,
  Brain,
  DollarSign,
  Video,
  FileText,
} from "lucide-react";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Canteen",
      subtitle: "Smart Canteen System",
      description:
        "Take notes effortlessly with sync, organization, and rich editing.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      tags: ["React", "Node.js", "MongoDB", "Rich Text"],
      features: ["Scan Menu", "Smart Tracker", "RF-ID", "Payment Gateway"],
      
    },
    {
      id: 2,
      title: "SnipScan",
      subtitle: "Shorten & Share Links",
      description:
        "Create short links, track analytics, and generate QR codes easily.",
      icon: <LinkIcon className="w-8 h-8" />,
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      tags: ["Next.js", "PostgreSQL", "Analytics", "QR Codes"],
      features: ["Custom Aliases", "Analytics", "QR Generation"],
      
    },
    {
      id: 3,
      title: "Cashier",
      subtitle: "Cashier Apps With Ai Bot",
      description:
        "Make your store moreeeeee easy to control",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      tags: ["AI", "Gemini", "React", ],
      features: ["AI-Powered", "Personalized", "Real-time Feedback"],
      
    },
    {
      id: 4,
      title: "Expense Tracker",
      subtitle: "Track Your Expenses",
      description:
        "Monitor spending with beautiful graphs and smart categorization.",
      icon: <DollarSign className="w-8 h-8" />,
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      tags: ["Charts", "Analytics", "Finance", "Dashboard"],
      features: ["Graphs", "Categories", "Insights"],
      
    },
    {
      id: 5,
      title: "Streamify",
      subtitle: "Video Calls & Chat",
      description:
        "Connect with friends through chat, video meetings, and screen share.",
      icon: <Video className="w-8 h-8" />,
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      tags: ["WebRTC", "Chat", "Video Calls", "Meetings"],
      features: ["Video Calls", "Group Chat", "Screen Share"],
      
    },
    {
      id: 6,
      title: "Disaster Tracker",
      subtitle: "Raising your awarness",
      description:
        "To simplyfy our life",
      icon: <Sparkles className="w-8 h-8" />,
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      tags: ["GIS", "PDF Export", "Customization"],
      features: ["GIS", "PDF Export", "Customization"],
      
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              My Projects
            </h2>
          </div>
          <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A collection of innovative applications and platforms I've built,
            showcasing modern web technologies and user-centric design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white/70 backdrop-blur-md rounded-2xl border border-blue-200 overflow-hidden shadow-md transition-all duration-500 hover:scale-105"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`}
              />

              {/* Action Buttons (Always Visible) */}
              <div className="absolute top-4 right-4 z-10">
                <div className="flex gap-2">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-purple-600/10 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative p-6 sm:p-8">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6`}
                >
                  <div className="text-white">{project.icon}</div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-white/70 text-gray-800 rounded-full border border-blue-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-blue-200">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-xs font-medium rounded bg-gradient-to-r ${project.gradient} text-white`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Glow */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.gradient}`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 sm:px-8 py-4 bg-white/70 backdrop-blur-md rounded-full border border-blue-200">
            <span className="text-gray-800 text-sm sm:text-base">
              Want to see more of my work?
            </span>
            <a
              href="https://github.com/aldi1995"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
            >
              View GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/renaldi-widakdo-387153197/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
