const { default: mongoose } = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    id: Number,
    title: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
