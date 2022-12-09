import {
    AccountFundsResponse
} from "./accounts";

export type Operations =
    | 'getAccountFunds'

export type AccountAPIResponse<T extends Operations> =
    T extends 'getAccountFunds' ? AccountFundsResponse : never
