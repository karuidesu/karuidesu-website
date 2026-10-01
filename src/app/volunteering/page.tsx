import Header from '@/components/sections/Header';
import VolunteerAll from '@/components/sections/VolunteerAll';
import Footer from '@/components/sections/Footer';

export default function VolunteeringPage() {
  return (
    <div id="app" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24">
        <VolunteerAll />
      </main>
      <Footer />
    </div>
  );
}
