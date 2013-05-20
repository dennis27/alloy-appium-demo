var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            item: "text",
            done: "integer",
            date_completed: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "todo"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (value) {
                        if ("item" === key && 0 >= value.length) return "Error: No item!";
                        if ("done" === key && 0 >= value.length) return "Error: No completed flag!";
                    }
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(todo) {
                return todo.get("done");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("todo", exports.definition, [ function(migration) {
    migration.name = "todo";
    migration.id = "201209301904312";
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                item: "text",
                done: "integer",
                date_completed: "text"
            }
        });
    };
    migration.down = function(migrator) {
        migrator.dropTable("todo");
    };
} ]);

collection = Alloy.C("todo", exports.definition, model);

exports.Model = model;

exports.Collection = collection;