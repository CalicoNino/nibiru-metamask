import ConnectButton from "@/components/ConnectButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Nibiru EVM + MetaMask</h1>
      <ConnectButton />
    </main>
  );
}
