import { type SchemaTypeDefinition } from "sanity";
import { home } from "./home";
import { category } from "./category";
import { project } from "./project";
import { studio } from "./studio";
import { culture } from "./culture";
import { teamMember } from "./team";
import { article } from "./article";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    category,
    project,
    studio,
    culture,
    teamMember,
    article,
  ],
};
