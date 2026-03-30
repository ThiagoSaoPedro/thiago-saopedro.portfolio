//* Libraries imports
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";

//* Providers imports
import {
  AnimationProvider,
  ThemeContext,
  LanguageProvider,
} from "@/components/context";

//* Styles imports
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "thiago-saopedro",
  description:
    "Portfolio of Thiago São Pedro, Software Engineer specialized in React, Laravel and Python.",
  authors: [{ name: "Thiago São Pedro" }],
};

export default function RootLayout(
  props: Readonly<{ children: React.ReactNode }>,
) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeContext
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <AnimationProvider>
              {props.children}
            </AnimationProvider>
          </LanguageProvider>
          <Toaster richColors theme="dark" />
        </ThemeContext>
      </body>
    </html>
  );
}
