import "../src/index.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "NeonDevTech — Mobile & Web Application Development",
  description:
    "Architecture-first mobile and web engineering for scalable digital products. React Native, React, Node.js, and TypeScript specialists.",
  keywords:
    "mobile app development, React Native, web application development, staff augmentation, full-stack JavaScript, TypeScript, Node.js",
  openGraph: {
    title: "NeonDevTech — Mobile & Web Application Development",
    description:
      "Architecture-first mobile and web engineering for scalable digital products.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}

        {/* Official Google Analytics Component */}
        <GoogleAnalytics gaId='G-TSS8INSM28' />
      </body>
    </html>
  );
}
