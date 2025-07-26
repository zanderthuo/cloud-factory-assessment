import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import { useDebounce } from "@/hooks/useDebounce";

interface SearchInputProps {
  initialValue: string;
  onSearch: (value: string) => void;
}

export default function SearchInput({ initialValue, onSearch }: SearchInputProps) {
  const [query, setQuery] = useState(initialValue);
  const debouncedQuery = useDebounce(query, 500); // 500ms delay

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query); // Immediate on button click
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search dictionary"
      className="w-full max-w-xl mt-6 shadow-lg"
    >
      <div className="flex items-center bg-black px-4 py-2 rounded-full">
        <Search className="text-gray-400 mr-3" aria-hidden="true" />
        <label htmlFor="dictionary-search" className="sr-only">
          Search
        </label>
        <Input
          id="dictionary-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type to search..."
          className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
        />
        <Button
          type="submit"
          className="ml-4 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
