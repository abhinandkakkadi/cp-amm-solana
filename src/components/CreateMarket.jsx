
import { PublicKey} from "@solana/web3.js";
import { useState } from "react";
import { initSdk } from "./config/config";
import { USDCMint } from "@raydium-io/raydium-sdk-v2";

export const createMarket = async (mintAddress, decimal) => {
  const raydium = await initSdk();
  const customMint = new PublicKey(mintAddress);

  try {
    const { execute, extInfo, transactions } = await raydium.marketV2.create({
      baseInfo: {
        mint: customMint,
        decimals: 9,
      },
      quoteInfo: {
        mint: USDCMint,
        decimals: decimal,
      },
      lotSize: 1,
      tickSize: 0.01,
      dexProgramId: OPEN_BOOK_PROGRAM,
      txVersion,
    });

    const txIds = await execute({
      sequentially: true,
    });

    process.exit();
  } catch (error) {
    console.log("create market txIds:", txIds);
    return;
  }
};

export function CreateMarketWithWSOL() {
  const [address, setMintAddress] = useState("");
  const [decimal, setDecimal] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex gap-4">
          <input
            className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            type="text"
            placeholder="Mint Address"
            value={address}
            onChange={(e) => setMintAddress(e.target.value)}
          />
          <input
            className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            type="text"
            placeholder="Decimal"
            value={decimal}
            onChange={(e) => setDecimal(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => createMarket(address, decimal)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Create CP Liquidity Pool
        </button>
      </div>
    </div>
  );
}
