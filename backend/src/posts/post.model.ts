import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      require: true,
      unique: true,
    },
    title: {
      type: String,
      require: true,
      unique: true,
    },

    description: {
      type: String,
      require: true,
    },

    actors: {
      type: Array,
      require: true,
    },

    photo: {
      type: String,
      require: false,
    },

    categories: {
      type: Array,
      require: true,
    },

    imdbRate: {
      type: Number,
      require: false,
    },
  },
  { timestamps: true, versionKey: false, collection: 'film' },
);

PostSchema.index({ title: 'text' });
