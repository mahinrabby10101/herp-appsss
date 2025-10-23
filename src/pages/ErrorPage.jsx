import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h2 className="text-2xl font-semibold">404 — Page Not Found</h2>
      <p className="mt-3 text-slate-600">We couldn't find the page you're looking for.</p>
      <div className="mt-4"><Link to="/" className="px-4 py-2 border rounded">Home</Link></div>
    </div>
  );
}
