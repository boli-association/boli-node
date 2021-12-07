package keeper

import (
	"github.com/bolimoney/boli-node/x/node/types"
)

var _ types.QueryServer = Keeper{}
