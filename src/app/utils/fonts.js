import { Albert_Sans } from "next/font/google";

export const albert_sans_init = Albert_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-albert_sans",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const albert_sans = albert_sans_init.variable;
