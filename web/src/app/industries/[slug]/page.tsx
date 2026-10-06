export default async function IndustryDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <div className="text-sm font-rajdhani text-accent-primary uppercase tracking-widest mb-4">Industry Solution</div>
      <h1 className="text-6xl font-barlow-condensed font-bold text-text-high uppercase mb-8">
        {slug.replace(/-/g, ' ')}
      </h1>
      <p className="text-xl text-text-medium max-w-2xl">
        High-speed assembly and automation systems built specifically for the {slug.replace(/-/g, ' ')} sector.
      </p>
    </main>
  );
}
