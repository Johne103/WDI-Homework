const mongoose = require("mongoose");
const bcrypt   = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username:     { type: String, unique: true, required: true },
  email:        { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true }
});

function setPassword(value){
  this._password    = value;
  this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}

function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
}

function validatePasswordHash() {
  if (this.isNew) {
    if (!this._password) {
      return this.invalidate("password", "A password is required.");
    }

    if (this._password !== this._passwordConfirmation) {
      return this.invalidate("passwordConfirmation", "Passwords do not match.");
    }
  }
}

function validateEmail(email) {
  if (validator.isEmail(email)){
    return this.invalidate('email','must be valid email address');
  }
}

function validatePassword(password){
  return bcrypt.compareSync(password, this.passwordHash);
}

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    var returnJson = {
      _id: ret._id,
      username: ret.username
    };
    return returnJson;
  }
});

userSchema
  .virtual('password')
  .set(setPassword);

userSchema
  .virtual("passwordConfirmation")
  .set(setPasswordConfirmation);

userSchema
  .path("passwordHash")
  .validate(validatePasswordHash);

userSchema.methods.validatePassword = validatePassword;

module.exports = mongoose.model("User", userSchema);
