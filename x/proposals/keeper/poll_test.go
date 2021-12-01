package keeper_test

import (
	"testing"

	keepertest "github.com/bolimoney/boli-node/testutil/keeper"
	"github.com/bolimoney/boli-node/testutil/nullify"
	"github.com/bolimoney/boli-node/x/proposals/keeper"
	"github.com/bolimoney/boli-node/x/proposals/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNPoll(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Poll {
	items := make([]types.Poll, n)
	for i := range items {
		items[i].Id = keeper.AppendPoll(ctx, items[i])
	}
	return items
}

func TestPollGet(t *testing.T) {
	keeper, ctx := keepertest.ProposalsKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetPoll(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestPollRemove(t *testing.T) {
	keeper, ctx := keepertest.ProposalsKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePoll(ctx, item.Id)
		_, found := keeper.GetPoll(ctx, item.Id)
		require.False(t, found)
	}
}

func TestPollGetAll(t *testing.T) {
	keeper, ctx := keepertest.ProposalsKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPoll(ctx)),
	)
}

func TestPollCount(t *testing.T) {
	keeper, ctx := keepertest.ProposalsKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetPollCount(ctx))
}
