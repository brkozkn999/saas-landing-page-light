import logo from "@/assets/logosaas.png"
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinkedIn from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"
import Image from "next/image";
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-0 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2FB01,#2FD8FE)] before:absolute">
          <Image src={logo} alt="logo" height={40} width={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a className="hover-anim hover:text-white/80" href="#">About</a>
          <a className="hover-anim hover:text-white/80" href="#">Features</a>
          <a className="hover-anim hover:text-white/80" href="#">Customers</a>
          <a className="hover-anim hover:text-white/80" href="#">Updates</a>
          <a className="hover-anim hover:text-white/80" href="#">Help</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Link href={'https://x.com/'} target="_blank">
            <SocialX className="hover-anim hover:text-white" />
          </Link>
          <Link href={'https://instagram.com/'} target="_blank">
            <SocialInsta className="hover-anim hover:text-white" />
          </Link>
          <Link href={'https://linkedin.com/'} target="_blank">
            <SocialLinkedIn className="hover-anim hover:text-white" />
          </Link>
          <Link href={'https://pinterest.com/'} target="_blank">
            <SocialPin className="hover-anim hover:text-white" />
          </Link>
          <Link href={'https://youtube.com/'} target="_blank">
            <SocialYoutube className="hover-anim hover:text-white" />
          </Link>
        </div>
        <p className="mt-6">&copy; 2024 <Link href={'https://github.com/brkozkn999'} target="_blank"><span className="hover-anim hover:text-white">Berk Özkan</span></Link>, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
