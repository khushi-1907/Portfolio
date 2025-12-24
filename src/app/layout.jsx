import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.tailwind = window.tailwind || {};
              tailwind.config = {
                theme: {
                  extend: {
                    animation: {
                      "spin-slow": "spin 30s linear infinite",
                      slowspin: "spin 6s linear infinite",
                    },
                    colors: {
                      darkspace: "#030014",
                      glowpurple: "#5b1ce3",
                    },
                  },
                },
              };
            `,
          }}
        />
      </head>
      <body className="bg-[#030014] text-white overflow-x-hidden overflow-y-scroll" suppressHydrationWarning>
        <div id="root">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
