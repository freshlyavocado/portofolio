import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MenuDrawer } from "@/components/ui/MenuDrawer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LiveClock } from "@/components/ui/LiveClock";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Minimalist",
  description: "A modern, minimalist typographic portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <CustomCursor />
            <LiveClock />
            <MenuDrawer />
            <ThemeToggle />
            {children}
            <footer className="py-12 text-center text-foreground/50 text-sm font-medium">
              <p>© {new Date().getFullYear()} Fatih. All rights reserved.</p>
            </footer>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
