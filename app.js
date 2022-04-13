// NFT Gallery display 

let nftNames = [
    'Rare Bears #753',
    'Anatomy Science Ape Club #7993',
    'Mutant Anatomy Science Ape Club #13258',
    'Mutant Anatomy Science Ape Club #13267',
    'HypeAliens #57',
]
let myNft = [
    "./NFT/RB753.png",
    "./NFT/ASAC7993.jpg",
    "./NFT/MASAC13258.jpg",
    "./NFT/MASAC13267.jpg", 
    "./NFT/HP57.png",
]

const nftList = document.querySelector('.nftDisplay')

function render(nft, id){
    let rendering = ''
    for (let i=0; i<nft.length;i++){
            rendering += `
            <li>
                <p id=nftName>${id[i]}</p>
                <img src=${nft[i]} id="nft">
            </li>
            `
    }
    nftList.innerHTML += rendering
}
render(myNft, nftNames)

