import { Button } from "@/components/ui/button/Button";
import Arrow from "@/assets/icons/arrow-small-right.svg";
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import { HeroFooter } from "./hero-footer/HeroFooter";
interface IHeroSection {}

export function HeroSection({}: IHeroSection) {
  return (
    <section className={styles.section}>
      <div className="relative flex top-[265px]">
        <div className={"pt-[34px] pb-[54px]"}>
          <p className="text-[40px] text-white font-bold">
            <span className="text-5xl font-bold  text-[#8176AF]">Dive</span>{" "}
            Into The Depths
          </p>
          <p className="font-bold text-white text-[40px]">
            Of <span className="text-5xl text-[#C0B7E8]">Virtual Reality</span>
          </p>
          <p className="w-[450px] text-wrap mt-[35px] pb-[67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <div className="flex gap-9 items-center">
            <Button>Build your Word</Button>
            <Arrow
              className={
                "w-[100px] h-[100px] active:translate-y-1 transition-all hover:scale-110 duration-300 cursor-pointer"
              }
            />
          </div>
        </div>
        <div className={styles.imageBorder}>
          <div className={styles.image} />
        </div>
      </div>
      <HeroFooter />
    </section>
  );
}
