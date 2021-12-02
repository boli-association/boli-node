package keeper

import (
	"github.com/bolimoney/boli-node/x/proposals/types"
)

var _ types.QueryServer = Keeper{}
