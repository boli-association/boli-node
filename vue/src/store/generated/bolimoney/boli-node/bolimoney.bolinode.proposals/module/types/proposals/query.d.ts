import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../proposals/params";
import { Poll } from "../proposals/poll";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Vote } from "../proposals/vote";
export declare const protobufPackage = "bolimoney.bolinode.proposals";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetPollRequest {
    id: number;
}
export interface QueryGetPollResponse {
    Poll: Poll | undefined;
}
export interface QueryAllPollRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPollResponse {
    Poll: Poll[];
    pagination: PageResponse | undefined;
}
export interface QueryGetVoteRequest {
    id: number;
}
export interface QueryGetVoteResponse {
    Vote: Vote | undefined;
}
export interface QueryAllVoteRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllVoteResponse {
    Vote: Vote[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetPollRequest: {
    encode(message: QueryGetPollRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPollRequest;
    fromJSON(object: any): QueryGetPollRequest;
    toJSON(message: QueryGetPollRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPollRequest>): QueryGetPollRequest;
};
export declare const QueryGetPollResponse: {
    encode(message: QueryGetPollResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPollResponse;
    fromJSON(object: any): QueryGetPollResponse;
    toJSON(message: QueryGetPollResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPollResponse>): QueryGetPollResponse;
};
export declare const QueryAllPollRequest: {
    encode(message: QueryAllPollRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPollRequest;
    fromJSON(object: any): QueryAllPollRequest;
    toJSON(message: QueryAllPollRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPollRequest>): QueryAllPollRequest;
};
export declare const QueryAllPollResponse: {
    encode(message: QueryAllPollResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPollResponse;
    fromJSON(object: any): QueryAllPollResponse;
    toJSON(message: QueryAllPollResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPollResponse>): QueryAllPollResponse;
};
export declare const QueryGetVoteRequest: {
    encode(message: QueryGetVoteRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetVoteRequest;
    fromJSON(object: any): QueryGetVoteRequest;
    toJSON(message: QueryGetVoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetVoteRequest>): QueryGetVoteRequest;
};
export declare const QueryGetVoteResponse: {
    encode(message: QueryGetVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetVoteResponse;
    fromJSON(object: any): QueryGetVoteResponse;
    toJSON(message: QueryGetVoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetVoteResponse>): QueryGetVoteResponse;
};
export declare const QueryAllVoteRequest: {
    encode(message: QueryAllVoteRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllVoteRequest;
    fromJSON(object: any): QueryAllVoteRequest;
    toJSON(message: QueryAllVoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllVoteRequest>): QueryAllVoteRequest;
};
export declare const QueryAllVoteResponse: {
    encode(message: QueryAllVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllVoteResponse;
    fromJSON(object: any): QueryAllVoteResponse;
    toJSON(message: QueryAllVoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllVoteResponse>): QueryAllVoteResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a poll by id. */
    Poll(request: QueryGetPollRequest): Promise<QueryGetPollResponse>;
    /** Queries a list of poll items. */
    PollAll(request: QueryAllPollRequest): Promise<QueryAllPollResponse>;
    /** Queries a vote by id. */
    Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
    /** Queries a list of vote items. */
    VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Poll(request: QueryGetPollRequest): Promise<QueryGetPollResponse>;
    PollAll(request: QueryAllPollRequest): Promise<QueryAllPollResponse>;
    Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
    VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
