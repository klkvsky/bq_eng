import { defineType, defineField } from 'sanity'

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "type",
              title: "Type",
              type: "string",
              options: { list: ["left", "right"] },
            }),
            defineField({ name: "mainImage", title: "Main Image", type: "image" }),
            defineField({
              name: "secondaryImage",
              title: "Secondary Image",
              type: "image",
            }),
            defineField({ name: "text", title: "Text", type: "string" }),
            defineField({
              name: "secondaryText",
              title: "Secondary Text",
              type: "string",
            }),
            defineField({ name: "cols", title: "Columns", type: "number" }),
            defineField({
              name: "category",
              title: "Category",
              type: "reference",
              to: [{ type: "category" }],
            }),
          ],
        },
      ],
    }),
  ],
})