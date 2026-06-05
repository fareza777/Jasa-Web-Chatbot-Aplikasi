import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Code2,
  Copy,
  Cpu,
  Globe2,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Play,
  Quote,
  ScrollText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  exampleBuilds,
  caseStudySimulations,
  credibilitySignals,
  assetChecklist,
  guaranteeSignals,
  goals,
  industries,
  industryPlaybooks,
  maturityAuditItems,
  objectionHandlers,
  ctaPatterns,
  offerTones,
  packageTiers,
  premiumDeliverables,
  architectureNodes,
  scopeMatrix,
  serviceCatalog,
  serviceOutcomes,
  testimonials,
  visualThemes,
} from "../data/serviceCatalog";
import { formatRupiah } from "../utils/formatters";

const serviceIcons = {
  website: Globe2,
  chatbot: Bot,
  "mobile-app": Smartphone,
  "growth-stack": Layers3,
  "digital-assistant": Bot,
};

const sectionLinks = [
  ["services", "Layanan"],
  ["configurator", "Konfigurator"],
  ["work", "Output"],
  ["proof", "Skenario"],
  ["process", "Proses"],
  ["faq", "FAQ"],
];

function createInitialConfig(service) {
  return Object.fromEntries(
    service.options.map((option) => [
      option.id,
      option.type === "multi" ? [] : option.choices[0].value,
    ]),
  );
}

