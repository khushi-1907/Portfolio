import "./globals.css";
import Script from "next/script";
import ClientAnalytics from "../components/ClientAnalytics";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         <Script 
          src="https://cdn.tailwindcss.com" 
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-[#030014] text-white overflow-x-hidden overflow-y-scroll" suppressHydrationWarning>
        <div id="root">{children}</div>
        <ClientAnalytics />
      </body>
    </html>
  );
}
