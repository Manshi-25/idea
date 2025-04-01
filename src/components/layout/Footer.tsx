
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">EmpowerHer</span>
              <span className="text-secondary font-semibold">Ventures</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Empowering women entrepreneurs with the skills and confidence to build successful businesses.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/skill-development" className="text-muted-foreground hover:text-primary transition-colors">Skill Development</Link></li>
              <li><Link to="/try-it-yourself" className="text-muted-foreground hover:text-primary transition-colors">Try It Yourself</Link></li>
              <li><Link to="/test-your-skills" className="text-muted-foreground hover:text-primary transition-colors">Test Your Skills</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">support@empowerherventures.com</li>
              <li className="text-muted-foreground">+1 (123) 456-7890</li>
              <li className="text-muted-foreground">123 Entrepreneur St, Business City</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} EmpowerHer Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
