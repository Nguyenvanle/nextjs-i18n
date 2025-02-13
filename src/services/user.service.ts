import { UserDetailRes, UserRes } from "~/types";

import { apiClient, mock } from "~/libs";

mock.onGet("/users").reply(200, {
  users: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ],
});

mock.onGet("/users/:id").reply((config) => {
  const { id } = config.params;
  const user = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ].find((user) => user.id === parseInt(id));
  return [200, user];
});

const userService = {
  getUsers: () => apiClient.get<UserRes>("/users"),
  getUser: (id: string) => apiClient.get<UserDetailRes>(`/users/${id}`),
};

export { userService };
