import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import "@uploadthing/react/styles.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ['200', '300','400','500','600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})
export const metadata = {
  title: "PARIWAR",
  description: "Create and build relation and web family.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
        
      </body>
    </html>
  );
}
