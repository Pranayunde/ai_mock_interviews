import type { Metadata } from "next";
import { Mona_Sans, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
// import { cn } from "@/lib/utils";
import {Toaster} from "sonner";
// import {getCurrentUser} from "@/lib/actions/auth.action";
// import {redirect} from "next/navigation";
// import {ReactNode} from "react";
//
// const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});
//
// const geist = Geist({subsets:['latin'],variable:'--font-sans'});
//
const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
    children,
}: Readonly <{ children: React.ReactNode;
}>) {
  return (
     <html lang="en" className="dark">
        <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        < Toaster />
        </body>
     </html>
  );
}
//
//
// export default async function RootLayout({ children }: { children: ReactNode }) {
//     const user = await getCurrentUser();
//
//     if (!user) redirect("/sign-in"); // Only protected pages are children of this layout
//
//     return (
//         <html>
//         <body>{children}</body>
//         </html>
//     );
// }