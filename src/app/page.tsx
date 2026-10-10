import Navbar from "@/components/navbar";
import ScrollProgress from "@/components/scroll-progress";
import Hero from "@/components/hero";
// Versão mobile da seção de processo — desativada. Para reativar, descomente
// este import e o <ProcessMobile /> abaixo (e remova o <ProcessWeb />).
// import ProcessMobile from "@/components/process";
import ProcessWeb from "@/components/process-web";
import About from "@/components/about";
import Features from "@/components/features";
import Works from "@/components/works";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div
      id="top"
      className="relative w-full overflow-x-clip bg-[#0c0a0f] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(214,196,255,0.14),transparent),radial-gradient(ellipse_60%_50%_at_80%_110%,rgba(167,139,250,0.1),transparent)]"
    >
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <ProcessWeb />
        {/* <ProcessMobile /> */}
        <Works />
      </main>
      <Footer />
    </div>
  );
}
