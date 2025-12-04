import Link from 'next/link'
import { Event } from '@/types'
import { formatShortDate, getCategoryColor, getCategoryIcon } from '@/lib/utils'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const imageUrl = event.metadata.event_image?.imgix_url
  const categoryColor = event.metadata.event_category 
    ? getCategoryColor(event.metadata.event_category.key)
    : getCategoryColor('other')
  
  const categoryIcon = event.metadata.event_category
    ? getCategoryIcon(event.metadata.event_category.key)
    : getCategoryIcon('other')

  return (
    <Link href={`/events/${event.slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg">
        {imageUrl && (
          <div className="aspect-video overflow-hidden">
            <img
              src={`${imageUrl}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={event.metadata.event_title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              width="400"
              height="225"
            />
          </div>
        )}
        
        <div className="p-6">
          {event.metadata.event_category && (
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${categoryColor} mb-3`}>
              <span>{categoryIcon}</span>
              {event.metadata.event_category.value}
            </span>
          )}
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {event.metadata.event_title}
          </h3>
          
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {event.metadata.event_date && (
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>{formatShortDate(event.metadata.event_date)}</span>
              </div>
            )}
            {event.metadata.location && (
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span className="truncate">{event.metadata.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}