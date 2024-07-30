import mongoose from "mongoose";

const ListSchema = new mongoose.Schema(
  {
    movie: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const MovieList = mongoose.model("MovieList", ListSchema);

export default MovieList;
