interface PageHeroProps {
  breadcrumb: string;
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHero = ({ breadcrumb, title, subtitle, image }: PageHeroProps) => (
  <section className="relative bg-primary py-4 text-center overflow-hidden rounded-b-2xl">
    {image && (
      <>
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover transition-0.5s" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-pink-700/70 to-pink-700 opacity-80" />
      </>
    )}
    <div className="max-w-4xl mx-auto px-4 relative z-10">
      <p className="text-white text-xs uppercase tracking-widest font-semibold mb-3">{breadcrumb}</p>
      <h1 className="text-white font-display font-bold text-4xl md:text-5xl mb-3">{title}</h1>
      {subtitle && <p className="text-gray-50 text-lg">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
