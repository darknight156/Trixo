import Trixo from "./structures/Client.js";
import TrixoConfig from "./setting/Config.js";
const Config = new TrixoConfig();
const client = new Trixo();
client.start();
// import { AutoPoster } from "topgg-autoposter";
// const autoposter = AutoPoster(Config.voteApi, client);
// autoposter.on("posted", (stats) => {
//   client.logger.log(`Posted Stats to TopGG`);
// })
export default client;
["unhandledRejection", "uncaughtException"].forEach((x) => {
    process.on(x, (e) => console.error(e));
});
//# sourceMappingURL=oras.js.map
