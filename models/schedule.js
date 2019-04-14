const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ScheduleSchema = new Schema(
  {
    id: Number,
    name: String,
    telephone: Number,
    email: String,
    begin_date: Date,
    end_date: Date
  }
);

module.exports = mongoose.model("Schedule", ScheduleSchema);