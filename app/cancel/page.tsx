import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
export const metadata = { title: "Checkout paused" };
export default function CancelPage() { return <><SiteHeader /><main className="status-page"><div className="container"><span className="status-icon muted">↗</span><p className="eyebrow gold">No problem</p><h1>Take your time.</h1><p>Checkout is not available just yet. When NovelPush opens, we’ll be ready to help your next book reach further.</p><Link className="button button-gold" href="/#notify">Get launch updates <span>→</span></Link></div></main><SiteFooter /></>; }
