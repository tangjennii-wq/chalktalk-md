import { ArrowRight, BookOpen, FileText, Sparkles, Stethoscope, Presentation, Library, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const methodSteps = [
  { label: "Hook", text: "Start with a patient" },
  { label: "Frame", text: "Build the mental model" },
  { label: "Explain", text: "Teach mechanism" },
  { label: "Draw", text: "Create the board visual" },
  { label: "Ask", text: "Use Socratic prompts" },
  { label: "Clarify", text: "Address pitfalls" },
  { label: "Close", text: "End with the pearl" },
];

const examples = ["Hyponatremia", "ARDS", "Shock physiology", "Acute kidney injury", "Delirium"];

const features = [
  { icon: BookOpen, title: "Create", text: "Generate a structured 10-minute chalk talk from any clinical topic." },
  { icon: Presentation, title: "Present", text: "Use a clean teaching view designed for live whiteboard instruction." },
  { icon: FileText, title: "Export", text: "Turn teaching sessions into elegant PDFs and learner handouts." },
  { icon: Library, title: "Save", text: "Build a personal library of high-yield teaching sessions." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F2EA] text-[#211A1D]">
      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#341342] text-white shadow-sm">
            <Stethoscope className="h-5 w-5" />
          </div>
          <div>
            <div className="font-serif text-xl tracking-tight text-[#211A1D]">ChalkTalk MD</div>
            <div className="text-xs uppercase tracking-[0.22em] text-[#7B6973]">Clinical Teaching</div>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-[#5E5158] md:flex">
          <a href="#method" className="hover:text-[#341342]">Method</a>
          <a href="#examples" className="hover:text-[#341342]">Examples</a>
          <a href="#vision" className="hover:text-[#341342]">Vision</a>
        </nav>
        <Button className="rounded-full px-5">Create</Button>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:pb-28 md:pt-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DACEC3] bg-white/55 px-4 py-2 text-sm text-[#6B5A63] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#7A3E92]" />
            AI-assisted structured teaching for clinician educators
          </div>
          <h1 className="font-serif text-6xl leading-[0.95] tracking-[-0.04em] text-[#211A1D] md:text-8xl">
            Help every attending teach like a master educator.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5E5158] md:text-xl">
            Create structured, evidence-based, visually memorable 10-minute chalk talks for resident and fellow education — in under 60 seconds.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 rounded-full px-7 text-base">
              Create a Chalk Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-12 rounded-full px-7 text-base">
              Browse examples
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[#341342]/10 blur-3xl" />
          <Card className="relative overflow-hidden rounded-[2rem] border-[#D8CABE] bg-[#FFFCF7] shadow-2xl">
            <CardContent className="p-0">
              <div className="border-b border-[#E8DED5] px-6 py-5">
                <div className="text-xs uppercase tracking-[0.24em] text-[#7B6973]">Example Session</div>
                <h2 className="mt-2 font-serif text-3xl tracking-tight text-[#211A1D]">Hyponatremia</h2>
                <p className="mt-1 text-sm text-[#6B5A63]">A water problem until proven otherwise.</p>
              </div>
              <div className="grid gap-4 p-6">
                <div className="rounded-2xl bg-[#341342] p-5 text-white">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#C7A6D8]">What to draw</div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                    <div className="rounded-xl border border-white/15 bg-white/10 p-3">Tonicity</div>
                    <div className="rounded-xl border border-white/15 bg-white/10 p-3">Volume</div>
                    <div className="rounded-xl border border-white/15 bg-white/10 p-3">Urine Na</div>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#E8DED5] bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A3E92]">Ask learners</div>
                    <p className="mt-2 text-sm leading-6 text-[#5E5158]">Why can normal saline worsen SIADH?</p>
                  </div>
                  <div className="rounded-2xl border border-[#E8DED5] bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A3E92]">Pitfall</div>
                    <p className="mt-2 text-sm leading-6 text-[#5E5158]">Treating the sodium number instead of the physiology.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative border-y border-[#E4D8CE] bg-[#FFFCF7]/70 px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="rounded-3xl border-[#E2D6CC] bg-white/80 shadow-sm">
                <CardContent className="p-6">
                  <Icon className="h-6 w-6 text-[#7A3E92]" />
                  <h3 className="mt-5 font-serif text-2xl text-[#211A1D]">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5E5158]">{feature.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="method" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.24em] text-[#7A3E92]">The ChalkTalk Method™</div>
          <h2 className="mt-4 font-serif text-5xl tracking-tight text-[#211A1D] md:text-6xl">Not generic content. Teaching architecture.</h2>
          <p className="mt-6 text-lg leading-8 text-[#5E5158]">
            Every session follows a structured educator framework: clinically grounded, physiology-first, visual, interactive, and memorable.
          </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-7">
          {methodSteps.map((step, index) => (
            <div key={step.label} className="relative rounded-3xl border border-[#E2D6CC] bg-[#FFFCF7] p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#341342] text-sm font-semibold text-white">{index + 1}</div>
              <h3 className="mt-5 font-serif text-2xl text-[#211A1D]">{step.label}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5E5158]">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="examples" className="relative bg-[#211A1D] px-6 py-24 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-[#C7A6D8]">Example talks</div>
              <h2 className="mt-4 font-serif text-5xl tracking-tight md:text-6xl">Ready for rounds, report, or conference.</h2>
            </div>
            <p className="text-lg leading-8 text-white/70">
              Build teaching sessions that feel prepared, polished, and clinically useful — without spending hours making slides.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {examples.map((topic) => (
              <Card key={topic} className="rounded-3xl border-white/10 bg-white/[0.06] text-white shadow-none backdrop-blur">
                <CardContent className="p-5">
                  <BookOpen className="h-5 w-5 text-[#C7A6D8]" />
                  <h3 className="mt-5 font-serif text-2xl">{topic}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">Generate teaching script, visual scaffold, questions, pitfalls, and pearl.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Card className="overflow-hidden rounded-[2rem] border-[#D8CABE] bg-[#FFFCF7] shadow-xl">
          <CardContent className="grid gap-10 p-8 md:grid-cols-[0.85fr_1.15fr] md:p-12">
            <div>
              <Quote className="h-8 w-8 text-[#7A3E92]" />
              <h2 className="mt-6 font-serif text-5xl tracking-tight text-[#211A1D]">Restore the culture of great clinical teaching.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-[#5E5158]">
              <p>
                ChalkTalk MD begins as a tool for attendings to teach better — and grows into the operating system for clinical education.
              </p>
              <p>
                Future modules include Morning Report Builder, Whiteboard Rounds, Faculty Development, learner handouts, and residency curriculum packs.
              </p>
              <div className="pt-2 text-sm uppercase tracking-[0.22em] text-[#7B6973]">Created by Jennifer Tang, MD</div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="relative border-t border-[#E4D8CE] px-6 py-10 text-center text-sm text-[#7B6973] md:px-10">
        <div className="font-serif text-xl text-[#211A1D]">ChalkTalk MD</div>
        <div className="mt-2">Teach beautifully. Teach efficiently. Teach intentionally.</div>
      </footer>
    </main>
  );
}
