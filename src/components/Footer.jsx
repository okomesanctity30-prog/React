const Footer = () => {
  return (
    <footer
      className="py-16 max-w-7xl mx-auto px-6 text-gray-500 text-sm border-t border-dark-border"
      id="footer"
    >
      <div className="flex flex-col justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white font-bold-text-lg">
          <div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center text-xs">
            A
          </div>
          Apex Engine
        </div>

        <div className="flex gap-6 text-xs text-gray-400 font-medium">
          <a href="#features" className="hover:text-white transition-color">
            Platform
          </a>
          <a href="#architecture" className="hover:text-white transition-color">
            Architecture
          </a>
          <a href="#metrics" className="hover:text-white transition-color">
            Benchmarks
          </a>
        </div>

        <div className="text-xs">
          &copy; 2026 Apex Engine Inc. Built With React &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
