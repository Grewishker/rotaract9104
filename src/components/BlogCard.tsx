import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  emoji?: string;
  image?: string;
}

const BlogCard = ({ id, category, date, title, excerpt, emoji = "📰", image }: BlogCardProps) => (
  <div className="border border-secondary/10 rounded overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
    <Link to={`/media/blog/${id}`} className="h-44 bg-gradient-to-br from-primary-dark800 to-secondary600 flex items-center justify-center text-5xl relative">
      {image ? (
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      ) : (
        emoji
      )}
    </Link>
    <div className="p-5">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
        <span>{date}</span>
        <span className="bg-secondary/5 text-primary px-2 py-0.5 rounded text-xs font-medium">{category}</span>
      </div>
      <Link to={`/media/blog/${id}`}>
        <h3 className="font-display font-bold text-lg text-primary mb-2 hover:text-secondary transition-colors">{title}</h3>
      </Link>
      <p className="text-gray-500 text-sm mb-3">{excerpt}</p>
      <Link 
        to={`/media/blog/${id}`}
        className="text-secondary font-semibold text-sm hover:underline inline-flex items-center gap-1 group"
      >
        Read Full Article 
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  </div>
);

export default BlogCard;