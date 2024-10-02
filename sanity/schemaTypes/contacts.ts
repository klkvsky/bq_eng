import { defineType, defineField } from "sanity";

export const contacts = defineType({
  name: "contactsPage",
  title: "Contacts Page",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "text",
    }),
    defineField({
      name: "columns",
      title: "Columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Column Title",
              type: "string",
            }),
            defineField({
              name: "items",
              title: "Column Items",
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
                          { title: "Link", value: "link" },
                        ],
                      },
                    }),
                    defineField({
                      name: "text",
                      title: "Text",
                      type: "string",
                    }),
                    defineField({
                      name: "email",
                      title: "Email",
                      type: "string",
                      hidden: ({ parent }) => parent?.type !== "email",
                    }),
                    defineField({
                      name: "link",
                      title: "Link",
                      type: "url",
                      hidden: ({ parent }) => parent?.type !== "link",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
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
  ],
});
