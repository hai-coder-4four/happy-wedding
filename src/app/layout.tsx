import type { Metadata } from "next";
import "@/styles/globals.css";
import Floating from "@/components/layouts/floating";
import { dancingScript, lobster, lora } from "@/configs/fonts/custom-fonts";

export const metadata: Metadata = {
  title: "Happy Wedding",
  description: "Happy Wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dancingScript.variable} ${lora.variable} ${lobster.variable} antialiased`}
        suppressHydrationWarning
      >
        <main className="max-w-md mx-auto w-full bg-[rgb(178,188,163,0.1)] overflow-hidden">
          {children}
          <Floating />
        </main>
      </body>
    </html>
  );
}
