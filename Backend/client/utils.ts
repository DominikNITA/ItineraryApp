import { UsersClient, RandomStationNamesClient } from "../proto/users_grpc_pb";
import { credentials } from "grpc";

const port = 3000;

export const client = new UsersClient(
    `localhost:${port}`,
    credentials.createInsecure()
);

export const clientStations = new RandomStationNamesClient(
    `localhost:${port}`,
    credentials.createInsecure()
);

export const noop = () => { };