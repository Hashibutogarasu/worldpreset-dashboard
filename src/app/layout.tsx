import type { Metadata } from "next";
import "./styles/globals.css";

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
  return {
    title: `title`,
    description: `description`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      {children}
    </html>
  );
}
