export default async function ServiceDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <div className="text-sm font-rajdhani text-accent-primary uppercase tracking-widest mb-4">Service Details</div>
      <h1 className="text-6xl font-barlow-condensed font-bold text-text-high uppercase mb-8">
        {slug.replace(/-/g, ' ')}
      </h1>
    </main>
  );
}
