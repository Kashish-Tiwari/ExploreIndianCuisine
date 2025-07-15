# Adapt Ready FSD Challenge

This is a **Full Stack Development Challenge** project for Adapt Ready (Chrysalis).  
It implements a complete **Indian Food Dishes** app using:
**Backend:** Node.js (Express), no database, CSV as the data source
**Frontend:** React + Tailwind CSS

---

 **Project Structure**

adapt-ready-fsd/
├── backend/
│ ├── controllers/
│ ├── data/
│ ├── routes/
│ ├── utils/
│ ├── server.js
│ ├── package.json
├── frontend/
│ ├── public/
│ ├── src/
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ ├── package.json


---

##  **Features**
 Backend:
- REST API to get all dishes  
- Get dish by name/ID  
- Suggest dishes based on available ingredients  
- Data read directly from a CSV (`indian_food.csv`) — no DB used
- Swagger UI (`/api-docs`) for OpenAPI 3.x spec

 Frontend:
- Built with React functional components + hooks
- Styled with Tailwind CSS
- Dishes list with pagination, filtering, sorting
- Dish detail page
- Header search with auto-suggest
- Ingredient-based dish suggester

---

## **How to run**

### **Clone the repo**
```bash
git clone https://github.com/YOUR-USERNAME/adapt-ready-fsd.git
cd adapt-ready-fsd

##Run the Backend-
cd backend
npm install
npm start / node server.js

(API runs at http://localhost:5000.
Swagger docs at http://localhost:5000/api-docs.)


## Run the Frontend-
Open new terminal
cd frontend
npm install
npm start

Frontend runs at http://localhost:3000.

*****API Endpoints******
| Method | Endpoint              | Description                     |
| ------ | --------------------- | ------------------------------- |
| GET    | `/api/dishes`         | Get all dishes                  |
| GET    | `/api/dishes/:id`     | Get dish by name or ID          |
| POST   | `/api/dishes/suggest` | Suggest dishes from ingredients |
| GET    | `/api-docs`           | Swagger OpenAPI docs            |


CSV as Data Source-
1. The backend loads indian_food.csv at startup.
2. No database is used.
3. All dish info is served from CSV in-memory.

Tech Stack-
1. Node.js
2. Express
3. React
4. Tailwind CSS
5. Axios
6. Swagger (OpenAPI 3.x)

Notes-
1. node_modules/ is not tracked — install with npm install.
2. Runs locally with no cloud DB or deployment.
3. Optional features (login, TypeScript, browser storage, Fluent UI) are not implemented as per instructions.

