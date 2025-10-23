export default function Loader({ show }) {
    if (!show) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div className="p-4 rounded-lg bg-white flex items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-700"></div>
          <div>Loading...</div>
        </div>
      </div>
    );
  }
  