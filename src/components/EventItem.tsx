interface EventItemProps {
  day: string;
  month: string;
  title: string;
  description: string;
  tag: string;
  tagColor?: string;
}

const EventItem = ({ day, month, title, description, tag, tagColor = "bg-blue-100 text-blue-800" }: EventItemProps) => (
  <div className="flex gap-4 items-start">
    <div className="w-16 h-16 bg-blue-900 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
      <span className="text-white font-display font-bold text-xl leading-none">{day}</span>
      <span className="text-yellow-400 text-xs uppercase">{month}</span>
    </div>
    <div>
      <h4 className="font-semibold text-blue-800">{title}</h4>
      <p className="text-gray-500 text-sm">{description}</p>
      <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded ${tagColor}`}>{tag}</span>
    </div>
  </div>
);

export default EventItem;
