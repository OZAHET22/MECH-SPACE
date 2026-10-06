export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-6xl font-barlow-condensed font-bold text-text-high uppercase mb-8">
        Industries We Serve
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Placeholder cards */}
        {['Life Sciences', 'Aerosol', 'Consumer Goods', 'Food & Beverage', 'Health & Beauty'].map((industry) => (
          <a key={industry} href={`/industries/${industry.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="block p-8 bg-bg-surface border border-border-light rounded-xl hover:border-accent-primary transition-colors">
            <h2 className="text-2xl font-barlow-condensed font-bold text-text-high uppercase">{industry}</h2>
            <p className="mt-4 text-text-medium">Tailored automation solutions for {industry.toLowerCase()} manufacturing.</p>
          </a>
        ))}
      </div>
    </main>
  );
}
