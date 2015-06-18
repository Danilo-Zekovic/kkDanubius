var mongoose = require('mongoose');

// Create the MovieSchema.
var CoachSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  awards: {
    type: String,
    required: true
  }
});

// Export the model schema.
module.exports = CoachSchema;
