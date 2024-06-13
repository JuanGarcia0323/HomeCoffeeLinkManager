import { ReactNode } from "react";

interface AnimationProps {
  show: boolean;
  children?: ReactNode;
  className?: string;
  showAnimation?: string;
  hideAnimation?: string;
  label?: string;
}
const Animation = ({
  children,
  className,
  showAnimation,
  hideAnimation,
  show,
  label,
}: AnimationProps) => {
  return (
    <div
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
