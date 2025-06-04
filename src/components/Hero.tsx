
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="float-animation">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Your Name
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300">
          Full Stack Developer & Designer
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting beautiful, functional digital experiences with modern technologies. 
          Passionate about clean code, innovative solutions, and bringing ideas to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="bg-gradient-to-r from-orange-500 to-lime-500 hover:from-orange-600 hover:to-lime-600 text-white px-8 py-3 text-lg glow-effect group">
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg">
            Download CV
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
