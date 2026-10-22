import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export const metadata = {
  title: "Dashboard | HireHive",
  description: "Manage your applications, job matches, and career portfolio.",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] bg-[#09090b] text-zinc-100">
      <DashboardSidebar />
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
