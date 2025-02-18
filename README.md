# AttendEase

## Overview
This project is an **Attendance Management System** designed to manage and track attendance for students or employees. The frontend is built using **Next.js**, **TypeScript**, **TailwindCSS**, and **ShadCN** for UI components, offering a clean and responsive design. The app features an intuitive UI for managing attendance, viewing records, and providing reports.

## Screenshots
![Screenshot 2025-02-18 192330](https://github.com/user-attachments/assets/81a4e95c-4383-4b6f-b144-db826df475f8)
![Screenshot 2025-02-18 192337](https://github.com/user-attachments/assets/eaa3f0c7-4a16-40d5-8b1c-f7fea4e8fef8)
![Screenshot 2025-02-18 192349](https://github.com/user-attachments/assets/8e05e2ab-7f57-482f-a8d5-b17657a58b00)

## Main Focus Areas
- **Next.js with TypeScript**
- **UI Design with TailwindCSS**
- **ShadCN UI Components**
- **Responsive Design**
- **User Authentication and Role-based Access (Frontend only)**

## Features

### 1. **Attendance Tracking**
- **Add and manage attendance records** for students/employees
- View attendance by **date or individual**
- **Edit** or **delete** attendance entries
- Track **absences** and **presence** in real-time

### 2. **User Interface (UI)**
- Clean, modern, and **responsive layout** using **TailwindCSS** and **ShadCN UI components**
- **Dark mode** and light mode toggle
- **Dashboard** for easy navigation between sections
- **Search and filter functionality** for quick data retrieval

### 3. **Role-Based Access**
- Users can have roles such as **Admin** and **Employee/Student**
- Admins can manage attendance records, users, and settings
- Employees or Students can only view their attendance

### 4. **Reports and Analytics**
- Visualize attendance with **charts and graphs**
- View overall attendance percentage and trends
- Download reports as **PDF** or **Excel** (future enhancement)

### 5. **Responsive Design**
- Optimized for **desktop, tablet, and mobile**
- Uses **flexbox and grid layouts** for a seamless experience
- Mobile-friendly interface for users on the go

## Tech Stack

### **Frontend**
- **Next.js** (React Framework)
- **TypeScript** (For type safety)
- **TailwindCSS** (Styling)
- **ShadCN** (UI Components)
- **React Query** (For data fetching)

### **Deployment**
- **Vercel** (For hosting)

## Setup Instructions

### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/AttendEase.git
cd AttendEase
```

## Install Dependencies 
npm install
# or
yarn install
# or
pnpm install

## Run Development Server
npm run dev
# or
yarn dev
# or
pnpm dev

# The application will be available at http://localhost:3000

# Project Structure 
attendance-management/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AttendanceForm.tsx
│   ├── AttendanceList.tsx
│   ├── Dashboard.tsx
│   └── ui/
├── data/
│   └── attendance.ts
├── store/
│   └── atoms.ts
├── types/
│   └── attendance.ts
└── styles/
    └── globals.css

## Contributing
Fork the repository
Create a new branch (git checkout -b feature/improvement)
Make your changes
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature/improvement)
Create a Pull Request
