import { Navbar } from "@/components/shared/Navbar";
import { Sidebar } from "@/components/shared/sidebar/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-hidden  p-10 bg-[#3652D9]/5">
          {children}
        </main>
      </div>
    </div>
  );
}
