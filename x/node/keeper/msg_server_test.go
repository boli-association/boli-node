package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/bolimoney/boli-node/testutil/keeper"
	"github.com/bolimoney/boli-node/x/node/keeper"
	"github.com/bolimoney/boli-node/x/node/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NodeKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
