import '../styles/globals.css'

import Link from "next/link";
import Image from "next/legacy/image";
import avatarImg from "../public/avatar.jpg";
import headerImg from "../public/headerImg.jpeg";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>MY PORTFOLIO</title>
      </head>
      <body className='px-16 md:px-10'>
        <nav className="bg-transparent">
          <div className="py-5 justify-between flex items-center">
            <div className="">
              <p className="font-serif">Powered by Vercel.</p>
            </div>
            <div className="">
              <Image
                src={avatarImg}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div>
              <Link href="/" style={{ padding: "0 10px 0 0" }}>
                Home
              </Link>
              <Link href="/about" style={{ padding: "0 10px 0 0" }}>
                About
              </Link>
              <Link href="/portfolio" style={{ padding: "0 10px 0 0" }}>
                Portfolio
              </Link>
              <Link href="/contact" style={{ padding: "0 10px 0 0" }}>
                Hit Me
              </Link>
            </div>
          </div>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
