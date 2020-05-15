# Convenience Store
NICEPay menyediakan Toserba (Indomaret dan Alfamart Group) sebagai metode pembayaran. 
Dengan menggunakan Fitur ini, pelanggan akan dapat melakukan pembayaran melalui gerai-gerai Mitra Toserba di Seluruh Indonesia. 
Notifikasi real-time secara langsung akan dikirimkan ketika pembayaran berhasil.<br>

Mitra Toserba NICEPay:
<ol type="1">
  <li>Alfamart
  <li>Indomaret
  <li>Lawson
  <li>Alfamidi
  <li>Dan+Dan Store
</ol>

Alur Transaksi:
<ol type="1">
  <li>Merchant melakukan Request ke API Register NICEPay.
  <li>Merchant menampilkan detail Pembarayan Toserba dan cara melakukan pembayaran untuk pembeli.
  <li>Pembeli melakukan pembayaran di gerai Mitra Toserba terdekat.
  <li>NICEPay akan mengirimkan Notifikasi setelah transaksi selesai.
  <li>Merchant mengolah Notifikasi yang didapatkan.
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

## Registrasi - Convenience Store

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/registration`                                                                             |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Request Registrasi Transaksi ke NICEPAY                                                                       |        
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                  |

### Request Parameters - Registrasi Convenience Store

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

<aside class="notice">Mohon merujuk kepada <a href="#registration">Register API</a> untuk Parameter yang lengkap, Parameter di bawah merupakah tambahan yang dibutuhkan untuk Registrasi Convenience Store.</aside>

| **Parameters**                | **Type** | **Size** | Description                 | Example  |
| ----------------------------- | -------- | -------- | --------------------------- | -------- |
| **`payMethod`** **Required**  | **N**    | **2**    | Convenience Store (CVS)     | 03       |
| **`mitraCd`** **Required**    | **A**    | **4**    | [Mitra Code](#mitra-code)   | ALMA     |
| **`payValidDt`** **Required** | **N**    | **8**    | CVS Expiry Date  (YYYYMMDD) | 20200404 |
| **`payValidTm`** **Required** | **N**    | **6**    | CVS Expiry Time  (HH24MISS) | 091309   |

### Response Parameters - Registrasi Convenience Store

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

| **Parameter**     | **Type** | **Size** | Description                       |
| ----------------- | -------- | -------- | --------------------------------- |
| **`resultCd`**    | **N**    | **4**    | [Result Code](#error-code)        |
| **`resultMsg`**   | **AN**   | **255**  | [Result Message](#error-code)     |
| **`tXid`**        | **AN**   | **30**   | Transactionn ID                   |
| **`referenceNo`** | **ANS**  | **40**   | Merchant Ref. No                  |
| **`payMethod`**   | **N**    | **2**    | [Payment Method](#payment-method) |
| **`amt`**         | **N**    | **12**   | Payment Amount                    |
| **`transDt`**     | **N**    | **8**    | Transaction Date (YYYYMMDD)       |
| **`transTm`**     | **N**    | **6**    | Transaction Time (HH24MISS)       |
| **`description`** | **AN**   | **100**  | Transaction Description           |
| **`mitraCd`**     | **A**    | **4**    | [Mitra Code](#mitra-code)         |
| **`payNo`**       | **N**    | **12**   | CVS Payment No.                   |
| **`payValidDt`**  | **N**    | **8**    | VA Expiry Date (YYYYMMDD)         |
| **`payValidTm`**  | **N**    | **6**    | VA Expiry Time (HH24MISS)         |
