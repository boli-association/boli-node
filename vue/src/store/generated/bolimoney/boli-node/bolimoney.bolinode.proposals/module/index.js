// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdatePoll } from "./types/proposals/tx";
import { MsgCreatePoll } from "./types/proposals/tx";
import { MsgDeletePoll } from "./types/proposals/tx";
const types = [
    ["/bolimoney.bolinode.proposals.MsgUpdatePoll", MsgUpdatePoll],
    ["/bolimoney.bolinode.proposals.MsgCreatePoll", MsgCreatePoll],
    ["/bolimoney.bolinode.proposals.MsgDeletePoll", MsgDeletePoll],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdatePoll: (data) => ({ typeUrl: "/bolimoney.bolinode.proposals.MsgUpdatePoll", value: MsgUpdatePoll.fromPartial(data) }),
        msgCreatePoll: (data) => ({ typeUrl: "/bolimoney.bolinode.proposals.MsgCreatePoll", value: MsgCreatePoll.fromPartial(data) }),
        msgDeletePoll: (data) => ({ typeUrl: "/bolimoney.bolinode.proposals.MsgDeletePoll", value: MsgDeletePoll.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
