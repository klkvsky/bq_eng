import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
      readOnly: true,
      hidden: true,
      initialValue: () => crypto.randomUUID(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        defineField({
          name: "alignment",
          title: "Image Alignment",
          type: "string",
          options: {
            list: [
              { title: "Left", value: "left" },
              { title: "Right", value: "right" },
            ],
          },
          initialValue: "left",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "cols",
      title: "Columns",
      type: "number",
      initialValue: 8,
      validation: (Rule) => Rule.required().min(6).max(8),
    }),
    defineField({
      name: "projectCodeName",
      title: "Project Code Name",
      type: "string",
    }),
    defineField({
      name: "secondImage",
      title: "Second Image",
      type: "image",
      hidden: ({ parent }) => parent?.image?.alignment !== "right",
    }),
    defineField({
      name: "secondCodeName",
      title: "Second Code Name",
      type: "string",
      hidden: ({ parent }) => parent?.image?.alignment !== "right",
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "type",
              title: "Content Type",
              type: "string",
              options: {
                list: [
                  { title: "Text", value: "text" },
                  { title: "Image", value: "image" },
                  { title: "Video", value: "video" },
                ],
              },
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "text",
              hidden: ({ parent }) => parent?.type !== "text",
            }),
            defineField({
              name: "textPosition",
              title: "Text Position",
              type: "string",
              options: { list: ["left", "right"] },
              hidden: ({ parent }) => parent?.type !== "text",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              hidden: ({ parent }) => parent?.type !== "image",
            }),
            defineField({
              name: "imagePosition",
              title: "Image Position",
              type: "string",
              options: { list: ["center", "right", "left", "full"] },
              hidden: ({ parent }) => parent?.type !== "image",
            }),
            defineField({
              name: "secondaryImage",
              title: "Secondary Image",
              type: "image",
              hidden: ({ parent }) =>
                parent?.type !== "image" || parent?.imagePosition !== "full",
            }),
            defineField({
              name: "videoUrl",
              title: "Video URL",
              type: "url",
              hidden: ({ parent }) => parent?.type !== "video",
            }),
            defineField({
              name: "videoThumbnail",
              title: "Video Thumbnail",
              type: "image",
              hidden: ({ parent }) => parent?.type !== "video",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "projectLabels",
      title: "Project Labels",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "value", type: "string", title: "Value" },
          ],
        },
      ],
    }),
    defineField({
      name: "connectedResearch",
      title: "Connected Research",
      type: "reference",
      to: [{ type: "article" }],
    }),
    defineField({
      name: "relatedProjects",
      title: "Related Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    }),
  ],
});
