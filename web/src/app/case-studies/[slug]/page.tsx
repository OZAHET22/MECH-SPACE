export default async function CaseStudyDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <div className="text-sm font-rajdhani text-accent-primary uppercase tracking-widest mb-4">Case Study</div>
      <h1 className="text-6xl font-barlow-condensed font-bold text-text-high uppercase mb-8">
        {slug.replace(/-/g, ' ')}
      </h1>
      <div className="grid md:grid-cols-3 gap-8 border-t border-border-light pt-8 mt-12">
        <div>
          <div className="text-sm font-rajdhani text-text-medium uppercase mb-1">Throughput</div>
          <div className="text-2xl font-barlow-condensed font-bold text-text-high">N/A</div>
        </div>
        <div>
          <div className="text-sm font-rajdhani text-text-medium uppercase mb-1">Defect Rate</div>
          <div className="text-2xl font-barlow-condensed font-bold text-text-high">-0%</div>
        </div>
        <div>
          <div className="text-sm font-rajdhani text-text-medium uppercase mb-1">Payback</div>
          <div className="text-2xl font-barlow-condensed font-bold text-text-high">0 Mo</div>
        </div>
      </div>
    </main>
  );
}
