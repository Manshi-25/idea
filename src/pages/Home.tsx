
import { BookOpen, Users, Sparkles, BarChart } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <PageLayout>
      <HeroSection
        title="Empowering Women Entrepreneurs"
        subtitle="Develop the skills you need to build, grow and scale your business. Join our community of women entrepreneurs and take your venture to new heights."
        cta={{ text: "Explore Skills", link: "/skill-development" }}
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
      />
      
      <section className="py-16 container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why EmpowerHer Ventures?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive resources designed specifically for women entrepreneurs
            to build the skills needed for success in today's business landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <BookOpen size={24} />
              </div>
              <CardTitle>Comprehensive Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access curated content covering business, technology, communication, and creative skills essential for entrepreneurs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users size={24} />
              </div>
              <CardTitle>Community Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect with a network of like-minded women entrepreneurs for mentorship, collaboration, and inspiration.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles size={24} />
              </div>
              <CardTitle>Practical Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Practice your skills with interactive tools and real-world scenario simulations to build confidence.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <BarChart size={24} />
              </div>
              <CardTitle>Skill Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Evaluate your progress with comprehensive skill assessments to identify strengths and areas for improvement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="section-title">Our Learning Pathways</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive learning tracks designed to help you develop the skills you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Learn & Develop</h3>
              <p className="mb-4 text-muted-foreground">
                Access high-quality video lectures, live sessions, and resources across business, 
                technology, communication, and creative domains.
              </p>
              <Button asChild variant="outline">
                <Link to="/skill-development">Explore Skills</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Practice & Apply</h3>
              <p className="mb-4 text-muted-foreground">
                Put your learning into action with interactive tools like our soft skills 
                chatbot and creative dashboard for hands-on experience.
              </p>
              <Button asChild variant="outline">
                <Link to="/try-it-yourself">Try It Yourself</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Test & Measure</h3>
              <p className="mb-4 text-muted-foreground">
                Evaluate your progress and identify areas for improvement with our 
                comprehensive skill assessments.
              </p>
              <Button asChild variant="outline">
                <Link to="/test-your-skills">Test Your Skills</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Community & Support</h3>
              <p className="mb-4 text-muted-foreground">
                Connect with fellow women entrepreneurs for networking, advice, mentorship, 
                and collaborations to help grow your business.
              </p>
              <Button asChild variant="outline">
                <Link to="/">Join Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 container">
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how women entrepreneurs have transformed their businesses with the skills
            they've learned through our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden card-hover">
              <div className="h-48 bg-muted"></div>
              <CardHeader>
                <CardTitle>Success Story {i}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "This platform helped me develop the skills I needed to grow my business by 200% in just one year. 
                  The practical learning approach made all the difference."
                </p>
                <p className="font-medium">- Entrepreneur {i}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Entrepreneurial Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of women entrepreneurs who are building successful businesses
            with the skills they've learned on our platform.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/skill-development">Start Learning Today</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
