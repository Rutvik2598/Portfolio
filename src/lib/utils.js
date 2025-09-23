import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs) => {
    // Placeholder for class name utility function
    return twMerge(clsx(...inputs))
};