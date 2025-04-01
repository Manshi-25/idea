
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PracticeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const PracticeCard = ({ title, description, icon, onClick }: PracticeCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Click below to start practicing this skill in an interactive environment.
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={onClick} className="w-full">
          Start Practicing
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PracticeCard;
