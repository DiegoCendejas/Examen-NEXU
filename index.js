import express from "express";
import cors from "cors";
import carController from "./src/controllers/car.controller.js";
const app = express();
import mongoose from "mongoose";

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/NEXU_TEST');


app.get("/brands", carController.listBrands);

app.get("/brands/:id/models", carController.listModelsByBrand);

app.post("/brands", carController.createBrand);

app.post("/brands/:id/models", carController.createModel);

app.put("/models/:id", carController.updateModel);

app.get("/models", carController.listAll);

app.post("/populate-db", carController.populateDb);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
