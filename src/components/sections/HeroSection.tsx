
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
  imageSrc?: string;
}

const HeroSection = ({ title, subtitle, cta, imageSrc }: HeroSectionProps) => {
  return (
    <section className="hero-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
              {title}
            </h1>
            <p className="text-lg text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
            {cta && (
              <Button asChild size="lg" className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Link to={cta.link}>{cta.text}</Link>
              </Button>
            )}
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src={imageSrc || "/placeholder.svg"} 
              alt="Hero" 
              className="rounded-lg shadow-lg w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
