import { defineType, defineField } from "sanity";

export const position = defineType({
  name: "position",
  title: "Position",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
  ],
});
