import AttendanceTable from "@/components/attendance-data";
import { NavigationTabs } from "@/components/navbar-tab";
import { TableFilters } from "@/components/table-data";

import { Button } from "@/components/ui/button";
import { Building2, Calendar, FileText, LayoutGrid, LogOut } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-16 bg-indigo-600 flex flex-col items-center py-4 gap-6">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="https://i0.wp.com/www.commercialphotographynorthwestblog.co.uk/wp-content/uploads/2020/10/MDH_8729webqualitysquare.jpg?w=864&ssl=1"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <nav className="flex flex-col gap-4">
            <Button className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white/80 hover:bg-white/10">
              <LayoutGrid className="w-5 h-5 " />
            </Button>
            <Button className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white/80 hover:bg-white/10">
              <Building2 className="w-5 h-5" />
            </Button>
            <Button className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white/80 hover:bg-white/10">
              <Calendar className="w-5 h-5 " />
            </Button>
            <Button className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white/80 hover:bg-white/10">
              <FileText className="w-5 h-5" />
            </Button>
          </nav>
          <div className="mt-auto mb-4">
            <Button className="w-10 h-10 flex items-center justify-center rounded-lg text-white/80 hover:bg-white/10">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <NavigationTabs />
              <div className="text-indigo-600 font-medium">Attendance Module</div>
            </div>
            <div className="mt-6">
              <TableFilters />
            </div>
            <div className="mt-6">
              <AttendanceTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
