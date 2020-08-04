const express = require('express');

module.exports.createAPI = (resourceName, db) => {

  let lastId = db.get(resourceName).last().value().id;

  const router = express.Router();

  router.route(`/${resourceName}`)
    .get((req, res) => {

      const resources = db.get(resourceName).value();
      res.json(resources);

    })
    .post((req, res) => {

      const newResource = {
        ...req.body,
        id: ++lastId,
      };

      db
        .get(resourceName)
        .push(newResource)
        .write()
        .then(() => {
          res.status(201).json(newResource);
        });

    });

  router.route(`/${resourceName}/:resourceId`)
    .get((req, res) => {

      const resource = db.get(resourceName)
        .find({ id: Number(req.params.resourceId) }).value();
      res.json(resource);

    })
    .put((req, res) => {

      const resourceId = Number(req.params.resourceId);

      db
        .get(resourceName)
        .remove({ id: resourceId })
        .write()
        .then(() => {

          return db
            .get(resourceName)
            .push({
              ...req.body,
              id: resourceId
            })
            .write()
            .then(() => {
              res.sendStatus(204);
            });

        });

    })
    .delete((req, res) => {

      const resourceId = Number(req.params.resourceId);

      if (isNaN(resourceId)) {
        res.sendStatus(400);
        return;
      }

      db
        .get(resourceName)
        .remove({ id: resourceId })
        .write()
        .then(() => {
          res.sendStatus(204);
        });

    });

  return router;


};