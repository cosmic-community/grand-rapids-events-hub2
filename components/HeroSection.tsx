import Link from 'next/link'
import { EventSummary } from '@/types'

interface HeroSectionProps {
  summary: EventSummary
}

export default function HeroSection({ summary }: HeroSectionProps) {
  const imageUrl = summary.metadata.summary_image?.imgix_url

  return (
    <div className="relative bg-gray-900 text-white">
      {imageUrl && (
        <div className="absolute inset-0 opacity-40">
          <img
            src={`${imageUrl}?w=2400&h=800&fit=crop&auto=format,compress`}
            alt={summary.metadata.summary_title}
            className="w-full h-full object-cover"
            width="1200"
            height="400"
          />
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {summary.metadata.summary_title}
          </h1>
          {summary.metadata.summary_period && (
            <p className="text-xl mb-6 text-gray-300">
              {summary.metadata.summary_period}
            </p>
          )}
          <Link
            href={`/summaries/${summary.slug}`}
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Read Full Summary
          </Link>
        </div>
      </div>
    </div>
  )
}