import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
export const metadata = { title: "You’re on the list" };
export default function SuccessPage() { return <><SiteHeader /><main className="status-page"><div className="container"><span className="status-icon">✓</span><p className="eyebrow gold">Welcome to the next chapter</p><h1>You’re in.</h1><p>Thank you for joining NovelPush. We’ll let you know as soon as Starter is ready for your next book campaign.</p><Link className="button button-gold" href="/demo">Explore the sample workspace <span>→</span></Link></div></main><SiteFooter /></>; }
