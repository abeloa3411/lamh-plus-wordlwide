import app from "./index.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;

dotenv.config();

connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Sever is on at port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
