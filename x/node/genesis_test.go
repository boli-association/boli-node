package node_test

import (
	"testing"

	keepertest "github.com/bolimoney/boli-node/testutil/keeper"
	"github.com/bolimoney/boli-node/testutil/nullify"
	"github.com/bolimoney/boli-node/x/node"
	"github.com/bolimoney/boli-node/x/node/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NodeKeeper(t)
	node.InitGenesis(ctx, *k, genesisState)
	got := node.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	// this line is used by starport scaffolding # genesis/test/assert
}
