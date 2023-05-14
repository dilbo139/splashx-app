// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

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
  let contract: any;
  if (req.method === "POST") {
    try {
      const { contractName, primarySaleRecipient, metadata } = req.body;
      deployedAddress = await deployContract(contractName, primarySaleRecipient);
      contract = await getContract(deployedAddress, "nft-drop");

      // upload video IPFS URI + metadata to db
      const user = await prisma.user.findUnique({
        where: { walletAddress: primarySaleRecipient }
      }) as User

      const upsertVideo = await prisma.video.upsert({
        where: { url: metadata.animation_url },
        update: {},
        create: {
          title: metadata.name,
          description: metadata.description,
          url: metadata.animation_url,
          metadata: metadata,
          thumbnail: metadata.image,
          userId: user.id,
          contractAddress: deployedAddress
        },
      })

      return res.status(200).json({ message: deployedAddress });

    } catch (err: unknown) {
      return res.status(500).json({ message: err });
    }
  }
  return res.setHeader("Allow", ["POST"]).status(405).end(`Method ${req.method} Not Allowed`);
}