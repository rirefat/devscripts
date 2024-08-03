import { Inter } from "next/font/google";
import "./globals.css";
import { getDocuments } from "@/lib/doc";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevScripts",
  description: "The Developer’s Journal",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();
  console.log(allDocuments)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div class="h-full lg:ml-72 xl:ml-80">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
