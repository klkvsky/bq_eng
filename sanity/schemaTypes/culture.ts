import { defineType, defineField } from "sanity";

export const culture = defineType({
  name: "culturePage",
  title: "Culture Page",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "text",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
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
                  { title: "Columns", value: "columns" },
                  { title: "Team Block", value: "teamBlock" },
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
              name: "imageCaption",
              title: "Image Caption",
              type: "text",
              hidden: ({ parent }) => parent?.type !== "image",
            }),
            defineField({
              name: "teamBlock",
              title: "Team Block",
              type: "object",
              hidden: ({ parent }) => parent?.type !== "teamBlock",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
                defineField({
                  name: "teamMembers",
                  title: "Team Members",
                  type: "array",
                  of: [{ type: "teamMember" }],
                  validation: (Rule) => Rule.max(4),
                }),
              ],
            }),
            defineField({
              name: "columns",
              title: "Columns",
              type: "object",
              hidden: ({ parent }) => parent?.type !== "columns",
              fields: [
                defineField({
                  name: "width",
                  title: "Width",
                  type: "string",
                  options: {
                    list: [
                      { title: "Full", value: "full" },
                      { title: "Short", value: "short" },
                    ],
                  },
                }),
                defineField({
                  name: "columnContent",
                  title: "Column Content",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        defineField({
                          name: "title",
                          title: "Title",
                          type: "string",
                        }),
                        defineField({
                          name: "items",
                          title: "Items",
                          type: "array",
                          of: [
                            {
                              type: "object",
                              fields: [
                                defineField({
                                  name: "type",
                                  title: "Item Type",
                                  type: "string",
                                  options: {
                                    list: [
                                      { title: "Regular", value: "regular" },
                                      { title: "Email", value: "email" },
                                    ],
                                  },
                                  initialValue: "regular",
                                }),
                                defineField({
                                  name: "text",
                                  title: "Text",
                                  type: "text",
                                }),
                                defineField({
                                  name: "email",
                                  title: "Email",
                                  type: "string",
                                  hidden: ({ parent }) =>
                                    parent?.type !== "email",
                                }),
                              ],
                            },
                          ],
                        }),
                      ],
                    },
                  ],
                }),
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "relatedArticles",
      title: "Related Articles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "article" }] }]
    }),
  ],
});
