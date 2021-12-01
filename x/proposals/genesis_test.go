package proposals_test

import (
	"testing"

	keepertest "github.com/bolimoney/boli-node/testutil/keeper"
	"github.com/bolimoney/boli-node/testutil/nullify"
	"github.com/bolimoney/boli-node/x/proposals"
	"github.com/bolimoney/boli-node/x/proposals/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		PollList: []types.Poll{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PollCount: 2,
		VoteList: []types.Vote{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		VoteCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ProposalsKeeper(t)
	proposals.InitGenesis(ctx, *k, genesisState)
	got := proposals.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.PollList, got.PollList)
	require.Equal(t, genesisState.PollCount, got.PollCount)
	require.ElementsMatch(t, genesisState.VoteList, got.VoteList)
	require.Equal(t, genesisState.VoteCount, got.VoteCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
