import { defineType, defineField } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
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
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["digest", "gallery", "press-release", "research"],
      },
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      initialValue: () => new Date().toLocaleDateString("ru-RU"),
      hidden: ({ parent }) => parent?.date,
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      hidden: ({ parent }) => parent?.type !== "press-release",
    }),
    defineField({
      name: "pressReleaseCategory",
      title: "Press Release Category",
      type: "string",
      options: {
        list: ["magazines", "bq"],
      },
      hidden: ({ parent }) => parent?.type !== "press-release",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      hidden: ({ parent }) => parent?.type !== "research",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      hidden: ({ parent }) => parent?.type === "research",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      hidden: ({ parent }) => parent?.type !== "research",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      hidden: ({ parent }) => parent?.type === "research",
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
                  { title: "Quote", value: "quote" },
                  { title: "List", value: "list" },
                ],
              },
            }),
            defineField({
              name: "textTitle",
              title: "Text Title",
              type: "string",
              hidden: ({ parent }) => parent?.type !== "text",
            }),
            defineField({
              name: "textSubtitle",
              title: "Text Subtitle",
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
              name: "image",
              title: "Image",
              type: "image",
              hidden: ({ parent }) => parent?.type !== "image",
            }),
            defineField({
              name: "imagePosition",
              title: "Image Position",
              type: "string",
              options: { list: ["right", "left", "full"] },
              hidden: ({ parent }) => parent?.type !== "image",
            }),
            defineField({
              name: "imageCaption",
              title: "Image Caption",
              type: "string",
              hidden: ({ parent }) => parent?.type !== "image",
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
            defineField({
              name: "quote",
              title: "Quote",
              type: "text",
              hidden: ({ parent }) => parent?.type !== "quote",
            }),
            defineField({
              name: "quoteAuthor",
              title: "Quote Author",
              type: "string",
              hidden: ({ parent }) => parent?.type !== "quote",
            }),
            defineField({
              name: "quoteAuthorPosition",
              title: "Quote Author Position",
              type: "string",
              hidden: ({ parent }) => parent?.type !== "quote",
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
          ],
        },
      ],
    }),
    defineField({
      name: "relatedArticles",
      title: "Related Articles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "article" }] }],
      hidden: ({ parent }) => parent?.type === "research",
    }),
  ],
});
