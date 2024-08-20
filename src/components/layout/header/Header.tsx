import { ContactButtons } from "./contact-buttons/ContactButtons";
import { Logo } from "./logo/Logo";
import { MenuList } from "./menu-list/MenuList";

export function Header() {
  return (
    <header className="absolute top-[50px] px-[84px] left-0 flex items-center justify-between w-full z-50">
      <Logo />
      <MenuList />
      <ContactButtons />
    </header>
  );
}
