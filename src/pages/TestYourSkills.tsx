
import { Briefcase, Code, MessageSquare, Sparkles } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import SkillCard from '@/components/sections/SkillCard';

const TestYourSkills = () => {
  const assessments = [
    {
      title: "Business Skills Assessment",
      description: "Test your knowledge of business planning, finance, marketing, and growth strategies.",
      icon: <Briefcase size={24} />,
      link: "https://forms.gle/abc123",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf4oKjxvZbYPncUe1QxF8lOlsVvhKDhsrL-ZU1B9wYsqgSg6A/viewform?embedded=true"
    },
    {
      title: "Technology Skills Assessment",
      description: "Evaluate your understanding of digital tools, platforms, and technology solutions for business.",
      icon: <Code size={24} />,
      link: "https://forms.gle/def456",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf4oKjxvZbYPncUe1QxF8lOlsVvhKDhsrL-ZU1B9wYsqgSg6A/viewform?embedded=true"
    },
    {
      title: "Communication Skills Assessment",
      description: "Assess your communication, negotiation, networking, and presentation abilities.",
      icon: <MessageSquare size={24} />,
      link: "https://forms.gle/ghi789",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf4oKjxvZbYPncUe1QxF8lOlsVvhKDhsrL-ZU1B9wYsqgSg6A/viewform?embedded=true"
    },
    {
      title: "Creative Skills Assessment",
      description: "Measure your creative thinking, design, and content creation capabilities.",
      icon: <Sparkles size={24} />,
      link: "https://forms.gle/jkl012",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf4oKjxvZbYPncUe1QxF8lOlsVvhKDhsrL-ZU1B9wYsqgSg6A/viewform?embedded=true"
    }
  ];

  return (
    <PageLayout>
      <HeroSection
        title="Test Your Skills"
        subtitle="Evaluate your entrepreneurial skills with our comprehensive assessments and identify areas for improvement."
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop"
      />
      
      <section className="py-16 container">
        <div className="text-center mb-16">
          <h2 className="section-title">Skill Assessments</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose an assessment below to evaluate your skills and get personalized recommendations
            for improvement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assessments.map((assessment, index) => (
            <SkillCard
              key={index}
              title={assessment.title}
              description={assessment.description}
              icon={assessment.icon}
              link={`/test-your-skills/${index + 1}`}
            />
          ))}
        </div>
      </section>
      
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Take Assessments?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Regular skill assessment is a crucial part of your entrepreneurial development journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Identify Strengths</h3>
              <p className="text-muted-foreground">
                Discover which skills you've already mastered so you can leverage them in your business journey.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Pinpoint Gaps</h3>
              <p className="text-muted-foreground">
                Identify areas where you need improvement, allowing you to focus your learning efforts effectively.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Track Progress</h3>
              <p className="text-muted-foreground">
                Regularly reassess your skills to measure your growth and development over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 container text-center">
        <h2 className="section-title">Ready to Test Your Skills?</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Select one of the assessments above to begin your evaluation and get personalized insights.
        </p>
      </section>
    </PageLayout>
  );
};

export default TestYourSkills;
