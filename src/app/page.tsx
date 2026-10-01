import Universe from '@/components/canvas/Universe';
import Header from '@/components/sections/Header';
import HomeSection from '@/components/sections/Home';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Volunteer from '@/components/sections/Volunteer';
import Interests from '@/components/sections/Interests';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Page() {
  return (
    <>
      <Universe />
      <div id="app" className="flex flex-col min-h-screen">
        <Header />
        <main>
          <HomeSection />
          <About />
          <Skills />
          <Projects />
          <Volunteer />
          <Interests />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
