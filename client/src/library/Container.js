import { cn } from "@/utils/cn";

export const Container = ({ children, className }) => {
  return <div className={cn(["px-4 sm:px-24 lg:px-60 xl:px-96", className])}>{children}</div>;
};
