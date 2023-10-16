import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HMB Services | Premium Brickwork & Construction Solutions",
  description:
    "Explore HMB’s range of expert services including new builds, repointing, extensions, patios, garden walls, loft conversions, renovations, and more. Experience craftsmanship that stands the test of time.",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
