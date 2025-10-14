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
import Music from "@/components/common/music";

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Happy Ending",
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
        <main className="max-w-md mx-auto w-full bg-turquoise/10 overflow-hidden">
          {children}
        </main>
        <Music />
        <LightBox />
        <Floating />
      </body>
    </html>
  );
}
