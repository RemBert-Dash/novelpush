import Link from "next/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Logo dark={false} /><p>For authors who want every good book to travel further.</p></div><div className="footer-links"><Link href="/#how-it-works">How it works</Link><Link href="/#pricing">Pricing</Link><Link href="/demo">Demo workspace</Link></div><a className="made-this" href="https://madethis.com/r/bgdw5cgx" target="_blank" rel="noreferrer">Built with MadeThis <span>↗</span></a></div><div className="container copyright">© {new Date().getFullYear()} NovelPush. Your story, everywhere.</div></footer>;
}
