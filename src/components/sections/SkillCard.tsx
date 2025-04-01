
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const SkillCard = ({ title, description, icon, link }: SkillCardProps) => {
  return (
    <Card className="h-full card-hover">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/70 min-h-[80px]">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="p-0 h-auto font-medium gap-2 hover:bg-transparent hover:text-primary">
          <Link to={link}>
            Explore
            <ArrowRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
