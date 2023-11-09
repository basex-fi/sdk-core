import { WETH_ADDRESS } from "../addresses";

import { Currency } from "./currency";
import { NativeCurrency } from "./nativeCurrency";
import { Token } from "./token";

export class Ether extends NativeCurrency {
  public constructor() {
    super(18, "ETH", "Ether", "/icons/ETH.svg", "ethereum");
  }

  public get wrapped(): Token {
    const weth = new Token(
      WETH_ADDRESS,
      18,
      "WETH",
      "Wrapped Ether",
      "/icons/ETH.svg",
      "ethereum",
    );

    return weth;
  }

  public equals(other: Currency): boolean {
    return other.isNative;
  }
}
