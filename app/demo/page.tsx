"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

type Task = { id: number; title: string; channel: string; due: string; done: boolean };
const initialTasks: Task[] = [
  { id: 1, title: "Share the reader quote card", channel: "Instagram", due: "Today", done: true },
  { id: 2, title: "Send the newsletter feature", channel: "Email", due: "Thursday", done: false },
  { id: 3, title: "Update the Amazon A+ story", channel: "Amazon", due: "Friday", done: false },
  { id: 4, title: "Invite your street team back in", channel: "Readers", due: "Saturday", done: false },
];

export default function DemoPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const complete = useMemo(() => tasks.filter((task) => task.done).length, [tasks]);
  const toggle = (id: number) => setTasks((current) => current.map((task) => task.id === id ? { ...task, done: !task.done } : task));
  return <main className="demo-shell"><aside className="demo-sidebar"><Logo dark={false} /><div className="demo-book"><span>WT</span><div><b>Where the Tide<br />Remembers</b><small>Hannah Marlow</small></div></div><nav><a className="active" href="#overview">⌂ <span>Overview</span></a><a href="#campaign">◈ <span>Campaign</span></a><a href="#timeline">◷ <span>Timeline</span></a><a href="#notes">⌁ <span>Notes</span></a></nav><div className="sidebar-bottom"><p>Campaign health</p><b>On track <i /></b><small>Week 2 of 4</small></div></aside><section className="demo-main"><header className="demo-header"><div><p>Campaign workspace</p><h1>Where the Tide Remembers</h1></div><Link href="/" className="demo-return">← NovelPush home</Link></header><div id="overview" className="demo-hero"><div><p className="eyebrow gold">Week 2 · Re-introduce the story</p><h2>Let old readers<br />meet the story <em>again.</em></h2><p>Bring the emotional core of this coastal mystery back into view—with proof that readers still carry it with them.</p></div><div className="demo-stat"><span>{complete}<small> / {tasks.length}</small></span><p>weekly actions<br />complete</p><div className="progress"><i style={{ width: `${(complete / tasks.length) * 100}%` }} /></div></div></div><div id="campaign" className="demo-grid"><section className="task-panel"><div className="panel-heading"><div><p className="eyebrow">This week’s actions</p><h3>Small moves. Real momentum.</h3></div><span>{complete}/{tasks.length}</span></div><div className="task-list">{tasks.map((task) => <button className={`demo-task ${task.done ? "completed" : ""}`} onClick={() => toggle(task.id)} key={task.id} aria-pressed={task.done}><i>{task.done ? "✓" : ""}</i><span><b>{task.title}</b><small>{task.channel} · {task.due}</small></span><em>→</em></button>)}</div></section><section className="signal-panel"><p className="eyebrow gold">Reader signal</p><blockquote>“A quiet, aching book that stayed with me long after the last page.”</blockquote><p className="attribution">— Amazon reader review · ★★★★★</p><div className="quote-actions"><button>Copy quote</button><button>Make a post</button></div></section></div><section id="timeline" className="timeline-panel"><div><p className="eyebrow gold">Campaign rhythm</p><h3>The next ten days</h3></div><div className="timeline">{["Today|Reader quote card|Instagram","Thu|Story behind the tide|Newsletter","Fri|Refresh the book page|Amazon","Sat|Street team note|Readers"].map((item) => { const [day, task, channel] = item.split("|"); return <article key={day}><span>{day}</span><i /><p>{task}<br /><small>{channel}</small></p></article>; })}</div></section></section></main>;
}
