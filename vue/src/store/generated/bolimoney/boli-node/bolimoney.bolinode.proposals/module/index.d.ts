import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteVote } from "./types/proposals/tx";
import { MsgCreateVote } from "./types/proposals/tx";
import { MsgDeletePoll } from "./types/proposals/tx";
import { MsgUpdateVote } from "./types/proposals/tx";
import { MsgCreatePoll } from "./types/proposals/tx";
import { MsgUpdatePoll } from "./types/proposals/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgDeleteVote: (data: MsgDeleteVote) => EncodeObject;
    msgCreateVote: (data: MsgCreateVote) => EncodeObject;
    msgDeletePoll: (data: MsgDeletePoll) => EncodeObject;
    msgUpdateVote: (data: MsgUpdateVote) => EncodeObject;
    msgCreatePoll: (data: MsgCreatePoll) => EncodeObject;
    msgUpdatePoll: (data: MsgUpdatePoll) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
