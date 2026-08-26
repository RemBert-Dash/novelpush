import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const checkoutUrl =
  "https://madethis.com/checkout/onboarding-n977r9dw-1787535912817/md7c2qp682yf8fr8yv03d7bpw18d43m3";

const campaignSteps = [
  ["01", "Set the book", "Give your campaign a title, Amazon link, and a clear reader promise."],
  ["02", "Find the moment", "Shape a launch or revival around the moments readers are ready to act."],
  ["03", "Keep it moving", "Use a focused weekly plan for posts, pitches, and reader touchpoints."],
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow gold">For self-published Amazon authors</p>
              <h1>
                From your book
                <br />
                to its next <em>reader.</em>
              </h1>
              <p>
                NovelPush turns a launch or backlist revival into a clear weekly campaign—without losing the voice that made the book yours.
              </p>
              <a className="button button-gold" href={checkoutUrl}>
                Join the Founding Pilot <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="proof">
          <div className="container">
            <p className="eyebrow">Built around the way books travel</p>
            <div className="proof-grid">
              <p>A release is not a single day. A backlist is not a single moment.</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section section-ivory">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow gold">A clearer way to campaign</p>
              <h2>
                Less marketing noise.
                <br />
                <em>More momentum.</em>
              </h2>
              <p>Build a simple, repeatable rhythm around the book—not the algorithm of the day.</p>
            </div>

            <div className="steps">
              {campaignSteps.map(([number, title, body]) => (
                <article className="step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <i>→</i>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section campaign-section">
          <div className="container campaign-grid">
            <div className="campaign-copy">
              <p className="eyebrow gold">One workspace, every next step</p>
              <h2>
                Your book stays
                <br />
                at the <em>center.</em>
              </h2>
              <p>
                Bring together the details that make a campaign feel intentional: your book, its message, the channels that matter, and the next small action.
              </p>
              <ul>
                <li><span>✦</span> Launch campaigns with a 30-day runway</li>
                <li><span>✦</span> Backlist revivals that honour the original work</li>
                <li><span>✦</span> Platform-ready prompts that still sound like you</li>
              </ul>
              <Link href="/demo" className="text-link">
                Open a sample campaign <span>→</span>
              </Link>
            </div>

            <div className="workspace-preview">
              <div className="workspace-top">
                <span className="workspace-book" />
                <div>
                  <b>Where the Tide Remembers</b>
                  <small>Backlist Revival · Week 2</small>
                </div>
                <span className="status">On track</span>
              </div>

              <div className="workspace-body">
                <div className="workspace-nav">
                  <b>Overview</b>
                  <span>Timeline</span>
                  <span>Posts</span>
                  <span>Notes</span>
                </div>
                <div className="workspace-content">
                  <p>This week&apos;s focus</p>
                  <h3>
                    Let old readers meet
                    <br />
                    the story again.
                  </h3>
                  <div className="progress"><span style={{ width: "68%" }} /></div>
                  <small>7 of 10 weekly actions complete</small>

                  <div className="task">
                    <span>✓</span>
                    <div>
                      <b>Share the reader quote card</b>
                      <small>Instagram · Today</small>
                    </div>
                  </div>

                  <div className="task">
                    <span>⟳</span>
                    <div>
                      <b>Send the newsletter feature</b>
                      <small>Email · Thursday</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-deep">
          <div className="container">
            <div className="section-heading light">
              <p className="eyebrow gold">For every season of your author career</p>
              <h2>
                Give good books
                <br />
                a longer <em>life.</em>
              </h2>
            </div>

            <div className="use-cases">
              <article>
                <span>01</span>
                <h3>Book Launch</h3>
                <p>Set a calm, confident plan for the first 30 days—before the release-day rush arrives.</p>
                <a href="#pricing">Start a campaign →</a>
              </article>
              <article>
                <span>02</span>
                <h3>Backlist Revival</h3>
                <p>Bring a strong title back into view with fresh angles, reader proof, and a reason to return.</p>
                <a href="#pricing">Revive a book →</a>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" className="section section-ivory">
          <div className="container pricing-wrap">
            <div className="section-heading">
              <p className="eyebrow gold">Founding Pilot</p>
              <h2>
                A considered campaign
                <br />
                for your next <em>chapter.</em>
              </h2>
              <p>One focused workspace for authors ready to give a new release—or a trusted backlist title—real momentum.</p>
            </div>

            <div className="pricing-card">
              <div>
                <p className="plan">Founding Pilot</p>
                <p className="price">$19</p>
                <p>Everything you need to make one book&apos;s next chapter count.</p>
              </div>

              <ul>
                <li>Book launch workspace</li>
                <li>Backlist revival campaign</li>
                <li>Weekly action plans</li>
                <li>Platform-ready post prompts</li>
              </ul>

              <a className="button button-gold" href={checkoutUrl}>
                Start your campaign <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="section faq">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow gold">Questions, answered</p>
              <h2>
                Made for the book
                <br />
                you already <em>believe in.</em>
              </h2>
            </div>

            <div className="faq-list">
              <details open>
                <summary>Who is NovelPush for?<span>+</span></summary>
                <p>NovelPush is for self-published Amazon authors who want a focused, professional way to launch a new book or bring a backlist title back into view.</p>
              </details>
              <details>
                <summary>Do I need a big audience first?<span>+</span></summary>
                <p>No. The workspace is built around clear, repeatable actions that meet readers where they are—one good touchpoint at a time.</p>
              </details>
              <details>
                <summary>When can I start?<span>+</span></summary>
                <p>You can start now. Join the Founding Pilot for $19 and begin shaping your next book campaign today.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <p className="eyebrow gold">A better next chapter starts here</p>
            <h2>
              When your book is ready
              <br />
              to travel <em>further.</em>
            </h2>
            <p>Start with a focused campaign built around the book—not the noise around it.</p>
            <a className="button button-gold" href={checkoutUrl}>
              Join the Founding Pilot for $19 <span>→</span>
            </a>
            <small>Clear next steps for working authors.</small>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
