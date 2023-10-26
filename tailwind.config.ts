import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        /* https://uicolors.app/create hsl(5, 74%, 51%) */
        primary: {
          "50": "hsl(5, 86%, 97%)",
          "100": "hsl(4, 93%, 94%)",
          "200": "hsl(4, 100%, 89%)",
          "300": "hsl(5, 96%, 82%)",
          "400": "hsl(4, 93%, 71%)",
          "500": "hsl(4, 86%, 60%)",
          "600": "hsl(5, 74%, 51%)",
          "700": "hsl(5, 75%, 41%)",
          "800": "hsl(5, 71%, 35%)",
          "900": "hsl(5, 64%, 31%)",
          "950": "hsl(5, 77%, 15%)",
        },
        /* https://uicolors.app/create hsl(0, 9%, 41%) */
        neutral: {
          "50": "hsl(30, 8%, 95%)",
          "100": "hsl(24, 8%, 88%)",
          "200": "hsl(12, 8%, 77%)",
          "300": "hsl(10, 10%, 64%)",
          "400": "hsl(9, 9%, 53%)",
          "500": "hsl(3, 9%, 47%)",
          "600": "hsl(0, 9%, 41%)",
          "700": "hsl(356, 8%, 33%)",
          "800": "hsl(355, 7%, 29%)",
          "900": "hsl(347, 7%, 26%)",
          "950": "hsl(350, 8%, 14%)",
        },
      },
      /* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1400,18,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      fontSize: {
        /* 10.24px → 10.69px */
        "fluid-2xs": "clamp(0.64rem, 0.6317rem + 0.0417vw, 0.6681rem)",
        /* 12.80px → 14.25px */
        "fluid-xs": "clamp(0.8rem, 0.7731rem + 0.1343vw, 0.8906rem)",
        /* 16.00px → 19.00px */
        "fluid-s": "clamp(1rem, 0.9444rem + 0.2778vw, 1.1875rem)",
        /* 20.00px → 25.33px */
        "fluid-m": "clamp(1.25rem, 1.1513rem + 0.4935vw, 1.5831rem)",
        /* 25.00px → 33.76px */
        "fluid-l": "clamp(1.5625rem, 1.4003rem + 0.8111vw, 2.11rem)",
        /* 31.25px → 45.00px */
        "fluid-xl": "clamp(1.9531rem, 1.6985rem + 1.2731vw, 2.8125rem)",
        /* 39.06px → 59.99px */
        "fluid-2xl": "clamp(2.4413rem, 2.0537rem + 1.938vw, 3.7494rem)",
        /* 48.83px → 79.97px */
        "fluid-3xl": "clamp(3.0519rem, 2.4752rem + 2.8833vw, 4.9981rem)",
      },
      /* @link https://utopia.fyi/space/calculator?c=320,14,1.25,1400,24,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,&g=s,l,xl,12 */
      spacing: {
        /* Space 3xs: 4px → 6px */
        "space-3xs": "clamp(0.25rem, 0.213rem + 0.1852vw, 0.375rem)",
        /* Space 2xs: 7px → 12px */
        "space-2xs": "clamp(0.4375rem, 0.3449rem + 0.463vw, 0.75rem)",
        /* Space xs: 11px → 18px */
        "space-xs": "clamp(0.6875rem, 0.5579rem + 0.6481vw, 1.125rem)",
        /* Space s: 14px → 24px */
        "space-s": "clamp(0.875rem, 0.6898rem + 0.9259vw, 1.5rem)",
        /* Space m: 21px → 36px */
        "space-m": "clamp(1.3125rem, 1.0347rem + 1.3889vw, 2.25rem)",
        /* Space l: 28px → 48px */
        "space-l": "clamp(1.75rem, 1.3796rem + 1.8519vw, 3rem)",
        /* Space xl: 42px → 72px */
        "space-xl": "clamp(2.625rem, 2.0694rem + 2.7778vw, 4.5rem)",
        /* Space 2xl: 56px → 96px */
        "space-2xl": "clamp(3.5rem, 2.7593rem + 3.7037vw, 6rem)",
        /* Space 3xl: 84px → 144px */
        "space-3xl": "clamp(5.25rem, 4.1389rem + 5.5556vw, 9rem)",
        /* One-up pairs */
        /* Space 3xs-2xs: 4px → 12px */
        "space-3xs-2xs": "clamp(0.25rem, 0.1019rem + 0.7407vw, 0.75rem)",
        /* Space 2xs-xs: 7px → 18px */
        "space-2xs-xs": "clamp(0.4375rem, 0.2338rem + 1.0185vw, 1.125rem)",
        /* Space xs-s: 11px → 24px */
        "space-xs-s": "clamp(0.6875rem, 0.4468rem + 1.2037vw, 1.5rem)",
        /* Space s-m: 14px → 36px */
        "space-s-m": "clamp(0.875rem, 0.4676rem + 2.037vw, 2.25rem)",
        /* Space m-l: 21px → 48px */
        "space-m-l": "clamp(1.3125rem, 0.8125rem + 2.5vw, 3rem)",
        /* Space l-xl: 28px → 72px */
        "space-l-xl": "clamp(1.75rem, 0.9352rem + 4.0741vw, 4.5rem)",
        /* Space xl-2xl: 42px → 96px */
        "space-xl-2xl": "clamp(2.625rem, 1.625rem + 5vw, 6rem)",
        /* Space 2xl-3xl: 56px → 144px */
        "space-2xl-3xl": "clamp(3.5rem, 1.8704rem + 8.1481vw, 9rem)",
      },
    },
  },
  plugins: [],
};
export default config;
