/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_978724246")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1232983604",
    "maxSelect": 1,
    "name": "categorie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "pain",
      "viennoiserie",
      "patisserie"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_978724246")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1232983604",
    "maxSelect": 1,
    "name": "categorie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "pain",
      "viennoiserie",
      "patisseries"
    ]
  }))

  return app.save(collection)
})
