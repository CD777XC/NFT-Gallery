// NFT Gallery display 

let nftNames = [
    'Rare Bears #753',
    'Anatomy Science Ape Club #7993',
    'Anatomy Science Club #846',
    'HypeAliens #57',
]
let myNft = [
    "./NFT/RB753.png",
    "./NFT/ASAC7993.jpg",
    "./NFT/ASC846.jpg", 
    "./NFT/HP57.png",
]

let blackSquare = "./NFT/blackSquare.png"

const nftList = document.querySelector('.nftDisplay')

function render(nft, id){
    let rendering = ''
    for (let i=0; i<nft.length;i++){
            rendering += `
            <li>
                <p id=nftName>${id[i]}</p>
                <img src=${nft[i]} id="nft${i}" ondblclick="rotate(nft${i})" onclick="clearRotate(nft${i})">
            </li>
            `
    }
    nftList.innerHTML += rendering

}
render(myNft, nftNames)

// Flip NFT w/ dblclick eventListener to be done !

// Start here !


function clearRotate(img){
    img.style.transform = 'rotateY(0deg)'
}
function rotate(img){
    let id = null;
    let deg = 20;
    clearInterval(id)
    id = setInterval(frame, 1);
    function frame(){
        if (deg === 180){
            clearInterval(id)
        } else {
            deg=180;
            img.style.transform = `rotateY(${deg}deg)`
        }
    }
}

