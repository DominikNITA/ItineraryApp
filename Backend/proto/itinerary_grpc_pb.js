// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var itinerary_pb = require('./itinerary_pb.js');

function serialize_itinerary_RandomStationNamesRequest(arg) {
  if (!(arg instanceof itinerary_pb.RandomStationNamesRequest)) {
    throw new Error('Expected argument of type itinerary.RandomStationNamesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_itinerary_RandomStationNamesRequest(buffer_arg) {
  return itinerary_pb.RandomStationNamesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_itinerary_StationNamesResponse(arg) {
  if (!(arg instanceof itinerary_pb.StationNamesResponse)) {
    throw new Error('Expected argument of type itinerary.StationNamesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_itinerary_StationNamesResponse(buffer_arg) {
  return itinerary_pb.StationNamesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StationNamesGeneratorService = exports.StationNamesGeneratorService = {
  getRandomStationNames: {
    path: '/itinerary.StationNamesGenerator/GetRandomStationNames',
    requestStream: false,
    responseStream: false,
    requestType: itinerary_pb.RandomStationNamesRequest,
    responseType: itinerary_pb.StationNamesResponse,
    requestSerialize: serialize_itinerary_RandomStationNamesRequest,
    requestDeserialize: deserialize_itinerary_RandomStationNamesRequest,
    responseSerialize: serialize_itinerary_StationNamesResponse,
    responseDeserialize: deserialize_itinerary_StationNamesResponse,
  },
};

exports.StationNamesGeneratorClient = grpc.makeGenericClientConstructor(StationNamesGeneratorService);
