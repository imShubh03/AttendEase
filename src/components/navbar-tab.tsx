"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
    { name: "Atten. Team (Admin)", href: "/attendance-team" },
    { name: "Org. Details (Admin)", href: "/org-details" },
    { name: "In/Out Logs", href: "/logs" },
    { name: "Finalize Atten.", href: "/finalize" },
    { name: "Manage Employees", href: "/employees" },
    { name: "Final Reports", href: "/reports" },
    { name: "Error Reports", href: "/errors" },
]

export function NavigationTabs() {
    const pathname = usePathname()

    return (
        <div className="border-b">
            <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={cn(
                            "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium",
                            pathname === tab.href
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        )}
                    >
                        {tab.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

