import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all event summaries
export async function getEventSummaries() {
  try {
    const response = await cosmic.objects
      .find({ type: 'event-summaries' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch event summaries');
  }
}

// Fetch single event summary by slug
export async function getEventSummary(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'event-summaries',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch event summary');
  }
}

// Fetch all events
export async function getEvents() {
  try {
    const response = await cosmic.objects
      .find({ type: 'events' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Manual sorting by event_date (newest first)
    return response.objects.sort((a: any, b: any) => {
      const dateA = new Date(a.metadata?.event_date || '').getTime();
      const dateB = new Date(b.metadata?.event_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch events');
  }
}

// Fetch events by category
export async function getEventsByCategory(category: string) {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'events',
        'metadata.event_category.key': category
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Manual sorting by event_date (newest first)
    return response.objects.sort((a: any, b: any) => {
      const dateA = new Date(a.metadata?.event_date || '').getTime();
      const dateB = new Date(b.metadata?.event_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch events by category');
  }
}

// Fetch single event by slug
export async function getEvent(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'events',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch event');
  }
}