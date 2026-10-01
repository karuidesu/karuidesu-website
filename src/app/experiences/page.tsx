import Header from '@/components/sections/Header';
import ExperiencesAll from '@/components/sections/ExperiencesAll';
import Footer from '@/components/sections/Footer';

export default function ExperiencesPage() {
  return (
    <div id="app" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24">
        <ExperiencesAll />
      </main>
      <Footer />
    </div>
  );
}
