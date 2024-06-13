import { ReactNode } from "react";

interface AnimationProps {
  show: boolean;
  children?: ReactNode;
  className?: string;
  showAnimation?: string;
  hideAnimation?: string;
  label?: string;
  onClick?: () => void;
}
const Animation = ({
  children,
  className,
  showAnimation,
  hideAnimation,
  show,
  label,
  onClick,
}: AnimationProps) => {
  return (
    <div
      onClick={onClick}
      title={label}
      className={`transition-all duration-300 ease-in-out ${className} ${
        show ? showAnimation : hideAnimation
      }`}
    >
      {children}
    </div>
  );
};

export default Animation;
