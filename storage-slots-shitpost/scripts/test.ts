import { toUtf8String } from "ethers";
import { ethers } from "hardhat";

async function main() {
  const [Signer] = await ethers.getSigners();

  const contractAddress = "0x3B65369B71EB672a00DCEAc9A8A7194B5E43B42b";

  const data = await Signer.provider.getStorage(contractAddress, 13);

  console.log(data);

  const humanValue = toUtf8String("0x" + data.substring(2).replace(/^0+/, ""));

  console.log(humanValue);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
