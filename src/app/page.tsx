import Introduction from "@/components/ui/Introduction";
import Experience from "@/components/ui/Experience";
import AboutMe from "@/components/ui/AboutMe";
import Education from "@/components/ui/Education";

export default function Home() {
  return (
    <main className="min-h-screen p-5 xs:p-24">
      <div className="flex flex-col lg:flex-row justify-center gap-3">
        <div className="flex flex-col gap-3">
          <Introduction></Introduction>
          <AboutMe></AboutMe>
        </div>
        <div className="flex flex-col gap-3">
          <Experience></Experience>
          <Education></Education>
        </div>
      </div>
    </main>
  );
}
