interface TeamCardProps {
  name: string;
  role: string;
  initials: string;
  detail?: string;
}

const TeamCard = ({ name, role, initials, detail }: TeamCardProps) => (
  <div className="text-center group">
    <div className="w-24 h-24 rounded-full bg-blue-900 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-800 transition">
      <span className="text-yellow-400 font-display font-bold text-xl">{initials}</span>
    </div>
    <h4 className="font-semibold text-blue-800">{name}</h4>
    <p className="text-yellow-600 uppercase text-xs font-semibold tracking-wide">{role}</p>
    {detail && <p className="text-gray-500 text-sm mt-1">{detail}</p>}
  </div>
);

export default TeamCard;
