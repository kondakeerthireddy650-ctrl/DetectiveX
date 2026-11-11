import React from 'react';
import { 
  FolderSearch, 
  Fingerprint, 
  UserCheck, 
  Award, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { HeritageDivider, ArchivalStamp } from '../common/IndianMotif';

export const HowItWorks = () => {
  const steps = [
    {
      stepNumber: "01",
      title: "Examine the Dossier",
      subtitle: "Incident Brief & Crime Scene",
      description: "Read the official CID incident reports, inspect time-stamped logbooks, telegram dispatches, and authentic regional blueprints.",
      icon: FolderSearch,
      highlight: "Unredacted archival transcripts"
    },
    {
      stepNumber: "02",
      title: "Inspect Physical Clues",
      subtitle: "Forensic & Cultural Artifacts",
      description: "Analyze wax key impressions, torn train tickets, metallurgical traces, and cryptic Sanskrit cyphers preserved in the evidence vault.",
      icon: Fingerprint,
      highlight: "Interactive clue inspection"
    },
    {
      stepNumber: "03",
      title: "Interrogate Suspects",
      subtitle: "Cross-Reference Alibis",
      description: "Review testimonies of maharajas, court physicians, foreign diplomats, and station masters to expose false statements.",
      icon: UserCheck,
      highlight: "Contradiction detection"
    },
    {
      stepNumber: "04",
      title: "Deliver the Verdict",
      subtitle: "Close the Investigation",
      description: "Connect the narrative threads, name the perpetrator, submit your evidentiary proof, and earn your official CID Sleuth rank.",
      icon: Award,
      highlight: "Sleuth reputation badges"
    }
  ];

  return (
    <section className="py-20 bg-cream-50 border-y border-warm-200/80 relative overflow-hidden">
      
      {/* Background Indian ornamental arches */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 text-gold-800 border border-gold-300 text-xs font-mono-archive tracking-wider font-semibold">
            <span>METHODOLOGY OF DEDUCTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-burgundy-950">
            How DetectiveX Works
          </h2>

          <p className="text-sm sm:text-base text-sepia-body leading-relaxed">
            No guesswork. No random clicking. Every mystery is structured upon meticulous chronological evidence, historic plausibility, and pure deductive reasoning.
          </p>

          <HeritageDivider className="opacity-50" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.stepNumber}
                className="bg-white rounded-2xl p-6 border border-warm-300 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
              >
                {/* Step badge top right */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-200/80 flex items-center justify-center text-burgundy-800 group-hover:bg-burgundy-800 group-hover:text-gold-200 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-display font-extrabold text-2xl text-gold-500/50 group-hover:text-gold-600 transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <span className="text-[11px] font-mono-archive text-gold-700 font-bold uppercase tracking-wider block">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-burgundy-950">
                    {step.title}
                  </h3>
                  <p className="text-xs text-sepia-body leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-warm-200/70 flex items-center gap-1.5 text-[11px] font-medium text-burgundy-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                  <span>{step.highlight}</span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Pro Tip Callout */}
        <div className="mt-12 bg-white/70 border border-warm-300 rounded-xl p-5 max-w-3xl mx-auto flex items-start gap-4 shadow-sm">
          <div className="p-2 rounded-lg bg-burgundy-50 text-burgundy-800 border border-burgundy-200 shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-display text-xs uppercase tracking-wider font-bold text-burgundy-900">
              The Investigator's Code
            </h4>
            <p className="text-xs text-sepia-body leading-relaxed">
              Every detail matters: the postmark on an envelope, the specific type of mud on a carriage spoke, or the exact hour of the tide on the Hooghly River. Keep your investigative notes organized.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
