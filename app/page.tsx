import { getEventSummaries, getEvents } from '@/lib/cosmic'
import { Event, EventSummary } from '@/types'
import HeroSection from '@/components/HeroSection'
import EventCard from '@/components/EventCard'
import CategoryFilter from '@/components/CategoryFilter'

export const revalidate = 3600 // Revalidate every hour

export default async function HomePage() {
  const summaries = await getEventSummaries() as EventSummary[]
  const events = await getEvents() as Event[]
  
  const featuredSummary = summaries[0]
  const upcomingEvents = events.slice(0, 6)

  return (
    <div>
      {featuredSummary && <HeroSection summary={featuredSummary} />}
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          <CategoryFilter />
        </div>
        
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No upcoming events found.</p>
          </div>
        )}
      </section>
    </div>
  )
}