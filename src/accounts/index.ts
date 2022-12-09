import fetch from 'node-fetch';
import {
  AccountFundsResponse
} from './accounts';
import { Operations, AccountAPIResponse } from './accountsApi';
import { authenticate as _authenticate } from '../auth/index';
import { AuthParams } from '../auth/auth';

const BASE_URL = 'https://api.betfair.com/exchange/account/rest/v1.0';
const HEADERS = {
  Accept: 'application/json',
  'Content-type': 'application/json',
  'X-Application': '',
  'X-Authentication': '',
};

const accountsApi = async<T extends Operations>(operation: T): Promise<AccountAPIResponse<T>> => {
  const response = await fetch(`${BASE_URL}/${operation}/`, {
    method: 'GET',
    headers: HEADERS,
  });

  if (!response.ok) throw Error(`${response.status}: ${response.statusText}`);

  return response.json();
};

export const authenticate = async (params: AuthParams): Promise<void> => {
  HEADERS['X-Application'] = params.appKey;
  HEADERS['X-Authentication'] = await _authenticate(params);
};

export const getAccountFunds = async (): Promise<AccountFundsResponse> => accountsApi('getAccountFunds');

