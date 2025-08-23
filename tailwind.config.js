/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      keyframes: {
        "glow-drift": {
          "0%": {
            transform: "translateX(0%) scale(1.2) translateY(0px)",
            borderRadius: "50%",
            filter: "blur(28px) brightness(1.5)",
          },
          "20%": {
            transform: "translateX(0%) scale(1.4) translateY(-10px)",
            borderRadius: "50%",
            filter: "blur(24px) brightness(2)",
          },
          "40%": {
            transform: "translateX(0%) scale(1.2) translateY(0px) rotate(20deg)",
            borderRadius: "85% 15% 40% 70%",
            filter: "blur(24px) brightness(1.2)",
          },
          "60%": {
            transform: "translateX(0%) scale(1.3) translateY(-30px)",
            borderRadius: "70% 20% 60% 40%",
            filter: "blur(24px) brightness(1.2)",
          },
          "80%": {
            transform: "translateX(0%) scale(1.6) translateY(20px) rotate(-50deg)",
            borderRadius: "20% 45% 55% 40%",
            filter: "blur(24px) brightness(1.5)",
          },
          "100%": {
            transform: "translateX(0%) scale(1.2) translateY(0px)",
            borderRadius: "50%",
            filter: "blur(28px) brightness(1.5)",
          },
        },
      },
      animation: {
        "glow-drift": "glow-drift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
