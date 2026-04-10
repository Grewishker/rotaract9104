import { ReactNode } from "react";

interface HighlightBoxProps {
  title: string;
  children: ReactNode;
}

const HighlightBox = ({ title, children }: HighlightBoxProps) => (
  <div className="bg-blue-900 text-white border-l-4 border-yellow-400 p-6 rounded-r-lg">
    <h3 className="text-yellow-400 font-display font-bold text-xl mb-3">{title}</h3>
    <div className="text-blue-200 text-sm space-y-2">{children}</div>
  </div>
);

export default HighlightBox;
