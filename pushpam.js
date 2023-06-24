/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NftNum = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,shirtSize,shirtColor,bling) {
    const NftObj = {
        "Name" : name,
        "ShirtSize" : shirtSize,
        "ShirtColor" : shirtColor,
        "Bling" : bling
  };
  NftNum.push(NftObj);
  console.log("Minted :" + name);

}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<NftNum.length; i++){
        console.log("\n ID : " + (i+1));
        console.log("\n Name : " + NftNum[i].Name);
        console.log("\n Shirt Size : " + NftNum[i].ShirtSize);
        console.log("\n Shirt Color : " + NftNum[i].ShirtColor);
        console.log("\n Bling is : " + NftNum[i].Bling);
        console.log("---------------")

    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n Total Number of NFTs : " + NftNum.length);
    
}

// call your functions below this line
mintNFT("Nike", "M", "Red", "Diamond sign");
mintNFT("puma", "M", "White", "golden lined");
mintNFT("HNM", "M", "Grey", "Plain");
mintNFT("Sparky", "L", "Pink", "Cotton lined");

listNFTs();
getTotalSupply();


