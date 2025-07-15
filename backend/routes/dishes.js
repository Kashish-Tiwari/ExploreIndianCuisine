// const express = require('express');
// const router = express.Router();
// const {
//   getAllDishes,
//   getDishById,
//   suggestDishes
// } = require('../controllers/dishesController');

// router.get('/', getAllDishes);
// router.get('/:id', getDishById);
// router.post('/suggest', suggestDishes);

// module.exports = router;

const express = require('express');
const router = express.Router();
const {
  getAllDishes,
  getDishById,
  suggestDishes
} = require('../controllers/dishesController');

/**
 * @swagger
 * /api/dishes:
 *   get:
 *     summary: Get all dishes
 *     description: Retrieve a list of all Indian dishes.
 *     responses:
 *       200:
 *         description: A list of dishes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   ingredients:
 *                     type: string
 *                   diet:
 *                     type: string
 */
router.get('/', getAllDishes);

/**
 * @swagger
 * /api/dishes/{id}:
 *   get:
 *     summary: Get a dish by ID or name
 *     description: Retrieve details for a specific dish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Dish name or ID
 *     responses:
 *       200:
 *         description: Dish details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 ingredients:
 *                   type: string
 *                 diet:
 *                   type: string
 *       404:
 *         description: Dish not found.
 */
router.get('/:id', getDishById);

/**
 * @swagger
 * /api/dishes/suggest:
 *   post:
 *     summary: Suggest dishes from ingredients
 *     description: Returns possible dishes using provided ingredients.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: List of suggested dishes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   ingredients:
 *                     type: string
 *                   diet:
 *                     type: string
 */
router.post('/suggest', suggestDishes);

module.exports = router;

