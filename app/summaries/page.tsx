import { getEventSummaries } from '@/lib/cosmic'
import { EventSummary } from '@/types'
import SummaryCard from '@/components/SummaryCard'

export const revalidate = 3600 // Revalidate every hour

export default async function SummariesPage() {
  const summaries = await getEventSummaries() as EventSummary[]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Summaries</h1>
        <p className="text-lg text-gray-600">
          Curated weekly overviews of what's happening in Grand Rapids
        </p>
      </div>

      {summaries.length > 0 ? (
        <div className="space-y-8">
          {summaries.map((summary) => (
            <SummaryCard key={summary.id} summary={summary} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No summaries found.</p>
        </div>
      )}
    </div>
  )
}