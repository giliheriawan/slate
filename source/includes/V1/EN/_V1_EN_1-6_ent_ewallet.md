# Enterprise - E-Wallet
NICEPay offer **E-Wallet** as Payment Method. Real time Notification will be send when customer completed the payment.<br>
Supported E-Wallet by NICEPay:
<ol type="1">
  <li>Mandiri E-Cash
</ol>

Integration Step :
<ol type="1">
  <li>Merchant request E-Wallet Registration to NICEPay.
  <li>NICEPay will be redirect to Bank Page.
  <li>Customer pay E-Wallet in prefered payment channel.
  <li>NICEPay send notification
  <li>Merchant handle notification.
</ol>

##E-Wallet Registration

> Sample JSON Request

```json
{
	"iMid":"IONPAYTEST",
	"payMethod":"05",
	"currency":"IDR",
	"Amt":"1000",
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
	"callBackUrl":"http://www.merchant.com/callback",
	"dbProcessUrl":"http://www.merchant.com/notification",
	"Vat":"0",
	"Fee":"0",
	"notaxAmt":"0",
	"description":"Description",
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
	"cartData":"{}"
}
```

> Sample Paramenter Response

```
{
    "resultCd": "0000",
    "amount": "10000",
    "referenceNo": "99997",
    "transTm": "141408",
    "mitraCd": "MDRE",
    "tXid": "TESTIDTEST03201803011414085658",
    "resultMsg": "SUCCESS",
    "payMethod": "03",
    "transDt": "20180301"
}
```

&nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/api/ewalletTrans.do**
Method | POPUP (POST)
Description | E-Wallet Transaction
Merchant Token | SHA256 (Merchant ID + Reference Number + Amount + Merchant Key)

<br>**Request POST Parameter**

Parameter | Mandatory | Type | Size | Description
---------- | ---------- | ---------- | ---------- | ----------
iMid | Y | AN | 10 | Merchant ID
payMethod | Y | AN | 2 | Pay Method, refer to [here](#payment-method)
currency | Y | AN | 3 | Currency
amt | Y | N | 12 | Goods Amount
referenceNo | Y | AN | 40 | Merchant Order No
goodsNm | Y | AN | 100 | Goods Name
billingNm | Y | A | 30 | Billing Name
billingPhone | Y | N | 15 | Billing Phone Number
billingEmail | Y | AN | 40 | Billing Email
billingCity | Y | A | 50 | Billing City
billingState | Y | A | 50 | Billing State
billingPostCd | Y | N | 10 | Billing Post Number
billingCountry | Y | A | 10 | Billing Country
callBackUrl | Y | AN | 255 | Payment Result Forward Url (On Browser)
dbProcessUrl | Y | AN | 255 | Payment Result Receive Url (Server Side)
description | Y | AN | 100 | Description
merchantToken | Y | AN | 255 | Merchant Token
userIP | Y | AN | 15 | User IP (Customer)
cartData | Y | AN | 4000 | Cart Data (Json Format)
mitraCd | Y | AN | 4 | Mitra Code, refer to [here](#mitra-code)
billingAddr | N | 100 | AN | Billing Address
deliveryNm | N | A | 30 | Delivery Name
deliveryPhone | N | N | 15 | Delivery Phone
deliveryAddr | N | AN | 100 | Delivery Address
deliveryEmail | N | AN| &nbsp; | Delivery Email
deliveryCity | N | A | 50 | Delivery City
deliveryState | N | A | 50 | Delivery State
deliveryPostCd | N | N | 10 | Delivery Post Number
deliveryCountry | N | A | 10 | Delivery Country
vat | N | N | 12 | Vat
fee | N | N | 12 | Service Tax
notaxAmt | N | N | 12 | Tax Free Amount
reqDt | N | N | 8 | Request Date(YYYYMMDD)
reqTm | N | N | 6 | Request Time(HH24MISS)
reqDomain | N | AN | 100 | Request Domain
reqServerIP | N | AN | 15 | Request Server IP
reqClientVer | N | AN | 50 | Request Client Version
userSessionID | N | AN | 100 | User Session ID
userAgent | N | AN | 100 | User Agent Information
userLanguage | N | AN | 2 | User Language

<br>**Response Data**

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result Code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transaction ID
referenceNo | ANS | 40 | Merchant Order No
payMethod | N | 2 | Payment Method. Refer Code at [Here](#payment-method)
amount | N | 12 | Transaction Amount
mitraCd | AN | 4 | Mitra Code, refer to [Link](#mitra-code)
transDt | N | 8 | Transaction date (YYYYMMDD)
transTm  | N | 6 | Transaction Time (HH24MISS)
