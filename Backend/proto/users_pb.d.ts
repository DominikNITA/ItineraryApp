// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class User extends jspb.Message { 
    getId(): number;
    setId(value: number): User;
    getName(): string;
    setName(value: string): User;
    getAge(): number;
    setAge(value: number): User;
    getStatus(): UserStatus;
    setStatus(value: UserStatus): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: number,
        name: string,
        age: number,
        status: UserStatus,
    }
}

export class UserRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRequest;
    static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
    export type AsObject = {
        id: number,
    }
}

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

export class StationNames extends jspb.Message { 
    clearNameList(): void;
    getNameList(): Array<string>;
    setNameList(value: Array<string>): StationNames;
    addName(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StationNames.AsObject;
    static toObject(includeInstance: boolean, msg: StationNames): StationNames.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StationNames, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StationNames;
    static deserializeBinaryFromReader(message: StationNames, reader: jspb.BinaryReader): StationNames;
}

export namespace StationNames {
    export type AsObject = {
        nameList: Array<string>,
    }
}

export enum UserStatus {
    UNKNOWN = 0,
    OFFLINE = 1,
    BUSY = 2,
    AVAILABLE = 3,
}
