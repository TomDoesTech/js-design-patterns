function createUserController({ userService, name }) {
  const user = userService.createUser({ name });

  return {
    user,
  };
}

module.exports = { createUserController };
