import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { VariantProvider } from "@/utils/hooks";
import { constructMetadata } from "@/utils";

const poppins = Poppins({
 subsets: ["latin"],
 weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = constructMetadata();

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" className="dark" suppressHydrationWarning>
   <head />
   <body className={poppins.className}>
    <VariantProvider>{children}</VariantProvider>
    <Script
     strategy="afterInteractive"
     src="https://www.googletagmanager.com/gtag/js?id=G-NTV1J03VFQ"
    />
    <Script id="google-analytics" strategy="afterInteractive">
     {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NTV1J03VFQ');
          `}
    </Script>
   </body>
  </html>
 );
}
