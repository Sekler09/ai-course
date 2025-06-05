import Link from "next/link";

export default function TasksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="border border-white  rounded-lg shadow-sm p-6 mb-6">
        {children}
      </div>
      
      <footer className="mt-8 border-t pt-4">
        <Link 
          href="/lesson1" 
          className="text-blue-600 hover:underline flex items-center"
        >
          ← Back to Lesson 1
        </Link>
      </footer>
    </div>
  );
}
