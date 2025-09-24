import React from "react";
import {
  Mail,
  Phone,
  GraduationCap,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Twitter,
  Facebook,
  Youtube,
  User,
} from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "rey.widakdo@gmail.com",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Alternate Email",
      value: "renaldi.widakdo@gmail.coom",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+62 85156928164",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      label: "Education",
      value: "S.T. in Informatics",
    },
  ];

  const socials = [
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
      </div>

      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 relative overflow-hidden border border-white/20">
        {/* Enhanced Floating Dots with better spacing */}
        <div className="absolute top-6 left-6 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
        <div
          className="absolute top-12 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="absolute bottom-8 right-8 w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
        <div
          className="absolute bottom-16 right-14 w-3 h-3 bg-cyan-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div className="absolute top-1/3 right-12 w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/2 left-8 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Profile Image Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative group mb-4">
            {/* Border wrapper (non-rotating, rounded square) */}
            <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 p-1.5">
              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-inner">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <User className="w-16 h-16 text-blue-600" />
                <img src="./aadarsh.jpg" />
                </div>
              </div>
            </div>
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
          </div>

          {/* Header with enhanced typography */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-3 text-center leading-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
              Me
            </span>
          </h1>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
            <p className="text-gray-600 text-lg font-medium">Age: 30 Years</p>
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

        {/* Contact Info with staggered animations */}
        <div className="grid gap-4 mb-8">
          {contacts.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-xl px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-blue-600 group-hover:text-purple-600 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 transform">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium group-hover:text-gray-500 transition-colors duration-300">
                  {item.label}
                </p>
                <p className="font-semibold text-gray-800 group-hover:text-gray-900 text-lg">
                  {item.value}
                </p>
              </div>
              <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="relative">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center relative">
            
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 bg-white/80 backdrop-blur-sm border ${social.borderColor} rounded-xl px-5 py-4 hover:bg-gradient-to-r ${social.brandColors} hover:text-white hover:border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {social.icon}
                </div>
                <span className="relative z-10 font-medium group-hover:font-semibold transition-all duration-300">
                  {social.label}
                </span>

                {/* Hover glow effect */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        

        {/* Floating elements for extra visual appeal */}
        <div className="absolute top-20 right-20 text-blue-200 opacity-50">
          <div className="animate-spin" style={{ animationDuration: "20s" }}>
            <Github className="w-8 h-8" />
          </div>
        </div>

        <div className="absolute bottom-32 left-16 text-purple-200 opacity-50">
          <div className="animate-bounce" style={{ animationDelay: "1s" }}>
            <MessageCircle className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
