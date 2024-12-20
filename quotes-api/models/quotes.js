// Schema and Model of the API ------------

import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const Quote = mongoose.model("Quote", quoteSchema);
export default Quote;
