import app from "./app";
import { pool } from "./database/db.database";

const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello asd!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

pool.getConnection((err, connection) => {
  if (err) return console.error("error connecting: " + err.stack);
  console.log("Database connection ready!");
});
