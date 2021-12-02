package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/bolimoney/boli-node/testutil/keeper"
	"github.com/bolimoney/boli-node/x/proposals/keeper"
	"github.com/bolimoney/boli-node/x/proposals/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ProposalsKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
