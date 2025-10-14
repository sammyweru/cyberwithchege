import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Cisco Ethical Hacker",
    provider: "CyberShujaa",
    type: "Instructor Led",
    status: "completed"
  },
  {
    title: "Introduction to Cybersecurity",
    provider: "Cisco",
    type: "Certification",
    status: "completed"
  },
  {
    title: "OCI Foundations Associate",
    provider: "Oracle University",
    type: "Certification",
    status: "completed"
  },
  {
    title: "OCI Architect Associate",
    provider: "Oracle University",
    type: "Certification",
    status: "ongoing"
  },
  {
    title: "OCI Security Associate",
    provider: "Oracle University",
    type: "Certification",
    status: "ongoing"
  },
  {
    title: "Cloud and Network Security",
    provider: "CyberShujaa",
    type: "Training",
    status: "ongoing"
  }
];

function AnimatedClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-muted-foreground">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Hour hand - rotates every 12 seconds */}
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="origin-center"
        style={{
          animation: 'spin 12s linear infinite',
          transformOrigin: '12px 12px'
        }}
      />
      {/* Minute hand - rotates every 3 seconds */}
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="origin-center"
        style={{
          animation: 'spin 3s linear infinite',
          transformOrigin: '12px 12px'
        }}
      />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cloud security and networking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-cert-${index}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    cert.status === 'completed' ? 'bg-primary/10' : 'bg-muted'
                  }`}>
                    {cert.status === 'completed' ? (
                      <Award className="w-5 h-5 text-primary" />
                    ) : (
                      <AnimatedClock />
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  {cert.status === 'completed' ? (
                    <Badge variant="default" data-testid={`badge-status-${index}`}>
                      Completed
                    </Badge>
                  ) : (
                    <Badge variant="secondary" data-testid={`badge-status-${index}`}>
                      In Progress
                    </Badge>
                  )}
                  <Badge variant="outline" data-testid={`badge-type-${index}`}>
                    {cert.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
