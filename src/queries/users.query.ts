import { createQueryKeys } from "@lukemorales/query-key-factory";

import { userService } from "~/services";

const users = createQueryKeys("users", {
  all: null,
  detail: (userId: string) => ({
    queryKey: [userId],
    queryFn: () => userService.getUser(userId),
  }),
});

export { users };
