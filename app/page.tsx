import { Header } from "@/components/header/Header";
import { About } from "@/components/About/About";
import { Interior } from "@/components/Interior/Interior";
import { Services } from "@/components/Services/Services";
import { Customers } from "@/components/Customers/Customers";
import { FeaturedProjects } from "@/components/FeaturedProjects/FeaturedProjects";
import { OurTeam } from "@/components/OurTeam/OurTeam";
import { Touch } from "@/components/Touch/Touch";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Interior
        bgImage={"/Interior1.jpg"}
        flex="flex-end"
        title="REEDING HOUSE"
      />
      <Services />
      <Interior
        bgImage={"/Interior2.jpg"}
        flex="flex-end"
        title="THE MARBLE STAIRCASE"
      />
      <Customers />
      <Interior
        bgImage={"/Interior3.jpg"}
        flex=""
        title="THE MARBLE STAIRCASE"
      />
      <FeaturedProjects />
      <OurTeam />
      <Touch />
      <Footer />
    </div>
  );
}
