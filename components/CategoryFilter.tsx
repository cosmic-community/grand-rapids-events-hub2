'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { getCategoryColor, getCategoryIcon } from '@/lib/utils'

const categories = [
  { key: 'all', value: 'All Events' },
  { key: 'music', value: 'Music' },
  { key: 'art', value: 'Art & Culture' },
  { key: 'food', value: 'Food & Drink' },
  { key: 'sports', value: 'Sports' },
  { key: 'family', value: 'Family' },
  { key: 'other', value: 'Other' },
]

function CategoryFilterContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category') || 'all'

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = currentCategory === category.key
        const categoryColor = getCategoryColor(category.key)
        const categoryIcon = getCategoryIcon(category.key)
        
        const href = category.key === 'all' 
          ? pathname 
          : `${pathname}?category=${category.key}`

        return (
          <Link
            key={category.key}
            href={href}
            className={`inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive 
                ? categoryColor
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{categoryIcon}</span>
            {category.value}
          </Link>
        )
      })}
    </div>
  )
}

export default function CategoryFilter() {
  return (
    <Suspense fallback={
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <div
            key={category.key}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
          >
            <span>{getCategoryIcon(category.key)}</span>
            {category.value}
          </div>
        ))}
      </div>
    }>
      <CategoryFilterContent />
    </Suspense>
  )
}