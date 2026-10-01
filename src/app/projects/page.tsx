import Header from '@/components/sections/Header';
import ProjectsAll from '@/components/sections/ProjectsAll';
import Footer from '@/components/sections/Footer';

export default function ProjectsPage() {
  return (
    <div id="app" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24">
        <ProjectsAll />
      </main>
      <Footer />
    </div>
  );
}
