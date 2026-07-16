import { Search, X } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm, placeholder = 'Search products...' }) => {
  return (
    <div className='w-full sm:w-96 sm:flex-shrink-0'>
      <div className='flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2'>
        <Search className='w-4 h-4 text-gray-400' />
        <input
          type='text'
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='bg-transparent text-white placeholder-gray-400 focus:outline-none flex-1'
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className='text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors duration-200'
          >
            <X className='w-4 h-4' />
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar;
