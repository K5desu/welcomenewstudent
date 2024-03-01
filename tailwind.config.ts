import type { Config } from "tailwindcss";
type AddUtilitiesFunction = (
  utilities: Record<string, Record<string, string>>,
  options?: {
    variants?: string[];
    respectPrefix?: boolean;
    respectImportant?: boolean;
  }
) => void;
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: AddUtilitiesFunction }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "3px 3px 3px darkgrey",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};

export default config;
