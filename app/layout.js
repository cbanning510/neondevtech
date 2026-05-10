import '../src/index.css';

export const metadata = {
  title: 'NeonDevTech — Mobile & Web Application Development',
  description: 'Architecture-first mobile and web engineering for scalable digital products. React Native, React, Node.js, and TypeScript specialists.',
  keywords: 'mobile app development, React Native, web application development, staff augmentation, full-stack JavaScript, TypeScript, Node.js',
  openGraph: {
    title: 'NeonDevTech — Mobile & Web Application Development',
    description: 'Architecture-first mobile and web engineering for scalable digital products.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&family=Oxanium:wght@600;700&family=Rajdhani:wght@400;500;600;700&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
