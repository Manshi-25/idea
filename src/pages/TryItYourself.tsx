
import { useState } from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import PracticeCard from '@/components/sections/PracticeCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const TryItYourself = () => {
  const [activeDialog, setActiveDialog] = useState<'chat' | 'creative' | null>(null);
  
  const openDialog = (type: 'chat' | 'creative') => {
    setActiveDialog(type);
  };
  
  const closeDialog = () => {
    setActiveDialog(null);
  };
  
  return (
    <PageLayout>
      <HeroSection
        title="Try It Yourself"
        subtitle="Put your skills into practice with our interactive tools and simulations designed to help you apply what you've learned."
        imageSrc="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=2874&auto=format&fit=crop"
      />
      
      <section className="py-16 container">
        <div className="text-center mb-16">
          <h2 className="section-title">Interactive Practice Tools</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Select a tool below to start practicing and applying the skills you've learned.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <PracticeCard
            title="Communication Skills Practice"
            description="Practice your communication and networking skills with our AI-powered conversation simulator."
            icon={
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                <MessageSquare size={40} className="text-primary" />
              </div>
            }
            onClick={() => openDialog('chat')}
          />
          
          <PracticeCard
            title="Creative Skills Workspace"
            description="Use our creative dashboard to design logos, graphics, and other visual elements for your business."
            icon={
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles size={40} className="text-primary" />
              </div>
            }
            onClick={() => openDialog('creative')}
          />
        </div>
      </section>
      
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Practice Makes Perfect</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Regular practice is essential for skill development. Here's how our tools can help you improve:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="subsection-title">Communication Practice Benefits</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Practice networking conversations in a safe environment
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Get feedback on your communication style and effectiveness
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Improve your pitch and presentation skills
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Build confidence for real-world business interactions
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="subsection-title">Creative Practice Benefits</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Design visual elements for your brand and marketing
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Experiment with different design concepts risk-free
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Create professional-looking graphics without expert skills
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Build a visual brand identity for your business
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Communication Practice Dialog */}
      <Dialog open={activeDialog === 'chat'} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="max-w-3xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>Communication Skills Practice</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col h-full">
            <iframe
              src="https://chat.openai.com/public-links/GPT-4"
              title="Communication Skills Practice"
              className="w-full h-full rounded-md border"
              style={{ minHeight: "500px" }}
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Creative Practice Dialog */}
      <Dialog open={activeDialog === 'creative'} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>Creative Design Workspace</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col h-full">
            <iframe
              src="https://excalidraw.com/"
              title="Creative Design Workspace"
              className="w-full h-full rounded-md border"
              style={{ minHeight: "500px" }}
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default TryItYourself;
