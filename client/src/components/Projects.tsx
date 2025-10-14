import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "High-Availability Enterprise Network Design",
    summary: "Architected a fault-tolerant, three-tier hierarchical network for a simulated hospital, implementing redundant Layer 3 switching and first-hop redundancy to guarantee uptime for critical services.",
    technologies: ["Cisco Packet Tracer", "Hierarchical Design", "L3 Switching", "HSRP", "RSTP", "EtherChannel"]
  },
  {
    title: "Secure Multi-Site WAN & Internet Edge",
    summary: "Designed and configured a multi-site enterprise network using dynamic routing (OSPF) and established a secure internet edge with an ACL-based firewall and Network Address Translation (NAT).",
    technologies: ["Cisco Packet Tracer", "OSPF", "WAN", "ACLs", "Firewall", "NAT"]
  },
  {
    title: "Network Reconnaissance & Vulnerability Identification",
    summary: "Conducted hands-on security analysis using industry-standard tools to perform host discovery, port scanning, and service enumeration to identify a target network's attack surface from an attacker's perspective.",
    technologies: ["Nmap", "Wireshark", "Netcat", "Vulnerability Assessment"]
  }
];

export default function Projects() {
  const handleGithubClick = () => {
    window.open("https://github.com/sammyweru", "_blank", "noopener,noreferrer");
  };

  const handleReadStory = (projectTitle: string) => {
    console.log(`Read story clicked for: ${projectTitle}`);
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col hover-elevate" data-testid={`card-project-${index}`}>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed mt-2">
                  {project.summary}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" data-testid={`badge-tech-${index}-${techIndex}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-3">
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleGithubClick}
                  data-testid={`button-github-${index}`}
                  className="gap-2"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleReadStory(project.title)}
                  data-testid={`button-story-${index}`}
                  className="gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read the Story
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
