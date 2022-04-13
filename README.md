# ilyas_config_dosyalar-

// dosyaları indirme kısmı
1) https://github.com/nftdevs/generate-nfts adresindeki dosyayı indir (nft üretme programı)
2) https://github.com/maximedrn/opensea-automatic-bulk-upload-and-sale adresinden upload dosyalarını indir (yükleme programı)
3) https://github.com/spesivan/ilyas_config_dosyalar- bu adresdeki dosyaları indir

// dosyaları düzenleme ve kurulum

4) bilgisayarınızda node.jsi visual stdio code ve python yüklü olduğundan emin olun (python indirirken Add python 3.8 to PATH işaretlemeyi unutmayın)
![image](https://user-images.githubusercontent.com/88890641/163247068-8906e11f-c6da-4faa-a2dc-0d87ad2bdbfe.png)

5) indirdiğiniz dosyaları masaüstünde bir klasöre koyun ve VS Code ile (1) linkteki dosyaları açın
6) terminal kısmında dosyanızı terminalini açın

![image](https://user-images.githubusercontent.com/88890641/163248182-13c23ab5-8ac9-4d09-b3f7-c463404fbbd9.png)

7) sonrasında terminale **npm install** yazınız ve kütühaneleri indirin
8) generate dosyasında src içerisindeki config.js ve main.js dosyalarını silip bu linkteki (3) dosyaları koyun
9) Sonrasında config ve main dosyalarını kendinize göre düzenleyin
10) Düzenlemeler bittikten sonra terminale **node index.js** programı çalıştırabilir ve çıktı alabilirsiniz 

// upload kısmı

11) (2) linkteki dosyaları VS Code'da ve terminalde de açın
12) asset dosyasına password.txt,private_key.txt,recovery_phrase.txt dosyaları açın ve içerisine şifre,  12 haneli kurtarma şifresi ve private key bilgilerini yazıp kaydedin
13) sonrasında generate programındaki json dosyasından metadata dosyasını upload dosyasındaki data klasörüne taşıyın
14) sonra olarak terminale python main.py yazarak programı çalıştırın
15) terminaldeki yönlendirmeler ile yükleme işlemine başlayın ( önerim chromedriverda manuel olarak yüklemeniz)
