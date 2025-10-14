import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema } from "@shared/schema";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "Validation Error",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

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
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12"
            onClick={() => window.open("https://linkedin.com/in/samuelchegewaweru", "_blank", "noopener,noreferrer")}
            data-testid="button-linkedin"
          >
            <Linkedin className="w-6 h-6 text-[#0A66C2]" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12"
            onClick={() => window.open("https://github.com/sammyweru", "_blank", "noopener,noreferrer")}
            data-testid="button-github"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12"
            onClick={() => window.open("https://x.com/cyberwithchege", "_blank", "noopener,noreferrer")}
            data-testid="button-x"
          >
            <SiX className="w-6 h-6" />
            <span className="sr-only">X (Twitter)</span>
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              data-testid="input-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
              rows={6}
              data-testid="input-message"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={contactMutation.isPending}
            data-testid="button-submit"
          >
            {contactMutation.isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
