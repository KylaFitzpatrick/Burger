var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")
// Create all our routes and set up logic within those routes where required.
router.get("/", async function(req, res) {

    let burgersResponse = await burger.selectAll()
        if (burgersResponse instanceof Error) {
            res.json({
                message: "There was an error sending the request"
            })
        } else {
            res.render("index", {
               burgers: burgersResponse 
            })
            console.log(burgersResponse)
        }
        
    });
   
  
  router.post("/api/burgers", async function(req, res) {

    let burgersResponse = await burger.insertOne([
        "burger_name"
      ], [
        req.body.burger_name
      ]
      , function(result) {
        // Send back the ID 
        res.json({ id: result.insertId })
      })

        if (burgersResponse instanceof Error) {
            res.json({
                message: "There was an error sending the request"
            })
        } else {
            res.render("index", {
               burgers: burgersResponse 
            })
            console.log(burgersResponse)
        }
  });
  
  router.put("/api/burgers/:id", async function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);

    let burgersResponse = await burger.updateOne({
        devoured: true
      }, condition, function(result) {
        res.json(result) 
      })
      if (burgersResponse instanceof Error) {
        res.json({
            message: "There was an error sending the request"
        })
    } else {
        res.render("index", {
           burgers: burgersResponse 
        })
        console.log(burgersResponse)
    }
  });
// Export routes for server.js to use.
module.exports = router;