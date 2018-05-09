const mongoose = require("mongoose");
var RatingSchema = mongoose.Schema({
    rating: {type: Number, required: true, minimum: 1, maximum: 5},
    comment: {type: String, required: false}
});
var CakeSchema = mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    ratings: [RatingSchema]
}, {timestamps: true});
mongoose.model("Cake", CakeSchema);