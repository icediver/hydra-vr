import clsx from "clsx";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, variant = "primary", ...props }: IButton) {
  const { className } = props;
  return (
    <button
      className={clsx(
        "rounded-[40px] px-[38px] py-4 font-bold text-xs uppercase  hover:contrast-75 active:translate-y-1 transition-all duration-200",
        {
          "bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-[#343045] ":
            variant === "primary",
          "border-2 border-white text-white": variant === "secondary",
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}
