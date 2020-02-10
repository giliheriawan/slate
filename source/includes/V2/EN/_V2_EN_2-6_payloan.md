# Payloan

<aside class="warning">
Coming Soon!!! Kindly check later.
</aside>

NICEPay offer **Payloan** as Payment Method. Notification will be send on real time when customer completed the payment.<br>
Supported Payloan by NICEPay:
<ol type="1">
  <li>Akulaku</li>
  <li>Kredivo</li>
</ol>

Integration Step :
<ol type="1">
  <li>Merchant Request Registration
  <li>Merchant Request Payment
  <li>NICEPay Redirect to Mitra Page
  <li>Customer paid
  <li>NICEPay send notification
  <li>Handle notification
</ol>

## Akulaku Registration

> Sample JSON Request

```json
{
	"timeStamp":"20170708123456",
	"iMid":"PAYLOANTE5",
	"payMethod":"06",
	"currency":"IDR",
	"amt":"1000",
	"referenceNo":"MerchantReferenceNumber001",
	"goodsNm":"Merchant Goods 1",
	"billingNm":"Buyer Name",
	"billingPhone":"02112345678",
	"billingEmail":"buyer@merchant.com",
	"billingAddr":"Billing Address",
	"billingCity":"Jakarta",
	"billingState":"Jakarta",
	"billingPostCd":"12345",
	"billingCountry":"Indonesia",
	"deliveryNm":"Buyer Name",
	"deliveryPhone":"02112345678",
	"deliveryAddr":"Billing Address",
	"deliveryCity":"Jakarta",
	"deliveryState":"Jakarta",
	"deliveryPostCd":"12345",
	"deliveryCountry":"Indonesia",
	"dbProcessUrl":"http://www.merchant.com/notiication",
	"merchantToken":"6cfccfc0046773c1b589d8e98f8b596c284f3c70a4ecf86eba14c18944b74bcd",
	"reqDt":"20160301",
	"reqTm":"135959",
	"reqDomain":"merchant.com",
	"reqServerIP":"127.0.0.1",
	"reqClientVer":"1.0",
	"userIP":"127.0.0.1",
	"userSessionID":"userSessionID",
	"userAgent":"Mozilla",
	"userLanguage":"en-US",
	"cartData":"{JSON_Format}",
	"instmntType":"2",
	"instmntMon":"1",
	"recurrOpt":"0",
	"mitraCd":"AKLP",
	"payValidDt":"20170313",
	"payValidTm":"135959",
}
```

> Sample JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "AYLOANTE506201905021036566",
    "referenceNo": "OrdNo20160525000-52104",
    "payMethod": "06",
    "amt": "1000",
    "currency": "IDR",
    "goodsNm": "Merchant Goods 1",
    "billingNm": "Buyer Name",
    "transDt": "20160303",
    "transTm": "135959",
    "description": "Payment of OrdNo20160525000-52104",
    "mitraCd": "AKLP",
    "payValidDt": "20170313",
    "payValidTm": "135959"
}
```

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/registration**
Method | POST, JSON
Description | TXID will be created
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>Please refer to [here](#registration) for JSON parameters.<br>
Below for extra parameter will be required for AKULAKU Registration:

Parameters | Mandatory | Type | Size | Value | Description
---------- | ---------- | ---------- | ---------- | ---------- | ----------
instmntType | Y | N | 2 | 2 | Installment Type
instmntMon | Y | N | 2 | 1 | Installment month
recurrOpt | Y | N | 2 | 0 | Recurring option
mitraCd | Y | A | 4 | AKLP | Mitra code, refer Code at [Here](#mitra-code)
payValidDt | Y | N | 8 | 20170313 | expiry date (YYYYMMDD)
payValidTm | Y | N | 6 | 135959 | expiry time (HH24MISS)

<br>**Response Json Object**

Paramenter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | result code
resultMsg | AN | 255 | result message
tXid | ANS | 40| result message
referenceNo | AN | 255 | Transaction Id (Key from NICEPay)
payMethod | N | 2 | Payment Method
amt | N | 12 | Payment amount
currency | AN | 3 | currency
goodsNm | AN | 100 | goodsNm
billingNm | A | 30 | Buyer name
transDt | N | 8 | Transaction date (YYYYMMDD)
transTm | N | 6 | Transaction time (HH24MISS)
description | AN | 100 | Transaction Description
mitraCd | AN | 4 | Mitra code
payValidDt | N | 8 | expiry date (YYYYMMDD)
payValidTm | AN | 6 | expiry time (HH24MISS)

## Akulaku Payment

<!-- > Sample POST Paramenter Request
>
> `callBackUrl=http://merchant.com/callbackUrl&tXid=TESTIDTEST04201803051057003960&timeStamp=20180305105635&merchantToken=58161e87726ecf5cdaed5462a994d9bf05172d786c1cbfe0ad03e133c5797645`

