import SearchInput from './SearchInput';

function SearchHero() {
  const onSearch = (search: string) => {
    console.log(search);
    // Search logic can be implemented here later
  };

  return (
    <section
      aria-label="Hero section with search input"
      className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8"
    >
      <img
        src="/task1/hero-bg.png"
        alt="Abstract background"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        <SearchInput initialValue="" onSearch={onSearch} />
      </div>
    </section>
  );
}

export default SearchHero;
