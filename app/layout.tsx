import type { Metadata } from "next";
import "./globals.css";
import "./nav.css";

export const metadata: Metadata = {
  title: "Ugandalen's Extremely Official Homepage",
  description: "Sightings, rumours and forbidden lore concerning VR's most mysterious patterned icon.",
  icons: { icon: "/ugandalen_portrait.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
