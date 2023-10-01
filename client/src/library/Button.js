import { cn } from "@/utils/cn";

export const Button = ({ children, className, handleClick }) => {
   return (
      <button
         onClick={handleClick}
         className={cn([
            "bg-brand-blue text-white font-bold rounded-full py-2 px-6",
            className,
         ])}>
         {children}
      </button>
   );
};
