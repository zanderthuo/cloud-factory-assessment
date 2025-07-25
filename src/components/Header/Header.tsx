import { Search } from 'lucide-react';
import { Input } from '../common/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/common/avatar';

function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 bg-black border-b border-gray-800">
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <img src="/task1/logo.png" alt="Logo" className="w-7 h-7" />
        <div className="text-white font-semibold text-lg whitespace-nowrap">Wortionary</div>
      </div>

      {/* Right: Search + Avatar */}
      <div className="flex items-center gap-3 flex-1 justify-end min-w-0">
        {/* Responsive Search Input */}
        <div className="relative flex-1 max-w-xs hidden sm:block">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="search"
            className="w-full pl-9 pr-4 py-2 rounded-full bg-[#1E2630] text-white border-none focus:ring-0 text-sm"
          />
        </div>

        {/* Avatar */}
        <Avatar className="w-8 h-8">
          <AvatarImage src="/src/assets/Depth 4, Frame 1.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Header;
