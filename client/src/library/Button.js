import { cn } from "@/utils/cn";

export const Button = ({ children, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={cn([
                "rounded-full bg-brand-blue px-6 py-2 font-bold text-white",
                className,
            ])}>
            {children}
        </button>
    );
};
