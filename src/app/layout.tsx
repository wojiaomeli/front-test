import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ marginTop: '0px'}}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
