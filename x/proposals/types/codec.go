package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreatePoll{}, "proposals/CreatePoll", nil)
	cdc.RegisterConcrete(&MsgUpdatePoll{}, "proposals/UpdatePoll", nil)
	cdc.RegisterConcrete(&MsgDeletePoll{}, "proposals/DeletePoll", nil)
	cdc.RegisterConcrete(&MsgCreateVote{}, "proposals/CreateVote", nil)
	cdc.RegisterConcrete(&MsgUpdateVote{}, "proposals/UpdateVote", nil)
	cdc.RegisterConcrete(&MsgDeleteVote{}, "proposals/DeleteVote", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePoll{},
		&MsgUpdatePoll{},
		&MsgDeletePoll{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateVote{},
		&MsgUpdateVote{},
		&MsgDeleteVote{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
