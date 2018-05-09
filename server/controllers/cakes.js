const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");
function buildQueryHandler(res) {
    return function(err, result) {
        if(err) {
            res.json({
                message: "Error",
                error: err
            });
        }
        else {
            res.json({
                message: "Success",
                data: result
            });
        }
    }
}
module.exports = {
    showAll: function(req, res) {
        Cake.find({}, buildQueryHandler(res));
    },
    showOne: function(req, res) {
        Cake.findById(req.params.id, buildQueryHandler(res));
    },
    create: function(req, res) {
        Cake.create(req.body, buildQueryHandler(res));
    },
    update: function(req, res) {
        Cake.update({_id: req.params.id}, req.body, buildQueryHandler(res));
    },
    destroy: function(req, res) {
        Cake.deleteOne({_id: req.params.id}, buildQueryHandler(res));
    },
    rate: function(req, res) {
        Cake.findById(req.params.id, function(err, cake){
            if(err) {
                res.json({
                    message: "Error",
                    error: err
                });
            }
            else {
                cake.ratings.push(req.body);
                cake.save(buildQueryHandler(res));
            }
        });
    }
}