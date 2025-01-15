import app from "./app";

const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello asd!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
