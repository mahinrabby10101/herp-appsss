export default function Footer() {
    return (
      <footer className="mt-12 bg-slate-900 text-slate-200">
        <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">H</div>
              <div>
                <div className="font-semibold">HERO.IO</div>
                <div className="text-sm text-slate-400">Productive apps for everyday life</div>
              </div>
            </div>
            <div className="text-sm text-slate-400">© {new Date().getFullYear()} HERO.IO. All rights reserved.</div>
          </div>
          <div className="text-sm text-slate-400">
            <div className="font-semibold mb-2">Social</div>
            <div className="flex gap-3"> 
              <a className="underline" href="#">Twitter</a>
              <a className="underline" href="#">Github</a>
              <a className="underline" href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  