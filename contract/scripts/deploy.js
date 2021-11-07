async function main() {

    const [deployer] = await ethers.getSigners();
    
    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Hasher = await ethers.getContractFactory("Hasher");
    const hasher = await Hasher.deploy();

    console.log("Hasher address:", hasher.address);

    const Verifier = await ethers.getContractFactory("Verifier");
    const verifier = await Verifier.deploy();

    console.log("Verifier address:", verifier.address);

    const HidingPot = await ethers.getContractFactory("HidingPot");
    const hidingPot = await HidingPot.deploy(verifier.address, hasher.address, 10*10**9, 5); // 10 CLV, 10 tree levels
    
    console.log("HidingPot address:", hidingPot.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });