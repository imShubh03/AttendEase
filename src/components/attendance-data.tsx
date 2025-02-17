"use client"

import  { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, ChevronDown, Clock, Info } from "lucide-react"

export default function AttendanceTable() {
    return (
        <div className="rounded-lg border bg-white">
            <div className="p-4">
                <div className="grid grid-cols-[300px,1fr] gap-4 text-sm">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>BS</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-medium">Bhaskar Sharma</div>
                            <div className="text-gray-500">Sales Manager · Sales Dept.</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-8 gap-4">
                        <div>
                            <div className="font-medium">Cal.</div>
                            <div>17.5</div>
                        </div>
                        <div>
                            <div className="font-medium">Final</div>
                            <div>23.5</div>
                        </div>
                        <div>
                            <div className="font-medium">2.5</div>
                            <div>3.5</div>
                        </div>
                        <div>
                            <div className="font-medium">11</div>
                            <div>4</div>
                        </div>
                        <div>
                            <div className="font-medium text-green-600">+2000</div>
                            <div className="text-green-600">+400</div>
                        </div>
                        <div>
                            <div className="font-medium">17:32 H</div>
                            <div>12:30 H</div>
                        </div>
                        <div>
                            <div className="font-medium">-12:00 H</div>
                            <div>-19:00</div>
                        </div>
                        <div>
                            <div className="font-medium">05:32 H</div>
                            <div>-06:30 H</div>
                        </div>
                    </div>
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Date</TableHead>
                        <TableHead>Time planned + WH</TableHead>
                        <TableHead>Actual Time</TableHead>
                        <TableHead>Fine/Bonus</TableHead>
                        <TableHead>Error</TableHead>
                        <TableHead>Cal. Att.</TableHead>
                        <TableHead>Final Att.</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[...Array(31)].map((_, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 text-gray-500">M</div>
                                    <div>{`${31 - i}-Jun-2025`}</div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <span>09:00 AM - 06:30 PM</span>
                                    <span className="text-gray-500">≈ 09:00 H</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <span>09:01 AM - 06:32 PM</span>
                                    <span className="text-gray-500">≈ 09:01 H</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-600">+500</span>
                                    <span className="text-gray-400">+900</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                                        <AlertCircle className="w-3 h-3 text-red-600" />
                                    </div>
                                    <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <Clock className="w-3 h-3 text-yellow-600" />
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-sm">P</span>
                            </TableCell>
                            <TableCell>
                                <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-sm">P</span>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    <Button className="p-1 hover:bg-gray-100 rounded">
                                        <Info className="w-4 h-4 text-gray-500" />
                                    </Button>
                                    <div className="text-sm text-gray-500">3</div>
                                    <Button className="p-1 hover:bg-gray-100 rounded">
                                        <ChevronDown className="w-4 h-4 text-gray-500" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

