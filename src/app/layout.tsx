import type { Metadata } from "next";
import "@/styles/globals.css";
import Floating from "@/components/common/floating";
import {
  dancingScript,
  lobster,
  lora,
  titilliumWeb,
} from "@/configs/fonts/custom-fonts";
import LightBox from "@/components/common/light-box";
import Footer from "@/components/layouts/footer";
import Music from "@/components/common/music";

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
        className={`${dancingScript.variable} ${lora.variable} ${lobster.variable} ${titilliumWeb.variable} antialiased`}
        suppressHydrationWarning
      >
        <main className="max-w-md mx-auto w-full bg-[rgb(178,188,163,0.1)] overflow-hidden">
          {children}
          <Footer />
        </main>
        <Music />
        <LightBox />
        <Floating />
      </body>
    </html>
  );
}
