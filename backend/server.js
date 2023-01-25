const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const { Schema } = mongoose;

const FlowersSchema = new Schema(
    {
        url: {
            type: String,
            required: [true, "Please enter product url!"]
        },
        name: {
            type: String,
            required: [true, "Please enter product name!"]
        },
        price: {
            type: String,
            required: [true, "Please enter product price!"]
        },
    },
    { timestamps: true }
);
const Flowers = mongoose.model("flowers", FlowersSchema);

//get all products
app.get("/flowers", (req, res) => {
    Flowers.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.status(500).json({ message: err });
        }
    })
})

//add product
app.post("/flowers", (req, res) => {
    const newFlowers = new Flowers({
        name: req.body.name,
        price: req.body.price,
        url: req.body.url
    })
    // console.log(data);
    // let flower = new Flowers(data);
    newFlowers.save();
    res.send({ message: "Successfully" });
});

//delete product
app.delete("/flowers/:id", (req, res) => {
    const { id } = req.params;
    Flowers.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("Successfully deleted");
        } else {
            res.status(500).json({ message: err });
        }
    });
});

mongoose.set('strictQuery', false);

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(DB, (err) => {
    if (!err) {
        console.log("DB connected");
    }
});
app.listen(PORT, () => {
    console.log(`APP is up and running ${PORT}`);
});