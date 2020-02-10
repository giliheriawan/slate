# Virtual Account
NICEPay offer **Virtual Account** as Payment Method. By using this method, customer will have option to make payment via ATM, SMS Banking, Internet Banking, or Mobile Banking. Real time Notification will be send when customer completed the payment.<br>
Supported Bank by NICEPay:
<ol type="1">
  <li>Bank Mandiri
  <li>Bank International Indonesia Maybank
  <li>Bank Permata
  <li>Bank Central Asia (BCA)
  <li>Bank Negara Indonesia 46 (BNI)
  <li>Bank KEB Hana Indonesia
  <li>Bank Rakyat Indonesia (BRI)
  <li>Bank CIMB Niaga
  <li>Bank DANAMON
</ol>

NICEPay also supported Virtual Account (VA) for others Bank via ATM BERSAMA, ALTO, LINK, and PRIMA.

Integration Step :
<ol type="1">
  <li>Merchant Request VA Registration to NICEPay.
  <li>Merchant display VA detail and customer journey then send VA detail via email / sms / customer transaction history.
  <li>Customer pay VA in prefered payment channel.
  <li>NICEPay send notification
  <li>Handle notification
</ol>

## VA Registration

> Sample JSON Request

```json
{
    "timeStamp":"20180123100505",
    "iMid":"IONPAYTEST",
    "payMethod":"02",
    "currency":"IDR",
    "amt":"10000",
    "referenceNo":"ORD12345",
    "goodsNm":"Test Transaction Nicepay",
    "billingNm":"Customer Name",
    "billingPhone":"12345678",
    "billingEmail":"email@merchant.com",
    "billingAddr":"Jalan Bukit Berbunga 22",
    "billingCity":"Jakarta",
    "billingState":"DKI Jakarta",
    "billingPostCd":"12345",
    "billingCountry":"Indonesia",
    "deliveryNm":"email@merchant.com",
    "deliveryPhone":"12345678",
    "deliveryAddr":"Jalan Bukit Berbunga 22",
    "deliveryCity":"Jakarta",
    "deliveryState":"DKI Jakarta",
    "deliveryPostCd":"12345",
    "deliveryCountry":"Indonesia",
    "description":"Transaction Description",
    "dbProcessUrl":"http://ptsv2.com/t/0ftrz-1519971382/post",
    "merchantToken":"f9d30f6c972e2b5718751bd087b178534673a91bbac845f8a24e60e8e4abbbc5",
    "reqDomain":"merchant.com",
    "reqServerIP":"127.0.0.1",
    "userIP":"127.0.0.1",
    "userSessionID":"697D6922C961070967D3BA1BA5699C2C",
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/60.0.3112.101 Safari/537.36",
    "userLanguage":"ko-KR,en-US;q=0.8,ko;q=0.6,en;q=0.4",
    "cartData":"{}",
    "bankCd":"CENA",
    "vacctValidDt":"20180306",
    "vacctValidTm":"091309",
    "merFixAcctId":""
}
```

> Sample JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "IONPAYTEST02201804191326086706",
    "referenceNo": "ORD12345",
    "payMethod": "02",
    "amt": "10000",
    "transDt": "20180419",
    "transTm": "132608",
    "description": "Transaction Description",
    "bankCd": "CENA",
    "vacctNo": "1326086706",
    "mitraCd": null,
    "payNo": null,
    "currency": "IDR",
    "goodsNm": "Test Transaction Nicepay",
    "billingNm": "Customer Name",
    "vacctValidDt": "20180306",
    "vacctValidTm": "091309",
    "payValidDt": null,
    "payValidTm": null
}
```

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/registration**
Method | POST, JSON
Description | Perform for Transaction Registration
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>Please refer to [here](#registration) for JSON parameters.<br>
Below for extra parameter will be required for Virtual Account (VA) Registration:

Parameters | Mandatory | Type | Size | Value | Description
---------- | ---------- | ---------- | ---------- | ---------- | ----------
PayMethod | Y | AN | 2 | 02 | Virtual Account (VA)
bankCd | Y | A | 4 | 2 | Bank code. refer to [here](#bank-code)
vacctValidDt | Y | N | 8 | 20180306 | VA expiry date (YYYYMMDD)
vacctValidTm | Y | N | 6 | 091309 | VA expiry time (HH24MISS)
merFixAcctld | Y (if Fix Type) | AN | 40 | Merchant reserved VA ID

<br>**Response Json Object**

Paramenter | Type | Size | Description
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
bankCd | A | 4 | Bank code. refer to [here](#bank-code)
vacctNo | N | 20 | VA Number
currency | AN | 3 | Currency
goodsNm | AN | 100 | Goods name
billingNm | A | 30 | Buyer name
vacctValidDt | N | 8 | VA expiry date (YYYYMMDD)
vacctValidTm | N | 6 | VA expiry time (HH24MISS)
