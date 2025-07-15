
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "diegoeco.fan@gmail.com",
      href: "mailto:diegoeco.fan@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Salvador, Bahia, Brasil",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Diego Fan",
      href: "https://www.linkedin.com/in/diegofan-636b1b1a2"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GAVB-SERVICOS",
      href: "https://github.com/GAVB-SERVICOS"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ready to collaborate on your next AI/ML project? Let's discuss how we can build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Let's Connect</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 glass-effect rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-primary">Languages</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Portuguese</span>
                  <span className="text-foreground/60">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-foreground/60">Full Professional</span>
                </div>
                <div className="flex justify-between">
                  <span>French</span>
                  <span className="text-foreground/60">Limited Working</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name"
                    className="glass-effect border-foreground/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="glass-effect border-foreground/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="Project collaboration, consultation, etc."
                  className="glass-effect border-foreground/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or idea..."
                  className="glass-effect border-foreground/20 focus:border-primary min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full glass-effect hover-glow border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                size="lg"
              >
                Send Message
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20 pt-8 border-t border-foreground/10">
        <p className="text-foreground/60">
          © 2025 Diego Fan. Built with passion for AI and innovation.
        </p>
      </div>
    </section>
  );
};

export default Contact;
