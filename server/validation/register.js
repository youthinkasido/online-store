const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateSignUp(data) {
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  if (!Validator.isLength(data.password, { min: 8, max: 32 })) {
    return {
      isValid: false,
      message: "Password must be within 8 to 32 characters"
    };
  }

  if (Validator.isEmpty(data.email)) {
    return {
      isValid: false,
      message: `Email can't be blank`
    };
  }

  if (Validator.isEmpty(data.password)) {
    return {
      isValid: false,
      message: "Password field is required"
    };
  }

  if (!Validator.isEmail(data.email)) {
    return {
      isValid: false,
      message: "Email is invalid"
    };
  }

  return {
    message: "",
    isValid: true
  };
};
