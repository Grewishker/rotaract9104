interface BlogCardProps {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  emoji?: string;
}

const BlogCard = ({ category, date, title, excerpt, emoji = "📰" }: BlogCardProps) => (
  <div className="border border-blue-100 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
    <div className="h-44 bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-5xl">{emoji}</div>
    <div className="p-5">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
        <span>{date}</span>
        <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded text-xs font-medium">{category}</span>
      </div>
      <h3 className="font-display font-bold text-lg text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-3">{excerpt}</p>
      <span className="text-yellow-600 font-semibold text-sm hover:underline cursor-pointer">Read Full Article →</span>
    </div>
  </div>
);

export default BlogCard;
