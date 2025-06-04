
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            I'm a <span className="text-orange-400 font-semibold">passionate developer</span> who loves creating digital experiences that make a difference. 
            With expertise in modern web technologies and a <span className="text-lime-400 font-semibold">keen eye for design</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-400 to-lime-400 bg-clip-text text-transparent">My Journey</h3>
            <p className="text-gray-300 mb-4 leading-relaxed font-medium">
              Started as a <span className="text-orange-300">curious developer</span> exploring the endless possibilities of code. 
              Over the years, I've evolved into a full-stack developer with a passion for 
              creating seamless user experiences.
            </p>
            <p className="text-gray-300 leading-relaxed font-medium">
              I believe in the power of technology to solve real-world problems and 
              create <span className="text-lime-300">meaningful connections</span> between people and digital products.
            </p>
          </div>
          
          <div className="card-glow rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-lime-400 to-orange-400 bg-clip-text text-transparent">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300 font-medium">Experience</span>
                <span className="text-orange-300 font-semibold">5+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 font-medium">Projects Completed</span>
                <span className="text-lime-300 font-semibold">50+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 font-medium">Happy Clients</span>
                <span className="text-orange-300 font-semibold">30+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 font-medium">Coffee Consumed</span>
                <span className="text-lime-300 font-semibold text-xl">∞</span>
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
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-orange-300 to-lime-300 bg-clip-text text-transparent">{skill.title}</h3>
              <p className="text-gray-300 font-medium">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
