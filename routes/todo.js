const router = require('express').Router();
const Todo = require("../models/Todo");

//routes

router
    .post("/add/todo", (req, res) => {
        const { todo } = req.body;
        const newTodo = new Todo({ todo });

        // save task
        newTodo
            .save()
            .then(() => {
                console.log("Task Added Successfully!");
                res.redirect("/");
            })
            .catch((err) => console.log(err));
    })

.post("/check/todo", (req, res) => {
    const checkedToDoId = req.body.checkbox;

    Todo.findById(checkedToDoId, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Checked successfully");
            res.redirect("/");
        }
    });
})

.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
        .then(() => {
            console.log("Task Deleted Successfully!");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
});

module.exports = router;