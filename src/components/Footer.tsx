import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Download, Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleDownloadCV = () => {
    // Mock download - replace with actual CV file
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Replace with actual CV path
    link.download = 'CV_SeuNome.pdf';
    link.click();
  };

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/seu-perfil',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/seu-usuario',
      color: 'hover:text-gray-800'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:seu.email@exemplo.com',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-2">
              <h3 className="font-bold text-lg mb-4">Seu Nome</h3>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                UX/UI Designer e Desenvolvedor Frontend especializado em criar 
                experiências digitais excepcionais que conectam pessoas e produtos 
                através de design centrado no usuário.
              </p>
              <Button onClick={handleDownloadCV} className="mb-4">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4">Conecte-se</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="sm"
                      asChild
                      className={`p-2 ${social.color}`}
                    >
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>São Paulo, SP - Brasil</p>
                  <p>seu.email@exemplo.com</p>
                  <p>+55 (11) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Seu Nome. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>usando React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}