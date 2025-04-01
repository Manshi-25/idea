
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from './ChatBot';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default PageLayout;
