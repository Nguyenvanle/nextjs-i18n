type User = {
  id: number;
  name: string;
};

type UserRes = {
  users: User[];
};

type UserDetailRes = User;

export { User, UserDetailRes, UserRes };
