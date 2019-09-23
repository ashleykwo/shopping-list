const express = require('express');
const router = express.Router();

const Item = require('../models/Items');

// GET all items
router.get('/', (req, res) => {
  Item.find()
    .sort({ date : -1 })
    .then(items => res.json(items));
});

// POST
router.post('/', (req, res) => {
  const newItem = new Item({
    name : req.body.name
  });

  newItem.save().then(item => res.json({ success : true }));
});

// DELETE
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json(items)))
    .catch(err => res.status(404).json({ success : false }));
});

module.exports = router;