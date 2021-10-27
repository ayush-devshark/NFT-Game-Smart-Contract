const main = async () => {
    // compile contract
    const gameContractFactory = await hre.ethers.getContractFactory(
        'MyEpicGame'
    );

    // Hardhat creates local etherum network for us
    const gameContract = await gameContractFactory.deploy(
        ['Tanjiro', 'Zenitsu ', 'Inosuke'], // Names
        [
            'https://i.imgur.com/ps1aD3x.jpeg', // Images
            'https://i.imgur.com/ShfEK9n.png',
            'https://i.imgur.com/lSNSraJ.jpeg',
        ],
        [100, 200, 300], // HP values
        [100, 50, 25] // Attack damage values
    );

    // hardhat creates fake "miners"
    await gameContract.deployed();

    // address of the deployed contract
    console.log('Contract deployed to:', gameContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
