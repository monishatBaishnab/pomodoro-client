import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zink: {
          "50": "#f7f7f8",
          "100": "#eeeef0",
          "200": "#dadadd",
          "300": "#babbbf",
          "400": "#94959c",
          "500": "#767681",
          "600": "#606169",
          "700": "#4e4e56",
          "800": "#434349",
          "900": "#3b3c3f",
          "950": "#27272a",
        },
        cyan: {
          "50": "#ecfcff",
          "100": "#cff7fe",
          "200": "#a5effc",
          "300": "#67e4f9",
          "400": "#22d0ee",
          "500": "#06b6d4",
          "600": "#0899b2",
          "700": "#0e7d90",
          "800": "#156775",
          "900": "#165863",
          "950": "#083b44",
        },
        lime: {
          "50": "#f5fee7",
          "100": "#e9fccb",
          "200": "#d5f99d",
          "300": "#baf264",
          "400": "#a0e635",
          "500": "#84cc16",
          "600": "#68a30d",
          "700": "#517c0f",
          "800": "#426212",
          "900": "#3a5314",
          "950": "#1e2e05",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
