import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Get In Touch
        </h2>

        <div className="flex justify-center gap-6 mb-12">
          {/* Social Icons */}
          <Button
            variant="ghost" size="icon" className="w-12 h-12"
            onClick={() => window.open("https://linkedin.com/in/samuelchegewaweru", "_blank", "noopener,noreferrer")}
          >
            <Linkedin className="w-6 h-6 text-[#0A66C2]" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button
            variant="ghost" size="icon" className="w-12 h-12"
            onClick={() => window.open("https://github.com/sammyweru", "_blank", "noopener,noreferrer")}
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            variant="ghost" size="icon" className="w-12 h-12"
            onClick={() => window.open("https://x.com/cyberwithchege", "_blank", "noopener,noreferrer")}
          >
            <SiX className="w-6 h-6" />
            <span className="sr-only">X (Twitter)</span>
          </Button>
        </div>

        {/* The new mailto form */}
        <form
          action="mailto:chegesam68@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Your name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Your message..." rows={6} />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Message via Email Client
          </Button>
        </form>
      </div>
    </section>
  );
}