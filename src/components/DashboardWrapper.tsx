import { cn } from "@/lib/utils"
import { Navbar } from "./Navbar"

export const DashboardWrapper = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex min-h-screen w-full bg-neutral-100 text-neutral-900">
            <aside className="">
                {/* Sidebar */}
            </aside>
            <main className={cn("flex w-full flex-col bg-neutral-100 dark:bg-neutral-900 md:pl-64")}>
                <Navbar />
                {children}
            </main>
        </div>
    )
}