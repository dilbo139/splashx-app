// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

type Data = {};

const sdk = ThirdwebSDK.fromPrivateKey(
  process.env.P_KEY!, // Your wallet's private key (only required for write operations)
  "mumbai"
);

async function deployContract(contractName: string, primarySaleRecipient: string) {
  const deployedAddress = await sdk.deployer.deployEditionDrop({
    name: contractName,
    primary_sale_recipient: primarySaleRecipient,
  });
  return deployedAddress;
}

async function getContract(address: string, thirdwebContractType: string) {
  const contract = await sdk.getContract(address, thirdwebContractType)
  return contract;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Deploy contract
  let deployedAddress: string;
  if (req.method === "POST") {
    const { contractName, primarySaleRecipient } = req.body;
    deployedAddress = await deployContract(contractName, primarySaleRecipient);

    // create metadata and upload to IPFS


    return res.status(200).json({ message: deployedAddress });
  }


}