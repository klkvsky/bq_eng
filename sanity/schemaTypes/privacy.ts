import { defineField, defineType } from "sanity";

export const privacy = defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  fields: [
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
                  { title: "Title", value: "title" },
                  { title: "Text", value: "text" },
                  { title: "List", value: "list" },
                ],
              },
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              hidden: ({ parent }) => parent?.type !== "title",
            }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
              hidden: ({ parent }) => parent?.type !== "title",
            }),
            defineField({
              name: "textTitle",
              title: "Text Title",
              type: "string",
              hidden: ({ parent }) => parent?.type !== "text",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "text",
              hidden: ({ parent }) => parent?.type !== "text",
            }),
            defineField({
              name: "listTitle",
              title: "List Title",
              type: "string",
              hidden: ({ parent }) => parent?.type !== "list",
            }),
            defineField({
              name: "list",
              title: "List",
              type: "array",
              of: [{ type: "string" }],
              hidden: ({ parent }) => parent?.type !== "list",
            }),
            defineField({
              name: "pretext",
              title: "Pretext",
              type: "text",
              hidden: ({ parent }) => parent?.type !== "list",
            }),
            defineField({
              name: "posttext",
              title: "Posttext",
              type: "text",
              hidden: ({ parent }) => parent?.type !== "list",
            }),
          ],
        },
      ],
    }),
  ],
});
