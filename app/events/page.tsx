import { getEvents } from '@/lib/cosmic'
import { Event } from '@/types'
import EventCard from '@/components/EventCard'
import CategoryFilter from '@/components/CategoryFilter'

export const revalidate = 3600 // Revalidate every hour

export default async function EventsPage() {
  const events = await getEvents() as Event[]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Events</h1>
        <p className="text-lg text-gray-600 mb-6">
          Browse all upcoming events in Grand Rapids
        </p>
        <CategoryFilter />
      </div>

      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No events found.</p>
        </div>
      )}
    </div>
  )
}