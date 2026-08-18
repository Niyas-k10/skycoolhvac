import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/common/Header.jsx';
import { Footer } from './components/common/Footer.jsx';
import { AppRouter } from './routes/AppRouter.jsx';
import { WhatsAppFloatingCTA } from './components/common/WhatsAppFloatingCTA.jsx';
import { ScrollToTop } from './components/common/ScrollToTop.jsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
        <Header />
        <main className="flex-1">
          <AppRouter />
        </main>
        <Footer />
        <WhatsAppFloatingCTA />
      </div>
    </BrowserRouter>
  );
}

export default App;
