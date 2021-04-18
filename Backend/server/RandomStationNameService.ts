import {
    ServerUnaryCall,
    sendUnaryData,
    ServiceError,
    ServerWritableStream,
    ServerReadableStream,
    handleClientStreamingCall,
    handleServerStreamingCall,
    handleUnaryCall,
} from "grpc";
import { IStationNamesGeneratorServer } from "../proto/itinerary_grpc_pb";
import { RandomStationNamesRequest, StationNamesResponse } from "../proto/itinerary_pb";

import axios from "axios";

function stationNamesToClass(namesArray: Array<string>) {
    const stationNames = new StationNamesResponse();
    namesArray.forEach(name => stationNames.addStationNames(name));
    return stationNames;
}

export class RandomStationNamesServer implements IStationNamesGeneratorServer {
    async getRandomStationNames(call: ServerUnaryCall<RandomStationNamesRequest>, callback: sendUnaryData<StationNamesResponse>) {
        const region = call.request.getRegion();
        const count = call.request.getCount();
        //TODO: Add variable validation
        let namesArray: Array<string> = [];
        while (namesArray.length < count) {
            await axios({
                method: 'POST',
                url: 'https://random.api.randomkey.io/v1/location',
                headers: {
                    auth: 'd2efd11d1a2fd0827aaf6b559a9401b9',
                    'Content-Type': 'application/json',
                },
                data: {
                    region: region,
                    records: count
                }
            })
                .then(function (response) {
                    namesArray.push(...response.data.location.map((l: any[]) => l[1]));
                    //Remove duplicates
                    namesArray = namesArray.filter((item, index) => namesArray.indexOf(item) === index);
                    namesArray = namesArray.slice(0, count);
                })
                .catch(function (err) {
                    callback(err, null);
                    return;
                })
        }

        callback(null, stationNamesToClass(namesArray))
    };
}