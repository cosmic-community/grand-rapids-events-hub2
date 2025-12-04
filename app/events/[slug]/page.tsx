import { notFound } from 'next/navigation'
import { getEvent } from '@/lib/cosmic'
import { Event } from '@/types'
import { formatDate, getCategoryColor, getCategoryIcon } from '@/lib/utils'
import Link from 'next/link'

export const revalidate = 3600 // Revalidate every hour

export default async function EventPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const event = await getEvent(slug) as Event | null

  if (!event) {
    notFound()
  }

  const categoryColor = event.metadata.event_category 
    ? getCategoryColor(event.metadata.event_category.key)
    : getCategoryColor('other')
  
  const categoryIcon = event.metadata.event_category
    ? getCategoryIcon(event.metadata.event_category.key)
    : getCategoryIcon('other')

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/events"
        className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
      >
        ← Back to Events
      </Link>

      <article>
        {event.metadata.event_image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={`${event.metadata.event_image.imgix_url}?w=1600&h=600&fit=crop&auto=format,compress`}
              alt={event.metadata.event_title}
              className="w-full h-auto"
              width="800"
              height="300"
            />
          </div>
        )}

        <div className="mb-6">
          {event.metadata.event_category && (
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${categoryColor} mb-4`}>
              <span>{categoryIcon}</span>
              {event.metadata.event_category.value}
            </span>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            {event.metadata.event_title}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-600">
            {event.metadata.event_date && (
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>{formatDate(event.metadata.event_date)}</span>
              </div>
            )}
            {event.metadata.location && (
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{event.metadata.location}</span>
              </div>
            )}
          </div>
        </div>

        {event.metadata.description && (
          <div 
            className="prose-custom max-w-none"
            dangerouslySetInnerHTML={{ __html: event.metadata.description }}
          />
        )}
      </article>
    </div>
  )
}