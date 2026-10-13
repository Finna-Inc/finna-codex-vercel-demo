import "./globals.css";

export const metadata = {
  title: "Finna × Codex — Ship the change",
  description: "A Finna engineering demo of the Codex-to-GitHub-to-Vercel delivery loop.",
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: "#101828",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
