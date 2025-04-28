import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const loaderVariants = cva(
  "inline-block rounded-full animate-spin border-current border-solid border-t-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-2",
        lg: "h-12 w-12 border-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof loaderVariants> {}

export function Loader({ className, size, ...props }: LoaderProps) {
  return (
    <div
      className={cn(loaderVariants({ size }), className)}
      {...props}
      role="status"
      aria-label="loading"
    />
  );
}
