export type AttendanceRecord = {
    id: string
    name: string
    role: string
    department: string
    avatar: string
    dates: {
        date: string
        day: string
        plannedTime: string
        actualTime: string
        bonus: number
        status: "P" | "A" | "WO" | "HD" | "P+OT" | "P+WO" | "P+WO+OT" | "P+WO-LT"
        error?: boolean
        late?: boolean
        early?: boolean
    }[]
}

export const attendanceData: AttendanceRecord[] = [
    {
        id: "1",
        name: "Bhaskar Sharma",
        role: "Sales Manager",
        department: "Sales Dept.",
        avatar: "/placeholder.svg",
        dates: [
            {
                date: "31-Jun-2025",
                day: "M",
                plannedTime: "09:00 AM - 06:30 PM",
                actualTime: "09:01 AM - 06:32 PM",
                bonus: 500,
                status: "P",
            },
            {
                date: "30-Jun-2025",
                day: "M",
                plannedTime: "09:00 AM - 06:30 PM",
                actualTime: "09:01 AM - 06:32 PM",
                bonus: 500,
                status: "P",
            },
        ],
    },
    {
        id: "2",
        name: "Amit Verma",
        role: "HR Manager",
        department: "HR Dept.",
        avatar: "/placeholder.svg",
        dates: [
            {
                date: "31-Jun-2025",
                day: "M",
                plannedTime: "09:00 AM - 06:00 PM",
                actualTime: "09:05 AM - 06:10 PM",
                bonus: 400,
                status: "P",
            },
            {
                date: "30-Jun-2025",
                day: "M",
                plannedTime: "09:00 AM - 06:00 PM",
                actualTime: "09:02 AM - 06:05 PM",
                bonus: 450,
                status: "P",
            },
        ],
    },
    {
        id: "3",
        name: "Suresh Patil",
        role: "Software Engineer",
        department: "IT Dept.",
        avatar: "/placeholder.svg",
        dates: [
            {
                date: "31-Jun-2025",
                day: "M",
                plannedTime: "10:00 AM - 07:00 PM",
                actualTime: "10:02 AM - 07:10 PM",
                bonus: 300,
                status: "P",
            },
            {
                date: "30-Jun-2025",
                day: "M",
                plannedTime: "10:00 AM - 07:00 PM",
                actualTime: "10:05 AM - 07:15 PM",
                bonus: 320,
                status: "P",
            },
        ],
    },
    {
        id: "4",
        name: "Rita Mehta",
        role: "Marketing Manager",
        department: "Marketing Dept.",
        avatar: "/placeholder.svg",
        dates: [
            {
                date: "31-Jun-2025",
                day: "M",
                plannedTime: "09:30 AM - 06:30 PM",
                actualTime: "09:32 AM - 06:40 PM",
                bonus: 600,
                status: "P",
            },
            {
                date: "30-Jun-2025",
                day: "M",
                plannedTime: "09:30 AM - 06:30 PM",
                actualTime: "09:31 AM - 06:35 PM",
                bonus: 580,
                status: "P",
            },
        ],
    },
    {
        id: "5",
        name: "Vikram Desai",
        role: "Project Manager",
        department: "IT Dept.",
        avatar: "/placeholder.svg",
        dates: [
            {
                date: "31-Jun-2025",
                day: "M",
                plannedTime: "08:30 AM - 05:30 PM",
                actualTime: "08:35 AM - 05:40 PM",
                bonus: 700,
                status: "P",
            },
            {
                date: "30-Jun-2025",
                day: "M",
                plannedTime: "08:30 AM - 05:30 PM",
                actualTime: "08:32 AM - 05:38 PM",
                bonus: 720,
                status: "P",
            },
        ],
    },
    {
        id: "6",
        name: "Kiran Joshi",
        role: "Finance Analyst",
        department: "Finance Dept.",
        avatar: "/placeholder.svg",
        dates: [
            {
                date: "31-Jun-2025",
                day: "M",
                plannedTime: "09:00 AM - 06:00 PM",
                actualTime: "09:10 AM - 06:15 PM",
                bonus: 480,
                status: "P",
            },
            {
                date: "30-Jun-2025",
                day: "M",
                plannedTime: "09:00 AM - 06:00 PM",
                actualTime: "09:08 AM - 06:12 PM",
                bonus: 500,
                status: "P",
            },
        ],
    },
    {
        id: "7",
        name: "Rajiv Nair",
        role: "Operations Manager",
        department: "Operations Dept.",
        avatar: "/placeholder.svg",
        dates: [
            {
                date: "31-Jun-2025",
                day: "M",
                plannedTime: "08:00 AM - 05:00 PM",
                actualTime: "08:05 AM - 05:10 PM",
                bonus: 550,
                status: "P",
            },
            {
                date: "30-Jun-2025",
                day: "M",
                plannedTime: "08:00 AM - 05:00 PM",
                actualTime: "08:02 AM - 05:08 PM",
                bonus: 570,
                status: "P",
            },
        ],
    },
    {
        id: "8",
        name: "Neha Kapoor",
        role: "Senior Developer",
        department: "IT Dept.",
        avatar: "/placeholder.svg",
        dates: [
            {
                date: "31-Jun-2025",
                day: "M",
                plannedTime: "10:00 AM - 07:00 PM",
                actualTime: "10:05 AM - 07:15 PM",
                bonus: 350,
                status: "P",
            },
            {
                date: "30-Jun-2025",
                day: "M",
                plannedTime: "10:00 AM - 07:00 PM",
                actualTime: "10:02 AM - 07:12 PM",
                bonus: 370,
                status: "P",
            },
        ],
    },
    // Add more employees up to 30
];
