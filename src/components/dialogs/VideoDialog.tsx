
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle: string;
  videoSrc: string;
}

const VideoDialog = ({ isOpen, onClose, videoTitle, videoSrc }: VideoDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div>
            <DialogTitle>{videoTitle}</DialogTitle>
            <DialogDescription>
              Watch this lesson to improve your skills
            </DialogDescription>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="h-8 w-8 rounded-full"
          >
            <X size={16} />
          </Button>
        </DialogHeader>
        <div className="aspect-video w-full bg-black rounded-md overflow-hidden">
          <iframe
            src={videoSrc}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
