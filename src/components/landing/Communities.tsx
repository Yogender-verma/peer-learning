import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Activity,
  BrainCircuit,
  Code2,
  Globe,
  Rocket,
  Briefcase,
  TrendingUp,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const communities = [
  {
    name: "AIML Community",
    subtitle: "Build and deploy practical AI projects with peers and mentors.",
    icon: BrainCircuit,
    members: "4.8K members",
    activity: "230 active this week",
    online: "1.2K online",
    growth: "+12% weekly growth",
    engagement: "86% activity",
    primaryTag: "Beginner Friendly",
    secondaryTag: "Project Based",
    accentFrom: "from-cyan-400/20",
    accentTo: "to-blue-500/10",
    glow: "hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]",
    featured: true,
  },
  {
    name: "DSA Warriors",
    subtitle: "Daily coding challenges, mock contests, and interview drills.",
    icon: Code2,
    members: "6.1K members",
    activity: "420 active this week",
    online: "2.0K online",
    growth: "+18% weekly growth",
    engagement: "91% activity",
    primaryTag: "Interview Focus",
    secondaryTag: "Daily Challenges",
    accentFrom: "from-emerald-400/20",
    accentTo: "to-lime-500/10",
    glow: "hover:shadow-[0_0_60px_rgba(52,211,153,0.32)]",
  },
  {
    name: "Web Dev Hub",
    subtitle: "Collaborate on full-stack builds from UI polish to deployment.",
    icon: Globe,
    members: "5.4K members",
    activity: "300 active this week",
    online: "1.5K online",
    growth: "+10% weekly growth",
    engagement: "82% activity",
    primaryTag: "Build In Public",
    secondaryTag: "Portfolio Ready",
    accentFrom: "from-sky-400/20",
    accentTo: "to-indigo-500/10",
    glow: "hover:shadow-[0_0_60px_rgba(56,189,248,0.3)]",
  },
  {
    name: "Hackathon Teams",
    subtitle: "Find teammates, brainstorm ideas, and ship under pressure.",
    icon: Rocket,
    members: "3.2K members",
    activity: "150 active this week",
    online: "800 online",
    growth: "+9% weekly growth",
    engagement: "78% activity",
    primaryTag: "Team Match",
    secondaryTag: "Fast Paced",
    accentFrom: "from-amber-400/20",
    accentTo: "to-orange-500/10",
    glow: "hover:shadow-[0_0_60px_rgba(251,146,60,0.32)]",
  },
  {
    name: "Interview Prep",
    subtitle: "Ace technical rounds with mock interviews and peer feedback.",
    icon: Briefcase,
    members: "4.1K members",
    activity: "260 active this week",
    online: "1.1K online",
    growth: "+14% weekly growth",
    engagement: "88% activity",
    primaryTag: "Career Boost",
    secondaryTag: "Mock Interviews",
    accentFrom: "from-fuchsia-400/20",
    accentTo: "to-pink-500/10",
    glow: "hover:shadow-[0_0_60px_rgba(232,121,249,0.32)]",
  },
  // ✅ Added 6th card for layout balance
  {
    name: "Startup Builders",
    subtitle: "Turn ideas into MVPs with founders, designers, and engineers.",
    icon: TrendingUp,
    members: "2.9K members",
    activity: "190 active this week",
    online: "900 online",
    growth: "+21% weekly growth",
    engagement: "84% activity",
    primaryTag: "Entrepreneurship",
    secondaryTag: "MVP Building",
    accentFrom: "from-purple-400/20",
    accentTo: "to-indigo-500/10",
    glow: "hover:shadow-[0_0_60px_rgba(168,85,247,0.3)]",
  },
];

export function Communities() {
  return (
    <section id="community" className="container px-6 py-24">
      <h2 className="mb-4 text-center text-5xl font-black">
        Explore Communities
      </h2>

      <p className="mx-auto mb-16 max-w-3xl text-center text-base text-slate-300/75 md:text-lg">
        Discover focused peer circles, track live activity, and join communities
        designed around your goals.
      </p>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {communities.map((community, i) => {
          const Icon = community.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl transition-all duration-300 hover:border-white/30 ${community.glow}`}
            >
              {/* softer background depth */}
              <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${community.accentFrom} ${community.accentTo} opacity-70`}
              />

              {/* Featured Badge */}
              {community.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-200 border border-cyan-300/30">
                  ⭐ Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-200 shadow-[0_0_25px_rgba(255,255,255,0.06)]">
                  <Icon className="h-7 w-7" />
                </div>

                <div className="flex flex-wrap justify-end gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
                    {community.primaryTag}
                  </span>
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium text-slate-200/90">
                    {community.secondaryTag}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white">{community.name}</h3>

              <p className="mt-3 min-h-[52px] text-sm leading-6 text-slate-200/80">
                {community.subtitle}
              </p>

              {/* Metrics */}
              <div className="mt-5 space-y-2 text-sm text-slate-100/90">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-cyan-200" />
                  {community.members}
                </div>

                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-cyan-200" />
                  {community.activity}
                </div>

                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-cyan-200" />
                  {community.online}
                </div>

                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-300" />
                  {community.growth} • {community.engagement}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-xl bg-cyan-400 text-slate-900 hover:bg-cyan-300 shadow-md"
                >
                  <Link to="/signup">Join Community</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-white/25 bg-white/5 text-slate-100 hover:bg-white/15"
                >
                  <Link to="/discover">Explore</Link>
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
