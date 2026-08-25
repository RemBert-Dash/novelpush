import Link from "next/link";
import { Logo } from "./Logo";

export function SiteHeader() {
  return <header className="site-header"><div className="container nav"><Logo /><nav aria-label="Primary"><Link href="/#how-it-works">How it works</Link><Link href="/#pricing">Pricing</Link><Link href="/#faq">FAQ</Link></nav><Link href="/demo" className="button button-small">Explore demo <span>→</span></Link></div></header>;
}
