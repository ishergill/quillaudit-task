import BeforeVsAfterAudit from "@/components/BeforeVsAfterAudit";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <main >
     <Hero/>
     <BeforeVsAfterAudit/>
     <Content/>
     <NewsLetter/>
     <Footer/>
    </main>
  );
}
