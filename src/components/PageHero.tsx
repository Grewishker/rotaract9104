interface PageHeroProps {
  breadcrumb: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ breadcrumb, title, subtitle }: PageHeroProps) => (
  <section className="bg-blue-800 py-16 text-center">
    <div className="max-w-4xl mx-auto px-4">
      <p className="text-yellow-400 text-xs uppercase tracking-widest font-semibold mb-3">{breadcrumb}</p>
      <h1 className="text-white font-display font-bold text-4xl md:text-5xl mb-3">{title}</h1>
      {subtitle && <p className="text-blue-300 text-lg">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
