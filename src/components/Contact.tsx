
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Let's create something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, 
              or potential collaborations. Drop me a line and let's start a conversation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-lime-500 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">hello@yourname.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-lime-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Response Time</h4>
                  <p className="text-gray-400">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-glow rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400"
              />
              
              <Input 
                placeholder="Subject" 
                className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400"
              />
              
              <Textarea 
                placeholder="Your Message" 
                rows={5}
                className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400 resize-none"
              />
              
              <Button className="w-full bg-gradient-to-r from-orange-500 to-lime-500 hover:from-orange-600 hover:to-lime-600 text-white py-3 glow-effect">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
