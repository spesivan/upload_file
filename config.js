const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// NFT iÇERİKLERİNİ BURAYA YAZ ///////////////////////////////////////////////////////////////////////////
const namePrefix = "NFT iSMi";
const description = "Aciklama kismini yaz";
const baseUri = "C:/Users/spes/Desktop/resimlerin dosyası"; //// burayı sakın unutma ve dosya yolundaki işaretler / olmalı eğer \ olursa hata alırsınız
const external_link_name = "herhangi bir site linki";
const collectionName = "Koleksiyon adı";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // 
  external_url: "https://www.youtube.com/",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// KATMAN İSİMLERİNİ YAZIN (isterseniz kopyala yapıştır yaparak çoğaltın) ////////////////////////////////////////////////////////////////////////////
const layerConfigurations = [
  {
    growEditionSizeTo: 1000, // kaç tane basılması gerektiğini yazın
    layersOrder: [
      { name: "arkaplan" },
      { name: "karakter" },
      { name: "sapka" },
      { name: "gozluk" },
      
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

//Resimleri ölçeklerini girin /////////////////////////////////////////////////////////////////////////
const format = {
  width: 1170,
  height: 1260,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  collectionName,
  external_link_name,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
