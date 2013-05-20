Alloy.Collections.todo = Alloy.createCollection('todo');

if (Ti.App.deployType !== "production") {
  var db = Ti.Database.open('_alloy_');
  db.execute('DELETE FROM todo');
  db.close();
  Alloy.Collections.todo.reset();
}
