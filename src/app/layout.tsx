import { Roboto_Slab } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
const TrashHandFont = localFont({
  src: "../fonts/TrashHand.ttf",
  weight: "900",
  display: "swap",
  variable: "--font-thrashand",
});
const Roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${(Roboto_slab.variable, TrashHandFont.variable)} `}>
        {children}
      </body>
    </html>
  );
}
