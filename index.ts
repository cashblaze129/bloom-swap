import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  TOKEN_2022_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
  Connection,
  PublicKey,
  SystemProgram,
  TransactionInstruction,
} from "@solana/web3.js";
import { encode } from "@coral-xyz/anchor/dist/cjs/utils/bytes/utf8.js";

const BLOOM_PROGRAM_ID = new PublicKey("b1oomGGqPKGD6errbyfbVMBuzSC8WtAAYo8MwNafWW1");
const BLOOM_FEE_RECEIPMENT = new PublicKey("7HeD6sLLqAnKVRuSfc1Ko3BSPMNKWgGTiWLKXJF31vKM");
const GLOBAL_VOLUME_ACCUMULATOR = new PublicKey("Hq2wp8uJ9jCPsYgNHex8RtqdvMPfVGoYwjvF1ATiwn2Y");
const FEE_PROGRAM_ID = new PublicKey("pfeeUxB6jkeY1Hxd7CsFCAjcbHA9rWtchMGdZ6VojVZ");
const PUMP_FUN_FEE_RECIPIENT = new PublicKey("CebN5WGQ4jvEPvsVU4EoHEpgzq1VV7AbicfhtW4xC9iM");
const PUMP_FUN_PROGRAM_ID = new PublicKey("6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P");
const EVENT_AUTHORITY = new PublicKey("Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1");
const PUMPFUN_GLOBAL = new PublicKey("4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf");

const seed1 = Buffer.from("fee_config");
const seed2 = Buffer.from([
  1, 86, 224, 246, 147, 102, 90, 207, 68, 219, 21, 104, 191, 23, 91, 170, 81, 137,
  203, 151, 245, 210, 255, 59, 101, 93, 43, 182, 253, 109, 24, 176,
]);
const [FEE_CONFIG_PDA] = PublicKey.findProgramAddressSync(
  [seed1, seed2],
  FEE_PROGRAM_ID
);

function getBondingCurve(mint: PublicKey, programId: PublicKey) {
  const [pda] = PublicKey.findProgramAddressSync(
    [encode("bonding-curve"), mint.toBuffer()],
    programId
  );
  return pda;
}

// ✅ Corrected function
export const getBloomInstruction = async (
  connection: Connection,
  creatorPublicKey: PublicKey,
  userPublicKey: PublicKey,
  mintPubkey: PublicKey,
  solAmount: number,
  ataCreation: boolean = false
) => {
  const instructions: TransactionInstruction[] = [];

  return instructions;
};


const executeTransactions = async () => {
  console.log("======================= Start ======================")
  console.log("Main wallet: ", mainKp.publicKey.toBase58())
  console.log("Mint address of token ", mintAddress.toBase58())

  const mintPubkey = new PublicKey("EEa3mSRmtxMmiFMaszxHDMC83bKCUqaUkS6FCcx7pump")
  const creatorPublicKey = new PublicKey("HFmrVjJhWcyWnMrcDuXtXCP7VsZndiRmeJQikUrVyVrZ")

  const instructions: TransactionInstruction[] = [];

  const bloomInstruction: any = await getBloomInstruction(connection, creatorPublicKey, mainKp.publicKey, mintPubkey, 0.00001 * LAMPORTS_PER_SOL, true)

  instructions.push(...bloomInstruction)

  const bloomTx = new VersionedTransaction(
    new TransactionMessage({
      payerKey: mainKp.publicKey,
      recentBlockhash: (await connection.getLatestBlockhash()).blockhash,
      instructions: instructions
    }).compileToV0Message([LookupTableAccount1])
  )
  bloomTx.sign([mainKp])
  // console.log(Buffer.from(bloomTx.message.compiledInstructions[4].data).toString('hex'));
  // const simulationResult = await connection.simulateTransaction(bloomTx)
  // console.log(simulationResult)
  const sig = await connection.sendRawTransaction(bloomTx.serialize())
  console.log(`Transaction sent: https://solscan.io/tx/${sig}`)
  return;
}

executeTransactions();