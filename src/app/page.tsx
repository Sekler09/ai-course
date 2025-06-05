import Link from "next/link";

export default function Home() {
  return (
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">My AI Course Homework Submissions</h1>
        <p className="text-xl mb-8">
          This is where I submit my completed assignments for the AI for Frontend Engineers course.
          Each link will take you to one of my homework submissions.
        </p>
        <Link 
          href="/lesson1" 
          className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg
                    hover:bg-green-700 transition-colors"
        >
          View Homework 1 &quot;Enhanced FE Prompt Engineering&quot; Submission
        </Link>
      </div>
  );
}
