const { expect } = require("@jest/globals");
const { createUserController } = require("./simple");

describe("update user controller", () => {
  it("should update user", () => {
    const userService = {
      users: [],

      createUser: jest.fn(({ name }) => {
        return {
          id: 1,
          name,
        };
      }),
    };

    const user = createUserController({ userService, name: "John" });
    createUserController({ userService, name: "Mark" });

    expect(user).toEqual({ user: { id: 1, name: "John" } });

    expect(userService.createUser).toHaveBeenNthCalledWith(1, {
      name: "John",
    });
    expect(userService.createUser).toHaveBeenNthCalledWith(2, {
      name: "Mark",
    });
  });
});
