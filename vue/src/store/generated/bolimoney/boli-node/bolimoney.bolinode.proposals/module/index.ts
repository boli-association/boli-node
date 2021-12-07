// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteVote } from "./types/proposals/tx";
import { MsgCreateVote } from "./types/proposals/tx";
import { MsgDeletePoll } from "./types/proposals/tx";
import { MsgUpdateVote } from "./types/proposals/tx";
import { MsgCreatePoll } from "./types/proposals/tx";
import { MsgUpdatePoll } from "./types/proposals/tx";


const types = [
  ["/bolimoney.bolinode.proposals.MsgDeleteVote", MsgDeleteVote],
  ["/bolimoney.bolinode.proposals.MsgCreateVote", MsgCreateVote],
  ["/bolimoney.bolinode.proposals.MsgDeletePoll", MsgDeletePoll],
  ["/bolimoney.bolinode.proposals.MsgUpdateVote", MsgUpdateVote],
  ["/bolimoney.bolinode.proposals.MsgCreatePoll", MsgCreatePoll],
  ["/bolimoney.bolinode.proposals.MsgUpdatePoll", MsgUpdatePoll],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeleteVote: (data: MsgDeleteVote): EncodeObject => ({ typeUrl: "/bolimoney.bolinode.proposals.MsgDeleteVote", value: MsgDeleteVote.fromPartial( data ) }),
    msgCreateVote: (data: MsgCreateVote): EncodeObject => ({ typeUrl: "/bolimoney.bolinode.proposals.MsgCreateVote", value: MsgCreateVote.fromPartial( data ) }),
    msgDeletePoll: (data: MsgDeletePoll): EncodeObject => ({ typeUrl: "/bolimoney.bolinode.proposals.MsgDeletePoll", value: MsgDeletePoll.fromPartial( data ) }),
    msgUpdateVote: (data: MsgUpdateVote): EncodeObject => ({ typeUrl: "/bolimoney.bolinode.proposals.MsgUpdateVote", value: MsgUpdateVote.fromPartial( data ) }),
    msgCreatePoll: (data: MsgCreatePoll): EncodeObject => ({ typeUrl: "/bolimoney.bolinode.proposals.MsgCreatePoll", value: MsgCreatePoll.fromPartial( data ) }),
    msgUpdatePoll: (data: MsgUpdatePoll): EncodeObject => ({ typeUrl: "/bolimoney.bolinode.proposals.MsgUpdatePoll", value: MsgUpdatePoll.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