function getSelectedChoice(option, value) {
  return option.choices.find((choice) => choice.value === value) || option.choices[0];
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function PremiumStudio() {
  const [activeServiceId, setActiveServiceId] = useState(serviceCatalog[0].id);
  const [selectedIndustryId, setSelectedIndustryId] = useState(industries[0].id);
  const [selectedGoalId, setSelectedGoalId] = useState(goals[0].id);
  const [selectedThemeId, setSelectedThemeId] = useState(visualThemes[0].id);
  const [proposalOpen, setProposalOpen] = useState(false);
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [configs, setConfigs] = useState(() =>
    Object.fromEntries(
      serviceCatalog.map((service) => [service.id, createInitialConfig(service)]),
    ),
  );

  const activeService =
    serviceCatalog.find((service) => service.id === activeServiceId) || serviceCatalog[0];
  const activeConfig = configs[activeService.id];
  const selectedIndustry =
    industries.find((industry) => industry.id === selectedIndustryId) || industries[0];
  const selectedGoal = goals.find((goal) => goal.id === selectedGoalId) || goals[0];
  const selectedTheme =
    visualThemes.find((theme) => theme.id === selectedThemeId) || visualThemes[0];

  useEffect(() => {
    function updateScrollProgress() {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight
        ? (window.scrollY / scrollableHeight) * 100
        : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const quote = useMemo(() => {
    const optionTotal = activeService.options.reduce((total, option) => {
      if (option.type === "multi") {
        return (
          total +
          activeConfig[option.id].reduce((sum, value) => {
            const choice = getSelectedChoice(option, value);
            return sum + choice.price;
          }, 0)
        );
      }

      return total + getSelectedChoice(option, activeConfig[option.id]).price;
    }, 0);

    return activeService.basePrice + optionTotal;
  }, [activeConfig, activeService]);

  function updateConfig(option, value) {
    setConfigs((current) => ({
      ...current,
      [activeService.id]: {
        ...current[activeService.id],
        [option.id]: value,
      },
    }));
  }

  function toggleMulti(option, value) {
    const currentValues = activeConfig[option.id];
    const nextValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];
    updateConfig(option, nextValues);
  }

  const selectedSummary = activeService.options.flatMap((option) => {
    if (option.type === "multi") {
      return activeConfig[option.id].map((value) => getSelectedChoice(option, value).label);
    }

    return getSelectedChoice(option, activeConfig[option.id]).label;
  });

  const recommendedService = useMemo(() => {
    const recommendationScore = serviceCatalog.map((service) => {
      let score = service.id === activeService.id ? 2 : 0;
      if (service.id === selectedIndustry.recommendedService) score += 3;
      if (service.id === selectedGoal.recommendedService) score += 4;
      if (service.id === "growth-stack" && selectedTheme.id === "luxury") score += 1;
      return { service, score };
    });

    return recommendationScore.sort((a, b) => b.score - a.score)[0].service;
  }, [activeService.id, selectedGoal, selectedIndustry, selectedTheme.id]);

  const proposal = {
    service: activeService,
    industry: selectedIndustry,
    goal: selectedGoal,
    theme: selectedTheme,
    selectedSummary,
    quote,
    recommendedService,
  };

  return (
    <div className="luxury-ambient min-h-screen bg-[#f7f4ee] text-[#111827]">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div
          className="h-full bg-[#c7a66b] transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <header className="sticky top-0 z-40 border-b border-[#ded8cc] bg-[#f7f4ee]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="group flex items-center gap-3 text-left"
          >
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#111827] text-[#c7a66b] transition duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
              <Code2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.18em]">
                Digital Craft
              </span>
              <span className="block text-xs font-semibold text-[#6b7280]">
                Websites, AI, Apps
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {sectionLinks.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="rounded-md px-3 py-2 text-sm font-bold text-[#374151] hover:bg-white"
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setProposalOpen(true)}
            className="hidden h-10 flex-none items-center gap-2 rounded-md bg-[#111827] px-4 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f2937] hover:shadow-[0_14px_30px_rgba(17,24,39,0.18)] sm:inline-flex"
          >
            Generate Proposal
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <Hero
          quote={quote}
          activeService={activeService}
          proposal={proposal}
          onOpenProposal={() => setProposalOpen(true)}
        />
        <TrustBand />
        <ExecutiveMetrics />
        <SmartBuilder
          selectedIndustryId={selectedIndustryId}
          selectedGoalId={selectedGoalId}
          selectedThemeId={selectedThemeId}
          recommendedService={recommendedService}
          onIndustryChange={setSelectedIndustryId}
          onGoalChange={setSelectedGoalId}
          onThemeChange={setSelectedThemeId}
          onUseRecommendation={() => {
            setActiveServiceId(recommendedService.id);
            scrollToSection("configurator");
          }}
        />
        <Services
          activeServiceId={activeServiceId}
          onSelect={(id) => {
            setActiveServiceId(id);
            scrollToSection("configurator");
          }}
        />
        <OpenClawAssistantLab
          onSelectAssistant={() => {
            setActiveServiceId("digital-assistant");
            scrollToSection("configurator");
          }}
        />
        <Configurator
          activeService={activeService}
          activeConfig={activeConfig}
          quote={quote}
          selectedSummary={selectedSummary}
          proposal={proposal}
          onOpenProposal={() => setProposalOpen(true)}
          onServiceChange={setActiveServiceId}
          onSelect={updateConfig}
          onToggle={toggleMulti}
        />
        <OutputShowcase />
        <ExampleBuilds />
        <CaseStudySimulator onOpenProposal={() => setProposalOpen(true)} />
        <ObjectionHandler onOpenProposal={() => setProposalOpen(true)} />
        <OfferPersonalizer onOpenProposal={() => setProposalOpen(true)} />
        <BrandSystemPreview proposal={proposal} />
        <LuxuryDeliverablesGallery proposal={proposal} />
        <ArchitectureMap proposal={proposal} onOpenProposal={() => setProposalOpen(true)} />
        <MaturityAudit onOpenProposal={() => setProposalOpen(true)} />
        <OutcomeCalculator proposal={proposal} />
        <ROISection proposal={proposal} />
        <LaunchReadiness proposal={proposal} />
        <IndustryPlaybook proposal={proposal} />
        <PackageComparison
          onOpenProposal={() => setProposalOpen(true)}
          onOpenIntake={() => setIntakeOpen(true)}
        />
        <ScopeMatrix onOpenIntake={() => setIntakeOpen(true)} />
        <CredibilitySection />
        <AssetChecklist />
        <BeforeAfterSection onOpenProposal={() => setProposalOpen(true)} />
        <ScenarioSection />
        <ExecutionRoadmap />
        <ProcessSection />
        <FAQSection />
        <FinalCTA onOpenProposal={() => setProposalOpen(true)} />
        <GuaranteeStrip />
        <PremiumFooter onOpenProposal={() => setProposalOpen(true)} />
      </main>
      <StickyQuoteBar
        proposal={proposal}
        onOpenProposal={() => setProposalOpen(true)}
      />
      {proposalOpen && (
        <ProposalModal
          proposal={proposal}
          onClose={() => setProposalOpen(false)}
          onOpenIntake={() => {
            setProposalOpen(false);
            setIntakeOpen(true);
          }}
        />
      )}
      {intakeOpen && (
        <IntakeModal proposal={proposal} onClose={() => setIntakeOpen(false)} />
      )}
    </div>
  );
}

function Hero({ quote, activeService, proposal, onOpenProposal }) {
  const themeColors = proposal.theme.colors;

  return (
    <section
      className="noise-wash luxury-grid relative overflow-hidden border-b border-[#ded8cc] text-white"
      style={{ backgroundColor: themeColors.dark }}
    >
      <div className="aurora-layer" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 12% 18%, ${themeColors.accent}38, transparent 28%), radial-gradient(circle at 80% 10%, ${themeColors.secondary}30, transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent)`,
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="min-w-0 max-w-[22rem] flex flex-col justify-center sm:max-w-none">
          <div className="animate-fade-up mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#c7a66b]/40 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#f5d89b] backdrop-blur">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Premium digital service studio
          </div>
          <h1 className="animate-fade-up animation-delay-100 w-full max-w-[22rem] text-[2rem] font-black leading-[1.06] tracking-[-0.02em] text-white sm:max-w-4xl sm:text-6xl lg:text-7xl">
            Buat bisnis terlihat premium lewat website, chatbot, dan aplikasi.
          </h1>
          <p className="animate-fade-up animation-delay-200 mt-6 w-full max-w-[22rem] text-base leading-8 text-slate-300 sm:max-w-2xl sm:text-lg">
            Strategi, desain, copywriting, automasi, dan flow produk digabung
            menjadi pengalaman digital yang rapi, kredibel, dan siap dipakai
            untuk menjual jasa dengan percaya diri.
          </p>

          <div className="animate-fade-up animation-delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onOpenProposal}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-black text-[#080b12] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
              style={{ backgroundColor: themeColors.accent }}
            >
              Generate proposal
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("work")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 text-sm font-black text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[#c7a66b] hover:bg-white/15"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              Lihat output
            </button>
          </div>
          <div className="animate-fade-up animation-delay-500 mt-8 grid max-w-[22rem] gap-3 sm:max-w-2xl sm:grid-cols-3">
            {[
              ["Rp750rb+", "entry realistis"],
              ["5 jasa", "custom scope"],
              ["AI-ready", "chatbot + assistant"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.07] p-3 backdrop-blur">
                <p className="text-lg font-black text-white">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="premium-frame premium-panel-motion scan-surface relative min-h-[560px] min-w-0 max-w-[22rem] overflow-hidden rounded-md border p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:max-w-none"
          style={{
            backgroundColor: "#111827",
            borderColor: `${themeColors.accent}55`,
          }}
        >
          <div
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: themeColors.accent }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 left-10 h-52 w-52 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: themeColors.secondary }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 top-0 flex h-14 items-center justify-between border-b border-white/10 bg-[#0b1220] px-4">
            <span className="chrome-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
              Command Center
            </span>
          </div>
          <div className="relative pt-16">
            <div className="mb-4 grid gap-3 sm:grid-cols-3">
              {["Lead intent", "Conversion", "Quote"].map((label, index) => (
                <div key={label} className="dark-glass shimmer-surface rounded-md p-3 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.10]">
                  <p className="text-xs font-bold text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-black text-white">
                    {index === 0 ? "High" : index === 1 ? "+38%" : formatRupiah(quote)}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-md bg-[#f7f4ee] p-5 text-[#111827] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition duration-500">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6d30]">
                    Active build
                  </p>
                  <h2 className="mt-2 text-2xl font-black leading-tight">
                    {activeService.name}
                  </h2>
                </div>
                <span className="rounded-full bg-[#111827] px-3 py-1 text-xs font-black text-white">
                  {activeService.timeline}
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {activeService.includes.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md bg-white p-3 transition duration-300 hover:translate-x-1">
                    <CheckCircle2 className="h-5 w-5 flex-none text-[#0f766e]" aria-hidden="true" />
                    <span className="text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_0.72fr]">
              <div className="dark-glass rounded-md p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c7a66b]">
                  Build preview
                </p>
                <div className="animate-progress-grow mt-4 h-3 w-3/4 rounded bg-white/80" />
                <div className="animate-progress-grow animation-delay-200 mt-3 h-3 w-1/2 rounded bg-white/40" />
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div
                    className="h-20 rounded transition duration-500 hover:scale-105"
                    style={{ backgroundColor: themeColors.accent }}
                  />
                  <div
                    className="h-20 rounded transition duration-500 hover:scale-105"
                    style={{ backgroundColor: themeColors.secondary }}
                  />
                  <div className="h-20 rounded bg-white/30 transition duration-500 hover:scale-105" />
                </div>
              </div>
              <AIConversationCard />
            </div>
            <div className="mt-4 rounded-md border border-[#c7a66b]/20 bg-[#0b1220] p-4 shadow-[inset_0_1px_0_rgba(199,166,107,0.12)]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c7a66b]">
                Recommended strategy
              </p>
              <p className="mt-2 text-sm font-bold leading-6 text-white">
                {proposal.industry.headline}
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-400">
                Theme: {proposal.theme.label} · Goal: {proposal.goal.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIConversationCard() {
  return (
    <div className="relative overflow-hidden rounded-md border border-white/10 bg-white/[0.06] p-4">
      <div className="absolute right-3 top-3 h-16 w-16 rounded-full border border-[#c7a66b]/20" />
      <div className="relative">
        <div className="mb-4 flex items-center justify-between gap-3">
          <MessageCircle className="h-6 w-6 text-[#c7a66b]" aria-hidden="true" />
          <span className="rounded-full bg-[#0f766e]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#67e8d3]">
            Live AI
          </span>
        </div>

        <div className="space-y-2">
          <div className="max-w-[92%] rounded-md rounded-tl-none bg-white/[0.10] px-3 py-2">
            <p className="text-xs font-bold leading-5 text-white">
              Saya bantu pilih paket paling tepat untuk bisnis Anda.
            </p>
          </div>
          <div className="ml-auto max-w-[82%] rounded-md rounded-tr-none bg-[#c7a66b] px-3 py-2">
            <p className="text-xs font-black leading-5 text-[#080b12]">
              Butuh leads dan tampil premium.
            </p>
          </div>
          <div className="max-w-[94%] rounded-md rounded-tl-none bg-white/[0.10] px-3 py-2">
            <p className="text-xs font-bold leading-5 text-white">
              Rekomendasi: website conversion + chatbot follow-up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustBand() {
  return (
    <section className="border-b border-[#ded8cc] bg-[#111827] text-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
        {[
          ["Strategy first", "Setiap halaman punya tujuan bisnis"],
          ["Custom flow", "Paket bisa dikonfigurasi sesuai kebutuhan"],
          ["Premium UI", "Visual bersih, matang, dan responsif"],
          ["Sales-ready", "CTA, chat, dan copy dibuat terarah"],
        ].map(([title, description], index) => (
          <div
            key={title}
            className={`group animate-fade-up border-l border-white/15 pl-4 ${
              index === 1
                ? "animation-delay-100"
                : index === 2
                  ? "animation-delay-200"
                  : index === 3
                    ? "animation-delay-300"
                    : ""
            }`}
          >
            <p className="font-black transition duration-300 group-hover:text-[#c7a66b]">{title}</p>
            <p className="mt-1 text-sm text-slate-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExecutiveMetrics() {
  const metrics = [
    ["01", "Strategic blueprint", "Scope dibuat dari tujuan bisnis, bukan dari template halaman."],
    ["02", "Conversion layer", "Copy, CTA, dan flow konsultasi disusun untuk mengurangi friction."],
    ["03", "Premium interface", "Visual system dibuat konsisten untuk website, chatbot, dan aplikasi."],
  ];

  return (
    <section className="border-b border-[#ded8cc] bg-[#f7f4ee]">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:px-8">
        {metrics.map(([number, title, description]) => (
          <article
            key={title}
            className="group rounded-md border border-[#ded8cc] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#111827] hover:shadow-[0_18px_40px_rgba(17,24,39,0.10)]"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#8a6d30]">
                {number}
              </span>
              <TrendingUp className="h-5 w-5 text-[#0f766e] transition duration-300 group-hover:rotate-6" />
            </div>
            <h3 className="text-lg font-black text-[#111827]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#4b5563]">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SmartBuilder({
  selectedIndustryId,
  selectedGoalId,
  selectedThemeId,
  recommendedService,
  onIndustryChange,
  onGoalChange,
  onThemeChange,
  onUseRecommendation,
}) {
  return (
    <section className="border-b border-[#ded8cc] bg-[#f7f4ee]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <p className="section-kicker">
            Smart package builder
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Pilih konteks bisnis, lalu sistem akan menyarankan paket terbaik.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">
            Ini membuat pengalaman terasa seperti konsultasi premium, bukan katalog
            harga statis. Calon klien langsung melihat arah solusi yang relevan.
          </p>
        </div>

        <div className="grid gap-4">
          <ChoiceGrid
            title="Industri"
            items={industries}
            selectedId={selectedIndustryId}
            onSelect={onIndustryChange}
          />
          <ChoiceGrid
            title="Tujuan utama"
            items={goals}
            selectedId={selectedGoalId}
            onSelect={onGoalChange}
          />
          <ChoiceGrid
            title="Arah visual"
            items={visualThemes}
            selectedId={selectedThemeId}
            onSelect={onThemeChange}
          />

          <div className="rounded-md border border-[#111827] bg-[#111827] p-5 text-white">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
                  Rekomendasi sistem
                </p>
                <h3 className="mt-2 text-2xl font-black">
                  {recommendedService.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {recommendedService.headline}
                </p>
              </div>
              <button
                type="button"
                onClick={onUseRecommendation}
                className="inline-flex h-11 flex-none items-center justify-center gap-2 rounded-md bg-[#c7a66b] px-4 text-sm font-black text-[#080b12] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5d89b]"
              >
                Gunakan
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChoiceGrid({ title, items, selectedId, onSelect }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-[#8a6d30]">
        {title}
      </h3>
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
              className={`rounded-md border p-4 text-left transition duration-300 hover:-translate-y-0.5 ${
              selectedId === item.id
                ? "border-[#111827] bg-white shadow-[0_16px_34px_rgba(17,24,39,0.12)]"
                : "premium-card hover:border-[#111827]"
            }`}
          >
            <p className="font-black text-[#111827]">{item.label}</p>
            <p className="mt-1 text-xs leading-5 text-[#6b7280]">
              {item.description || item.impact || item.headline}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

function Services({ activeServiceId, onSelect }) {
  const serviceAccents = {
    website: "#0f766e",
    chatbot: "#c7a66b",
    "mobile-app": "#2563eb",
    "growth-stack": "#111827",
    "digital-assistant": "#14b8a6",
  };

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="section-kicker">
            Layanan inti
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Pilih sistem digital yang ingin dibangun.
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-[#4b5563]">
          Semua paket bisa diarahkan untuk UMKM, personal brand, bisnis jasa,
          edukasi, klinik, properti, travel, dan produk digital.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {serviceCatalog.map((service) => {
          const Icon = serviceIcons[service.id] || Sparkles;
          const isActive = service.id === activeServiceId;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelect(service.id)}
              className={`premium-frame group relative flex min-h-[320px] flex-col overflow-hidden rounded-md border p-5 text-left transition duration-300 hover:-translate-y-2 ${
                isActive
                  ? "border-[#111827] bg-white shadow-[0_22px_60px_rgba(17,24,39,0.16)]"
                  : "premium-card hover:border-[#111827] hover:shadow-[0_18px_44px_rgba(17,24,39,0.10)]"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[#111827]" aria-hidden="true" />
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-15 blur-2xl transition duration-500 group-hover:opacity-30"
                style={{ backgroundColor: serviceAccents[service.id] || "#c7a66b" }}
                aria-hidden="true"
              />
              <div className="relative mb-5 flex items-center justify-between gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-md bg-[#111827] text-[#c7a66b] transition duration-300 group-hover:rotate-3 group-hover:scale-105">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-[#ded8cc] bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#6b7280]">
                  {service.timeline}
                </span>
              </div>
              <div className="relative mb-4 grid grid-cols-4 gap-1.5">
                {[0, 1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className="h-1.5 rounded-full transition duration-500 group-hover:scale-y-150"
                    style={{
                      backgroundColor:
                        item === 0
                          ? serviceAccents[service.id] || "#c7a66b"
                          : item === 1
                            ? "#c7a66b"
                            : "#ded8cc",
                    }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="relative text-xs font-black uppercase tracking-[0.16em] text-[#8a6d30]">
                {service.label}
              </p>
              <h3 className="relative mt-2 text-xl font-black leading-tight">{service.name}</h3>
              <p className="relative mt-3 flex-1 text-sm leading-6 text-[#4b5563]">
                {service.description}
              </p>
              <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-[#ded8cc] pt-4">
                <span className="text-sm font-black">
                  Mulai {formatRupiah(service.basePrice)}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-md bg-[#111827] text-white transition duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function OpenClawAssistantLab({ onSelectAssistant }) {
  const capabilities = [
    ["Knowledge Core", "FAQ, layanan, harga, SOP, dan kebijakan bisnis."],
    ["Lead Intelligence", "Scoring, intent, urgency, dan rekomendasi paket."],
    ["Workflow Routing", "Handover ke admin, follow-up, dan task summary."],
    ["Guardrail Mode", "Batasan jawaban, fallback, dan eskalasi manusia."],
  ];

  return (
    <section className="noise-wash relative overflow-hidden border-y border-[#ded8cc] bg-[#080b12] text-white">
      <div className="aurora-layer opacity-60" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c7a66b]">
            OpenClaw assistant service
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Asisten digital seperti Hermes, dibuat siap pakai untuk pelanggan.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Paket ini bukan hanya chatbot. Ini adalah assistant layer yang punya
            persona, knowledge base, workflow, lead scoring, dan handover ke tim manusia.
          </p>
          <button
            type="button"
            onClick={onSelectAssistant}
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c7a66b] px-5 text-sm font-black text-[#080b12] transition hover:-translate-y-0.5 hover:bg-[#f5d89b]"
          >
            Rancang asisten digital
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="premium-frame scan-surface relative overflow-hidden rounded-md border border-[#c7a66b]/30 bg-[#0b1220] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="luxury-grid absolute inset-0 opacity-30" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <span className="chrome-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="rounded-full border border-[#c7a66b]/20 bg-[#c7a66b]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#f5d89b]">
                Assistant Lab
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
              <div className="grid place-items-center rounded-md border border-white/10 bg-white/[0.04] p-6">
                <div className="relative grid h-40 w-40 place-items-center rounded-full border border-[#c7a66b]/30">
                  <div className="orbit-ring absolute inset-0 rounded-full border border-dashed border-[#c7a66b]/35" />
                  <div className="orbit-ring absolute inset-5 rounded-full border border-dashed border-[#0f766e]/40 [animation-duration:12s]" />
                  <div className="absolute inset-10 rounded-full bg-[#c7a66b]/10 blur-xl" />
                  <div className="relative grid h-20 w-20 place-items-center rounded-full bg-[#c7a66b] text-[#080b12] shadow-[0_0_40px_rgba(199,166,107,0.35)]">
                    <Cpu className="h-9 w-9" />
                  </div>
                </div>
                <p className="mt-5 text-center text-sm font-black text-[#f5d89b]">
                  OpenClaw Core
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map(([title, description]) => (
                  <article key={title} className="dark-glass group rounded-md p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
                    <div className="mb-3 h-1.5 w-12 rounded-full bg-[#c7a66b] transition duration-300 group-hover:w-20" />
                    <p className="font-black text-white">{title}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-md border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
                Delivery promise
              </p>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-200">
                Pelanggan mendapatkan assistant blueprint, flow skenario, knowledge base,
                dan mode handover sehingga asisten bisa langsung diuji dan dipakai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Configurator({
  activeService,
  activeConfig,
  quote,
  selectedSummary,
  proposal,
  onOpenProposal,
  onServiceChange,
  onSelect,
  onToggle,
}) {
  const ActiveIcon = serviceIcons[activeService.id] || Sparkles;

  return (
    <section id="configurator" className="border-y border-[#ded8cc] bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="section-kicker">
            Konfigurator paket
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Buat paket terasa custom, jelas, dan bernilai tinggi.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">
            Pilihan di bawah mengubah estimasi harga dan ringkasan kebutuhan.
            Ini membuat calon pelanggan merasa website, chatbot, atau aplikasi
            dibuat untuk masalah mereka, bukan template murahan.
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {serviceCatalog.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => onServiceChange(service.id)}
                className={`rounded-md border px-4 py-3 text-left text-sm font-black transition duration-300 hover:-translate-y-0.5 ${
                  service.id === activeService.id
                    ? "border-[#111827] bg-[#111827] text-white shadow-[0_14px_28px_rgba(17,24,39,0.16)]"
                    : "border-[#ded8cc] bg-[#fbfaf7] hover:border-[#111827] hover:bg-white"
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          <div key={activeService.id} className="animate-fade-up mt-8 rounded-md bg-[#111827] p-6 text-white">
            <ActiveIcon className="h-8 w-8 text-[#c7a66b] transition duration-500" aria-hidden="true" />
            <h3 className="mt-4 text-2xl font-black">{activeService.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{activeService.headline}</p>
            <div className="mt-6 grid gap-3">
              {activeService.includes.map((item) => (
                <div key={item} className="flex gap-3 text-sm font-bold">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-[#c7a66b]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div key={`${activeService.id}-panel`} className="premium-card animate-fade-up rounded-md p-4 sm:p-6">
          <div className="space-y-6">
            {activeService.options.map((option) => (
              <div key={option.id}>
                <label className="block text-sm font-black text-[#111827]">
                  {option.label}
                </label>
                {option.type === "select" ? (
                  <div className="relative mt-2">
                    <select
                      value={activeConfig[option.id]}
                      onChange={(event) => onSelect(option, event.target.value)}
                      className="h-12 w-full appearance-none rounded-md border border-[#cfc5b8] bg-white px-4 pr-10 text-sm font-bold text-[#111827]"
                    >
                      {option.choices.map((choice) => (
                        <option key={choice.value} value={choice.value}>
                          {choice.label}
                          {choice.price ? ` (+${formatRupiah(choice.price)})` : ""}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-5 w-5 text-[#6b7280]" />
                  </div>
                ) : (
                  <div className="mt-3 grid gap-2">
                    {option.choices.map((choice) => {
                      const checked = activeConfig[option.id].includes(choice.value);
                      return (
                        <button
                          key={choice.value}
                          type="button"
                          onClick={() => onToggle(option, choice.value)}
                          className={`flex items-center justify-between gap-3 rounded-md border p-3 text-left text-sm transition duration-300 hover:-translate-y-0.5 ${
                            checked
                              ? "border-[#0f766e] bg-[#ecfdf5] shadow-[0_12px_24px_rgba(15,118,110,0.10)]"
                              : "border-[#ded8cc] bg-white hover:border-[#111827] hover:shadow-[0_10px_22px_rgba(17,24,39,0.08)]"
                          }`}
                        >
                          <span className="font-bold">{choice.label}</span>
                          <span className="flex-none text-xs font-black text-[#8a6d30]">
                            +{formatRupiah(choice.price)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="animate-glow-pulse mt-8 rounded-md bg-white p-5 shadow-[0_18px_50px_rgba(17,24,39,0.08)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6d30]">
                  Estimasi investasi
                </p>
                <p className="mt-2 text-3xl font-black text-[#111827]">
                  {formatRupiah(quote)}
                </p>
                <p className="mt-1 text-sm font-bold text-[#6b7280]">
                  Timeline: {activeService.timeline}
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenProposal}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#0f766e] px-4 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#115e59] hover:shadow-[0_16px_30px_rgba(15,118,110,0.25)]"
              >
                Generate proposal
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-5 border-t border-[#eee5d8] pt-5">
              <p className="text-sm font-black text-[#111827]">Ringkasan pilihan</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedSummary.length ? (
                  selectedSummary.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f7f4ee] px-3 py-1 text-xs font-bold text-[#374151]"
                    >
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-[#6b7280]">Belum ada add-on dipilih.</span>
                )}
              </div>
            </div>
          </div>

          <LiveBlueprint
            service={activeService}
            selectedSummary={selectedSummary}
            quote={quote}
          />
        </div>

        <ProposalPreview proposal={proposal} onOpenProposal={onOpenProposal} />
      </div>
    </section>
  );
}

function LiveBlueprint({ service, selectedSummary, quote }) {
  const blueprintItems = [
    "Positioning dan struktur penawaran",
    "Visual direction sesuai paket",
    "CTA dan flow konsultasi",
    "Checklist launch responsif",
  ];

  return (
    <div className="mt-4 rounded-md border border-[#111827]/10 bg-[#111827] p-5 text-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
            Live blueprint
          </p>
          <h3 className="mt-2 text-xl font-black">{service.label} build plan</h3>
        </div>
        <Target className="h-6 w-6 text-[#c7a66b]" aria-hidden="true" />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {blueprintItems.map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-white/[0.06] p-3">
            <p className="text-sm font-bold">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-white/10 pt-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          Selected scope
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-200">
          {selectedSummary.join(", ")} dengan estimasi {formatRupiah(quote)}.
        </p>
      </div>
    </div>
  );
}

function ProposalPreview({ proposal, onOpenProposal }) {
  const deliverables = [
    `${proposal.service.name} dengan arah visual ${proposal.theme.label}`,
    `Scope untuk ${proposal.industry.label.toLowerCase()}`,
    `Tujuan utama: ${proposal.goal.label}`,
    `Pilihan paket: ${proposal.selectedSummary.join(", ")}`,
  ];

  return (
    <div className="lg:col-span-2">
      <div className="rounded-md border border-[#ded8cc] bg-[#f7f4ee] p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
              Proposal preview
            </p>
            <h3 className="mt-2 text-2xl font-black text-[#111827]">
              Draft penawaran otomatis
            </h3>
          </div>
          <ScrollText className="h-7 w-7 text-[#8a6d30]" aria-hidden="true" />
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-md bg-white p-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6d30]">
              Executive summary
            </p>
            <p className="mt-3 text-sm leading-7 text-[#374151]">
              Untuk {proposal.industry.label}, pendekatan yang disarankan adalah
              membangun {proposal.service.name} dengan tujuan {proposal.goal.label.toLowerCase()}.
              Arah visual {proposal.theme.label} dipakai agar brand terlihat lebih
              kredibel sejak interaksi pertama.
            </p>
            <div className="mt-5 grid gap-2">
              {deliverables.map((item) => (
                <div key={item} className="flex gap-3 text-sm font-bold text-[#111827]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#0f766e]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md bg-[#111827] p-5 text-white">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
              Investment & next step
            </p>
            <p className="mt-3 text-3xl font-black">{formatRupiah(proposal.quote)}</p>
            <p className="mt-2 text-sm font-bold text-slate-300">
              Timeline estimasi: {proposal.service.timeline}
            </p>
            <div className="mt-5 rounded-md border border-white/10 bg-white/[0.06] p-4">
              <p className="text-sm font-bold leading-6">
                Next step: validasi kebutuhan, finalisasi scope, lalu mulai blueprint
                halaman, flow chat, atau modul aplikasi sesuai paket.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenProposal}
              className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#c7a66b] px-4 text-sm font-black text-[#080b12] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5d89b]"
            >
              Buka proposal lengkap
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function OutputShowcase() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="section-kicker">
            Output yang terlihat premium
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Yang dijual bukan file, tapi sistem digital yang siap dipakai.
          </h2>
          <div className="mt-6 space-y-3">
            {serviceOutcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3 text-sm font-bold text-[#374151]">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-[#0f766e]" aria-hidden="true" />
                {outcome}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Website launch", "Hero, service section, pricing, CTA, trust signal, dan halaman legal dasar."],
            ["AI chat flow", "Greeting, kualifikasi lead, rekomendasi paket, follow-up, dan handover ke admin."],
            ["Mobile MVP", "Onboarding, katalog, detail layanan, form order, dan akun pelanggan."],
            ["Sales assets", "Bio toko, template chat, proposal singkat, dan narasi penawaran."],
          ].map(([title, description], index) => (
            <article
              key={title}
              className={`group rounded-md p-5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_46px_rgba(17,24,39,0.12)] ${
                index === 0 ? "border border-[#111827] bg-[#111827] text-white" : "premium-card"
              }`}
            >
              <div className="mb-8 h-28 rounded-md border border-current/10 bg-current/5 p-3 transition duration-300 group-hover:scale-[1.02]">
                <div className="animate-progress-grow h-2 w-1/2 rounded bg-current/40" />
                <div className="animate-progress-grow animation-delay-100 mt-3 h-2 w-3/4 rounded bg-current/20" />
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="h-12 rounded bg-current/20" />
                  <div className="h-12 rounded bg-current/30" />
                  <div className="h-12 rounded bg-current/10" />
                </div>
              </div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className={`mt-2 text-sm leading-6 ${index === 0 ? "text-slate-300" : "text-[#4b5563]"}`}>
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleBuilds() {
  return (
    <section className="border-t border-[#ded8cc] bg-[#f7f4ee]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
          <p className="section-kicker">
            Example builds
          </p>
            <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.02em] sm:text-5xl">
              Contoh output yang terasa seperti brand matang.
            </h2>
          </div>
          <BriefcaseBusiness className="hidden h-11 w-11 text-[#8a6d30] lg:block" />
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {exampleBuilds.map((build, index) => (
            <article
              key={build.title}
              className={`premium-card group overflow-hidden rounded-md transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(17,24,39,0.12)] ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="h-40 bg-[#111827] p-4">
                <div className="h-full rounded-md border border-white/10 bg-white/[0.06] p-3 transition duration-300 group-hover:scale-[1.02]">
                  <div className="h-2 w-1/2 rounded bg-[#c7a66b]" />
                  <div className="mt-3 h-2 w-3/4 rounded bg-white/30" />
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <div className="h-16 rounded bg-white/20" />
                    <div className="h-16 rounded bg-[#0f766e]" />
                    <div className="h-16 rounded bg-[#c7a66b]" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6d30]">
                  {build.type}
                </p>
                <h3 className="mt-2 text-xl font-black">{build.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4b5563]">
                  {build.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudySimulator({ onOpenProposal }) {
  const [activeCaseId, setActiveCaseId] = useState(caseStudySimulations[0].id);
  const activeCase =
    caseStudySimulations.find((item) => item.id === activeCaseId) ||
    caseStudySimulations[0];

  return (
    <section className="border-y border-[#ded8cc] bg-[#080b12] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c7a66b]">
            Case study simulator
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Tunjukkan bagaimana sistem bekerja di skenario nyata.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Section ini membantu calon klien membayangkan kondisi bisnis mereka
            sendiri, lalu melihat stack digital yang masuk akal untuk masalah itu.
          </p>

          <div className="mt-6 grid gap-2">
            {caseStudySimulations.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveCaseId(item.id)}
                className={`rounded-md border px-4 py-3 text-left text-sm font-black transition duration-300 hover:-translate-y-0.5 ${
                  activeCase.id === item.id
                    ? "border-[#c7a66b] bg-[#c7a66b] text-[#080b12]"
                    : "border-white/10 bg-white/[0.04] text-white hover:border-[#c7a66b]"
                }`}
              >
                {item.industry}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-white/10 bg-white/[0.05] p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
                {activeCase.industry}
              </p>
              <h3 className="mt-2 text-3xl font-black leading-tight">
                {activeCase.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onOpenProposal}
              className="inline-flex h-11 flex-none items-center justify-center gap-2 rounded-md bg-[#c7a66b] px-4 text-sm font-black text-[#080b12] transition hover:bg-[#f5d89b]"
            >
              Generate proposal
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              ["Problem", activeCase.problem],
              ["Solution", activeCase.solution],
              ["Outcome", activeCase.outcome],
            ].map(([label, text]) => (
              <article key={label} className="rounded-md border border-white/10 bg-[#080b12] p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
                  {label}
                </p>
                <p className="mt-3 text-sm font-bold leading-7 text-slate-200">
                  {text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              Recommended stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {activeCase.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#c7a66b]/30 bg-[#c7a66b]/10 px-3 py-1 text-xs font-black text-[#f5d89b]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ObjectionHandler({ onOpenProposal }) {
  const [activeObjectionId, setActiveObjectionId] = useState(objectionHandlers[0].id);
  const activeObjection =
    objectionHandlers.find((item) => item.id === activeObjectionId) ||
    objectionHandlers[0];

  return (
    <section className="border-y border-[#ded8cc] bg-[#f7f4ee]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
            Objection handler
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Jawab keraguan calon klien sebelum mereka pergi.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">
            Website jasa premium harus bisa menjawab alasan kenapa orang ragu:
            harga, scope, kualitas, operasional, dan kualitas lead.
          </p>

          <div className="mt-6 grid gap-2">
            {objectionHandlers.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveObjectionId(item.id)}
                className={`rounded-md border px-4 py-3 text-left text-sm font-black transition duration-300 hover:-translate-y-0.5 ${
                  activeObjection.id === item.id
                    ? "border-[#111827] bg-[#111827] text-white"
                    : "border-[#ded8cc] bg-white text-[#111827] hover:border-[#111827]"
                }`}
              >
                {item.concern}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-[#ded8cc] bg-white p-5 shadow-[0_18px_44px_rgba(17,24,39,0.08)]">
          <div className="rounded-md bg-[#111827] p-5 text-white">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
              Concern
            </p>
            <h3 className="mt-2 text-2xl font-black leading-tight">
              {activeObjection.concern}
            </h3>
            <p className="mt-4 text-sm font-bold leading-7 text-slate-300">
              {activeObjection.response}
            </p>
          </div>

          <div className="mt-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6d30]">
              Supporting proof
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {activeObjection.proof.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-[#ded8cc] bg-[#f7f4ee] p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#0f766e]" />
                  <p className="mt-3 text-sm font-black text-[#111827]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenProposal}
            className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#111827] px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1f2937]"
          >
            Generate proposal untuk menjawab concern ini
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function OfferPersonalizer({ onOpenProposal }) {
  const [activeToneId, setActiveToneId] = useState(offerTones[0].id);
  const [activeCtaId, setActiveCtaId] = useState(ctaPatterns[1].id);
  const activeTone = offerTones.find((tone) => tone.id === activeToneId) || offerTones[0];
  const activeCta = ctaPatterns.find((cta) => cta.id === activeCtaId) || ctaPatterns[1];

  return (
    <section className="border-y border-[#ded8cc] bg-[#080b12] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c7a66b]">
            AI offer personalizer
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Ubah angle copy sesuai tipe klien yang dituju.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Website premium harus bisa menyesuaikan cara bicara: konsultatif,
            direct response, authority, atau productized service.
          </p>

          <div className="mt-6 space-y-5">
            <ChoicePills
              title="Tone penawaran"
              items={offerTones}
              activeId={activeToneId}
              onSelect={setActiveToneId}
            />
            <ChoicePills
              title="CTA pattern"
              items={ctaPatterns}
              activeId={activeCtaId}
              onSelect={setActiveCtaId}
            />
          </div>
        </div>

        <div className="rounded-md border border-white/10 bg-white/[0.05] p-5">
          <div className="rounded-md bg-[#f7f4ee] p-6 text-[#111827]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6d30]">
              Live copy preview
            </p>
            <h3 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-0.02em] sm:text-5xl">
              {activeTone.headline}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4b5563]">
              {activeTone.subheadline}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onOpenProposal}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#111827] px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1f2937]"
              >
                {activeCta.primary}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("configurator")}
                className="inline-flex h-11 items-center justify-center rounded-md border border-[#cfc5b8] px-4 text-sm font-black text-[#111827] transition hover:border-[#111827]"
              >
                {activeCta.secondary}
              </button>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["Headline", "Subheadline", "CTA"].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-[#080b12] p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#c7a66b]">
                  {item}
                </p>
                <p className="mt-2 text-sm font-bold text-slate-300">
                  Ready for campaign
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandSystemPreview({ proposal }) {
  const colors = proposal.theme.colors;
  const sampleWords = ["Premium", "Clear", "Trusted", "Ready"];

  return (
    <section className="border-y border-[#ded8cc] bg-[#f7f4ee]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="section-kicker">Brand system preview</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Tunjukkan bahwa visualnya punya sistem, bukan sekadar warna bagus.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">
            Preview ini mengikuti theme aktif dari konfigurator. Calon klien bisa
            melihat arah warna, tone, CTA, dan card style sebelum project dimulai.
          </p>
        </div>

        <div className="premium-card overflow-hidden rounded-md">
          <div
            className="p-5 text-white"
            style={{
              background: `linear-gradient(135deg, ${colors.dark}, ${colors.secondary})`,
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                {proposal.theme.label} system
              </p>
              <span
                className="rounded-full px-3 py-1 text-xs font-black text-[#080b12]"
                style={{ backgroundColor: colors.accent }}
              >
                Active theme
              </span>
            </div>
            <h3 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-[-0.02em]">
              {proposal.service.name}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
              {proposal.industry.headline}
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-[1fr_0.9fr]">
            <div className="p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6d30]">
                Palette
              </p>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[colors.dark, colors.accent, colors.secondary, colors.surface].map((color) => (
                  <div key={color} className="rounded-md border border-[#ded8cc] bg-white p-2">
                    <div className="h-16 rounded" style={{ backgroundColor: color }} />
                    <p className="mt-2 text-[10px] font-black uppercase text-[#6b7280]">
                      {color}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {sampleWords.map((word) => (
                  <span
                    key={word}
                    className="rounded-full border border-[#ded8cc] bg-[#f7f4ee] px-3 py-1 text-xs font-black text-[#374151]"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-[#ded8cc] p-5 md:border-l md:border-t-0">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6d30]">
                Component style
              </p>
              <div className="mt-4 rounded-md border border-[#ded8cc] bg-white p-4 shadow-[0_18px_44px_rgba(17,24,39,0.08)]">
                <p className="text-sm font-black text-[#111827]">Primary action</p>
                <p className="mt-2 text-xs leading-5 text-[#6b7280]">
                  CTA dibuat tegas, kontras, dan konsisten dengan visual direction.
                </p>
                <button
                  type="button"
                  className="mt-4 h-10 rounded-md px-4 text-sm font-black text-[#080b12]"
                  style={{ backgroundColor: colors.accent }}
                >
                  {proposal.goal.label}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LuxuryDeliverablesGallery({ proposal }) {
  const colors = proposal.theme.colors;

  return (
    <section className="noise-wash border-y border-[#ded8cc] bg-[#080b12] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c7a66b]">
              Luxury deliverables
            </p>
            <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.02em] sm:text-5xl">
              Semua output divisualkan seperti sistem premium yang siap dijual.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-slate-300">
            Gallery ini membuat deliverables terasa nyata: website, automasi, proposal,
            dan dashboard launch tampil sebagai satu ecosystem.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {premiumDeliverables.map((item, index) => (
            <article
              key={item.title}
              className={`dark-glass group overflow-hidden rounded-md transition duration-300 hover:-translate-y-2 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="h-44 border-b border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <span className="chrome-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
                    {item.label}
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="h-20 rounded" style={{ backgroundColor: colors.accent }} />
                  <div className="h-20 rounded" style={{ backgroundColor: colors.secondary }} />
                  <div className="h-20 rounded bg-white/20" />
                </div>
                <div className="mt-4 h-2 w-2/3 rounded bg-white/40" />
                <div className="mt-2 h-2 w-1/2 rounded bg-white/20" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureMap({ proposal, onOpenProposal }) {
  const [activeNodeId, setActiveNodeId] = useState(architectureNodes[0].id);
  const activeNode =
    architectureNodes.find((node) => node.id === activeNodeId) || architectureNodes[0];
  const colors = proposal.theme.colors;

  return (
    <section className="border-y border-[#ded8cc] bg-[#f7f4ee]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="section-kicker">System architecture</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Visualkan jasa digital sebagai mesin, bukan pekerjaan satuan.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">
            Map ini membantu calon klien melihat hubungan antar output: website,
            lead capture, AI chat, proposal, dan launch dashboard bekerja sebagai
            satu sistem.
          </p>

          <div className="mt-6 rounded-md bg-[#111827] p-5 text-white">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
              Active module
            </p>
            <h3 className="mt-2 text-2xl font-black">{activeNode.title}</h3>
            <p className="mt-1 text-sm font-bold text-[#f5d89b]">{activeNode.subtitle}</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">{activeNode.description}</p>
            <div className="mt-5 rounded-md border border-white/10 bg-white/[0.06] p-4">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Output
              </p>
              <p className="mt-2 text-sm font-bold leading-6">{activeNode.output}</p>
            </div>
            <button
              type="button"
              onClick={onOpenProposal}
              className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md px-4 text-sm font-black text-[#080b12] transition hover:-translate-y-0.5"
              style={{ backgroundColor: colors.accent }}
            >
              Generate system proposal
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-md border p-5 shadow-[0_24px_70px_rgba(17,24,39,0.12)]"
          style={{
            borderColor: `${colors.accent}55`,
            background: `linear-gradient(135deg, ${colors.dark}, #111827)`,
          }}
        >
          <div className="luxury-grid absolute inset-0 opacity-40" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <span className="chrome-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                Digital System Map
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {architectureNodes.map((node, index) => {
                const active = activeNode.id === node.id;

                return (
                  <div key={node.id} className="relative">
                    <button
                      type="button"
                      onClick={() => setActiveNodeId(node.id)}
                      className={`group relative z-10 flex min-h-[190px] w-full flex-col rounded-md border p-4 text-left transition duration-300 hover:-translate-y-2 ${
                        active
                          ? "border-[#c7a66b] bg-white text-[#111827] shadow-[0_20px_50px_rgba(199,166,107,0.18)]"
                          : "border-white/10 bg-white/[0.06] text-white hover:border-[#c7a66b]"
                      }`}
                    >
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-full text-xs font-black ${
                          active ? "text-[#080b12]" : "text-white"
                        }`}
                        style={{ backgroundColor: active ? colors.accent : "rgba(255,255,255,0.12)" }}
                      >
                        {index + 1}
                      </span>
                      <h3 className="mt-5 text-lg font-black">{node.title}</h3>
                      <p className={`mt-2 text-xs font-bold leading-5 ${active ? "text-[#4b5563]" : "text-slate-400"}`}>
                        {node.subtitle}
                      </p>
                      <span className="mt-auto pt-5 text-xs font-black uppercase tracking-[0.12em]">
                        View module
                      </span>
                    </button>
                    {index < architectureNodes.length - 1 && (
                      <div className="absolute left-full top-1/2 z-0 hidden h-px w-4 bg-[#c7a66b]/60 xl:block" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                ["Connected", "All modules share one offer logic"],
                ["Measurable", "Readiness, ROI, and lead flow are visible"],
                ["Reusable", "Proposal and brief can be copied instantly"],
              ].map(([title, description]) => (
                <div key={title} className="dark-glass rounded-md p-4">
                  <p className="font-black text-white">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChoicePills({ title, items, activeId, onSelect }) {
  return (
    <div>
      <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={`rounded-full border px-3 py-2 text-xs font-black transition duration-300 hover:-translate-y-0.5 ${
              activeId === item.id
                ? "border-[#c7a66b] bg-[#c7a66b] text-[#080b12]"
                : "border-white/10 bg-white/[0.04] text-white hover:border-[#c7a66b]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function MaturityAudit({ onOpenProposal }) {
  const [checkedItems, setCheckedItems] = useState(["mobile-polish", "clear-offer"]);
  const score = maturityAuditItems.reduce(
    (total, item) => (checkedItems.includes(item.id) ? total + item.weight : total),
    0,
  );
  const missingItems = maturityAuditItems.filter((item) => !checkedItems.includes(item.id));
  const topRecommendations = missingItems.slice(0, 3);
  const status =
    score >= 78
      ? "Scale-ready"
      : score >= 52
        ? "Needs system upgrade"
        : "High-impact rebuild";

  function toggleItem(id) {
    setCheckedItems((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id],
    );
  }

  return (
    <section className="border-y border-[#ded8cc] bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
            Digital maturity audit
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Bikin calon klien sadar gap sebelum minta harga.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">
            Audit singkat ini mengubah website menjadi alat konsultasi. User
            menilai kondisi bisnisnya, lalu mendapat prioritas perbaikan yang
            masuk akal.
          </p>

          <div className="mt-6 rounded-md bg-[#111827] p-5 text-white">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
              Maturity score
            </p>
            <div className="mt-3 flex items-end gap-3">
              <p className="text-6xl font-black">{score}</p>
              <p className="pb-2 text-sm font-black uppercase tracking-[0.14em] text-slate-400">
                / 100
              </p>
            </div>
            <p className="mt-2 text-xl font-black text-[#f5d89b]">{status}</p>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#c7a66b] transition-[width] duration-500"
                style={{ width: `${score}%` }}
              />
            </div>
            <button
              type="button"
              onClick={onOpenProposal}
              className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#c7a66b] px-4 text-sm font-black text-[#080b12] transition hover:bg-[#f5d89b]"
            >
              Generate improvement proposal
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            {maturityAuditItems.map((item) => {
              const checked = checkedItems.includes(item.id);

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className={`flex items-start gap-3 rounded-md border p-4 text-left transition duration-300 hover:-translate-y-0.5 ${
                    checked
                      ? "border-[#0f766e] bg-[#ecfdf5]"
                      : "border-[#ded8cc] bg-[#f7f4ee] hover:border-[#111827] hover:bg-white"
                  }`}
                >
                  <span
                    className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded border ${
                      checked
                        ? "border-[#0f766e] bg-[#0f766e] text-white"
                        : "border-[#cfc5b8] bg-white"
                    }`}
                  >
                    {checked && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <span>
                    <span className="block text-sm font-black text-[#111827]">
                      {item.label}
                    </span>
                    {!checked && (
                      <span className="mt-1 block text-xs leading-5 text-[#6b7280]">
                        {item.recommendation}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-md border border-[#ded8cc] bg-[#111827] p-5 text-white">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
              Priority recommendations
            </p>
            <div className="mt-4 space-y-3">
              {topRecommendations.length ? (
                topRecommendations.map((item) => (
                  <div key={item.id} className="flex gap-3 text-sm font-bold leading-6">
                    <Target className="mt-0.5 h-4 w-4 flex-none text-[#c7a66b]" />
                    {item.recommendation}
                  </div>
                ))
              ) : (
                <p className="text-sm font-bold text-slate-300">
                  Fondasi sudah kuat. Prioritas berikutnya adalah scale traffic,
                  campaign tracking, dan optimasi conversion.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomeCalculator({ proposal }) {
  const baseImpact = proposal.service.id === "growth-stack" ? 42 : 28;
  const goalBoost =
    proposal.goal.id === "authority" ? 16 : proposal.goal.id === "automation" ? 14 : 10;
  const complexityBoost = Math.min(proposal.selectedSummary.length * 4, 18);
  const impactScore = Math.min(baseImpact + goalBoost + complexityBoost, 92);
  const clarityScore = Math.min(impactScore + 6, 96);
  const responseScore = proposal.service.id === "chatbot" || proposal.service.id === "growth-stack" ? 88 : 74;

  const metrics = [
    ["Offer clarity", clarityScore, "Calon klien lebih cepat paham scope dan value."],
    ["Lead readiness", impactScore, "CTA, proposal, dan flow dibuat lebih siap jual."],
    ["Response system", responseScore, "Alur chat dan follow-up lebih terstruktur."],
  ];

  return (
    <section className="border-y border-[#ded8cc] bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-md bg-[#111827] text-[#c7a66b]">
            <Calculator className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="section-kicker">
            Outcome estimate
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Tunjukkan dampak, bukan hanya daftar fitur.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">
            Estimasi ini membantu calon klien memahami kenapa paket yang dipilih
            bernilai: kejelasan penawaran, kesiapan lead, dan sistem respons.
          </p>
        </div>

        <div className="premium-card rounded-md p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6d30]">
                Active scenario
              </p>
              <h3 className="mt-1 text-xl font-black text-[#111827]">
                {proposal.industry.label} · {proposal.goal.label}
              </h3>
            </div>
            <span className="rounded-full bg-[#111827] px-3 py-1 text-xs font-black text-white">
              {proposal.theme.label}
            </span>
          </div>

          <div className="space-y-5">
            {metrics.map(([label, score, description]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-[#111827]">{label}</p>
                    <p className="text-xs text-[#6b7280]">{description}</p>
                  </div>
                  <p className="text-lg font-black text-[#0f766e]">{score}%</p>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white">
                  <div
                    className="h-full rounded-full bg-[#0f766e] transition-[width] duration-700"
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ROISection({ proposal }) {
  const [monthlyLeads, setMonthlyLeads] = useState(40);
  const [conversionRate, setConversionRate] = useState(12);
  const [dealValue, setDealValue] = useState(1500000);

  const estimatedClients = Math.round(monthlyLeads * (conversionRate / 100));
  const monthlyValue = estimatedClients * dealValue;
  const paybackMonths = monthlyValue
    ? Math.max(1, Math.ceil(proposal.quote / monthlyValue))
    : 0;

  return (
    <section className="border-y border-[#ded8cc] bg-[#080b12] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c7a66b]">
            ROI estimator
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Buat harga terasa masuk akal dengan simulasi nilai lead.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Estimator ini membantu calon klien melihat investasi sebagai sistem
            penjualan. Angka bisa disesuaikan sesuai bisnis mereka.
          </p>
        </div>

        <div className="rounded-md border border-white/10 bg-white/[0.05] p-5">
          <div className="grid gap-5 sm:grid-cols-3">
            <NumberControl
              label="Lead per bulan"
              value={monthlyLeads}
              min={5}
              max={300}
              step={5}
              onChange={setMonthlyLeads}
            />
            <NumberControl
              label="Conversion rate"
              value={conversionRate}
              min={1}
              max={60}
              step={1}
              suffix="%"
              onChange={setConversionRate}
            />
            <NumberControl
              label="Deal value"
              value={dealValue}
              min={250000}
              max={25000000}
              step={250000}
              formatter={formatRupiah}
              onChange={setDealValue}
            />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Klien/bulan", estimatedClients],
              ["Value/bulan", formatRupiah(monthlyValue)],
              ["Payback", `${paybackMonths} bulan`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md bg-[#080b12] p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-2xl font-black text-[#f5d89b]">{value}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-400">
            Simulasi ini bukan garansi hasil. Tujuannya memberi konteks bisnis
            agar keputusan paket lebih rasional.
          </p>
        </div>
      </div>
    </section>
  );
}

function LaunchReadiness({ proposal }) {
  const checklistScore = Math.min(96, 58 + proposal.selectedSummary.length * 5);
  const automationScore =
    proposal.service.id === "chatbot" || proposal.service.id === "growth-stack" ? 90 : 68;
  const visualScore =
    proposal.theme.id === "luxury" || proposal.theme.id === "tech" ? 92 : 84;
  const total = Math.round((checklistScore + automationScore + visualScore) / 3);

  const scores = [
    ["Offer clarity", checklistScore],
    ["Automation readiness", automationScore],
    ["Visual authority", visualScore],
  ];

  return (
    <section className="bg-[#f7f4ee]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
            Launch readiness
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Ukur seberapa siap sistem ini untuk diluncurkan.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">
            Score ini membantu calon klien melihat gap yang perlu dibereskan
            sebelum website, chatbot, atau app benar-benar dipakai menjual.
          </p>
        </div>

        <div className="rounded-md border border-[#ded8cc] bg-white p-5">
          <div className="grid gap-5 sm:grid-cols-[180px_1fr] sm:items-center">
            <div className="grid aspect-square place-items-center rounded-full border-[14px] border-[#c7a66b] bg-[#111827] text-center text-white">
              <div>
                <p className="text-5xl font-black">{total}</p>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f5d89b]">
                  Ready
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {scores.map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm font-black">
                    <span>{label}</span>
                    <span className="text-[#0f766e]">{value}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-[#f1eadf]">
                    <div className="h-full rounded-full bg-[#111827]" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryPlaybook({ proposal }) {
  const playbook = industryPlaybooks[proposal.industry.id] || industryPlaybooks.professional;

  return (
    <section className="border-y border-[#ded8cc] bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
            Industry playbook
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            {playbook.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">{playbook.focus}</p>
        </div>

        <div className="grid gap-3">
          {playbook.moves.map((move, index) => (
            <article
              key={move}
              className="flex gap-4 rounded-md border border-[#ded8cc] bg-[#f7f4ee] p-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_34px_rgba(17,24,39,0.10)]"
            >
              <span className="grid h-10 w-10 flex-none place-items-center rounded-md bg-[#111827] text-sm font-black text-[#c7a66b]">
                {index + 1}
              </span>
              <p className="text-sm font-bold leading-6 text-[#374151]">{move}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NumberControl({
  label,
  value,
  min,
  max,
  step,
  suffix = "",
  formatter,
  onChange,
}) {
  return (
    <label className="block">
      <span className="text-sm font-black text-white">{label}</span>
      <span className="mt-2 block rounded-md border border-white/10 bg-[#080b12] p-3">
        <span className="block text-lg font-black text-[#c7a66b]">
          {formatter ? formatter(value) : `${value}${suffix}`}
        </span>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="mt-3 w-full accent-[#c7a66b]"
        />
      </span>
    </label>
  );
}

function PackageComparison({ onOpenProposal, onOpenIntake }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="section-kicker">
            Package levels
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Pilih kedalaman eksekusi sesuai tahap bisnis.
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-[#4b5563]">
          Level paket membantu calon klien memahami perbedaan antara launch cepat,
          sistem yang siap scale, dan brand authority yang lebih lengkap.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {packageTiers.map((tier) => (
          <article
            key={tier.id}
            className={`relative rounded-md border p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(17,24,39,0.13)] ${
              tier.featured
                ? "border-[#111827] bg-[#111827] text-white"
                : "premium-card text-[#111827]"
            }`}
          >
            {tier.featured && (
              <span className="absolute right-4 top-4 rounded-full bg-[#c7a66b] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#080b12]">
                Recommended
              </span>
            )}
            <h3 className="text-2xl font-black">{tier.name}</h3>
            <p className={`mt-2 text-sm leading-6 ${tier.featured ? "text-slate-300" : "text-[#4b5563]"}`}>
              {tier.bestFor}
            </p>
            <p className={`mt-6 text-3xl font-black ${tier.featured ? "text-[#f5d89b]" : "text-[#8a6d30]"}`}>
              {tier.priceLabel}
            </p>
            <div className="mt-6 space-y-3">
              {tier.includes.map((item) => (
                <div key={item} className="flex gap-3 text-sm font-bold">
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-none ${tier.featured ? "text-[#c7a66b]" : "text-[#0f766e]"}`} />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-2">
              <button
                type="button"
                onClick={tier.featured ? onOpenIntake : onOpenProposal}
                className={`inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-black transition hover:-translate-y-0.5 ${
                  tier.featured
                    ? "bg-[#c7a66b] text-[#080b12] hover:bg-[#f5d89b]"
                    : "bg-[#111827] text-white hover:bg-[#1f2937]"
                }`}
              >
                {tier.featured ? "Start brief" : "Generate proposal"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ScopeMatrix({ onOpenIntake }) {
  const [activeTier, setActiveTier] = useState("scale");
  const activeTierData =
    packageTiers.find((tier) => tier.id === activeTier) || packageTiers[1];

  return (
    <section className="border-y border-[#ded8cc] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
              Scope matrix
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
              Jelaskan perbedaan paket tanpa membuat calon klien bingung.
            </h2>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {packageTiers.map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setActiveTier(tier.id)}
                className={`rounded-md border px-4 py-3 text-left text-sm font-black transition duration-300 hover:-translate-y-0.5 ${
                  activeTier === tier.id
                    ? "border-[#111827] bg-[#111827] text-white shadow-[0_14px_28px_rgba(17,24,39,0.16)]"
                    : "border-[#ded8cc] bg-[#f7f4ee] text-[#111827] hover:border-[#111827] hover:bg-white"
                }`}
              >
                {tier.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-md border border-[#ded8cc] bg-[#f7f4ee] p-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6d30]">
              Active depth
            </p>
            <h3 className="mt-2 text-3xl font-black text-[#111827]">
              {activeTierData.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#4b5563]">
              {activeTierData.bestFor}
            </p>
            <p className="mt-6 text-2xl font-black text-[#8a6d30]">
              {activeTierData.priceLabel}
            </p>
            <button
              type="button"
              onClick={onOpenIntake}
              className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#111827] px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1f2937]"
            >
              Start brief
              <ArrowRight className="h-4 w-4" />
            </button>
          </aside>

          <div className="overflow-hidden rounded-md border border-[#ded8cc]">
            {scopeMatrix.map((row, index) => (
              <div
                key={row.area}
                className={`grid gap-0 sm:grid-cols-[180px_1fr] ${
                  index ? "border-t border-[#ded8cc]" : ""
                }`}
              >
                <div className="bg-[#111827] p-4 text-sm font-black text-[#f5d89b]">
                  {row.area}
                </div>
                <div className="grid gap-3 bg-white p-4 sm:grid-cols-3">
                  {["launch", "scale", "authority"].map((tierId) => (
                    <div
                      key={tierId}
                      className={`rounded-md border p-3 text-sm font-bold leading-6 transition duration-300 ${
                        activeTier === tierId
                          ? "border-[#0f766e] bg-[#ecfdf5] text-[#111827]"
                          : "border-[#eee5d8] bg-[#f7f4ee] text-[#6b7280]"
                      }`}
                    >
                      <p className="mb-1 text-xs font-black uppercase tracking-[0.12em]">
                        {tierId}
                      </p>
                      {row[tierId]}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CredibilitySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 grid gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
            Credibility layer
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Website terasa premium karena sistemnya jelas.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {credibilitySignals.map((signal) => (
            <article key={signal.title} className="rounded-md border border-[#ded8cc] bg-white p-4">
              <h3 className="font-black text-[#111827]">{signal.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                {signal.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-md border border-[#ded8cc] bg-[#111827] p-5 text-white"
          >
            <Quote className="h-6 w-6 text-[#c7a66b]" aria-hidden="true" />
            <p className="mt-5 text-sm font-bold leading-7 text-slate-200">
              "{testimonial.quote}"
            </p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="font-black">{testimonial.name}</p>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c7a66b]">
                {testimonial.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AssetChecklist() {
  return (
    <section className="border-y border-[#ded8cc] bg-[#f7f4ee]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
              Asset checklist
            </p>
            <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.02em] sm:text-5xl">
              Semua aset penting dibuat terlihat lengkap.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-[#4b5563]">
            Checklist ini memberi rasa aman bahwa project bukan hanya desain,
            tapi juga materi penjualan dan handover.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {assetChecklist.map((item) => (
            <div key={item} className="flex gap-3 rounded-md border border-[#ded8cc] bg-white p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#0f766e]" />
              <p className="text-sm font-bold leading-6 text-[#374151]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection({ onOpenProposal }) {
  const rows = [
    [
      "Penawaran terlihat generik",
      "Positioning, headline, dan CTA dibuat spesifik untuk target market",
    ],
    [
      "Calon pelanggan bingung pilih paket",
      "Konfigurator membantu memilih scope, estimasi, dan next step",
    ],
    [
      "Chat berulang tanpa struktur",
      "AI assistant mengarahkan kebutuhan sebelum masuk ke admin",
    ],
    [
      "Website hanya jadi brosur",
      "Website menjadi sistem penjualan dengan proof, flow, dan proposal",
    ],
  ];

  return (
    <section className="border-y border-[#ded8cc] bg-[#080b12] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c7a66b]">
            Before / After
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Transformasi yang harus terasa sebelum klien menghubungi.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Website jasa digital yang bagus bukan hanya tampil mahal. Ia harus
            membuat calon klien lebih cepat paham, percaya, dan tahu langkah berikutnya.
          </p>
          <button
            type="button"
            onClick={onOpenProposal}
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c7a66b] px-5 text-sm font-black text-[#080b12] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5d89b]"
          >
            Generate proposal
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-3">
          {rows.map(([before, after], index) => (
            <div
              key={before}
              className="grid gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3 sm:grid-cols-[1fr_auto_1fr]"
            >
              <div className="rounded-md bg-white/[0.05] p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Before {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-300">
                  {before}
                </p>
              </div>
              <div className="hidden items-center justify-center text-[#c7a66b] sm:flex">
                <ArrowRight className="h-5 w-5" />
              </div>
              <div className="rounded-md bg-[#c7a66b] p-4 text-[#080b12]">
                <p className="text-xs font-black uppercase tracking-[0.14em]">
                  After
                </p>
                <p className="mt-2 text-sm font-black leading-6">{after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScenarioSection() {
  const scenarios = [
    {
      title: "Bisnis jasa lokal ingin naik kelas",
      metric: "3x",
      label: "lebih jelas",
      description:
        "Website dibuat seperti proposal interaktif: layanan, bukti kerja, harga, dan CTA konsultasi tertata dalam satu alur.",
    },
    {
      title: "Owner kewalahan membalas chat",
      metric: "24/7",
      label: "respons awal",
      description:
        "AI assistant menyaring kebutuhan prospek, mengarahkan pilihan paket, lalu memberi konteks ke admin sebelum closing.",
    },
    {
      title: "Produk digital butuh validasi cepat",
      metric: "MVP",
      label: "siap uji",
      description:
        "Aplikasi dibuat sebagai versi minimum yang terlihat rapi, mudah dicoba, dan cukup kuat untuk mengukur minat pasar.",
    },
  ];

  return (
    <section id="proof" className="border-y border-[#ded8cc] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
              Skenario hasil
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
              Bukan cuma bagus dilihat, tapi jelas fungsinya.
            </h2>
          </div>
          <p className="text-sm leading-7 text-[#4b5563]">
            Setiap deliverable diarahkan ke masalah bisnis yang nyata: trust,
            lead, respons, presentasi, dan operasional.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <article
              key={scenario.title}
              className={`group rounded-md border border-[#ded8cc] bg-[#fbfaf7] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_22px_50px_rgba(17,24,39,0.12)] ${
                index === 1 ? "lg:mt-8" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <Quote className="h-7 w-7 text-[#c7a66b]" aria-hidden="true" />
                <div className="text-right">
                  <p className="text-3xl font-black text-[#111827]">{scenario.metric}</p>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6d30]">
                    {scenario.label}
                  </p>
                </div>
              </div>
              <h3 className="mt-8 text-xl font-black">{scenario.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4b5563]">
                {scenario.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExecutionRoadmap() {
  const roadmap = [
    {
      week: "Day 1-2",
      title: "Strategy sprint",
      detail: "Audit positioning, target buyer, offer angle, CTA, dan struktur scope.",
    },
    {
      week: "Day 3-6",
      title: "Design system",
      detail: "Bangun visual direction, layout utama, interaction pattern, dan copy flow.",
    },
    {
      week: "Day 7-14",
      title: "Build & automation",
      detail: "Implementasi website, chatbot flow, app screen, atau asset stack sesuai paket.",
    },
    {
      week: "Launch",
      title: "Review & handover",
      detail: "Testing responsif, perapihan konten, proposal final, dan brief serah terima.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
            Execution roadmap
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Alur eksekusi terlihat jelas sebelum deal.
          </h2>
        </div>
        <TimerReset className="hidden h-11 w-11 text-[#8a6d30] lg:block" />
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        {roadmap.map((item, index) => (
          <article
            key={item.title}
            className="group relative rounded-md border border-[#ded8cc] bg-white p-5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(17,24,39,0.12)]"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-[#f7f4ee] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#8a6d30]">
                {item.week}
              </span>
              <span className="text-4xl font-black text-[#e5ddcf]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-xl font-black text-[#111827]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#4b5563]">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    ["Discovery", "Bedah tujuan bisnis, target audience, positioning, dan prioritas fitur."],
    ["Blueprint", "Susun struktur website, flow chatbot, screen app, dan copy utama."],
    ["Production", "Eksekusi desain dan development dengan review bertahap."],
    ["Launch", "Testing responsif, perapihan CTA, dan serah terima aset."],
  ];

  return (
    <section id="process" className="border-y border-[#ded8cc] bg-[#111827] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c7a66b]">
              Proses kerja
            </p>
            <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.02em] sm:text-5xl">
              Terstruktur dari ide sampai siap dipakai.
            </h2>
          </div>
          <ClipboardCheck className="hidden h-12 w-12 text-[#c7a66b] lg:block" aria-hidden="true" />
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {steps.map(([title, description], index) => (
            <article key={title} className="group border-l border-white/15 pl-5 transition duration-300 hover:border-[#c7a66b]">
              <span className="text-sm font-black text-[#c7a66b]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-black transition duration-300 group-hover:text-[#c7a66b]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    [
      "Apakah paket harus mengikuti template?",
      "Tidak. Konfigurator hanya membantu menyusun scope awal. Struktur, gaya visual, dan fitur bisa diarahkan sesuai bisnis.",
    ],
    [
      "Apakah cocok untuk UMKM?",
      "Cocok, terutama jika ingin tampil lebih kredibel saat calon pelanggan membuka website atau menerima penawaran.",
    ],
    [
      "Apa bedanya dengan jasa murah biasa?",
      "Fokusnya bukan hanya membuat halaman jadi online, tetapi merancang alur, copy, CTA, dan sistem agar terasa matang.",
    ],
    [
      "Bisa dibuat bertahap?",
      "Bisa. Website atau chatbot bisa dimulai dulu, lalu ditambah aplikasi, konten, atau aset sales setelah validasi berjalan.",
    ],
  ];

  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
            Jawaban yang membuat calon klien lebih yakin.
          </h2>
        </div>
        <div className="grid gap-3">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group rounded-md border border-[#ded8cc] bg-white p-5 transition duration-300 open:shadow-[0_18px_44px_rgba(17,24,39,0.10)]"
            >
              <summary className="cursor-pointer list-none text-base font-black text-[#111827]">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {question}
                  <ChevronDown className="h-5 w-5 flex-none text-[#8a6d30] transition duration-300 group-open:rotate-180" />
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#4b5563]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onOpenProposal }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="shimmer-surface rounded-md border border-[#ded8cc] bg-white p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a6d30]">
              Siap dibuat serius
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
              Jadikan jasa digital terlihat seperti brand yang sudah mapan.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4b5563]">
              Mulai dari konfigurasi paket, pilih kebutuhan utama, lalu gunakan
              ringkasan estimasi sebagai bahan konsultasi atau penawaran.
            </p>
          </div>
          <div className="grid gap-3">
            <button
              type="button"
              onClick={onOpenProposal}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#111827] px-5 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f2937] hover:shadow-[0_18px_34px_rgba(17,24,39,0.20)]"
            >
              Generate proposal
              <Zap className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="flex items-center justify-center gap-2 rounded-md bg-[#f7f4ee] px-4 py-3 text-sm font-bold text-[#374151]">
              <MonitorSmartphone className="h-4 w-4 text-[#0f766e]" aria-hidden="true" />
              Responsif untuk desktop dan mobile
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeStrip() {
  return (
    <section className="border-t border-white/10 bg-[#0b1220] text-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {guaranteeSignals.map((signal) => (
          <div key={signal.title} className="border-l border-white/10 pl-4">
            <p className="font-black text-[#f5d89b]">{signal.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{signal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StickyQuoteBar({ proposal, onOpenProposal }) {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 max-w-[calc(100vw-1.5rem)] rounded-md border border-[#c7a66b]/30 bg-[#080b12]/95 p-3 text-white shadow-[0_22px_60px_rgba(0,0,0,0.32)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-slate-300">
            {proposal.service.label} · {proposal.theme.label}
          </p>
          <p className="text-lg font-black text-[#f5d89b]">
            {formatRupiah(proposal.quote)}
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenProposal}
          className="grid h-10 w-10 place-items-center rounded-md bg-[#c7a66b] text-[#080b12]"
          aria-label="Buka proposal"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function PremiumFooter({ onOpenProposal }) {
  return (
    <footer className="border-t border-[#ded8cc] bg-[#080b12] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-[#080b12]">
              <Code2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c7a66b]">
                Digital Craft
              </p>
              <p className="text-sm font-semibold text-slate-300">
                Premium websites, AI chat systems, and mobile MVPs.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
            Built for businesses that want to look credible, explain offers clearly,
            and turn digital presence into a more structured sales system.
          </p>
        </div>
        <div className="grid content-start gap-3 sm:min-w-[260px]">
          <button
            type="button"
            onClick={onOpenProposal}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c7a66b] px-5 text-sm font-black text-[#080b12] transition hover:bg-[#f5d89b]"
          >
            Generate proposal
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("configurator")}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 text-sm font-black text-white transition hover:border-[#c7a66b]"
          >
            Edit package
          </button>
        </div>
      </div>
    </footer>
  );
}

function ProposalModal({ proposal, onClose, onOpenIntake }) {
  const proposalText = createProposalText(proposal);
  const whatsAppText = createWhatsAppText(proposal);

  async function copyProposal() {
    try {
      await navigator.clipboard.writeText(proposalText);
    } catch {
      // Clipboard can fail in restricted browser contexts; the text remains selectable.
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#080b12]/80 px-4 py-5 backdrop-blur">
      <div className="mx-auto flex max-h-full max-w-5xl flex-col overflow-hidden rounded-md border border-[#c7a66b]/30 bg-[#f7f4ee] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
        <header className="flex items-start justify-between gap-4 border-b border-[#ded8cc] p-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a6d30]">
              Generated proposal
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#111827]">
              Draft proposal siap copy
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-md bg-white text-[#111827] transition hover:bg-[#111827] hover:text-white"
            aria-label="Tutup proposal"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="grid min-h-0 flex-1 overflow-auto lg:grid-cols-[1fr_0.7fr]">
          <section className="p-5">
            <pre className="min-h-[520px] whitespace-pre-wrap rounded-md border border-[#ded8cc] bg-white p-5 text-sm leading-7 text-[#374151]">
              {proposalText}
            </pre>
          </section>
          <aside className="border-t border-[#ded8cc] bg-[#111827] p-5 text-white lg:border-l lg:border-t-0">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c7a66b]">
              Ringkasan
            </p>
            <div className="mt-5 space-y-4">
              {[
                ["Paket", proposal.service.name],
                ["Industri", proposal.industry.label],
                ["Tujuan", proposal.goal.label],
                ["Visual", proposal.theme.label],
                ["Investasi", formatRupiah(proposal.quote)],
                ["Timeline", proposal.service.timeline],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-black">{value}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={copyProposal}
              className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#c7a66b] px-4 text-sm font-black text-[#080b12] transition hover:bg-[#f5d89b]"
            >
              <Copy className="h-4 w-4" />
              Copy proposal
            </button>
            <button
              type="button"
              onClick={onOpenIntake}
              className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-white/15 px-4 text-sm font-black text-white transition hover:border-[#c7a66b]"
            >
              Isi project brief
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="mt-5 rounded-md border border-white/10 bg-white/[0.06] p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7a66b]">
                WhatsApp opener
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                {whatsAppText}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function IntakeModal({ proposal, onClose }) {
  const [form, setForm] = useState({
    businessName: "",
    industry: proposal.industry.label,
    mainGoal: proposal.goal.label,
    budget: formatRupiah(proposal.quote),
    timeline: proposal.service.timeline,
    notes: "",
  });

  const briefText = createBriefText(proposal, form);
  const whatsAppBrief = createWhatsAppBrief(proposal, form);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(briefText);
    } catch {
      // Clipboard can fail in restricted browser contexts; the text remains selectable.
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#080b12]/80 px-4 py-5 backdrop-blur">
      <div className="mx-auto flex max-h-full max-w-5xl flex-col overflow-hidden rounded-md border border-[#c7a66b]/30 bg-[#f7f4ee] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
        <header className="flex items-start justify-between gap-4 border-b border-[#ded8cc] p-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a6d30]">
              Project intake
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#111827]">
              Brief awal siap kirim
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-md bg-white text-[#111827] transition hover:bg-[#111827] hover:text-white"
            aria-label="Tutup brief"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="grid min-h-0 flex-1 overflow-auto lg:grid-cols-[0.85fr_1.15fr]">
          <form className="space-y-4 p-5" onSubmit={(event) => event.preventDefault()}>
            {[
              ["businessName", "Nama bisnis", "Contoh: Klinik Aesthetic Jakarta"],
              ["industry", "Industri", ""],
              ["mainGoal", "Tujuan utama", ""],
              ["budget", "Budget indikatif", ""],
              ["timeline", "Target timeline", ""],
            ].map(([field, label, placeholder]) => (
              <label key={field} className="block text-sm font-black text-[#111827]">
                {label}
                <input
                  value={form[field]}
                  onChange={(event) => updateField(field, event.target.value)}
                  placeholder={placeholder}
                  className="mt-2 h-11 w-full rounded-md border border-[#cfc5b8] bg-white px-3 text-sm font-bold"
                />
              </label>
            ))}

            <label className="block text-sm font-black text-[#111827]">
              Catatan kebutuhan
              <textarea
                value={form.notes}
                onChange={(event) => updateField("notes", event.target.value)}
                rows="5"
                placeholder="Tulis kendala utama, referensi, fitur wajib, atau target audience."
                className="mt-2 w-full resize-y rounded-md border border-[#cfc5b8] bg-white px-3 py-3 text-sm"
              />
            </label>
          </form>

          <aside className="border-t border-[#ded8cc] bg-[#111827] p-5 text-white lg:border-l lg:border-t-0">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c7a66b]">
              Generated brief
            </p>
            <pre className="mt-4 max-h-[520px] overflow-auto whitespace-pre-wrap rounded-md border border-white/10 bg-white/[0.06] p-4 text-sm leading-7 text-slate-200">
              {briefText}
            </pre>
            <button
              type="button"
              onClick={copyBrief}
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#c7a66b] px-4 text-sm font-black text-[#080b12] transition hover:bg-[#f5d89b]"
            >
              <Copy className="h-4 w-4" />
              Copy brief
            </button>
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(whatsAppBrief);
                } catch {
                  // Clipboard can fail in restricted browser contexts.
                }
              }}
              className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-white/15 px-4 text-sm font-black text-white transition hover:border-[#c7a66b]"
            >
              <MessageCircle className="h-4 w-4" />
              Copy WhatsApp text
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}

function createProposalText(proposal) {
  return `PROPOSAL DIGITAL SYSTEM

Paket Direkomendasikan:
${proposal.service.name}

Konteks Bisnis:
- Industri: ${proposal.industry.label}
- Tujuan utama: ${proposal.goal.label}
- Arah visual: ${proposal.theme.label}

Executive Summary:
Kami merekomendasikan ${proposal.service.name} untuk membantu bisnis terlihat lebih kredibel, mudah dipahami, dan siap menerima calon pelanggan dengan alur yang lebih rapi. Fokus utama paket ini adalah ${proposal.goal.impact.toLowerCase()}

Scope Utama:
${proposal.service.includes.map((item) => `- ${item}`).join("\n")}

Pilihan Konfigurasi:
${proposal.selectedSummary.map((item) => `- ${item}`).join("\n")}

Deliverables:
- Blueprint struktur penawaran
- UI responsif premium
- Copywriting utama dan CTA
- Setup flow konsultasi atau lead capture
- Review dan serah terima final

Estimasi Investasi:
${formatRupiah(proposal.quote)}

Estimasi Timeline:
${proposal.service.timeline}

Next Step:
1. Validasi kebutuhan bisnis dan target pelanggan.
2. Finalisasi scope dan prioritas fitur.
3. Mulai blueprint, desain, dan implementasi.
4. Testing responsif dan serah terima aset.`;
}

function createBriefText(proposal, form) {
  return `PROJECT BRIEF

Nama Bisnis:
${form.businessName || "-"}

Industri:
${form.industry}

Tujuan Utama:
${form.mainGoal}

Paket yang Dipilih:
${proposal.service.name}

Arah Visual:
${proposal.theme.label} - ${proposal.theme.description}

Budget Indikatif:
${form.budget}

Target Timeline:
${form.timeline}

Scope Awal:
${proposal.service.includes.map((item) => `- ${item}`).join("\n")}

Konfigurasi:
${proposal.selectedSummary.map((item) => `- ${item}`).join("\n")}

Catatan:
${form.notes || "-"}

Next Step:
Saya ingin validasi scope, estimasi final, dan rencana pengerjaan berdasarkan brief ini.`;
}

function createWhatsAppText(proposal) {
  return `Halo, saya ingin konsultasi ${proposal.service.name} untuk ${proposal.industry.label}. Fokus utama saya: ${proposal.goal.label}. Estimasi paket yang saya lihat ${formatRupiah(proposal.quote)} dengan style ${proposal.theme.label}. Bisa dibantu validasi scope dan next step?`;
}

function createWhatsAppBrief(proposal, form) {
  return `Halo, saya ingin mulai brief project.

Nama bisnis: ${form.businessName || "-"}
Industri: ${form.industry}
Tujuan: ${form.mainGoal}
Paket: ${proposal.service.name}
Style: ${proposal.theme.label}
Budget indikatif: ${form.budget}
Timeline: ${form.timeline}
Catatan: ${form.notes || "-"}

Bisa dibantu validasi scope dan estimasi final?`;
}
