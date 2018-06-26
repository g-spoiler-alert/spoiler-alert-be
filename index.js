const app = require("./app");
const port = parseInt(process.env.PORT || 8080);

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));