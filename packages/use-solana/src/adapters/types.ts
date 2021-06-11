import { PublicKey, Transaction } from "@solana/web3.js";

export const DEFAULT_PUBLIC_KEY = new PublicKey(
  "11111111111111111111111111111111"
);

export interface WalletAdapter<Connected extends boolean = boolean> {
  publicKey: Connected extends true ? PublicKey : null;
  autoApprove: boolean;
  connected: Connected;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transaction: Transaction[]) => Promise<Transaction[]>;
  connect: () => Promise<void>;
  disconnect: () => void;
  on(event: string, fn: () => void): this;
}

export type ConnectedWallet = WalletAdapter<true>;

export type WalletAdapterConstructor = new (
  providerUrl: string,
  endpoint: string
) => WalletAdapter;