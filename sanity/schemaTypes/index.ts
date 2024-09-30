import { type SchemaTypeDefinition } from "sanity";
import { home } from "./home";
import { category } from "./homeCategory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, category],
};
