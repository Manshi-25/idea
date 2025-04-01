
import { useState } from 'react';
import { Briefcase, Code, MessageSquare, Sparkles } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import VideoCard from '@/components/sections/VideoCard';
import VideoDialog from '@/components/dialogs/VideoDialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for videos
const videos = {
  business: [
    {
      id: 1,
      title: "Business Plan Fundamentals",
      duration: "45:20",
      instructor: "Sarah Johnson",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/Fqch5OrUPvA", // Example YouTube video
    },
    {
      id: 2,
      title: "Financial Planning for Startups",
      duration: "38:15",
      instructor: "Emily Chen",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/KyFVA4Spcgg",
    },
    {
      id: 3,
      title: "Marketing Strategy Essentials",
      duration: "52:10",
      instructor: "Lisa Nguyen",
      thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2940&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/Rb7lc2E-Gy8",
    },
    {
      id: 4,
      title: "Building a Scalable Business Model",
      duration: "41:30",
      instructor: "Alexandra Smith",
      thumbnail: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2942&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/wEy-VrzIh6Y",
    },
  ],
  technology: [
    {
      id: 1,
      title: "Digital Tools for Entrepreneurs",
      duration: "36:45",
      instructor: "Priya Patel",
      thumbnail: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=2940&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/NVq4KC1fUzs",
    },
    {
      id: 2,
      title: "Intro to E-commerce Platforms",
      duration: "49:20",
      instructor: "Michelle Taylor",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/5eiihxV7ydM",
    },
    {
      id: 3,
      title: "Social Media Management Tools",
      duration: "33:15",
      instructor: "Rachel Davis",
      thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2948&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/oCwIPiyWJCo",
    },
    {
      id: 4,
      title: "Introduction to Data Analytics",
      duration: "55:00",
      instructor: "Jennifer Wong",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/ua-CiDNNj30",
    },
  ],
  communication: [
    {
      id: 1,
      title: "Effective Business Communication",
      duration: "42:30",
      instructor: "Nicole Adams",
      thumbnail: "https://images.unsplash.com/photo-1573497161221-526e4e3be339?q=80&w=2942&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/Yf5iQUhyzrU",
    },
    {
      id: 2,
      title: "Public Speaking for Entrepreneurs",
      duration: "39:15",
      instructor: "Sophia Martinez",
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2940&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/Ie2Cd4ZBcJc",
    },
    {
      id: 3,
      title: "Networking Skills and Strategies",
      duration: "47:50",
      instructor: "Olivia Johnson",
      thumbnail: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=2858&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/6M8Ux0xiE4w",
    },
    {
      id: 4,
      title: "Negotiation Techniques",
      duration: "51:20",
      instructor: "Emma Thompson",
      thumbnail: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2940&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/MXh1_nbvUU8",
    },
  ],
  creative: [
    {
      id: 1,
      title: "Brand Design Basics",
      duration: "44:10",
      instructor: "Grace Lee",
      thumbnail: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=2874&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/pJ3IPRqiD2M",
    },
    {
      id: 2,
      title: "Content Creation Strategies",
      duration: "38:45",
      instructor: "Isabella Garcia",
      thumbnail: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2002&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/lsXFcbNkRHY",
    },
    {
      id: 3,
      title: "Visual Storytelling for Business",
      duration: "46:30",
      instructor: "Zoe Williams",
      thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2787&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/9vgd2QCn4XE",
    },
    {
      id: 4,
      title: "Design Thinking for Entrepreneurs",
      duration: "49:15",
      instructor: "Maya Rodriguez",
      thumbnail: "https://images.unsplash.com/photo-1588600878108-578031cc6a4d?q=80&w=2832&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/a7sEoEvT8l8",
    },
  ],
};

const SkillDevelopment = () => {
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    videoSrc: string;
  } | null>(null);
  
  const openVideo = (title: string, videoSrc: string) => {
    setActiveVideo({ title, videoSrc });
  };
  
  const closeVideo = () => {
    setActiveVideo(null);
  };
  
  return (
    <PageLayout>
      <HeroSection
        title="Skill Development"
        subtitle="Master the essential skills needed to build and grow your business with our comprehensive learning resources."
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop"
      />
      
      <section className="py-16 container">
        <Tabs defaultValue="business">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-4">
              <TabsTrigger value="business" className="flex flex-col items-center gap-2 py-3">
                <Briefcase size={20} />
                <span>Business</span>
              </TabsTrigger>
              <TabsTrigger value="technology" className="flex flex-col items-center gap-2 py-3">
                <Code size={20} />
                <span>Technology</span>
              </TabsTrigger>
              <TabsTrigger value="communication" className="flex flex-col items-center gap-2 py-3">
                <MessageSquare size={20} />
                <span>Communication</span>
              </TabsTrigger>
              <TabsTrigger value="creative" className="flex flex-col items-center gap-2 py-3">
                <Sparkles size={20} />
                <span>Creative</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="business">
            <div className="text-center mb-10">
              <h2 className="section-title">Business Skills</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Master the fundamentals of business planning, finance, marketing, and growth strategies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.business.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  duration={video.duration}
                  instructor={video.instructor}
                  thumbnail={video.thumbnail}
                  onClick={() => openVideo(video.title, video.videoSrc)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="technology">
            <div className="text-center mb-10">
              <h2 className="section-title">Technology Skills</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Learn how to leverage digital tools, e-commerce platforms, and technology solutions for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.technology.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  duration={video.duration}
                  instructor={video.instructor}
                  thumbnail={video.thumbnail}
                  onClick={() => openVideo(video.title, video.videoSrc)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="communication">
            <div className="text-center mb-10">
              <h2 className="section-title">Soft Skills & Communication</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Develop effective communication, negotiation, networking, and presentation skills.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.communication.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  duration={video.duration}
                  instructor={video.instructor}
                  thumbnail={video.thumbnail}
                  onClick={() => openVideo(video.title, video.videoSrc)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="creative">
            <div className="text-center mb-10">
              <h2 className="section-title">Creative Skills</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Master design thinking, content creation, brand design, and visual storytelling for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.creative.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  duration={video.duration}
                  instructor={video.instructor}
                  thumbnail={video.thumbnail}
                  onClick={() => openVideo(video.title, video.videoSrc)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      <section className="py-16 bg-muted">
        <div className="container text-center">
          <h2 className="section-title">Live Sessions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            Join our interactive live sessions with industry experts and fellow entrepreneurs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-left card-hover">
                <CardHeader>
                  <div className="bg-primary/10 text-primary rounded px-3 py-1 text-sm inline-block mb-2">
                    Upcoming
                  </div>
                  <CardTitle>Workshop: {i === 1 ? "Business Growth" : i === 2 ? "Digital Marketing" : "Leadership"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {i === 1 
                      ? "Learn effective strategies to scale your business sustainably."
                      : i === 2 
                        ? "Master digital marketing techniques to reach more customers."
                        : "Develop leadership skills to build and manage effective teams."}
                  </p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Date: {i === 1 ? "June 15" : i === 2 ? "June 22" : "June 29"}</span>
                    <span>Duration: 2 hours</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {activeVideo && (
        <VideoDialog
          isOpen={!!activeVideo}
          onClose={closeVideo}
          videoTitle={activeVideo.title}
          videoSrc={activeVideo.videoSrc}
        />
      )}
    </PageLayout>
  );
};

export default SkillDevelopment;
