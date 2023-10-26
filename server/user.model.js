import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const User = model("User", UserSchema);
UserSchema.methods = {
  showName: () => {
    console.log("This is the name of the user!");
  },
  hello: () => {
    console.log("Hello Mongoose!!!");
  },
};

export default User;
