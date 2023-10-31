import models from '../models/models.js';

class CarRepository {

    async insertMany(modelsList) {
        try {
            await models.deleteMany();
            const results = await models.insertMany(modelsList);
            return results;
        } catch (e) {
            return [];
        }
    }

    async findAll() {
        try {
            const results = await models.aggregate([
                { $group: { _id: "$brand_name", id: { $first: "$id" }, promedio: { $avg: "$average_price" } } },
                { $project: { _id: 0, id: 1, nombre: '$_id', average_price: '$promedio' } }
            ]);
            return results;
        } catch (e) {
            return [];
        }
    }
    async findByBrand(brandName) {
        try {
            const results = await models.aggregate([
                { $match: { brand_name: { $regex: brandName, $options: 'i' } } },
                { $project: { _id: 0, id: 1, name: 1, average_price: 1 } }
            ]);
            return results;
        } catch (e) {
            return [];
        }
    }
    createBrand(brand) {

    }

}

export default new CarRepository();