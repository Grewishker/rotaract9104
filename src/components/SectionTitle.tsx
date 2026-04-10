interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => (
  <div className={`mb-10 ${centered ? "text-center" : ""}`}>
    <h2 className="font-display font-bold text-3xl text-blue-800 mb-2">{title}</h2>
    {subtitle && <p className="text-gray-500">{subtitle}</p>}
  </div>
);

export default SectionTitle;
