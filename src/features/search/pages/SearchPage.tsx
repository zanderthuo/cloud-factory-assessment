import Header from '@/components/Header/Header'
import { useState } from 'react'
import SearchHero from '../components/SearchHero'
import TagList from '../components/TagList'

const SearchPage = () => {
  const [tags, setTags] = useState([
    'NFT',
    'Metaverse',
    'Sustainable',
    'Sonder',
    'FOMO',
    'Ghosting'
  ])
  return (
    <div>
      <main className='bg-black min-h-screen text-white'>
        <Header />
        <SearchHero />
        <TagList title='Trending' tags={tags} />
        <TagList title='For you' tags={tags} />
      </main>
    </div>
  )
}

export default SearchPage