> Sample callbackUrl with parameter
>
> `http://merchant.com/callbackUrl?resultCd=0000&resultMsg=SUCCESS&tXid=TESTIMIDTEST01201803020917502088&referenceNo=ORD12345&payMethod=04&amt=10000&transDt=20180302&transTm=151052&description=Transaction Description&mitraCd=MDRE&currency=IDR&goodsNm=Test Transaction Nicepay&billingNm=Customer Name` -->

Akulaku Payment can be process if [Akulaku Registration](#akulaku-registration) is **Success**

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/payment**
Method | POST (Popup, Redirect, Submit, etc) [not server to server API]
Description |
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>Please refer to [here](#payment) for POST request and response parameters<br>
**Mandatory POST parameters**

Parameter | Mandatory | Type | Size | Description
---------- | ---------- | ---------- | ---------- | ----------
timeStamp | Y | N | 14 | API Request Date
tXid | Y | AN | 30 | Transaction ID
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
instmntMon | N | 2 | Installment month
instmntType | N | 2 | Installment Type

## Akulaku Confirm Receipt

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/confirmAkulaku**
Method | POST(parameter)
Description | Akulaku confirm receipt (when success)
Merchant Token | SHA256 (Timestamp + Transaction ID + Merchant ID + Merchant Key)

<br>POST request and response parameters<br>
**Request Parameter**

Parameter | Mandatory | Type | Size | Description
---------- | ---------- | ---------- | ---------- | ----------
timeStamp | Y | N | 14 | API Request Date
tXid | Y | AN | 30 | Transaction ID
iMid | Y | AN | 10 | Merchant Id
merchantToken | Y | AN | 255 | merchantToken

<br>**Response POST Parameter(redirect to the callBackUrl)**

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | result code
resultMsg | AN | 255 | Result Message
ResponseData | AN | 30 | Response Data

## Kredivo Registration

> Sample JSON Request

```json
{
	"timeStamp":"20170708123456",
	"iMid":"IONPAYTEST",
	"payMethod":"06",
	"currency":"IDR",
	"amt":"1000",
	"referenceNo":"MerchantReferenceNumber001",
	"goodsNm":"Merchant Goods 1",
	"billingNm":"Buyer Name",
	"billingPhone":"02112345678",
	"billingEmail":"buyer@merchant.com",
	"billingAddr":"Billing Address",
	"billingCity":"Jakarta",
	"billingState":"Jakarta",
	"billingPostCd":"12345",
	"billingCountry":"Indonesia",
	"deliveryNm":"Buyer Name",
	"deliveryPhone":"02112345678",
	"deliveryAddr":"Billing Address",
	"deliveryCity":"Jakarta",
	"deliveryState":"Jakarta",
	"deliveryPostCd":"12345",
	"deliveryCountry":"Indonesia",
	"dbProcessUrl":"http://www.merchant.com/notiication",
	"vat":"0",
	"fee":"0",
	"notaxAmt":"0",
	"merchantToken":"6cfccfc0046773c1b589d8e98f8b596c284f3c70a4ecf86eba14c18944b74bcd",
	"reqDt":"20160301",
	"reqTm":"135959",
	"reqDomain":"merchant.com",
	"reqServerIP":"127.0.0.1",
	"reqClientVer":"1.0",
	"userIP":"127.0.0.1",
	"userSessionID":"userSessionID",
	"userAgent":"Mozilla",
	"userLanguage":"en-US",
	"cartData":"{JSON_Format}",
	"instmntType":"2",
	"instmntMon":"1",
	"recurrOpt":"0",
	"mitraCd":"AKLP",
	"payValidDt":"20170313",
	"payValidTm":"135959",
}
```

> Sample JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "IONPAYTEST02201607291027025291",
    "referenceNo": "OrdNo20160525000-52104",
    "payMethod": "06",
    "amt": "1000",
    "currency": "IDR",
    "goodsNm": "Merchant Goods 1",
    "billingNm": "Buyer Name",
    "transDt": "20160303",
    "transTm": "135959",
    "description": "Payment of OrdNo20160525000-52104",
    "mitraCd": "KDVI",
    "payValidDt": "20170313",
    "payValidTm": "135959"
}
```

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/registration**
Method | POST, JSON
Description | TXID will be created
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>Please refer to [here](#registration) for JSON parameters.<br>
Below for extra parameter will be required for KREDIVO Registration:

Parameters | Mandatory | Type | Size | Value | Description
---------- | ---------- | ---------- | ---------- | ---------- | ----------
instmntType | Y | N | 2 | 2 | Installment Type
instmntMon | Y | N | 2 | 1 | Installment month
recurrOpt | Y | N | 2 | 0 | Recurring option
mitraCd | Y | A | 4 | KDVI | Mitra code, refer Code at [Here](#mitra-code)
payValidDt | Y | N | 8 | 20170313 | expiry date (YYYYMMDD)
payValidTm | Y | N | 6 | 135959 | expiry time (HH24MISS)

<br>**Response Json Object**

Paramenter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | result code
resultMsg | AN | 255 | result message
tXid | ANS | 40| result message
referenceNo | AN | 255 | Transaction Id (Key from NICEPay)
payMethod | N | 2 | Payment Method
amt | N | 12 | Payment amount
currency | AN | 3 | currency
goodsNm | AN | 100 | goodsNm
billingNm | A | 30 | Buyer name
transDt | N | 8 | Transaction date (YYYYMMDD)
transTm | N | 6 | Transaction time (HH24MISS)
description | AN | 100 | Transaction Description
mitraCd | AN | 4 | Mitra code
payValidDt | N | 8 | expiry date (YYYYMMDD)
payValidTm | AN | 6 | expiry time (HH24MISS)

## Kredivo Payment

<!-- > Sample POST Paramenter Request
>
> `callBackUrl=http://merchant.com/callbackUrl&tXid=TESTIDTEST04201803051057003960&timeStamp=20180305105635&merchantToken=58161e87726ecf5cdaed5462a994d9bf05172d786c1cbfe0ad03e133c5797645`

> Sample callbackUrl with parameter
>
> `http://merchant.com/callbackUrl?resultCd=0000&resultMsg=SUCCESS&tXid=TESTIMIDTEST01201803020917502088&referenceNo=ORD12345&payMethod=04&amt=10000&transDt=20180302&transTm=151052&description=Transaction Description&mitraCd=MDRE&currency=IDR&goodsNm=Test Transaction Nicepay&billingNm=Customer Name` -->

Kredivo Payment can be process if [Kredivo Registration](#kredivo-registration) is **Success**

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/payment**
Method | POST (Popup, Redirect, Submit, etc) [not server to server API]
Description |
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>Please refer to [here](#payment) for POST request and response parameters<br>
**Mandatory POST parameters**

Parameter | Mandatory | Type | Size | Description
---------- | ---------- | ---------- | ---------- | ----------
timeStamp | Y | N | 14 | API Request Date
tXid | Y | AN | 30 | Transaction ID
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
instmntMon | N | 2 | Installment month
instmntType | N | 2 | Installment Type
