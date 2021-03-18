const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll((burgers) => {
      console.log(burgers);
      res.render('index', { burgers: burgers });
    });
  });
  
  //insertOne
  router.post('/api/burgers', (req, res) => {
    burger.insertOne({ burger_name: req.body.name },
      (result) => {
        
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  
  router.put('/api/burgers/:id', (req, res) => {


    burger.updateOne(req.body, req.params.id, results => {
      if (results.affectedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
  });

    // const condition = `id = ${req.params.id}`;
    // console.log("condition", condition);

    // burger.updateOne(
    //   {
    //     devoured: req.body.devoured,
    //   },
    //   condition,
    //   (result) => {
    //     if (result.changedRows === 0) {
    //       // If no rows were changed, then the ID must not exist, so 404
    //       return res.status(404).end();
    //     }
    //     res.status(200).end();
    //   }
    // );
  });

  
    

  
  //delete a burger - 
  // router.delete('/api/burgers/:id', (req, res) => {
  //   connection.query('DELETE FROM burgers WHERE id = ?',
  //     [req.param.id],
  //     (err, result) => {
  //       if(err) {
  //         return res.status(500).end();
  //       }
  //       if (result.affectedRows === 0) {
  //         return res.status(404).end();
  //       }
  //       res.status(200).end();
        
  //     }  
  //   );
  // });


// Export routes for server.js to use.
module.exports = router;