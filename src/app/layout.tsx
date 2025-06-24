import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Local Genius",
  description: "Local Genius Description will be here",
};

const theme = {
  token: {
    colorPrimary: "#594FF4", 
    fontFamily: "'Poppins', 'sans-serif'",
    borderRadius: 6,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConfigProvider theme={theme}>
        <body className={`${poppins.className} antialiased`}>{children}</body>
      </ConfigProvider>
    </html>
  );
}
