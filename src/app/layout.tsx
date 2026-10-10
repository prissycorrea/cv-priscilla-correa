import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MotionProvider from "@/components/motion-provider";
import { defaultLocale } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";
import { I18nProvider } from "@/i18n/provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { meta } = dictionaries[defaultLocale];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={defaultLocale}
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">
        <I18nProvider>
          <MotionProvider>{children}</MotionProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
