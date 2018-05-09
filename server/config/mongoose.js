const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rate_my_cakes");
require("../models/cake");