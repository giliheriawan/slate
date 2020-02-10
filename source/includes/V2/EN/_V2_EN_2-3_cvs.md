# Convenience Store


NICEPay offer **Convenience Store (CVS)** as Payment Method. Notification will be send on real time when customer completed the payment.<br>
Supported CVS by NICEPay:
<ol type="1">
  <li>Alfamart
  <li>Indomaret
  <li>Lawson
  <li>Alfamidi
  <li>Dan+Dan Store
</ol>

Integration Step :
<ol type="1">
  <li>Merchant Request CVS Registration to NICEPay
  <li>Merchant display CVS detail and customer journey then send CVS detail via email / sms / customer transaction history.
  <li>Customer pay CVS in prefered payment channel.
  <li>NICEPay send notification
  <li>Handle notification
</ol>

## CVS Registration

> Sample JSON Request

```json
{
    "timeStamp":"20180123100505",
    "iMid":"IONPAYTEST",
    "payMethod":"03",
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
    "mitraCd":"ALMA",
    "payValidDt":"20180308",
    "payValidTm":"095500"
}
```

> Sample JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "IONPAYTEST03201804191327346753",
    "referenceNo": "ORD12345",
    "payMethod": "03",
    "amt": "10000",
    "transDt": "20180419",
    "transTm": "132734",
    "description": "Transaction Description",
    "bankCd": null,
    "vacctNo": null,
    "mitraCd": "ALMA",
    "payNo": "191327346753",
    "currency": null,
    "goodsNm": null,
    "billingNm": null,
    "vacctValidDt": null,
    "vacctValidTm": null,
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
Below for extra parameter will be required for Convenience Store (CVS) Registration:

Parameters | Mandatory | Type | Size | Value | Description
---------- | ---------- | ---------- | ---------- | ---------- | ----------
PayMethod | Y | AN | 2 | 03 | Convenience Store (CVS)
mitraCd | Y | A | 4 | 2 | Mitra Code. refer to [here](#mitra-code)
payValidDt | Y | N | 8 | 1 | CVS expiry date (YYYYMMDD)
payValidTm | Y | N | 6 | 2 | CVS expiry time (HH24MISS)

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
mitraCd | A | 4 | Mitra Code. refer to [here](#mitra-code)
payNo | N | 12 | CVS Payment No.
payValidDt | N | 8 | VA expiry date (YYYYMMDD)
payValidTm | N | 6 | VA expiry time (HH24MISS)
