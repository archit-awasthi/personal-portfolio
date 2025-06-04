
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code2, title: "Development", description: "React, TypeScript, Node.js, Python" },
    { icon: Palette, title: "Design", description: "UI/UX, Figma, Adobe Creative Suite" },
    { icon: Rocket, title: "Strategy", description: "Product Planning, Technical Leadership" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference. 
            With expertise in modern web technologies and a keen eye for design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">My Journey</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Started as a curious developer exploring the endless possibilities of code. 
              Over the years, I've evolved into a full-stack developer with a passion for 
              creating seamless user experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I believe in the power of technology to solve real-world problems and 
              create meaningful connections between people and digital products.
            </p>
          </div>
          
          <div className="card-glow rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Experience</span>
                <span className="text-white">5+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Projects Completed</span>
                <span className="text-white">50+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Happy Clients</span>
                <span className="text-white">30+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Coffee Consumed</span>
                <span className="text-white">∞</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="card-glow rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <skill.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
