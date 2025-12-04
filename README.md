# Grand Rapids Events Hub

![App Preview](https://imgix.cosmicjs.com/574a4a80-d12f-11f0-b693-79ceb5783a41-photo-1496024840928-4c417adf211d-1764866169373.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern event discovery platform for Grand Rapids, Michigan that aggregates local events from RSS feeds and provides curated weekly summaries alongside individual event listings.

## ✨ Features

- 📰 **Weekly Event Summaries** - Curated overviews with featured events
- 📅 **Individual Event Listings** - Detailed event information with images
- 🎯 **Category Filtering** - Browse by Music, Sports, Food & Drink, Art & Culture, Family, and Other
- 📱 **Responsive Design** - Optimized for all devices
- 🚀 **Server-Side Rendering** - Fast, SEO-friendly pages
- 🖼️ **Image Optimization** - Automatic image optimization via imgix
- 🔄 **RSS Integration Ready** - Built to work with RSS feed aggregation

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=6931b7da2794e7afddb525ba&clone_repository=6931bb392794e7afddb52621)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a website that will pull from an RSS feed on Grand Rapids Michigan events and provide an overall summary of what events are happening"

### Code Generation Prompt

> "Based on the content model I created for 'Create a website that will pull from an RSS feed on Grand Rapids Michigan events and provide an overall summary of what events are happening', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Imgix** - Image optimization and delivery

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the Grand Rapids Events bucket

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Event Summaries

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: summaries } = await cosmic.objects
  .find({ type: 'event-summaries' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Events by Category

```typescript
const { objects: events } = await cosmic.objects
  .find({ 
    type: 'events',
    'metadata.event_category.key': 'music'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Event

```typescript
const { object: event } = await cosmic.objects
  .findOne({
    type: 'events',
    slug: eventSlug
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application uses two main content types:

### Event Summaries
- **Summary Title** (text) - Title of the weekly summary
- **Summary Period** (text) - Time period covered (e.g., "This Week", "Weekend")
- **Summary Content** (html-textarea) - Rich HTML content with event highlights
- **Featured Events** (objects) - Connected events to highlight
- **Summary Image** (file) - Hero image for the summary

### Events
- **Event Title** (text) - Name of the event
- **Description** (html-textarea) - Event details
- **Event Date** (date) - When the event occurs
- **Location** (text) - Event venue/location
- **Event Image** (file) - Event photo
- **RSS Source URL** (text) - Original RSS feed source
- **Event Category** (select-dropdown) - Category: Music, Art & Culture, Food & Drink, Sports, Family, Other

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Add environment variables in Netlify dashboard
4. Set build command: `bun run build`
5. Set publish directory: `.next`
6. Deploy!

## 📝 License

MIT License - feel free to use this project for your own purposes.

<!-- README_END -->