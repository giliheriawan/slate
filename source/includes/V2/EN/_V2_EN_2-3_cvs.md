# Convenience Store
NICEPay offers Convenience Store as a Payment Method. Notification will be sent real-time when customer has completed the payment.<br>

Supported CVS by NICEPay:
<ol type="1">
  <li>Alfamart
  <li>Indomaret
  <li>Lawson
  <li>Alfamidi
  <li>Dan+Dan Store
</ol>

Transaction Flow:
<ol type="1">
  <li>Merchant Request CVS Registration to NICEPay.
  <li>Merchant Display CVS Details and How-To-Pay to Customer.
  <li>Customer Make Payment at preferred Convenience Store.
  <li>NICEPay Send Notification
  <li>Merchant Handle Notification
</ol>

<div class="wrapper">
<ul>
  <li>
    <input type="checkbox" id="list-item-cvsv2">
    <label for="list-item-cvsv2" class="first">Convenience Store V2 Flow</label>
    <ul>
      <img src="/images/cvs-normal-v2-flow.png">
    </ul>
  </li>
</ul>
</div>

## Registration - Convenience Store

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/registration`                                                                             |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Performs Transaction Regist to NICEPAY                                                                        |        
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                  |

### Request Parameters - Convenience Store Registration

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

<aside class="notice">Please refer to <a href="#registration">Register API</a> for Complete Parameters, the parameters below are the additional that will be required for CVS Registration</aside>

| Parameters   | **Type** | **Size** | **Description**                               | Example  |
| ------------ | -------- | -------- | --------------------------------------------- | -------- |
| `payMethod`  | **N**    | **2**    | **Convenience Store (CVS)** **Required**      | 03       |
| `mitraCd`    | **A**    | **4**    | **[Mitra Code](#mitra-code)** **Required**    | ALMA     |
| `payValidDt` | **N**    | **8**    | **CVS Expiry Date** **Required** *(YYYYMMDD)* | 20200404 |
| `payValidTm` | **N**    | **6**    | **CVS Expiry Time** **Required** *(HH24MISS)* | 091309   |

### Response Parameters - Convenience Store Registration

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

| Parameter     | **Type** | **Size** | Description                       |
| ------------- | -------- | -------- | --------------------------------- |
| `resultCd`    | **N**    | **4**    | [Result Code](#error-code)        |
| `resultMsg`   | **AN**   | **255**  | [Result Message](#error-code)     |
| `tXid`        | **AN**   | **30**   | Transactionn ID                   |
| `referenceNo` | **ANS**  | **40**   | Merchant Ref. No                  |
| `payMethod`   | **N**    | **2**    | [Payment Method](#payment-method) |
| `amt`         | **N**    | **12**   | Payment Amount                    |
| `transDt`     | **N**    | **8**    | Transaction Date (YYYYMMDD)       |
| `transTm`     | **N**    | **6**    | Transaction Time (HH24MISS)       |
| `description` | **AN**   | **100**  | Transaction Description           |
| `mitraCd`     | **A**    | **4**    | [Mitra Code](#mitra-code)         |
| `payNo`       | **N**    | **12**   | CVS Payment No.                   |
| `payValidDt`  | **N**    | **8**    | VA Expiry Date (YYYYMMDD)         |
| `payValidTm`  | **N**    | **6**    | VA Expiry Time (HH24MISS)         |
