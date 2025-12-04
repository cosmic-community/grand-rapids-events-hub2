// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  thumbnail?: string;
}

// Event Category type
export type EventCategory = 'music' | 'art' | 'food' | 'sports' | 'family' | 'other';

// Event object type
export interface Event extends CosmicObject {
  type: 'events';
  metadata: {
    event_title: string;
    description?: string;
    event_date: string;
    location?: string;
    event_image?: {
      url: string;
      imgix_url: string;
    };
    rss_source_url?: string;
    event_category?: {
      key: EventCategory;
      value: string;
    };
  };
}

// Event Summary object type
export interface EventSummary extends CosmicObject {
  type: 'event-summaries';
  metadata: {
    summary_title: string;
    summary_period?: string;
    summary_content: string;
    featured_events?: Event[];
    summary_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isEvent(obj: CosmicObject): obj is Event {
  return obj.type === 'events';
}

export function isEventSummary(obj: CosmicObject): obj is EventSummary {
  return obj.type === 'event-summaries';
}

// Utility types
export type EventWithCategory = Event & {
  metadata: {
    event_category: {
      key: EventCategory;
      value: string;
    };
  };
};