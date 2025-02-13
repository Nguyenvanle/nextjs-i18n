import { mergeQueryKeys } from "@lukemorales/query-key-factory";

import { users } from "~/queries/users.query";

export const queries = mergeQueryKeys(users);
