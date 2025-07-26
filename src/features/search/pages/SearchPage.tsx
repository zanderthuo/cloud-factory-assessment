import { useState } from 'react';
import Header from '@/components/Header/Header';
import SearchHero from '@/features/search/components/SearchHero';
import TagList from '@/features/search/components/TagList';

const SearchPage = () => {
  const [tags] = useState([
    'NFT',
    'Metaverse',
    'Sustainable',
    'Sonder',
    'FOMO',
    'Ghosting',
  ]);

  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <SearchHero />

      <section aria-label="Trending tags">
        <TagList title="Trending" tags={tags} />
      </section>

      <section aria-label="Suggested tags for you">
        <TagList title="For you" tags={tags} />
      </section>
    </main>
  );
};

export default SearchPage;
