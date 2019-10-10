import net from "net";
import util from "util";
import Debug from "debug";
const debug = Debug("app");

export default class Net {
  constructor() {}

  open() {
    this.port = 3100;

    this.server = net
      .createServer(socket => {
        debug("<<< client connected");

        socket.on("data", data => {
          socket.write(data);
        });

        socket.on("close", () => {
          debug(">>> client closed");
        });

        socket.on("error", error => {
          debug(`# error: ${error.message}`);
        });
      })
      .listen(this.port, () => {
        debug(`Server is listening: ${JSON.stringify(this.server.address())}`);
      });
  }

  close() {}
}
