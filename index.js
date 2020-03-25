
require('dotenv').config();
const server = require("./server");

const port = process.env.PORT;
// make the server listen to requests
server.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}/`);
});