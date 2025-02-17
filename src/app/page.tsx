import AttendanceTable from "@/components/attendance-data";
import { NavigationTabs } from "@/components/navbar-tab";
import { TableFilters } from "@/components/table-data";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-16 bg-indigo-600 flex flex-col items-center py-4 gap-6">
          <div className="w-8 h-8 bg-white rounded-full" />
          <nav className="flex flex-col gap-4">
            {["grid", "users", "calendar", "folder"].map((icon, i) => (
              <Button
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-white/80 hover:bg-white/10"
              >
                <div className="w-5 h-5 bg-current rounded" />
              </Button>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 py-4">
            <NavigationTabs />
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
