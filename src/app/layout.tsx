import type { Metadata } from "next";
import { Roboto, Passion_One } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const passionOne = Passion_One({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-passion",
});

export const metadata: Metadata = {
  title: "Brazilian Style",
  description: "Made in Brazil by Eduardo Ferraz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${passionOne.variable} ${roboto.variable}`} lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body className="font-roboto">{children}</body>
    </html>
  );
}
