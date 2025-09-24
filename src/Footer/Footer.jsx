import {
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Twitter,
  Facebook,
  Youtube,
  Heart,
  Coffee,
  Code,
} from "lucide-react";

const Footer = () => {
  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/aldi1995",
      bg: "bg-gray-800",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/renaldi-widakdo-387153197/",
      bg: "bg-[#0A66C2]",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      link: "https://instagram.com/renaldibagus95",
      bg: "bg-[#E4405F]",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      link: "https://wa.me/6285156928164",
      bg: "bg-[#25D366]",
    },
    {
      
    },
    {
      
    },
    {
      
    },
  ];

  return (
    <footer className="mt-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Brand Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Renaldi B Widakdo
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mt-2"></div>
            <p className="text-gray-600 text-lg max-w-md mx-auto mt-4">
              Full Stack Developer • Creative Problem Solver • Tech Enthusiast
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4 w-full max-w-2xl">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-4 rounded-xl text-white transition-transform duration-200 hover:scale-105 ${social.bg}`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span>{social.icon}</span>
                  <span className="text-xs font-medium">{social.label}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-gray-200"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-4 text-gray-600">
            <div className="flex items-center space-x-2 text-sm">
              <span>© {new Date().getFullYear()}</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>All rights reserved</span>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <Code className="w-4 h-4 text-blue-600" />
              <span>&</span>
              <Coffee className="w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
