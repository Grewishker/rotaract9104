interface TeamCardProps {
  name: string;
  role: string;
  initials: string;
  detail?: string;
  image?: string;
}

const TeamCard = ({ name, role, initials, detail, image }: TeamCardProps) => (
  <div className="text-center group">
    <div className="w-36 h-52 md:w-48 md:h-80 rounded-lg overflow-hidden bg-primary-dark shadow-lg shadow-primary/200/60 border-4 border-white flex items-center justify-center mx-auto mb-4 group-hover:shadow-primary/300 transition-all">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-white font-display font-bold text-2xl">{initials}</span>
      )}
    </div>
    <h4 className="font-semibold text-primary text-base md:text-lg">{name}</h4>
    <p className="text-slate-900 uppercase text-xs md:text-sm font-semibold tracking-wide">{role}</p>
    {detail && <p className="text-gray-500 text-sm mt-1">{detail}</p>}
  </div>
);

export default TeamCard;
