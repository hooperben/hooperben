import { ethers } from "hardhat";
import { toUtf8String } from "ethers";

describe("Testing shitposting", async () => {
  before(async () => {
    const [Signer] = await ethers.getSigners();

    const factory = await ethers.getContractFactory(
      "WhateverThisTwitterThingIs"
    );

    const deployed = await factory.deploy();

    const contractAddress = await deployed.getAddress();

    const data = await Signer.provider.getStorage(contractAddress, 13);

    console.log(data);

    const value = toUtf8String("0x" + data.substring(2).replace(/^0+/, ""));

    console.log(value);
  });

  it.only("should run");
});
