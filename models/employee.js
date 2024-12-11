const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Employees", {
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
  })
  .then(() => console.log("Connected to MongoDB successfully."))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));

const empSchema = new mongoose.Schema(
  {
    empName: String,
    empPass: String,
    created: { type: Date, default: Date.now() },
  },
  {
    collection: "FTEmployees",
  }
);

module.exports = mongoose.model("Employees", empSchema);
