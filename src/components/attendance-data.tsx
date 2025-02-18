"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, ChevronDown, Clock, Info, Link2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AttendanceTable() {
    const profileCards = Array(12).fill({
        name: "Bhaskar Sharma",
        role: "Sales Manager",
        department: "Sales Dept."
    });

    const statsData = {
        categories: ['P', 'A', 'WO', 'Σ Bonus/Fine', 'OT', 'LT', 'OT+LT', 'Final Att.'],
        calculated: ['17.5', '2.5', '11', '+2000', '17:32 H', '-12:00 H', '05:32 H', '20'],
        final: ['23.5', '3.5', '4', '+400', '12:30 H', '-19:00', '-06:30 H', '27']
    };

    return (
        <div className="flex gap-4">
            {/* Profile Cards Column */}
            <div className="w-[280px] space-y-2">
                {profileCards.map((profile, index) => (
                    <Card key={index} className="p-3 border border-dashed border-blue-200">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src="https://i0.wp.com/www.commercialphotographynorthwestblog.co.uk/wp-content/uploads/2020/10/MDH_8729webqualitysquare.jpg?w=864&ssl=1" alt="Profile" />
                                <AvatarFallback>BS</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium">{profile.name}</div>
                                <div className="text-gray-500 text-sm">{profile.role} · {profile.department}</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <div className="rounded-lg border bg-white mb-4">
                    {/* Header Stats */}
                    <div className="p-4 border-b">
                        {/* Profile and Stats Table Row */}
                        <div className="flex items-start gap-6">
                            {/* Profile Info */}
                            <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src="https://i0.wp.com/www.commercialphotographynorthwestblog.co.uk/wp-content/uploads/2020/10/MDH_8729webqualitysquare.jpg?w=864&ssl=1" alt="Profile" />
                                    <AvatarFallback>BS</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-semibold">Bhaskar Sharma</div>
                                    <div className="text-gray-500 text-sm">Sales Manager · Sales Dept.</div>
                                </div>
                            </div>

                            {/* Stats Table */}
                            <div className="flex-1">
                                <div className="border rounded-sm">
                                    <table className="w-full text-sm divide-y divide-gray-200">
                                        <thead>
                                            <tr>
                                                <th className="w-16 py-2 pl-3 pr-2 text-left font-semibold"></th>
                                                {statsData.categories.map((cat, i) => (
                                                    <th key={i} className="py-2 px-2 text-center font-semibold border-l">{cat}</th>
                                                ))}
                                                <th className="py-2 px-3 text-right border-l font-bold"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 pl-3 pr-2 font-medium">Cal.</td>
                                                {statsData.calculated.map((val, i) => (
                                                    <td key={i} className="py-2 px-2 text-center border-l font-semibold">{val}</td>
                                                ))}
                                                <td className="py-2 px-3 text-black text-right border-l font-semibold">Finalised by Rahul</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 pl-3 pr-2 font-medium">Final</td>
                                                {statsData.final.map((val, i) => (
                                                    <td key={i} className="py-2 px-2 text-center border-l font-semibold">{val}</td>
                                                ))}
                                                <td className="py-2 px-3 text-black text-right border-l font-semibold">Locked by Shrinivas</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table with visible borders */}
                    <div className="border-t border-gray-200">
                        <Table>
                            <TableHeader>
                                <TableRow className="border-b border-gray-200">
                                    <TableHead className="w-[200px] border-r border-gray-200 text-black font-semibold">Date</TableHead>
                                    <TableHead className="border-r border-gray-200  text-black  font-semibold">Time planned + WH</TableHead>
                                    <TableHead className="border-r border-gray-200  text-black font-semibold">Actual Time</TableHead>
                                    <TableHead className="border-r border-gray-200 text-black  font-semibold">Fine/Bonus</TableHead>
                                    <TableHead className="border-r border-gray-200 text-black  font-semibold">Error</TableHead>
                                    <TableHead className="border-r border-gray-200  text-black font-semibold">Cal. Att.</TableHead>
                                    <TableHead className="border-r border-gray-200 text-black  font-semibold">Final Att.</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[...Array(31)].map((_, i) => (
                                    <TableRow key={i} className="border-b border-gray-200 text-black font-semibold">
                                        <TableCell className="border-r border-gray-200">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 text-black font-semibold">M</div>
                                                <div>{`${31 - i}-Jun-2025`}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            {i < 5 && (
                                                <div className="flex items-center gap-2">
                                                    <span>09:00 AM - 06:30 PM</span>
                                                    <span className="text-black font-semibold">≈ 09:00 H</span>
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <div className="flex items-center gap-2">
                                                <span className="">09:01 AM - 06:32 PM</span>
                                                <span className="text-red-500">≈ 08:01 H</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-600">+500</span>
                                                <span className="text-black font-semibold">+900</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <div className="flex items-center gap-1">
                                                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                                                    <AlertCircle className="w-3 h-3 text-red-600" />
                                                </div>
                                                <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                                                    <Clock className="w-3 h-3 text-yellow-600" />
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <div className="flex items-center gap-1">
                                                <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-sm">P</span>
                                                <span className="text-black font-semibold">+ WO</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <div className="flex items-center gap-1">
                                                <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-sm">P</span>
                                                <span className="text-black font-semibold">+ WO</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-1">
                                                <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-100 rounded">
                                                    <Link2 className="w-4 h-4 text-gray-500" />
                                                </Button>
                                                <div className="text-sm text-gray-500">3</div>
                                                <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-100 rounded">
                                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}