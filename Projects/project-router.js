const express = require('express');
const router = express.Router();
const shortid = require("shortid");

router.use(express.json());

let projects = [
    {
        id: shortid.generate(),
        "title": "Paint House",
        "description": "Get the house painted!"
    },
    {
        id: shortid.generate(),
        "title": "Keep Savvy",
        "description": "Open Source Project"
    }
];

router.get("/", async (req, res) => {
try {
    res.status(200).json(projects);
    } catch(error) {
        console.error(error)
    }
});

router.post("/", async (req, res) => {
   try {
       if(req.body.title && req.body.description) {
           const freshProject = {
               id: shortid.generate(),
               title: req.body.title,
               description: req.body.description
           };

           projects.push(freshProject);

           res.status(201).send(`You have successfully added a new project called ${req.body.title}`);
       }
   } catch (error) {

   }
});

module.exports = router;