import { Badge } from '@/components/common/badge';

interface TagListProps {
  title: string;
  tags: string[];
  onTagClick?: (tag: string) => void;
}

function TagList({ title, tags, onTagClick }: TagListProps) {
  return (
    <section
      aria-label={`${title} tags`}
      className="mt-8 px-6 max-w-5xl mx-auto"
    >
      <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onTagClick?.(tag)}
            className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer rounded-md px-3 py-1 text-sm"
          >
            <Badge className="bg-transparent border-none shadow-none">{tag}</Badge>
          </button>
        ))}
      </div>
    </section>
  );
}

export default TagList;
