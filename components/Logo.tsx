import Link from "next/link";

export function Logo({ dark = true }: { dark?: boolean }) {
  return <Link href="/" className={`logo ${dark ? "logo-dark" : ""}`} aria-label="NovelPush home">
    <span className="logo-mark" aria-hidden="true"><i /><b /><i /></span><span>NovelPush</span>
  </Link>;
}
