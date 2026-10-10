
import { Heart, Sparkles, Star } from "lucide-react";

const decorations = [
  { Icon: Heart, className: "float-item float-a" },
  { Icon: Star, className: "float-item float-b" },
  { Icon: Sparkles, className: "float-item float-c" },
  { Icon: Heart, className: "float-item float-d" },
  { Icon: Star, className: "float-item float-e" },
  { Icon: Sparkles, className: "float-item float-f" },
];

export default function FloatingDecor() {
  return (
    <div className="floating-decor" aria-hidden="true">
      {decorations.map(({ Icon, className }, index) => (
        <span className={className} key={index}>
          <Icon
            size={index % 2 === 0 ? 20 : 15}
            fill={index === 0 || index === 3 ? "currentColor" : "none"}
          />
        </span>
      ))}
    </div>
  );
}
