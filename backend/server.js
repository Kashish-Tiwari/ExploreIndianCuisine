// const express = require('express');
// const cors = require('cors');
// const dishesRouter = require('./routes/dishes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/dishes', dishesRouter);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const cors = require('cors');
const dishesRouter = require('./routes/dishes');

// ✅ NEW: Swagger stuff
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Swagger config
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Indian Food API',
      version: '1.0.0',
      description: 'API for Indian dishes using CSV data',
    },
  },
  apis: ['./routes/*.js'], // 👈 tells swagger-jsdoc where to find your JSDoc comments!
};
const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// ✅ Your API routes
app.use('/api/dishes', dishesRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
