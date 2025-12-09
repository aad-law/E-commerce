import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Nagaare Gold Jewellers | Wholesale Nosepin & Studs | Nasik",
  description: "Nagaare Gold Jewellers - Premium wholesale of nosepin and studs. Quality gold jewellery at wholesale prices. Located in Deolali Camp, Nasik. Contact: 9923509016",
  keywords: "nosepin, studs, gold jewellery, wholesale, nasik, deolali camp, nagaare, gold, earrings",
  openGraph: {
    title: "Nagaare Gold Jewellers | Wholesale Nosepin & Studs",
    description: "Premium wholesale of nosepin and studs. Quality gold jewellery at wholesale prices.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cormorant.variable}`}>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
