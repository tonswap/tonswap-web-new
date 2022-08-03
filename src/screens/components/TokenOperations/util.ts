import BN from "bn.js";
import * as API from "services/api";
import { ActionType } from "services/wallets/types";
import store from "store/store";

const getUsdAmount = async (tokenId: string, amount: string) => {
  try {
    const result = await API.getTokenDollarValue(tokenId, amount);

    return result;
  } catch (error) {
    console.log(error);

    return "0";
  }
};

const calculateTokens = async (
  tokenName: string,
  isTonToToken: boolean,
  srcAmount: null | BN,
  destAmount: null | BN,
  getAmountsFunc: any
) => {
  console.log(tokenName);
  
  if (srcAmount != null) {
    const amount = await getAmountsFunc(
      tokenName,
      isTonToToken,
      srcAmount,
      destAmount != null ? destAmount : null
    );

    return amount;
  } else if (destAmount != null) {
    const amount = await getAmountsFunc(
      tokenName,
      isTonToToken,
      srcAmount,
      destAmount.toString()
    );
    return amount;
  }
};



export { getUsdAmount, calculateTokens };
