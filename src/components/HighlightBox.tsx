import { ReactNode } from "react";

interface HighlightBoxProps {
  title: string;
  children: ReactNode;
}

const HighlightBox = ({ title, children }: HighlightBoxProps) => (
  <div className="bg-primary-dark text-white border-l-4 border-secondary p-6 rounded-r-lg">
    <h3 className="text-white font-display font-bold text-xl mb-3">{title}</h3>
    <div className="text-secondary/50 text-sm space-y-2">{children}</div>
  </div>
);

export default HighlightBox;
