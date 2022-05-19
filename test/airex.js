const { expect } = require("chai");
const { assert } = require("hardhat");

const {BN, constants, expectEvent, expectRevert} = require('@openzeppelin/test-helpers');
const { soliditySha3 } = require("web3-utils");

const AirEx = artifacts.require("AirEx");

let accounts;
let airEx;
let owner;

// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe("AirEx Contract", function () {

        before(async function() {
                accounts = await web3.eth.getAccounts();
                owner = accounts[0];
                airEx = await AirEx.new("Augmented Interactive Reality Experiences", "AIREX", "Augmented Interactive Reality Experiences by MyriadFlow", "ipfs://myIPFShash", "ipfs://QmbZdmmorDaHQnh2b37yaq2ehjEEymP4nj3N7rMrhzvrER/", 137);
        });

        it("Should return the right name and symbol of the token once AirEx is deployed", async function() {
                assert.equal(await airEx.name(), "Augmented Interactive Reality Experiences");
                assert.equal(await airEx.symbol(), "AIREX");
        });

});