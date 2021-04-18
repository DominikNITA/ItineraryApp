// package: itinerary
// file: itinerary.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RandomStationNamesRequest extends jspb.Message { 
    getCount(): number;
    setCount(value: number): RandomStationNamesRequest;
    getRegion(): string;
    setRegion(value: string): RandomStationNamesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RandomStationNamesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RandomStationNamesRequest): RandomStationNamesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RandomStationNamesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RandomStationNamesRequest;
    static deserializeBinaryFromReader(message: RandomStationNamesRequest, reader: jspb.BinaryReader): RandomStationNamesRequest;
}

export namespace RandomStationNamesRequest {
    export type AsObject = {
        count: number,
        region: string,
    }
}

export class StationNamesResponse extends jspb.Message { 
    clearStationNamesList(): void;
    getStationNamesList(): Array<string>;
    setStationNamesList(value: Array<string>): StationNamesResponse;
    addStationNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StationNamesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StationNamesResponse): StationNamesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StationNamesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StationNamesResponse;
    static deserializeBinaryFromReader(message: StationNamesResponse, reader: jspb.BinaryReader): StationNamesResponse;
}

export namespace StationNamesResponse {
    export type AsObject = {
        stationNamesList: Array<string>,
    }
}

export class LineProto extends jspb.Message { 
    getId(): number;
    setId(value: number): LineProto;
    getNumber(): number;
    setNumber(value: number): LineProto;

    hasStationObjects(): boolean;
    clearStationObjects(): void;
    getStationObjects(): StationProtos | undefined;
    setStationObjects(value?: StationProtos): LineProto;

    hasStationIds(): boolean;
    clearStationIds(): void;
    getStationIds(): IdProtos | undefined;
    setStationIds(value?: IdProtos): LineProto;

    getLinesCase(): LineProto.LinesCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LineProto.AsObject;
    static toObject(includeInstance: boolean, msg: LineProto): LineProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LineProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LineProto;
    static deserializeBinaryFromReader(message: LineProto, reader: jspb.BinaryReader): LineProto;
}

export namespace LineProto {
    export type AsObject = {
        id: number,
        number: number,
        stationObjects?: StationProtos.AsObject,
        stationIds?: IdProtos.AsObject,
    }

    export enum LinesCase {
        LINES_NOT_SET = 0,
        STATION_OBJECTS = 3,
        STATION_IDS = 4,
    }

}

export class LineProtos extends jspb.Message { 
    clearLinesList(): void;
    getLinesList(): Array<LineProto>;
    setLinesList(value: Array<LineProto>): LineProtos;
    addLines(value?: LineProto, index?: number): LineProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LineProtos.AsObject;
    static toObject(includeInstance: boolean, msg: LineProtos): LineProtos.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LineProtos, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LineProtos;
    static deserializeBinaryFromReader(message: LineProtos, reader: jspb.BinaryReader): LineProtos;
}

export namespace LineProtos {
    export type AsObject = {
        linesList: Array<LineProto.AsObject>,
    }
}

export class StationProtos extends jspb.Message { 
    clearStationsList(): void;
    getStationsList(): Array<StationProto>;
    setStationsList(value: Array<StationProto>): StationProtos;
    addStations(value?: StationProto, index?: number): StationProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StationProtos.AsObject;
    static toObject(includeInstance: boolean, msg: StationProtos): StationProtos.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StationProtos, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StationProtos;
    static deserializeBinaryFromReader(message: StationProtos, reader: jspb.BinaryReader): StationProtos;
}

export namespace StationProtos {
    export type AsObject = {
        stationsList: Array<StationProto.AsObject>,
    }
}

export class StationProto extends jspb.Message { 
    getId(): number;
    setId(value: number): StationProto;
    getName(): string;
    setName(value: string): StationProto;

    hasLineObjects(): boolean;
    clearLineObjects(): void;
    getLineObjects(): LineProtos | undefined;
    setLineObjects(value?: LineProtos): StationProto;

    hasLineIds(): boolean;
    clearLineIds(): void;
    getLineIds(): IdProtos | undefined;
    setLineIds(value?: IdProtos): StationProto;

    getLinesCase(): StationProto.LinesCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StationProto.AsObject;
    static toObject(includeInstance: boolean, msg: StationProto): StationProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StationProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StationProto;
    static deserializeBinaryFromReader(message: StationProto, reader: jspb.BinaryReader): StationProto;
}

export namespace StationProto {
    export type AsObject = {
        id: number,
        name: string,
        lineObjects?: LineProtos.AsObject,
        lineIds?: IdProtos.AsObject,
    }

    export enum LinesCase {
        LINES_NOT_SET = 0,
        LINE_OBJECTS = 3,
        LINE_IDS = 4,
    }

}

export class IdProtos extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<number>;
    setIdsList(value: Array<number>): IdProtos;
    addIds(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdProtos.AsObject;
    static toObject(includeInstance: boolean, msg: IdProtos): IdProtos.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdProtos, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdProtos;
    static deserializeBinaryFromReader(message: IdProtos, reader: jspb.BinaryReader): IdProtos;
}

export namespace IdProtos {
    export type AsObject = {
        idsList: Array<number>,
    }
}
