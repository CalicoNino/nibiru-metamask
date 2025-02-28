"use client";

import { useMetamask } from "@/hooks/useMetamask";

export default function ConnectButton() {
  const { account, connectWallet, switchToNibiru } = useMetamask();

  return (
    <div>
      {account ? (
        <button
          onClick={switchToNibiru}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Switch to Nibiru
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Connect MetaMask
        </button>
      )}

      {account && <p className="mt-2">Connected: {account}</p>}
    </div>
  );
}
