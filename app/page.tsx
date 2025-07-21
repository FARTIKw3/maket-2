import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/header/Header";
import { About } from "@/components/About/About";
import { Interior } from "@/components/Interior/Interior";

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
      <Interior
        bgImage={"/Interior2.jpg"}
        flex="flex-end"
        title="THE MARBLE STAIRCASE"
      />
      <Interior
        bgImage={"/Interior3.jpg"}
        flex=""
        title="THE MARBLE STAIRCASE"
      />
    </div>
  );
}
