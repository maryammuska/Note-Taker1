const router = require("express").Router();
const uuid = require("uuid");
const fs = require("fs");

// GET Route

router.get("/notes", (req, res) => {
    let data = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(data));
})

router.post("/notes", (req, res) => {
    let db = JSON.parse(fs.readFileSync("./db/db.json"));
    let addDb = req.body;
    addDb.id = uuid.v4();
    db.push(addDb);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);
});

router.delete("/notes/:id", (req, res) => {
    let db = JSON.parse(fs.readFileSync("./db/db.json"));
    let deleteDb = db.filter((item) => item.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(deleteDb));

    res.json(deleteDb);
});

module.exports = router;