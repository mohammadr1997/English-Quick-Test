import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "../(menuButton)/Menu";
import Link from "next/link";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen `}
      >
        <header className="w-full flex flex-row gap-5  px-3 relative ">
          <img
            className="w-32 h-32 -mt-4 md:w-44 md:h-44 md:-mt-2 object-contain"
            src="/poor-good-progress-meter_78370-1269.jpg"
            alt="pic"
          />
          <div className=" absolute right-14 top-6">
            <Menu />
          </div>
        </header>
        <hr />
        {children}
        <footer className="w-full -mt-[20rem]  md:mt-[59px] ">
          <div
            className=" bg-sky-50 h-96 text-center mt-10 flex flex-col justify-center align-middle"
            style={{ borderRadius: "100% 100% 0% 65% / 100% 100% 0% 2% " }}
          >
            <div>
              <span>
                <EmailOutlinedIcon
                  sx={{
                    backgroundColor: "#86EF6E",
                    borderRadius: "50%",
                    padding: "5px",
                    color: "white",

                    "@media all and(max-width:540px)": { fontSize: "26px" },
                    "@media all and (min-width:540.999px)": {
                      fontSize: "35px",
                    },
                  }}
                />
              </span>
              <span className="mx-2 text-base md:text-xl">
                <a
                  className="hover:text-lime-500"
                  href="mailto:webnerd2024@gmail.com"
                >
                  webnerd2024
                </a>
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-center text-base md:text-xl">
              <span className=" mx-2 mt-3 text-center flex justify-center md:border-r-2">
                <span className=" mt-[2px] md:mt-0 w-[14px] h-[14px] md:w-[20px] md:h-[20px] flex items-center justify-center border-1 rounded-full  text-xs md:text-sm ">
                  C
                </span>
                <span className="mx-2 -mt-[4px] md:-mt-1">
                  english-quick-test
                </span>{" "}
              </span>
              <Link
                href="/privacy"
                className=" hover:text-lime-500 mx-2 mt-2 md:border-r-2 px-2"
              >
                privacy policy
              </Link>

              <Link href="/about" className="hover:text-lime-500 mx-2 mt-2">
                about us
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
