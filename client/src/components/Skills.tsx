import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Network, Shield } from "lucide-react";

const skillsData = [
  {
    icon: Cloud,
    title: "Cloud Architecture & Security",
    sections: [
      {
        subtitle: "Platforms",
        content: "AWS, Azure, Oracle Cloud Infrastructure (OCI)"
      },
      {
        subtitle: "Core Services",
        content: "IAM (Identity & Access Management), VPC/VNet, Security Groups, NACLs, Foundational EC2, S3, Compute & Storage."
      }
    ]
  },
  {
    icon: Network,
    title: "Network Engineering & Defense",
    sections: [
      {
        subtitle: "Architecture",
        content: "Network Design, VLAN Segmentation, Subnetting, WAN Routing (OSPF)"
      },
      {
        subtitle: "Security",
        content: "Access Control Lists (ACLs), Firewall Configuration, NAT/PAT, DHCP Snooping."
      }
    ]
  },
  {
    icon: Shield,
    title: "Security Analysis & Threat Intelligence",
    sections: [
      {
        subtitle: "Tools",
        content: "Wireshark, Nmap, Metasploit (Foundational)"
      },
      {
        subtitle: "Techniques",
        content: "Traffic Analysis, OSINT, Vulnerability Assessment, Metadata Analysis."
      }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          My Professional Toolbox
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-4xl mx-auto">
          A modern security engineer is a craftsman, and every craftsman needs a well-stocked 
          toolbox. My skills are not just a list of technologies; they are the tools I use to 
          architect, build, and defend resilient digital environments. Here's what's in my toolbox:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-skill-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skill.sections.map((section, sIndex) => (
                    <div key={sIndex}>
                      <h4 className="font-semibold text-foreground mb-2">
                        {section.subtitle}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
