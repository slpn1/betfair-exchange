/* eslint-disable no-use-before-define */

/* //////////// Account Type Definitions /////////
https://docs.developer.betfair.com/display/1smk3cen4v3lu3yomq5qye0ni/Accounts+TypeDefinitions#AccountsTypeDefinitions-AccountFundsResponse
///////////////////////////////////////// */

// Provide more context for consumers of wrapper
type int = number;
type double = number;
//type long = number;

export type AccountFundsResponse = {
  availableToBetBalance: double;
  exposure: double;
  retainedCommission: double;
  exposureLimit: double;
  discountRate: double;
  pointsBalance: int;
}

