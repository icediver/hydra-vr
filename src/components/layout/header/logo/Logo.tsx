import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image src="/images/logo.png" alt="logo" width={103} height={103} />
      <Image
        src="/images/name.png"
        alt="logo"
        width={76}
        height={46}
        className="w-[76px] h-[46px]"
      />
    </div>
  );
}
