
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
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-foreground/85 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next AI/ML project? Let's discuss how we can build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Let's Connect</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-enhanced flex items-center space-x-4">
                  <div className="w-14 h-14 glass-effect rounded-xl flex items-center justify-center bg-primary/10">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 card-enhanced">
              <h3 className="text-xl font-bold mb-6 gradient-text">Languages</h3>
              <div className="space-y-4">
                {[
                  { lang: "Portuguese", level: "Native" },
                  { lang: "English", level: "Full Professional" },
                  { lang: "French", level: "Limited Working" }
                ].map(({ lang, level }) => (
                  <div key={lang} className="flex justify-between items-center">
                    <span className="font-medium">{lang}</span>
                    <span className="text-primary font-medium">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="card-enhanced">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-foreground/90">Name</label>
                    <Input 
                      placeholder="Your name"
                      className="glass-effect border-border/50 focus:border-primary bg-input/50 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-foreground/90">Email</label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="glass-effect border-border/50 focus:border-primary bg-input/50 h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-3 text-foreground/90">Subject</label>
                  <Input 
                    placeholder="Project collaboration, consultation, etc."
                    className="glass-effect border-border/50 focus:border-primary bg-input/50 h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-3 text-foreground/90">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or idea..."
                    className="glass-effect border-border/50 focus:border-primary bg-input/50 min-h-[140px] resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full btn-primary text-lg h-12"
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
        <div className="text-center mt-20 pt-8 border-t border-border/30">
          <p className="text-muted-foreground">
            © 2025 Diego Fan. Built with passion for AI and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
