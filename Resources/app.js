var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.todo = Alloy.createCollection("todo");

if ("production" !== Ti.App.deployType) {
    var db = Ti.Database.open("_alloy_");
    db.execute("DELETE FROM todo");
    db.close();
    Alloy.Collections.todo.reset();
}

Alloy.createController("index");