import { defineType, defineField } from 'sanity'

export const studio = defineType({
  name: 'studioPage',
  title: 'Studio Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'contacts',
          title: 'Contacts',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Name' },
                { name: 'email', type: 'string', title: 'Email' },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'workDirections',
      title: 'Work Directions',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'directions',
          title: 'Directions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Name' },
                { name: 'details', type: 'array', of: [{ type: 'string' }], title: 'Details' },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'bottomImage',
      title: 'Bottom Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bottomDescription',
      title: 'Bottom Description',
      type: 'text',
    }),
    defineField({
      name: 'partnershipSection',
      title: 'Partnership Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'clientsSection',
      title: 'Clients Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'clients',
          title: 'Clients',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'partnersSection',
      title: 'Partners Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'partners',
          title: 'Partners',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
  ],
})