import plugin from "tailwindcss/plugin";

export const plugins = [
  // require("@tailwindcss/forms"),
  // require("@tailwindcss/aspect-ratio"),
  plugin(({ addComponents, theme, addUtilities, addBase }) => {
    addComponents({}),
      addUtilities({
        ".text-shadow": {
          textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
        },

        ".outline-border-none": {
          outline: "none",
          border: "none",
        },

        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },

        ".scrolbar-hidden": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".transparent-panel": {
          "background-color": "rgba(10,10,31,0.65)",
          // "background-color": "rgba(0,1,13,0.65)",
          borderRadius: "0.75rem",
          "backdrop-filter": "blur(24px)",
        },
        ".select-panel": {
          "background-color": "rgba(10,10,31,0.65)",
          // "background-color": "rgba(0,1,13,0.65)",
          "backdrop-filter": "blur(24px)",
        },
        ".text-gradient": {
          background: "linear-gradient(90deg, #c731ef, #fe5f0c) ",
          "-webkit-background-clip": "text",
          color: "transparent",
          "-webkit-text-fill-color": "transparent",
        },
      });
  }),
];
