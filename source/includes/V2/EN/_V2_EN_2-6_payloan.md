# Payloan
NICEPay offers Pay Loan (Cardless Credit) as a Payment Method.<br>
Notification will be sent real-time when customer has completed the payment.<br>

Supported Payloan:
<ol type="1">
  <li>Akulaku</li>
  <li>Kredivo</li>
</ol>

Integration Step :
<ol type="1">
  <li>Merchant Request Registration
  <li>Merchant Request Payment
  <li>NICEPay will Redirect to Pay Loan Payment Page
  <li>Customer Confirms Payment on Mitra Page
  <li>NICEPay Send Notification
  <li>Handle Notification
  <li>Merchant Confirms Transaction (AKULAKU Only)
</ol>

<div class="wrapper">
<ul>
  <li>
    <input type="checkbox" id="list-item-akulakuv2">
    <label for="list-item-akulakuv2" class="first">Akulaku Transaction Flow</label>
    <ul>
      <img src="/images/akulaku-v2-flow.jpg">
    </ul>
  </li>
</ul>
</div>

<div class="wrapper">
<ul>
  <li>
    <input type="checkbox" id="list-item-kredivov2">
    <label for="list-item-kredivov2" class="first">Kredivo Transaction Flow</label>
    <ul>
      <img src="/images/kredivo-v2-flow.jpg">
    </ul>
  </li>
</ul>
</div>

## Registration - Payloan

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/registration`                                                                             |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Performs Transaction Regist to NICEPAY                                                                        |        
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                  |

### Request Parameters - Payloan Registration

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
	"payValidTm":"135959"
}
```

<aside class="notice">Please refer to <a href="#registration">Register API</a> for Complete Parameters, the parameters below are the additional that will be required for Payloan Registration</aside>

