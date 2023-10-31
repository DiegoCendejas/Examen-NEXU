import carService from "../services/car.service.js";
import cars from "../datasource/models.json" assert { type: "json" };

class CarController {

    async populateDb(req, res, next) {
        try {
            const result = await carService.insertMany(cars);
            if (!result || result.length < 1) {
                res.status(500).send({ status: "Error", message: "Errror populating db" });
            }
            res.status(200).send({ status: "Success", message: "DB successfully populated" });
        } catch (e) {
            res.status(500).send({ status: "Error", message: "Internal server error" });
        }
    }

    async listBrands(req, res, next) {
        try {
            const cars = await carService.findAll();
            res.status(200).send(cars);
        } catch (e) {
            res.status(500).send({ status: "Error", message: "Internal server error" });
        }
    }

    async listModelsByBrand(req, res, next) {
        try {
            const { id: brandName } = req.params;
            if (!brandName) {
                res.status(400).send({ status: "Error", message: "Bad request" })
            }
            const cars = await carService.findByBrand(brandName);
            res.status(200).send(cars);
        } catch (e) {
            res.status(500).send({ status: "Error", message: "Internal server error" });
        }
    }

    async createBrand(req, res, next) {
        try {
            const { carObj } = req.body;
            
        } catch (e) {
            res.status(500).send({ status: "Error", message: "Internal server error" });
        }
    }

    async createModel(req, res, next) { }

    async updateModel(req, res, next) { }

    async listAll(req, res, next) {

    }
}

export default new CarController();
