import type { Metadata } from "next";
import "@/styles/globals.css";
import Floating from "@/components/common/floating";
import {
  dancingScript,
  lobster,
  lora,
  sourceSerif4,
  titilliumWeb,
} from "@/configs/fonts/custom-fonts";
import LightBox from "@/components/common/light-box";
import Music from "@/components/common/music";

export const metadata: Metadata = {
  title: "Thiệp mời cưới",
  description: "Thiệp mời cưới Hải Trần & Hải Trần",
  keywords: [
    "Thiệp mời cưới",
    "Wedding",
    "Wedding Invitation",
    "Happy Wedding",
  ],
  openGraph: {
    title: "Thiệp mời cưới",
    description: "Thiệp mời cưới Hải Trần & Hải Trần",
    url: "https://jrcscientific.com",
    siteName: "Thiệp mời cưới",
    images: [{ url: "/assets/images/wedding-invitation.jpg" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiệp mời cưới",
    description: "Thiệp mời cưới Hải Trần & Hải Trần",
    images: [{ url: "/assets/images/wedding-invitation.jpg" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dancingScript.variable} ${lora.variable} ${lobster.variable} ${titilliumWeb.variable} ${sourceSerif4.variable}  antialiased`}
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
