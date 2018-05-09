const cakes = require("../controllers/cakes");
module.exports = function(app) {
    app.get("/cakes", cakes.showAll);
    app.get("/cakes/:id", cakes.showOne);
    app.post("/cakes", cakes.create);
    app.patch("/cakes/:id", cakes.update);
    app.delete("/cakes/:id", cakes.destroy);
    app.post("/cakes/:id/rate", cakes.rate);
}