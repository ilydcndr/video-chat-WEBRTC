const cors = require("cors");
const app = require("express")();
const server = require("http").createServer(app);

app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin:"*",
    methods: ["GET", "POST"]
  }
})

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send('Server is running');
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

