import { Server, ServerCredentials } from "grpc";
import { UsersService, RandomStationNamesService } from "../proto/users_grpc_pb";
import { UsersServer } from "./services";
import { RandomStationNamesServer } from "./RandomStationNameService"

const server = new Server();
server.addService(UsersService, new UsersServer());
server.addService(RandomStationNamesService, new RandomStationNamesServer());


const port = 3000;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());

server.start();