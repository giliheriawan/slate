# E-Wallet

<!-- <aside class="warning">
Coming Soon!!! Kindly check later.
</aside> -->

NICEPay menawarkan **E-Wallet** sebagai metode pembayaran. Pemberitahuan Real Time akan dikirim saat pelanggan menyelesaikan pembayaran.<br>
E-Wallet yang didukung oleh NICEPay:
<ol type="1">
  <li>OVO</li>
  <li>Link Aja</li>
</ol>

Proses Integrasi :
<ol type="1">
  <li>Merchant meminta Registrasi E-Wallet ke NICEPay.
  <li>Merchant meminta Payment E-Wallet ke NICEPay.
  <li>NICEPay akan redirect ke halaman Bank.
  <li>Pelanggan membayarkan E-Wallet.
  <li>NICEPay kirim notifikasi.
  <li>Merchant handle notifikasi.
</ol>


## Registrasi E-Wallet

> Contoh JSON Request

```json
{
  "timeStamp":"20190813141070",
  "iMid":"IONPAYTEST",
  "payMethod":"05",
  "currency":"IDR",
  "amt":"6500000",
  "referenceNo":"OrdNo20181023141070",
  "merchantToken":"f13aca1c9793987581c9afe0bad6c09d2cb70c7840e269a78911a8b96d15eea5",
  "goodsNm":"iPhone 5S",
  "billingNm":"HongGilDong",
  "billingPhone":"0878777665544",
  "billingEmail":"no-reply@ionpay.net",
  "billingAddr":"Jalan Jenderal Gatot Subroto Kav.57",
  "billingCity":"Jakarta",
  "billingState":"DKI Jakarta",
  "billingPostCd":"12950",
  "billingCountry":"ID",
  "deliveryNm":"HongGilDong",
  "deliveryPhone":"62-21-0000-0000",
  "deliveryAddr":"Jalan Jenderal Gatot Subroto Kav.57",
  "deliveryCity":"Jakarta",
  "deliveryState":"DKI Jakarta",
  "deliveryPostCd":"12950",
  "deliveryCountry":"ID",
  "dbProcessUrl":"http://127.0.0.1:8080/nicepay/test3/dbProcess.do",
  "vat":"0",
  "fee":"0",
  "notaxAmt":"0",
  "description":"this is test transaction!!",
  "reqDt":"20190813",
  "reqTm":"091098",
  "reqDomain":"merchant.com",
  "reqServerIP":"172.29.2.178",
  "reqClientVer":"",
  "userIP":"0:0:0:0:0:0:0:1",
  "userSessionID":"697D6922C961070967D3BA1BA5699C2C",
  "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/60.0.3112.101 Safari/537.36",
  "userLanguage":"en-US",
  "cartData":"{“count”: ”2”,”item”: [{“img_url”: ”http://img.aaa.com/ima1.jpg”,”goods_name”: ”Item 1 Name”,”goods_detail”: ”Item 1 Detail”,”goods_amt”: ”700”},{“img_url”: ”http://img.aaa.com/ima2.jpg”,”goods_name”: ”Item 2 Name”,”goods_detail”: ”Item 2 Detail”,”goods_amt”: ”300”}]}",
  "mitraCd":"OVOE"
}
```

> Contoh JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "IONPAYTEST05201908131117277404",
    "referenceNo": "OrdNo20181023141070",
    "payMethod": "05",
    "amt": "6500000",
    "transDt": "20190813",
    "transTm": "111550",
    "description": "this is test transaction!!",
}
```

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/registration**
Metode | POST, JSON
Deskripsi | Registrasi Transaksi
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>Please refer to [here](#registration) for JSON parameters.<br>
Below for extra parameter will be required for Credit Card Registration:

Parameters | Mandatory | Tipe | Ukuran | Value | Deskripsi
---------- | ---------- | ---------- | ---------- | ---------- | ----------
PayMethod | Y | AN | 2 | 05 | E-Wallet
mitraCd | Y | A | 4 |   | Mitra code, refer Code at [Here](#mitra-code)

<br>**Response Json Object**

Paramenter | Tipe | Ukuran | Deskripsi
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transactionn ID (Key from NICEPay)
referenceNo | ANS | 40 | Merchant order N. (Key from merchant)
payMethod | N | 2 | Payment Method
amt | N | 12 | Payment amount
transDt | N | 8 | Transaction date (YYYYMMDD)
transTm | N | 6 | Transction time (HH24MISS)
description | AN | 100 | Transaction description

## E-Wallet Payment

> Contoh POST Paramenter Request
>
> `callBackUrl=http://localhost/ci_nicepay_v2/CallPaymentEW?tXid=IONPAYTEST05201908141607307963&timeStamp=20180123095456&amt=100000&merchantToken=1f90b3f4fbfc7476a800cf2c108509be3cf193f4678dc91e9a69c3b941d97ccc`

> Contoh callbackUrl with parameter
>
> `http://merchant.com/callbackUrl?resultCd=0000&resultMsg=SUCCESS&tXid=IONPAYTEST05201908141607307963&referenceNo=ORD12345&payMethod=05&amt=10000&transDt=20180302&transTm=151052&description=Transaction Description&mitraCd=OVOE&currency=IDR&goodsNm=Test Transaction Nicepay&billingNm=Customer Name`

Pembayaran E-Wallet akan bisa di proses jika [Registrasi E-Wallet](#registrasi-e-wallet) adalah **Sukses**

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/payment**
Metode | POST (Popup, Redirect, Submit, etc) [not server to server API]
Deskripsi | Registrasi Transaksi
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>Silahkan lihat ke [sini](#payment) untuk POST request and response parameters<br>
**Mandatory POST parameters**

Parameter | Mandatory | Tipe | Ukuran | Deskripsi
---------- | ---------- | ---------- | ---------- | ----------
timeStamp | Y | N | 14 | API Request Date
tXid | Y | AN | 30 | Transaction ID
merchantToken | Y | AN | 255 | merchantToken
callBackUrl | Y | AN | 255 | Payment result forward url (on browser)

<br>**Response POST Parameter(redirect to the callBackUrl)**

Parameter | Tipe | Ukuran | Deskripsi
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | result code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transaction Id (Key from NICEPay)
referenceNo | ANS | 40 | Merchant Order No (Key from merchant)
payMethod | N | 2 | Payment Method
amt | N | 12 | Payment amount
currency | AN | 3 | currency
goodsNm | AN | 100 | Goods Name
billingNm | AN | 30 | Buyer name
transDt | N | 8 | Transaction date (YYYYMMDD)
transTm | N | 6 | Transaction time (HH24MISS)
description | AN | 100 | Transaction Description
mitraCd | AN | 4 | Mitra Code, refer Code at [Here](#mitra-code)
