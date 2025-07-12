import express from "express";
import { join, __dirname } from "./utils/index.js";
import userRoutes from "./routes/user.route.js";
import productRoutes from "./routes/product.route.js";
import cors from 'cors';

//settings
const app = express();
app.set("PORT", 5000);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cors());



//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
// app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
//app.use("/api/products/:id", productRoutes   => esto está mal, va en ruote 

app.use((req,res,next)=>{
  res.status(404).send('Recurso no encontrado');
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
