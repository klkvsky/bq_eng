import { type SchemaTypeDefinition } from "sanity";
import { home } from "./home";
import { category } from "./category";
import { project } from "./project";
import { research } from "./research";
import { studio } from "./studio";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, category, project, research, studio],
};
