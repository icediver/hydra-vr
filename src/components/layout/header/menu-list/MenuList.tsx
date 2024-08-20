import clsx from "clsx";
import Link from "next/link";

interface IMenuList {
  title: string;
  url: string;
}

const menuItems: IMenuList[] = [
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Technologies", url: "/technologies" },
  { title: "how to use", url: "/how-to" },
];
export function MenuList() {
  return (
    <nav>
      <ul className="flex gap-10">
        {menuItems.map((item) => (
          <li key={item.title} className={clsx("relative")}>
            <Link
              href={item.url}
              className={clsx(
                "text-white uppercase text-xs font-bold",
                'after:content-"" after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-0 after:rounded-sm after:bg-[#858584] after:transition-all after:duration-300',
                "hover:after:scale-100 hover:after:bg-white",
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
