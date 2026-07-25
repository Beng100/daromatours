import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { WhatsappButton } from '../ui/WhatsappButton';

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-sand-50 text-night-800">
      <a href="#main-content" className="skip-link">
        דלג לתוכן הראשי
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsappButton variant="floating" />
    </div>
  );
}
