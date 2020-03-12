# ClickPay
NICEPay offers ClickPay as Payment Method.

Supported ClickPay by NICEPay:
<ol type="1">
  <li>Mandiri Clickpay
  <li>CIMB Clicks
  <li>BCA KlikPay
</ol>

Transaction Flow :
<ol type="1">
  <li>Merchant Request ClickPay Registration to NICEPay.
  <li>Merchant Request ClickPay Payment to NICEPay.
  <li>NICEPay will redirect to Bank Page.
  <li>Customer pay ClickPay in Bank Page.
  <li>NICEPay Send Notification.
  <li>Merchant Handles Notification.
</ol>

<div class="wrapper">
<ul>
  <li>
    <input type="checkbox" id="list-item-cpayv2">
    <label for="list-item-cpayv2" class="first">Click Pay V2 Flow</label>
    <ul>
      <img src="/images/cpay-normal-v2-flow.png">
    </ul>
  </li>
</ul>
</div>

## Registration - ClickPay

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/registration`                                                                             |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Performs Transaction Regist to NICEPAY                                                                        |        
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                  |

### Request Parameters - ClickPay Registration

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

<aside class="notice">Please refer to <a href="#registration">Register API</a> for Complete Parameters, the parameters below are the additional that will be required for ClickPay Registration</aside>

| **Parameters**               | **Type** | **Size** | Description                | Example |
| ---------------------------- | -------- | -------- | -------------------------- | ------- |
| **`payMethod`** **Required** | **N**    | **2**    | ClickPay                   | 04      |
| **`mitraCd`** **Required**   | **A**    | **4**    | [Mitra code](#mitra-code)  | CIMC    |
| **`mRefNo`**                 | **AN**   | **18**   | ClickPay CIMB Reference No |         |

### Response Parameters - ClickPay Registration
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

| **Parameter**     | **Type**| **Size** | Description                       |
| ----------------- | ------- | -------- | --------------------------------- |
| **`resultCd`**    | **N**   | **4**    | [Result Code](#error-code)        |
| **`resultMsg`**   | **AN**  | **255**  | [Result Message](#error-code)     |
| **`tXid`**        | **AN**  | **30**   | Transactionn ID                   |
| **`referenceNo`** | **ANS** | **40**   | Merchant Ref. No                  |
| **`payMethod`**   | **N**   | **2**    | [Payment Method](#payment-method) |
| **`amt`**         | **N**   | **12**   | Payment Amount                    |
| **`transDt`**     | **N**   | **8**    | Transaction Date (YYYYMMDD)       |
| **`transTm`**     | **N**   | **6**    | Transction Time (HH24MISS)        |
| **`description`** | **AN**  | **100**  | Transaction Description           |

## Payment - ClickPay

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/payment`                                                                                  |
| **Request Method** **application/x-www-form-urlencoded**  | `Popup`, `Redirect`, `Submit`                                                                                 |
| **Description**                                           | Performs Payment Request to NICEPAY                                                                           |
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                  |

> Sample POST Parameter Request
>
> `callBackUrl=http://merchant.com/callbackUrl&tXid=TESTIMIDTEST01201803020917502088&timeStamp=20180305105635&merchantToken=58161e87726ecf5cdaed5462a994d9bf05172d786c1cbfe0ad03e133c5797645&clickPayNo=1234567890123456&dataField3=123&clickPayToken=123456`

<aside class="notice">Payment can only be processed after <a href="#registration-clickpay">Registration</a>.</aside>

<br>**ClickPay Payment Parameters**

| **Parameter**       | Type   | **Size** | Description                              | Example                          |
| ------------------- | ------ | -------- | ---------------------------------------- | -------------------------------- |
| **`timeStamp`**     | **N**  | **14**   | API Request Timestamp (YYYYMMDDHH24MISS) | 20170708123456                   |
| **`tXid`**          | **AN** | **30**   | Transaction ID                           | IONPAYTEST02201607291027025291   |
| **`clickPayNo`**    | **N**  | **16**   | ClickPay No                              | 1234567890123456                 |
| **`dataField3`**    | **N**  | **16**   | ClickPay Token 3                         | 123                              |
| **`clickPayToken`** | **N**  | **6**    | Code Response Token                      | 123456                           |
| **`merchantToken`** | **AN** | **255**  | merchantToken                            | 9338d54573688ae18e175240b02...   |
| **`callBackUrl`**   | **ANS**| **255**  | Payment Result Url                       | https://merchant.com/callBackUrl |

### Response Parameters - ClickPay Payment

> Sample Response to callbackUrl with parameter
>
> `http://merchant.com/callbackUrl?resultCd=0000&resultMsg=SUCCESS&tXid=TESTIMIDTEST01201803020917502088&referenceNo=ORD12345&payMethod=04&amt=10000&transDt=20180302&transTm=151052&description=Transaction Description&receiptCode=0684G143372548&mitraCd=MDRC&currency=IDR&goodsNm=Test Transaction Nicepay&billingNm=Customer Name&mRefNo=2017514268567`


| **Parameter**     | **Type** | Size    | Description                       |
| ----------------- | -------- | ------- | --------------------------------- |
| **`resultCd`**    | **N**    | **4**   | [Result Code](#error-code)        |
| **`resultMsg`**   | **AN**   | **255** | [Result Message](#error-code)     |
| **`tXid`**        | **AN**   | **30**  | Transaction ID                    |
| **`referenceNo`** | **ANS**  | **40**  | Merchant Ref. No                  |
| **`payMethod`**   | **N**    | **2**   | [Payment Method](#payment-method) |
| **`amt`**         | **N**    | **12**  | Payment Amount                    |
| **`currency`**    | **A**    | **3**   | Currency                          |
| **`goodsNm`**     | **AN**   | **100** | Goods Name                        |
| **`billingNm`**   | **A**    | **30**  | Buyer Name                        |
| **`transDt`**     | **N**    | **8**   | Transaction Date (YYYYMMDD)       |
| **`transTm`**     | **N**    | **6**   | Transaction Time (HH24MISS)       |
| **`description`** | **AN**   | **100** | Transaction Description           |
| **`mitraCd`**     | **A**    | **4**   | [Mitra Code](#mitra-code)         |
| **`receiptCode`** | **ANS**  | **20**  | Authrization Number               |
| **`mRefNo`**      | **AN**   | **18**  | Bank Reference No                 |
