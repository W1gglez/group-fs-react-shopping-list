const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', function (req, res) {
  console.log('In GET route');
  const query = 'SELECT * FROM "inventory";';
  pool
    .query(query)
    .then((results) => {
      console.log(results);
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('Error making GET', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const newItem = req.body;
  const sqlText = `INSERT INTO "inventory" (name, quantity, unit) 
    VALUES ($1, $2, $3)`;
  pool
    .query(sqlText, [newItem.name, newItem.quantity, newItem.unit])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.delete('/:id', function (req, res) {
  console.log('In DELETE route');
  const itemId = req.params.id;
  const query = `DELETE FROM "inventory" WHERE "id" = $1;`;
  pool
    .query(query, [itemId])
    .then((results) => {
      console.log('Deleting item');
      res
        .status(200)
        .json({ message: `Item with ID '${itemId}' deleted successfully.` });
    })
    .catch((error) => {
      console.log('Error making DELETE request', error);
      res.sendStatus(500);
    });
});

router.delete('/', function (req, res) {
  console.log('In DELETE route');
  const query = `DELETE FROM "inventory";`;
  pool
    .query(query)
    .then((results) => {
      console.log('Deleting Shopping List');
      res
        .status(200)
        .json({ message: `Shopping List deleted successfully.` });
    })
    .catch((error) => {
      console.log('Error making DELETE request', error);
      res.sendStatus(500);
    });
});
// router.put('/:id', (req, res) => {
//     const itemId = req.params.id;
//     let queryText = 'UPDATE inventory SET "" =  WHERE ID = $1;';
//     pool.query(queryText, [itemId]).then(result => {
//       res.send(result.rows);
//     })
//     .catch(error => {
//       console.log('Error updating inventory', error);
//       res.sendStatus(500);
//     });
//   });
module.exports = router;
