import { Link } from "react-router-dom";

export default function AppCard({ app }) {
  return (
    <Link to={`/apps/${app.id}`} className="block bg-white rounded-lg shadow p-4 hover:shadow-md transition">
      <img src={app.image} alt={app.title} className="w-full h-40 object-cover rounded" />
      <div className="mt-3">
        <div className="font-semibold">{app.title}</div>
        <div className="text-sm text-slate-500">{Math.round(app.downloads/1000)}K downloads • {app.ratingAvg}⭐</div>
      </div>
    </Link>
  );
}
