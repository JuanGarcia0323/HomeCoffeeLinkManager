import { ReactNode } from "react";

interface AnimationProps {
  show: boolean;
  children?: ReactNode;
  className?: string;
  showAnimation?: string;
  hideAnimation?: string;
}
const Animation = ({
  children,
  className,
  showAnimation,
  hideAnimation,
  show,
}: AnimationProps) => {
  return (
    <div
      className={`transition-all duration-300 ease-in-out ${className} ${
        show ? showAnimation : hideAnimation
      }`}
    >
      {children}
    </div>
  );
};

export default Animation;
