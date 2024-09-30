import { cn } from "@/lib/utils";

interface PageHeaderProps {
    name: string;
    isSmallText?: boolean;
    buttonComponent?: any;
}

export const PageHeader = ({
    name,
    isSmallText = false,
    buttonComponent
}: PageHeaderProps) => {
    return (
        <div className=" mb-5 flex w-full items-center justify-between">
            <h1 className={cn("font-semibold dark:text-neutral-100", 
                isSmallText ? "text-lg" : "text-2xl")}>
                    {name}
            </h1>
        </div>
    )
}