import Link from "next/link";

export default function Lesson1Page() {
  return (
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-4">Homework: Lesson 1</h1>
        <p className="text-lg mb-6">
          This page contains my completed homework assignments for the first lesson of the AI for Frontend Engineers course.
        </p>
        
        <div className="space-y-4 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Tasks:</h2>
          
          <Link 
            href="/lesson1/task1" 
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Task 1</h3>
            <p className="text-gray-600">View my solution to the first task</p>
          </Link>
          
          <Link 
            href="/lesson1/task2" 
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Task 2</h3>
            <p className="text-gray-600">View my solution to the second task</p>
          </Link>
          
          <Link 
            href="/lesson1/task3" 
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">Task 3</h3>
            <p className="text-gray-600">View my solution to the third task</p>
          </Link>
        </div>
        
        <div className="mt-8">
          <Link 
            href="/" 
            className="text-blue-600 hover:underline"
          >
            ← Back to all homework
          </Link>
        </div>
      </div>
  );
}
