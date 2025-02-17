"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, Filter, Search } from "lucide-react"

export function TableFilters() {
    return (
        <div className="flex items-center gap-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <Input placeholder="Search" className="w-[240px] pl-9" />
            </div>
            <Button variant="outline" size="sm" className="h-10">
                <Filter className="w-4 h-4 mr-2" />
                Filters
            </Button>
            <Select defaultValue="10">
                <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Rows" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="10">10 rows</SelectItem>
                    <SelectItem value="20">20 rows</SelectItem>
                    <SelectItem value="50">50 rows</SelectItem>
                    <SelectItem value="100">100 rows</SelectItem>
                </SelectContent>
            </Select>
            <Select defaultValue="july">
                <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="july">July</SelectItem>
                    <SelectItem value="august">August</SelectItem>
                    <SelectItem value="september">September</SelectItem>
                </SelectContent>
            </Select>
            <div className="ml-auto flex items-center gap-4">
                <Button variant="outline" size="sm" className="h-10">
                    Export
                    <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="sm" className="h-10">
                    Detailed View
                    <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    )
}

