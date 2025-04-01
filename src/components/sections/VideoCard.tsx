
import { Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface VideoCardProps {
  title: string;
  duration: string;
  instructor: string;
  thumbnail: string;
  onClick: () => void;
}

const VideoCard = ({ title, duration, instructor, thumbnail, onClick }: VideoCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
            onClick={onClick}
          >
            <Play className="h-6 w-6 text-white" fill="white" />
          </Button>
        </div>
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
        <CardDescription>Instructor: {instructor}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0">
        <Button variant="outline" onClick={onClick} className="w-full">
          Watch Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
