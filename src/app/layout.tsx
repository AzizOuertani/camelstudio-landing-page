import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
const TrashHandFont = localFont({
  src: "../fonts/TrashHand.ttf",
  weight: "900",
  display: "swap",
  variable: "--font-thrashand",
});

const Raleway_Font = Raleway({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-raleway",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <title>Camel Studio : studio de développement numérique</title>
        <meta
          name="description"
          content="studio de développement numérique"
        ></meta>
      </head>
      <body className={`${(Raleway_Font.variable, TrashHandFont.variable)} `}>
        {children}
      </body>
    </html>
  );
}
