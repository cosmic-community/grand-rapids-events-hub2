import Link from 'next/link'
import { EventSummary } from '@/types'

interface SummaryCardProps {
  summary: EventSummary
}

export default function SummaryCard({ summary }: SummaryCardProps) {
  const imageUrl = summary.metadata.summary_image?.imgix_url
  const featuredCount = summary.metadata.featured_events?.length || 0

  return (
    <Link href={`/summaries/${summary.slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg">
        <div className="md:flex">
          {imageUrl && (
            <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
              <img
                src={`${imageUrl}?w=800&h=800&fit=crop&auto=format,compress`}
                alt={summary.metadata.summary_title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width="400"
                height="400"
              />
            </div>
          )}
          
          <div className="p-6 md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
              {summary.metadata.summary_title}
            </h3>
            
            {summary.metadata.summary_period && (
              <p className="text-gray-600 mb-4">
                {summary.metadata.summary_period}
              </p>
            )}
            
            {featuredCount > 0 && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span>🎯</span>
                <span>{featuredCount} Featured Events</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}