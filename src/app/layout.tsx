import "@/app/globals.css"; // import "@/app/ui/global.css"

import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";

import { Metadata } from "next";
import NextAuthProvider from "@/providers/NextAuth";
import Header from "@/components/mycreate/header";
import Footer from "@/components/mycreate/footer";
export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizonへの入部を考えているひとに向けて",
  keywords:
    "Horizon,horizon,ホライズン,龍谷大学,プログラミング,サークル,部活,新入生,瀬田,一回生,龍大,大学,学生",
  metadataBase: new URL("https://Horizon.welcome.newstudent"),
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${inter.className} antialiased`}>
      <Header />
      <NextAuthProvider>{children}</NextAuthProvider>
      <Footer />
      <Toaster />
    </body>
  );
}
