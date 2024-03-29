import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Enviahora - envíos internacionales - económicos - rápidos - envía - shipment",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KZY6SVVFNV"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZY6SVVFNV');
          `,
          }}
        />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
