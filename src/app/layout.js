import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HireHive | AI-Powered Career & Job Discovery Platform",
  description: "HireHive connects top talent with world-class tech companies with transparent salaries and direct recruiter access.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b]">
        {/* React Hot Toast Global Provider */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#121214",
              color: "#e4e4e7",
              border: "1px solid rgba(63, 63, 70, 0.4)",
              marginTop: "4.5rem",
              zIndex: 99999,
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#121214",
              },
            },
          }}
        />

        <Navbar />

        <main className="flex-1">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
