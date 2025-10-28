export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
       
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10  flex items-center justify-center ">
            <img src="/logo.png" alt="" />
            </div>
            <div>
              <div className="font-semibold text-lg">HERO.IO</div>
              <div className="text-sm text-gray-400">Productive apps for everyday life</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} HERO.IO. All rights reserved.</div>
        </div>

       
        <div>
          <div className="font-semibold mb-2">Products</div>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#" className="hover:underline">Time Planner</a></li>
            <li><a href="#" className="hover:underline">Focus Tracker</a></li>
            <li><a href="#" className="hover:underline">Pomodoro App</a></li>
            <li><a href="#" className="hover:underline">Task Manager</a></li>
          </ul>
        </div>

     
        <div>
          <div className="font-semibold mb-2">Resources</div>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

       
        <div>
          <div className="font-semibold mb-2">Social</div>
          <div className="flex gap-3 text-sm text-gray-400">
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">GitHub</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
