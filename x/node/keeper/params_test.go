package keeper_test

import (
	"testing"

	testkeeper "github.com/bolimoney/boli-node/testutil/keeper"
	"github.com/bolimoney/boli-node/x/node/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.NodeKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
