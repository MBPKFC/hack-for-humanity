import { cn } from "@/utils/cn";

export const Container = ({ children, className }) => {
    return <div className={cn(["px-4 md:px-96", className])}>{children}</div>;
};
