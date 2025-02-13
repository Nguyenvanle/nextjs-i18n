import { useQuery } from "@tanstack/react-query";

import { userService } from "~/services";

import { queries } from "~/queries";

function useUser() {
  const { data } = useQuery({
    ...queries.users.all,
    queryFn: () => userService.getUsers(),
  });

  return data?.users;
}

export { useUser };
