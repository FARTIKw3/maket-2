import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/header/Header";
import { About } from "@/components/About/About";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
}
