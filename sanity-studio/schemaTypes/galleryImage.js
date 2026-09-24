export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title / caption',
      type: 'string',
      description: 'Short label shown as the image tag on the website.',
      validation: Rule => Rule.required().max(60)
    },
    {
      name: 'category',
      title: 'Event category',
      type: 'string',
      description: 'Controls which filter tab this image appears under.',
      options: {
        list: [
          { title: 'Weddings & Celebrations', value: 'wedding' },
          { title: 'Corporate & Startups',    value: 'corporate' },
          { title: 'Creators & Shoots',       value: 'creator' },
          { title: 'Community & Culture',     value: 'community' },
          { title: 'Wellness',                value: 'wellness' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Describe the photo for screen readers and SEO.',
      validation: Rule => Rule.required().max(120)
    },
    {
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 10
    }
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
    prepare({ title, subtitle, media }) {
      const labels = {
        wedding: 'Weddings', corporate: 'Corporate',
        creator: 'Creators', community: 'Community', wellness: 'Wellness'
      };
      return { title, subtitle: labels[subtitle] || subtitle, media };
    }
  }
}