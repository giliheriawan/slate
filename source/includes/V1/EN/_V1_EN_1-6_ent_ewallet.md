# E-Wallet

NICEPay offers E-Wallet as Payment Method. This allows customer to make payment with OVO and LinkAja.
Real time Notification will be sent when customer has completed the payment.

**Supported E-Wallet by NICEPay:**

<ol type="1">
  <li>Mandiri E-Cash
</ol>

*Transaction Flow:**

<ol type="1">
  <li>Merchant Request E-Wallet Registration to NICEPay.
  <li>NICEPay will redirect to Mitra Payment Page
  <li>Customer input payment details on Mitra Payment Page/App.
  <li>NICEPay Send Notification to Merchant.
  <li>Merchant Handle Notification.
</ol>

## E-Wallet Registration
### API Specifications - E-Wallet Registration

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/api/ewalletTrans.do`                                                                                |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Request E-Wallet Transaction                                                                                  |
| **Merchant Token**                                        | SHA256(`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                                 |
| **Payment Methods**                                       | `05` E-Wallet                                                                                                 |

### Request Parameter - E-Wallet Registration

> Sample Request

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

| **Parameter**                     | **Type**          | **Size** | **Description**                   | Example Value                                                |
| --------------------------------- | ----------------- | -------- | --------------------------------- | ------------------------------------------------------------ |
| **`iMid`** **Required**           | **AN**            | **10**   | **Merchant ID**                   | IONPAYTEST                                                   |
| **`payMethod`** **Required**      | **N**             | **2**    | **[Pay Method](#payment-method)** | 05                                                           |
| **`currency`** **Required**       | **A**             | **3**    | **Currency**                      | IDR                                                          |
| **`amt`** **Required**            | **N**             | **12**   | **Goods Amount**                  | 15000                                                        |
| **`referenceNo`** **Required**    | **ANS**           | **40**   | **Merchant Order No**             | ordNo123124                                                  |
| **`goodsNm`** **Required**        | **AN**            | **100**  | **Goods Name**                    | Test Goods                                                   |
| **`billingNm`** **Required**      | **A**             | **30**   | **Billing Name**                  | John Doe                                                     |
| **`billingPhone`** **Required**   | **N**             | **15**   | **Billing Phone Number**          | 081249195                                                    |
| **`billingEmail`** **Required**   | **ANS**           | **40**   | **Billing Email**                 | test@merchant.com                                            |
| **`billingCity`** **Required**    | **A**             | **50**   | **Billing City**                  | Jakarta                                                      |
| **`billingState`** **Required**   | **A**             | **50**   | **Billing State**                 | DKI Jakarta                                                  |
| **`billingPostCd`** **Required**  | **N**             | **10**   | **Billing Post Number**           | 14350                                                        |
| **`billingCountry`** **Required** | **A**             | **10**   | **Billing Countr*y*               | Indonesia                                                    |
| **`callBackUrl`** **Required**    | **ANS**           | **255**  | **Payment Result Page**           | https://merchant.com/callBackUrl                             |
| **`dbProcessUrl`** **Required**   | **ANS**           | **255**  | **Payment Notif Url**             | https://merchant.com/dbProcessUrl                            |
| **`description`** **Required**    | **AN**            | **100**  | **Description**                   | test item                                                    |
| **`merchantToken`** **Required**  | **AN**            | **255**  | **Merchant Token**                | 6cfccfc0046773c1b589d8e<br>98f8b596c284f3c70a4ecf8<br>6eba14c18944b74bcd |
| **`userIP`** **Required**         | **ANS**           | **15**   | **User IP (Customer)**            | 127.0.0.1                                                    |
| **`cartData`** **Required**       | **`JSON Object`** | **4000** | **Cart Data (Json Format)**       | {}                                                           |
| **`mitraCd`** **Required**        | **A**             | **4**    | **[Mitra Code](#mitra-code)**     | ALMA                                                         |
| **`billingAddr`**                 | **AN**            | **100**  | **Billing Address**               | Jln Cendrawasih                                              |
| **`deliveryNm`**                  | **A**             | **30**   | **Delivery Name**                 | JohnDoe                                                      |
| **`deliveryPhone`**               | **N**             | **15**   | **Delivery Phone**                | 08125912342                                                  |
| **`deliveryAddr`**                | **AN**            | **100**  | **Delivery Address**              | Jln Merak                                                    |
| **`deliveryEmail`**               | **ANS**           |          | **Delivery Email**                | test@merchant.com                                            |
| **`deliveryCity`**                | **A**             | **50**   | **Delivery City**                 | Jakarta                                                      |
| **`deliveryState`**               | **A**             | **50**   | **Delivery State**                | DKI Jakarta                                                  |
| **`deliveryPostCd`**              | **N**             | **10**   | **Delivery Post Code**            | 14350                                                        |
| **`deliveryCountry`**             | **A**             | **10**   | **Delivery Country**              | Indonesia                                                    |
| **`vat`**                         | **N**             | **12**   | **Vat**                           | 0                                                            |
| **`fee`**                         | **N**             | **12**   | **Service Tax**                   | 0                                                            |
| **`notaxAmt`**                    | **N**             | **12**   | **Tax Free Amount**               | 0                                                            |
| **`reqDt`**                       | **N**             | **8**    | **Request Date** **(YYYYMMDD)**   | 20160301                                                     |
| **`reqTm`**                       | **N**             | **6**    | **Request Time** **(HH24MISS)**   | 135959                                                       |
| **`reqDomain`**                   | **ANS**           | **100**  | **Request Domain**                | merchant.com                                                 |
| **`reqServerIP`**                 | **ANS**           | **15**   | **Request Server IP**             | 127.0.0.1                                                    |
| **`reqClientVer`**                | **ANS**           | **50**   | **Request Client Version**        | 1.0                                                          |
| **`userSessionID`**               | **AN**            | **100**  | **User Session ID**               | userSessionID                                                |
| **`userAgent`**                   | **ANS**           | **100**  | **User Agent**                    | Mozilla                                                      |
| **`userLanguage`**                | **ANS**           | **2**    | **User Language**                 | en-US                                                        |

### Registration Response - E-Wallet Registration

> Sample Response

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

| **Parameter**     | **Type** | **Size** | Description                       |
| ----------------- | -------- | -------- | --------------------------------- |
| **`resultCd`**    | **N**    | **4**    | [Result Code](#error-code)        |
| **`resultMsg`**   | **AN**   | **255**  | [Result Message](#error-code)     |
| **`tXid`**        | **AN**   | **30**   | Transaction ID                    |
| **`referenceNo`** | **ANS**  | **40**   | Merchant Order No                 |
| **`payMethod`**   | **N**    | **2**    | [Payment Method](#payment-method) |
| **`amount`**      | **N**    | **12**   | Transaction Amount                |
| **`transDt`**     | **N**    | **8**    | Transaction date (YYYYMMDD)       |
| **`transTm`**     | **N**    | **6**    | Transaction time (HH24MISS)       |
| **`mitraCd`**     | **A**    | **4**    | [Mitra Code](#mitra-code)         |
