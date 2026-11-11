import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Shield, 
  Feather, 
  Compass, 
  Scroll, 
  Lock, 
  Users, 
  Fingerprint, 
  Award, 
  Landmark, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { HeritageDivider, WaxSeal, ArchivalStamp, CornerOrnament } from '../components/common/IndianMotif';

export const AboutPage = () => {
  const domains = [
    {
      title: "Heritage & Antiquities Heists",
      era: "Colonial to 1980s",
      icon: Landmark,
      description: "Priceless temple bronzes from Thanjavur, diamond vaults in Calcutta zamindari estates, and Mughal emeralds swapped under the watch of armed guards.",
      whyEnjoy: "Appeals to lovers of historical treasure hunts, museum security puzzles, and metallurgical forensic clues."
    },
    {
      title: "Royal Palace Whodunits",
      era: "Princely States & 1970s",
      icon: Award,
      description: "Mysterious drownings in lake palaces, poisoned banquet cups in Rajputana fortresses, and bitter succession feuds hidden behind marble jali screens.",
      whyEnjoy: "Rich court intrigues, intricate family trees, and high-society secrets where everyone has an alibi and a motive."
    },
    {
      title: "Classic Noir & Hill Espionage",
      era: "Cold War (1940s - 1960s)",
      icon: Compass,
      description: "Fog-drenched train corridors along the Kalka-Shimla toy train, intercepted Morse telegrams, and border treaty papers stolen in the dead of winter.",
      whyEnjoy: "Evokes the golden age of classic suspense, atmospheric British-Indian hill stations, and ticking-clock espionage."
    },
    {
      title: "Modern Cyber & Financial Crime",
      era: "Present Day India",
      icon: Shield,
      description: "Synchronized blackout heists across Mumbai's Nariman Point, fake AI biometrics, offshore SWIFT routing, and corporate espionage in Silicon Bengaluru.",
      whyEnjoy: "High-adrenaline modern investigations combining SCADA electrical logs, digital audio forensics, and money trails."
    },
    {
      title: "Occult & Ancient Secrets",
      era: "Centuries of Lore",
      icon: Scroll,
      description: "Deciphering 2,000-year-old copperplate inscriptions, mysterious alchemical urns along the Varanasi ghats, and riddles left by reclusive Sanskrit scholars.",
      whyEnjoy: "Satisfies code-breakers, cryptographers, and enthusiasts of forgotten Indian mythology and ancient sciences."
    }
  ];

  const gameMechanics = [
    {
      number: "1",
      name: "The Incident Dossier",
      detail: "Begin with raw, unvarnished first information reports (FIR), scene sketches, weather logs, and initial constable notes."
    },
    {
      number: "2",
      name: "The Evidence Locker",
      detail: "Inspect high-resolution photographs of physical clues: wax impressions, torn train tickets, chemistry results, and telegram fragments."
    },
    {
      number: "3",
      name: "Suspect Cross-Examination",
      detail: "Hear from witnesses and suspects. Compare their claimed arrival times with train timetables and toll receipts to uncover contradictions."
    },
    {
      number: "4",
      name: "The Detective's Journal",
      detail: "Record personal deductions, bookmark critical clues in your local archive, and assemble your working hypothesis."
    },
    {
      number: "5",
      name: "The Final Charge Sheet",
      detail: "Submit your official verdict: identity of the perpetrator, motive, and the single piece of decisive evidence that proves guilt beyond doubt."
    }
  ];

  return (
    <div className="py-12 bg-warm-50 text-sepia-dark">
      
      {/* Header Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="flex justify-center">
          <ArchivalStamp text="ORIGIN & METHODOLOGY" variant="burgundy" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-burgundy-950">
          The Story Behind DetectiveX
        </h1>

        <p className="font-serif italic text-lg text-burgundy-800">
          "Every clue has a story. Every story has a mystery."
        </p>

        <p className="text-sm sm:text-base text-sepia-body leading-relaxed max-w-2xl mx-auto">
          DetectiveX was born from a singular passion: to give Indian mystery literature, historical archives, and classic investigative deduction the interactive stage they deserve.
        </p>

        <HeritageDivider className="opacity-60" />
      </section>

      {/* Part 1: What DetectiveX Is */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-warm-300 shadow-soft relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-400/10 blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono-archive uppercase tracking-widest text-gold-700 font-bold block">
                01 · THE VISION & ROOTS
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-burgundy-950 leading-snug">
                Honoring the Golden Tradition of Indian Sleuths
              </h2>

              <p className="text-sm text-sepia-body leading-relaxed">
                For generations, Indian readers have been captivated by the brilliance of <strong>Prodosh C. Mitter (Feluda)</strong> with his razor-sharp observational mastery, <strong>Byomkesh Bakshi</strong> the self-styled <em>Satyanweshi</em> (seeker of truth), and the sharp wit of classic Indian courtroom and criminal chronicles.
              </p>

              <p className="text-sm text-sepia-body leading-relaxed">
                Yet modern detective gaming has long been saturated with generic Western tropes or neon-soaked cyberpunk aesthetics. <strong>DetectiveX</strong> creates an authentic home for Indian mystery: parchment dossier folders, wax-sealed exhibits, colonial railway schedules, and the whispered intrigues of Indian heritage.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-warm-50 border border-warm-200">
                  <span className="font-bold text-burgundy-900 block font-serif">Authentic Cultural Lore</span>
                  <span className="text-sepia-muted text-[11px]">Real Indian locations, eras, and historical nuances.</span>
                </div>
                <div className="p-3 rounded-xl bg-warm-50 border border-warm-200">
                  <span className="font-bold text-burgundy-900 block font-serif">Pure Deductive Logic</span>
                  <span className="text-sepia-muted text-[11px]">No random puzzles; every clue is organically tied to the plot.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-warm-100/70 p-6 sm:p-8 rounded-2xl border border-warm-300 text-center space-y-4">
              <WaxSeal size="lg" text="CID BHARAT" />
              <h3 className="font-serif font-bold text-lg text-burgundy-900">
                The Inspector's Creed
              </h3>
              <p className="font-serif italic text-xs text-sepia-body leading-relaxed">
                "We do not seek to punish without comprehension. We seek the truth that time, greed, and deception have buried beneath the soil of Hindustan."
              </p>
              <div className="pt-2 border-t border-warm-200 text-[10px] font-mono-archive text-gold-700 font-bold uppercase tracking-wider">
                CENTRAL FORENSIC REGISTER · 1928-PRESENT
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Part 2: How the Investigation Game Works */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono-archive uppercase tracking-widest text-gold-700 font-bold block">
            02 · THE INVESTIGATION PROTOCOL
          </span>
          <h2 className="text-3xl font-serif font-bold text-burgundy-950">
            How the Game Works
          </h2>
          <p className="text-xs sm:text-sm text-sepia-body">
            Each case unfolds like a real criminal inquiry conducted by a special commission.
          </p>
        </div>

        <div className="space-y-4">
          {gameMechanics.map((step) => (
            <div 
              key={step.number}
              className="bg-white rounded-2xl p-6 border border-warm-300 shadow-soft flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-gold-500/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-burgundy-800 text-gold-200 font-display font-bold text-xl flex items-center justify-center shrink-0 shadow-sm">
                {step.number}
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="font-serif font-bold text-base text-burgundy-950">
                  {step.name}
                </h3>
                <p className="text-xs text-sepia-body leading-relaxed">
                  {step.detail}
                </p>
              </div>
              <div className="hidden md:flex items-center text-xs font-mono-archive text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                Active in Phase 1
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 3: Why Users Can Enjoy Different Mystery Domains */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono-archive uppercase tracking-widest text-gold-700 font-bold block">
            03 · DIVERSE INVESTIGATIVE WORLDS
          </span>
          <h2 className="text-3xl font-serif font-bold text-burgundy-950">
            Why You Will Love Different Mystery Domains
          </h2>
          <p className="text-xs sm:text-sm text-sepia-body">
            India's geography and history are vast. DetectiveX provides varied flavors of mystery so every detective finds their ideal challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((dom, index) => {
            const Icon = dom.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-warm-300 shadow-soft flex flex-col justify-between hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-burgundy-50 border border-burgundy-200 text-burgundy-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono-archive bg-warm-100 text-gold-800 px-2 py-0.5 rounded border border-warm-200 font-bold">
                      {dom.era}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-lg text-burgundy-950 mb-1">
                      {dom.title}
                    </h3>
                    <p className="text-xs text-sepia-body leading-relaxed">
                      {dom.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-warm-200/80 bg-warm-50/70 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <span className="text-[10px] font-mono-archive uppercase tracking-wider text-burgundy-800 font-bold block mb-1">
                    Why You'll Enjoy It:
                  </span>
                  <p className="text-[11px] text-sepia-muted leading-tight">
                    {dom.whyEnjoy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Part 4: Design Philosophy Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-cream-100 rounded-2xl p-8 border border-warm-300 shadow-soft text-center space-y-4">
          <CornerOrnament className="mx-auto text-gold-600/60" />
          <h3 className="font-serif font-bold text-xl text-burgundy-950">
            A Handcrafted Aesthetic: No Neon, No Cyberpunk
          </h3>
          <p className="text-xs sm:text-sm text-sepia-body leading-relaxed max-w-2xl mx-auto">
            We intentionally crafted DetectiveX in warm whites, creamy parchment, soft beiges, rich burgundy velour, and subtle gold accents. Every visual element evokes the tactile experience of opening a leather briefcase, holding an ink-stamped telegram, or studying evidence beneath a warm brass reading lamp.
          </p>
          <div className="pt-2">
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 font-display text-xs uppercase tracking-wider font-bold shadow-md transition-all"
            >
              <span>Explore The Case Archives</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
