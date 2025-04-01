
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Briefcase, Code, MessageSquare, Sparkles, ArrowLeft } from 'lucide-react';

const assessments = [
  {
    id: "1",
    title: "Business Skills Assessment",
    description: "Test your knowledge of business planning, finance, marketing, and growth strategies.",
    icon: <Briefcase size={24} />,
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf4oKjxvZbYPncUe1QxF8lOlsVvhKDhsrL-ZU1B9wYsqgSg6A/viewform?embedded=true"
  },
  {
    id: "2",
    title: "Technology Skills Assessment",
    description: "Evaluate your understanding of digital tools, platforms, and technology solutions for business.",
    icon: <Code size={24} />,
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf4oKjxvZbYPncUe1QxF8lOlsVvhKDhsrL-ZU1B9wYsqgSg6A/viewform?embedded=true"
  },
  {
    id: "3",
    title: "Communication Skills Assessment",
    description: "Assess your communication, negotiation, networking, and presentation abilities.",
    icon: <MessageSquare size={24} />,
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf4oKjxvZbYPncUe1QxF8lOlsVvhKDhsrL-ZU1B9wYsqgSg6A/viewform?embedded=true"
  },
  {
    id: "4",
    title: "Creative Skills Assessment",
    description: "Measure your creative thinking, design, and content creation capabilities.",
    icon: <Sparkles size={24} />,
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf4oKjxvZbYPncUe1QxF8lOlsVvhKDhsrL-ZU1B9wYsqgSg6A/viewform?embedded=true"
  }
];

const TestSkillDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState<typeof assessments[0] | null>(null);
  
  useEffect(() => {
    const foundAssessment = assessments.find(a => a.id === id);
    if (foundAssessment) {
      setAssessment(foundAssessment);
    } else {
      navigate('/test-your-skills');
    }
  }, [id, navigate]);
  
  if (!assessment) {
    return null;
  }
  
  return (
    <PageLayout>
      <div className="container py-10">
        <Button 
          variant="outline" 
          size="sm" 
          className="mb-6 gap-2"
          onClick={() => navigate('/test-your-skills')}
        >
          <ArrowLeft size={16} />
          Back to Assessments
        </Button>
        
        <div className="text-center mb-10">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
            {assessment.icon}
          </div>
          <h1 className="text-3xl font-bold text-primary mb-3">{assessment.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {assessment.description}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto h-[800px]">
          <iframe
            src={assessment.formUrl}
            title={assessment.title}
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </PageLayout>
  );
};

export default TestSkillDetail;