| **Parameters**                         | **Type**            | **Size** | Description                            | Example       |
| -------------------------------------- | ------------------- | -------- | -------------------------------------- | ---------     |
| **`payMethod`** **Required**           | **N**               | **2**    | Pay Loan                               | 06            |
| **`userIp`** **Required**              | **ANS**             | **15**   | Buyer's IP Address                     | 127.0.0.1     |
| **`deliveryNm`** **Required**          | **A**               | **30**   | Delivery Name                          | John Doe      |
| **`deliveryPhone`** **Required**       | **N**               | **15**   | Delivery Phone                         | 08211xxxx     |
| **`deliveryAddr`** **Required**        | **AN**              | **100**  | Delviery Address                       | Jln. Merdeka  |
| **`deliveryCity`** **Required**        | **A**               | **50**   | Delivery City                          | Jakarta Pusat |
| **`deliveryState`** **Required**       | **A**               | **50**   | Delivery State                         | DKI Jakarta   |
| **`deliveryPostCd`** **Required**      | **N**               | **10**   | Delivery Post Code                     | 14350         |
| **`deliveryCountry`** **Required**     | **A**               | **10**   | Delivery Country                       | Indonesia     |
| **`instmntType`** **Required**         | **N**               | **2**    | [Installment Type](#installment-type)  | 1             |
| **`instmntMon`** **Required**          | **N**               | **2**    | Installment Month                      | 1             |
| **`mitraCd`** **Required**             | **A**               | **4**    | [Mitra Code](#mitra-code)              | KDVI          |
| **`cartData`** **Required**            | **`JSON Object`**   | **4000** | [Cart Data](#payloan-cart-data)        | `JSON`        |
| **`sellers`** **Required for Akulaku** | **`JSON Object`**   | **4000** | [Sellers Data ](#payloan-sellers-data) | `JSON`        |

### Payloan Cart Data
<h3 id="payloan-cart-data"></h3>

| **Parameter**                      | Description                     |
| ---------------------------------- | ------------------------------- |
| **count**                          | Total cart data count           |
| **item**                           |                                 |
| **item ->** **goods_id**           | Good's ID                       |
| **item ->** **goods_detail**       | Good's Detail                   |
| **item ->** **goods_name**         | Good's Name                     |
| **item ->** **goods_amt**          | Good's Amount                   |
| **item ->** **goods_type**         | Good's Type                     |
| **item ->** **goods_url**          | Good's Url                      |
| **item ->** **goods_quantity**     | Good's Quantity                 |
| **item ->** **goods_sellers_id**   | Sellers ID (Only for Akulaku)   |
| **item ->** **goods_sellers_name** | Sellers Name (Only for Akulaku) |

<div class="center-column"></div>
```json
{
  "count": "2",
  "item": [
    {
      "goods_id": "BB12345678",
      "goods_detail": "BB123456",
      "goods_name": "iPhone 5S",
      "goods_amt": "6000000",
      "goods_type": "Smartphone",
      "goods_url": "http://merchant.com/cel lphones/iphone5s_64g",
      "goods_quantity": "1",
      "goods_sellers_id": "SEL123",
      "goods_sellers_name": "Sellers 1"
    },
    {
      "goods_id": "AZ14565678",
      "goods_name": "Hailee Sneakers Blink Silver",
      "goods_amt": "250000",
      "goods_url": "http://merchant.com/fashion/shoes/sneakers-blinkshoes",
      "goods_type": "Sneakers",
      "goods_quantity": "2",
      "goods_sellers_id": "SEL124",
      "goods_ sellers_name": "Sellers 2"
    }
  ]
}
```

### Payloan Sellers Data
<h3 id="payloan-sellers-data"></h3>

| **Parameter**                           | Description      |
| --------------------------------------- | ---------------- |
| **sellersId**                           | Sellers ID       |
| **sellersNm**                           | Sellers Name     |
| **sellersEmail**                        | Sellers Email    |
| **sellersAddress ->** **sellerNm**      | Seller Name      |
| **sellersAddress ->** **sellerLastNm**  | Seller Last Name |
| **sellersAddress ->** **sellerAddr**    | Seller Address   |
| **sellersAddress ->** **sellerCity**    | Seller City      |
| **sellersAddress ->** **sellerPostCd**  | Seller Post Code |
| **sellersAddress ->** **sellerPhone**   | Seller Phone     |
| **sellersAddress ->** **sellerCountry** | Seller Country   |

<div class="center-column"></div>
```json
[
  {
    "sellersId": "SEL123",
    "sellersNm": "Sellers 1",
    "sellersEmail": "sellers@test.com",
    "sellersAddress": {
      "sellerNm": "Sellers",
      "sellerLastNm": "1",
      "sellerAddr": "jalan berbangsa 1",
      "sellerCity": "Jakarta Barat",
      "sellerPostCd": "12344",
      "sellerPhone": "08123456789",
      "sellerCountry": "ID"
    }
  },
  {
    "sellersId": "SEL124",
    "sellersNm": "Sellers 2",
    "sellersEmail": "sellers2@test.com",
    "sellersAddress": {
      "sellerNm": "Sellers",
      "sellerLastNm": "2",
      "sellerAddr": "jalan berkelok 3",
      "sellerCity": "Jakarta Utara",
      "sellerPostCd": "12222",
      "sellerPhone": "081255556789",
      "sellerCountry": "ID"
    }
  }
]
```

### Response Parameters - Payloan Registration
> Sample JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "PAYLOANTE506201905021036566",
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

| **Parameter**     | **Type** | **Size** | Description                       |
| ----------------- | -------- | -------- | --------------------------------- |
| **`resultCd`**    | **N**    | **4**    | [Result Code](#error-code)        |
| **`resultMsg`**   | **AN**   | **255**  | [Result Message](#error-code)     |
| **`tXid`**        | **AN**   | **30**   | Transaction ID                    |
| **`referenceNo`** | **ANS**  | **40**   | Reference No                      |
| **`payMethod`**   | **N**    | **2**    | [Payment Method](#payment-method) |
| **`amt`**         | **N**    | **12**   | Payment Amount                    |
| **`currency`**    | **A**    | **3**    | Currency                          |
| **`goodsNm`**     | **AN**   | **100**  | Goods Name                        |
| **`billingNm`**   | **A**    | **30**   | Buyer Name                        |
| **`transDt`**     | **N**    | **8**    | Transaction Date (YYYYMMDD)       |
| **`transTm`**     | **N**    | **6**    | Transaction Time (HH24MISS)       |
| **`description`** | **AN**   | **100**  | Description                       |
| **`mitraCd`**     | **A**    | **4**    | [Mitra Code](#mitra-code)         |
| **`payValidDt`**  | **N**    | **8**    | Expiry Date (YYYYMMDD)            |
| **`payValidTm`**  | **N**    | **6**    | Expiry Time (HH24MISS)            |

## Payment - Payloan

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/payment`                                                                                  |
| **Request Method** **application/x-www-form-urlencoded**  | `Popup`, `Redirect`, `Submit`                                                                                 |
| **Description**                                           | Performs Payment Request to NICEPAY                                                                           |
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                  |


> Sample Parameter Request
>
> `callBackUrl=http://merchant.com/callbackUrl&tXid=TESTIDTEST04201803051057003960&timeStamp=20180305105635&merchantToken=58161e87726ecf5cdaed5462a994d9bf05172d786c1cbfe0ad03e133c5797645`

<aside class="notice">Payment can only be processed after <a href="#registration-payloan">Registration</a>.</aside>

<br>**Payloan Payment Parameters**

| **Parameter**                    | **Type** | **Size** | Description                           | Example                          |
| -------------------------------- | -------- | -------- | ------------------------------------- | -------------------------------- |
| **`timeStamp`** **Required**     | **N**    | **14**   | Request Timestamp  (YYYYMMDDHH24MISS) | 20170708123456                   |
| **`tXid`** **Required**          | **AN**   | **30**   | Transaction ID                        | IONPAYTEST02201607291027025291   |
| **`merchantToken`** **Required** | **AN**   | **255**  | merchantToken                         | 9338d54573688ae18e175240b02...   |
| **`callBackUrl`** **Required**   | **ANS**  | **255**  | Result Page                           | https://merchant.com/callBackUrl |

### Response Parameters - Payloan Payment

> Sample callbackUrl with parameter
>
> `http://merchant.com/callbackUrl?resultCd=0000&resultMsg=SUCCESS&tXid=TESTIMIDTEST01201803020917502088&referenceNo=ORD12345&payMethod=04&amt=10000&transDt=20180302&transTm=151052&description=Transaction Description&mitraCd=MDRE&currency=IDR&goodsNm=Test Transaction Nicepay&billingNm=Customer Name`

| **Parameter**     | **Type** | **Size** | Description                           |
| ----------------- | -------- | -------- | ------------------------------------- |
| **`resultCd`**    | **N**    | **4**    | [Result Code](#error-code)            |
| **`resultMsg`**   | **AN**   | **255**  | [Result Message](#error-code)         |
| **`tXid`**        | **AN**   | **30**   | Transaction ID                        |
| **`referenceNo`** | **ANS**  | **40**   | Merchant Ref. No                      |
| **`payMethod`**   | **N**    | **2**    | [Payment Method](#payment-method)     |
| **`amt`**         | **N**    | **12**   | Payment Amount                        |
| **`currency`**    | **A**    | **3**    | Currency                              |
| **`goodsNm`**     | **AN**   | **100**  | Goods Name                            |
| **`billingNm`**   | **A**    | **30**   | Buyer Name                            |
| **`transDt`**     | **N**    | **8**    | Transaction Date (YYYYMMDD)           |
| **`transTm`**     | **N**    | **6**    | Transaction Time (HH24MISS)           |
| **`description`** | **AN**   | **100**  | Transaction Description               |
| **`mitraCd`**     | **A**    | **4**    | [Mitra Code](#mitra-code)             |
| **`instmntMon`**  | **N**    | **2**    | Installment Month                     |
| **`instmntType`** | **N**    | **2**    | [Installment Type](#installment-type) |

## Confirm Receipt - Akulaku Only

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/confirmAkulaku`                                                                           |
| **Request Method** **application/x-www-form-urlencoded**  | `POST`                                                                                                        |
| **Description**                                           | Performs Receipt Confirmation for Fund Settlement.                                                            |
| **Merchant Token**                                        | SHA256(`timeStamp`+`tXid`+`iMid`+`merchantKey`)                                                               |

<aside class="notice">You should only Confirm Receipt after the customer have received the item.</aside>

<br>**AkuLaku Confirm Receipt Parameters**

| **Parameter**                      | **Type** | **Size** | Description                           | Example                          |
| --------------------------------   | -------- | -------- | ------------------------------------- | -------------------------------- |
| **`timeStamp`** **Required**       | **N**    | **14**   | Request Timestamp  (YYYYMMDDHH24MISS) | 20170708123456                   |
| **`tXid`** **Required**            | **AN**   | **30**   | Transaction ID                        | IONPAYTEST02201607291027025291   |
| **`iMid`** **Required**            | **AN**   | **10**   | Merchant ID                           | IONPAYTEST                       |
| **`merchantToken`** **Required**   | **ANS**  | **255**  | Merchant Token                        | 6cfccfc0046773c1b589d8e98f8...   |

### Response Parameters - AkuLaku Confirm Receipt

| **Parameter**             | **Type** | **Size** | Description                           |
| -----------------         | -------- | -------- | ------------------------------------- |
| **`resultCd`**            | **N**    | **4**    | [Result Code](#error-code)            |
| **`resultMsg`**           | **AN**   | **255**  | [Result Message](#error-code)         |
| **`ResponseData`**        | **AN**   | **30**   | null                                  |

