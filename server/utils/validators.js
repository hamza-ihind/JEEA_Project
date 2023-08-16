module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") errors.username = "Username must not be empty";
  if (email.trim() === "") {
    errors.email = "email must not be empty";
  } else {
    const regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!email.match(regEx)) errors.email = "Email must be a valid email";
  }
  if (password === "") {
    errors.password = "Password must not be empty";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "passwords must match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
