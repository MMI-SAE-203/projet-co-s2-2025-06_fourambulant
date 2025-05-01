/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3257366919")

  // remove field
  collection.fields.removeById("editor3848597695")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select3848597695",
    "maxSelect": 1,
    "name": "statut",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "en préparation",
      "en cours de livéson",
      "livré"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3257366919")

  // add field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3848597695",
    "maxSize": 0,
    "name": "statut",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // remove field
  collection.fields.removeById("select3848597695")

  return app.save(collection)
})
