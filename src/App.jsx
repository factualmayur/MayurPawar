
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';

function App() {

  return (
    <div className="relative w-screen h-screen overflow-x-hidden overflow-y-scroll antialiased select-none no-scrollbar text-neutral-50 selection:bg-cyan-900">
      <div className="fixed top-0 z-[-1] h-full w-full">
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      </div>
      
      <div className="m-16">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        {/* <Experience/> */}
        <Projects/>
        <ContactUs/>
      </div>
    </div>
  );
}

export default App;
