# Virtual Account
NICEPay offers Virtual Account as Payment Method. By using this method, customer will have the option to make payment via ATM, SMS Banking, Internet Banking, or Mobile Banking. 
Real time Notification will be sent when customer has completed the payment.<br>

Supported Bank:
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
  <li>ATM Bersama, Alto, Link and Prima
</ol>

Transaction Flow:
<ol type="1">
  <li>Merchant Request VA Registration to NICEPay.
  <li>Merchant Display VA Details and How-To-Pay to Customer.
  <li>NICEPay redirect to 3DS / MIGS Bank Page.
  <li>Customer Make Payment using Preferred Channel
  <li>NICEPay Send Notification
  <li>Merchant Handle Notification
</ol>

<div class="wrapper">
<ul>
  <li>
    <input type="checkbox" id="list-item-1">
    <label for="list-item-1" class="first">Virtual Account V2 Flow</label>
    <ul>
      <img src="/images/va-normal-v2-flow.png">
    </ul>
  </li>
</ul>
</div>

## Registration - Virtual Account

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/registration`                                                                             |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Performs Transaction Regist to NICEPAY                                                                        |        
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                  |

### Request Parameters - Virtual Account Registration

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

<aside class="notice">Please refer to <a href="#registration">Register API</a> for Complete Parameters, the parameters below are the additional that will be required for VA Registration</aside>

| Parameters     | **Type** | **Size** | **Description**                                          | Value    |
| -------------- | -------- | -------- | -------------------------------------------------------- | -------- |
| `payMethod`    | **AN**   | **2**    | **Virtual Account** **Required**                         | 02       |
| `bankCd`       | **A**    | **4**    | **Bank Code** **Required**                               | CENA     |
| `vacctValidDt` | **N**    | **8**    | **VA Expiry Date** *(YYYYMMDD)* **Required**             | 20200303 |
| `vacctValidTm` | **N**    | **6**    | **VA Expiry Time** *(HH24MISS)* **Required**             | 091309   |
| `merFixAcctld` | **AN**   | **40**   | **Merchant Reserved VA ID** **Required for Fix VA Type** | 000045   |

### Response Parameters - Virtual Account Registration

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

| Paramenter     | **Type** | Size    | Description                       |
| -------------- | -------- | ------- | --------------------------------- |
| `resultCd`     | **N**    | **4**   | [Result Code](#error-code)        |
| `resultMsg`    | **AN**   | **255** | [Result Message](#error-code)     |
| `tXid`         | **AN**   | **30**  | Transactionn ID                   |
| `referenceNo`  | **ANS**  | **40**  | Merchant Ref. No                  |
| `payMethod`    | **N**    | **2**   | [Payment Method](#payment-method) |
| `amt`          | **N**    | **12**  | Payment Amount                    |
| `transDt`      | **N**    | **8**   | Transaction Date (YYYYMMDD)       |
| `transTm`      | **N**    | **6**   | Transction Time (HH24MISS)        |
| `description`  | **AN**   | **100** | Transaction Description           |
| `bankCd`       | **A**    | **4**   | [Bank Code](#bank-code)           |
| `vacctNo`      | **N**    | **20**  | VA Number                         |
| `currency`     | **AN**   | **3**   | Currency                          |
| `goodsNm`      | **AN**   | **100** | Goods Name                        |
| `billingNm`    | **A**    | **30**  | Buyer Name                        |
| `vacctValidDt` | **N**    | **8**   | VA Expiry Date (YYYYMMDD)         |
| `vacctValidTm` | **N**    | **6**   | VA Expiry Time (HH24MISS)         |
