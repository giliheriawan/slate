# ClickPay

<aside class="warning">
Coming Soon!!! Kindly check later.
</aside>

NICEPay offer **ClickPay** as Payment Method. Notification will be send on real time when customer completed the payment.<br>
Supported ClickPay by NICEPay:
<ol type="1">
  <li>Mandiri Clickpay
  <li>CIMB Clicks
  <li>BCA KlikPay
</ol>

Integration Step :
<ol type="1">
  <li>Merchant Request ClickPay Registration to NICEPay.
  <li>Merchant Request ClickPay Payment to NICEPay.
  <li>NICEPay will be redirect to Bank Page.
  <li>Customer pay ClickPay in Bank Page.
  <li>NICEPay send notification.
  <li>handle notification.
</ol>

## ClickPay Registration

> Sample JSON Request

```json
{
    "timeStamp":"20180123100505",
    "iMid":"IONPAYTEST",
    "payMethod":"04",
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
    "dbProcessUrl":"http://ptsv2.com/t/0ftrz-1519971382/post",
    "description":"order description",
    "merchantToken":"f9d30f6c972e2b5718751bd087b178534673a91bbac845f8a24e60e8e4abbbc5",
    "reqDomain":"merchant.com",
    "reqServerIP":"127.0.0.1",
    "userSessionID":"697D6922C961070967D3BA1BA5699C2C",
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/60.0.3112.101 Safari/537.36",
    "userLanguage":"ko-KR,en-US;q=0.8,ko;q=0.6,en;q=0.4",
    "cartData":"{}",
    "mitraCd":"MDRC",
    "userIP":"127.0.0.1"
}
```

> Sample JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "IONPAYTEST04201804191329266801",
    "referenceNo": "ORD12345",
    "payMethod": "04",
    "amt": "10000",
    "transDt": "20180419",
    "transTm": "132910",
    "description": "order description",
    "bankCd": null,
    "vacctNo": null,
    "mitraCd": null,
    "payNo": null,
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
Below for extra parameter will be required for ClickPay Registration:

Parameters | Mandatory | Type | Size | Value | Description
---------- | ---------- | ---------- | ---------- | ---------- | ----------
PayMethod | Y | AN | 2 | 04 | ClickPay
mitraCd | Y | A | 4 | Mitra code, refer Code at [Here](#mitra-code)
mRefNo | Y (CIMB) | AN | 18 | ClickPay CIMB reference No

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

## ClickPay Payment

> Sample POST Paramenter Request
>
> `callBackUrl=http://merchant.com/callbackUrl&tXid=TESTIMIDTEST01201803020917502088&timeStamp=20180305105635&merchantToken=58161e87726ecf5cdaed5462a994d9bf05172d786c1cbfe0ad03e133c5797645&clickPayNo=1234567890123456&dataField3=123&clickPayToken=123456`

> Sample callbackUrl with parameter
>
> `http://merchant.com/callbackUrl?resultCd=0000&resultMsg=SUCCESS&tXid=TESTIMIDTEST01201803020917502088&referenceNo=ORD12345&payMethod=04&amt=10000&transDt=20180302&transTm=151052&description=Transaction Description&receiptCode=0684G143372548&mitraCd=MDRC&currency=IDR&goodsNm=Test Transaction Nicepay&billingNm=Customer Name&mRefNo=2017514268567`

ClickPay Payment can be process if [CC Registration](#cc-registration) is **Success**

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/payment**
Method | POST (Popup, Redirect, Submit, etc) [not server to server API]
Description | Perform for Transaction Registration
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>Please refer to [here](#payment) for POST request and response parameters<br>
**Mandatory POST parameters**

Parameter | Mandatory | Type | Size | Description
---------- | ---------- | ---------- | ---------- | ----------
timeStamp | Y | N | 14 | API Request Date
tXid | Y | AN | 30 | Transaction ID
clickPayNo | Y | N | 16 | ClickPay number
dataField3 | Y | N | 16 | Token input 3 for clickpay
clickPayToken | Y | N | 6 | Code response from token
merchantToken | Y | AN | 255 | merchantToken
callBackUrl | Y | AN | 255 | Payment result forward url (on browser)

<br>**Response POST Parameter(redirect to the callBackUrl)**

Parameter | Type | Size | Description
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
receiptCode | ANS | 20 | Authrization number
mRefNo | AN | 18 | Bank Reference No
