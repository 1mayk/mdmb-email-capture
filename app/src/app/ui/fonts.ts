import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export const GoBold = localFont({
  src: "./GoboldBold.otf",
  variable: "--goBold",
});
