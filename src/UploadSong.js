//import { WalletHandler, RnsHandler, StorageHandler, FileIo, FileUploadHandler } from 'jackal.js';

const UploadToJackal = async function(file){
    console.log(file);

    // const walletConfig = {
    //     signerChain: 'jackal-1', 
    //     enabledChains: ['jackal-1'],
    //     queryAddr: 'https://testnet-grpc.jackalprotocol.com',
    //     txAddr: 'https://testnet-rpc.jackalprotocol.com'
    // }

    // const wallet = await WalletHandler.trackWallet(walletConfig)

    // const rns = await RnsHandler.trackRns(wallet)

    // const storage = await StorageHandler.trackStorage(wallet)

    // const fileIo = await FileIo.trackIo(wallet)

    // const f = new File([process.env.PASSWORD], "password.txt")

    // const handler = await FileUploadHandler.trackFile (f, "s/data")
    // const readyFile = handler.getForUpload()

    // const sourcesData = {
    // data: null,
    // exists: true,
    // handler: handler,
    // key: "credentials/password.txt",
    // uploadable: readyFile
    // }

    // const sources = {
    // UploadListItem: sourcesData
    // }

    // const parent = handler;

    // const tracker = {
    // Complete: 0,
    // Timer: 0
    // }

    // await fileIo.staggeredUploadFiles(sources, parent, tracker);

    // const downloadDetails = {
    //     rawPath: "credentials/password.txt",
    //     owner: process.env.WALLET_ID,
    //     isFolder: false
    // }

    // const completion = {
    // Track: 0
    // }

    // await fileIo.downloadFile (downloadDetails, completion)
}

export default UploadToJackal;