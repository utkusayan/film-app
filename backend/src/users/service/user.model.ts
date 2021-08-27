import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
      unique: true,
    },

    email: {
      type: String,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },

    role: {
      type: Array,
      require: true,
    },
  },
  { timestamps: true, versionKey: false, collection: 'user' },
);
