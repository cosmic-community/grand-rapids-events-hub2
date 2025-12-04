import { notFound } from 'next/navigation'
import { getEventSummary } from '@/lib/cosmic'
import { EventSummary } from '@/types'
import Link from 'next/link'
import EventCard from '@/components/EventCard'

export const revalidate = 3600 // Revalidate every hour

export default async function SummaryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const summary = await getEventSummary(slug) as EventSummary | null

  if (!summary) {
    notFound()
  }

  const featuredEvents = summary.metadata.featured_events || []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/summaries"
        className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
      >
        ← Back to Summaries
      </Link>

      <article>
        {summary.metadata.summary_image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={`${summary.metadata.summary_image.imgix_url}?w=1600&h=600&fit=crop&auto=format,compress`}
              alt={summary.metadata.summary_title}
              className="w-full h-auto"
              width="800"
              height="300"
            />
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {summary.metadata.summary_title}
          </h1>
          {summary.metadata.summary_period && (
            <p className="text-lg text-gray-600">
              {summary.metadata.summary_period}
            </p>
          )}
        </div>

        <div 
          className="prose-custom max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: summary.metadata.summary_content }}
        />

        {featuredEvents.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}