import styles from "../HeroSection.module.scss";
import Location from "@/assets/icons/location.svg";
import Phone from "@/assets/icons/phone-calls.svg";
import Email from "@/assets/icons/mail.svg";

export function HeroFooter() {
  return (
    <footer className={styles.footer}>
      <ul className="flex justify-between w-full ">
        <li
          className={
            "flex border-r border-[#C0B7E8] items-center h-[117px] gap-5 w-[400px]"
          }
        >
          <Location className="w-[70px] h-[70px]" />
          <div>
            <p className="text-2xl font-bold ">Pay Us a Visit</p>
            <p className="text-sm">
              Union St, Seattle, WA 98101, United States
            </p>
          </div>
        </li>
        <li
          className={
            "flex border-r border-[#C0B7E8] gap-5 items-center h-[117px] w-[370px]"
          }
        >
          <Phone className="w-[70px] h-[70px]" />
          <div>
            <p className="text-2xl font-bold ">Give Us a Call</p>
            <p>(110) 1111-1010</p>
          </div>
        </li>
        <li className={"flex gap-5 items-center"}>
          <Email className="w-[70px] h-[70px]" />
          <div>
            <p className="text-2xl font-bold ">Send Us a Message</p>
            <p>Contact@HydraVTech.com</p>
          </div>
        </li>
      </ul>
    </footer>
  );
}
