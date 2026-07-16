import React, { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'

const Filter = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory, 
  categories,
  className = "" 
}) => {
  const [showLeftFade, setShowLeftFade] = useState(false)
  const [showRightFade, setShowRightFade] = useState(true)
  const filterRef = useRef(null)
  const [activeFilterStyle, setActiveFilterStyle] = useState({ left: 0, width: 0, opacity: 0, height: 32 })

  // Update filter indicator when category changes
  useEffect(() => {
    if (categories.length > 0) {
      requestAnimationFrame(updateActiveFilter);
    }
  }, [selectedCategory, categories])

  // Auto-center the active filter in the scroll container
  useEffect(() => {
    if (!filterRef.current) return;

    const activeItem = filterRef.current.querySelector(
      `button[data-category="${selectedCategory}"]` 
    );

    if (!activeItem) return;

    requestAnimationFrame(() => {
      try {
        activeItem.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      } catch (e) {
        const container = filterRef.current.parentElement;
        if (!container) return;

        const itemRect = activeItem.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const offset =
          itemRect.left -
          containerRect.left -
          (containerRect.width / 2 - itemRect.width / 2);

        container.scrollLeft += offset;
      }
    });
  }, [selectedCategory]);

  useEffect(() => {
    const handleResize = () => updateActiveFilter();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedCategory, categories]);

  useEffect(() => {
    const container = filterRef.current?.parentElement
    if (!container) return

    const scrollLeft = container.scrollLeft
    const scrollWidth = container.scrollWidth
    const clientWidth = container.clientWidth

    const isAtStart = scrollLeft <= 2
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 2

    setShowLeftFade(!isAtStart)
    setShowRightFade(!isAtEnd)
  }, [categories]);

  const updateActiveFilter = () => {
    if (!filterRef.current) return;

    const activeItem = filterRef.current.querySelector(
      `button[data-category="${selectedCategory}"]` 
    );

    if (!activeItem) return;

    const parentRect = filterRef.current.getBoundingClientRect();
    const rect = activeItem.getBoundingClientRect();

    setActiveFilterStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
      height: rect.height,
      opacity: 1,
    });
  };

  const handleScroll = (e) => {
    const container = e.target
    const scrollLeft = container.scrollLeft
    const scrollWidth = container.scrollWidth
    const clientWidth = container.clientWidth

    const isAtStart = scrollLeft <= 2
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 2

    setShowLeftFade(!isAtStart)
    setShowRightFade(!isAtEnd)
  }

  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 ${className}`}>
      {/* Search Bar */}
      <div className='w-full sm:w-96 sm:flex-shrink-0'>
        <div className='flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2'>
          <Search className='w-4 h-4 text-gray-400' />
          <input
            type='text'
            placeholder='Search products...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='bg-transparent text-white placeholder-gray-400 focus:outline-none flex-1'
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className='text-gray-400 hover:text-white hover:bg-gray-700 rounded-full p-1 transition-colors duration-200'
            >
              <X className='w-4 h-4' />
            </button>
          )}
        </div>
      </div>

      {/* Category Filters */}
      <div className='w-full sm:flex-1 relative flex justify-end'>
        {showLeftFade && (
          <div className='absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent z-20 pointer-events-none'></div>
        )}
        {showRightFade && (
          <div className='absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-gray-900 via-gray-900/60 to-transparent z-20 pointer-events-none'></div>
        )}
        <div className='overflow-x-auto scrollbar-hide max-w-full' onScroll={handleScroll}>
          <div className='flex items-center gap-2 min-w-max relative ml-auto' ref={filterRef}>
            {categories.map(category => (
              <button
                key={category}
                data-filter-item
                data-category={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 whitespace-nowrap flex-shrink-0 relative z-10 bg-transparent ${
                  selectedCategory === category
                    ? 'text-black'
                    : 'text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
            <div 
              className='absolute bg-white rounded-full transition-[left,width,height,opacity] duration-200 ease-out pointer-events-none z-0 mix-blend-normal'
              style={{
                left: `${activeFilterStyle.left}px`,
                width: `${activeFilterStyle.width}px`,
                height: `${activeFilterStyle.height}px`,
                top: 0,
                opacity: activeFilterStyle.opacity
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
