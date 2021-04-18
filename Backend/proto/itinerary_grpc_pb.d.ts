// package: itinerary
// file: itinerary.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as itinerary_pb from "./itinerary_pb";

interface IStationNamesGeneratorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getRandomStationNames: IStationNamesGeneratorService_IGetRandomStationNames;
}

interface IStationNamesGeneratorService_IGetRandomStationNames extends grpc.MethodDefinition<itinerary_pb.RandomStationNamesRequest, itinerary_pb.StationNamesResponse> {
    path: "/itinerary.StationNamesGenerator/GetRandomStationNames";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<itinerary_pb.RandomStationNamesRequest>;
    requestDeserialize: grpc.deserialize<itinerary_pb.RandomStationNamesRequest>;
    responseSerialize: grpc.serialize<itinerary_pb.StationNamesResponse>;
    responseDeserialize: grpc.deserialize<itinerary_pb.StationNamesResponse>;
}

export const StationNamesGeneratorService: IStationNamesGeneratorService;

export interface IStationNamesGeneratorServer {
    getRandomStationNames: grpc.handleUnaryCall<itinerary_pb.RandomStationNamesRequest, itinerary_pb.StationNamesResponse>;
}

export interface IStationNamesGeneratorClient {
    getRandomStationNames(request: itinerary_pb.RandomStationNamesRequest, callback: (error: grpc.ServiceError | null, response: itinerary_pb.StationNamesResponse) => void): grpc.ClientUnaryCall;
    getRandomStationNames(request: itinerary_pb.RandomStationNamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: itinerary_pb.StationNamesResponse) => void): grpc.ClientUnaryCall;
    getRandomStationNames(request: itinerary_pb.RandomStationNamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: itinerary_pb.StationNamesResponse) => void): grpc.ClientUnaryCall;
}

export class StationNamesGeneratorClient extends grpc.Client implements IStationNamesGeneratorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getRandomStationNames(request: itinerary_pb.RandomStationNamesRequest, callback: (error: grpc.ServiceError | null, response: itinerary_pb.StationNamesResponse) => void): grpc.ClientUnaryCall;
    public getRandomStationNames(request: itinerary_pb.RandomStationNamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: itinerary_pb.StationNamesResponse) => void): grpc.ClientUnaryCall;
    public getRandomStationNames(request: itinerary_pb.RandomStationNamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: itinerary_pb.StationNamesResponse) => void): grpc.ClientUnaryCall;
}
