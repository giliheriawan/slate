# Cek Status
## Spesifikasi - Cek Status

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/inquiry`                                                                                  |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Melakukan Request untuk Cek Status.                                                                           |
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                  |

<aside class="notice">Ketika Notifikasi di <code>dbProcessUrl</code> sudah diterima, sangat disarankan bagi Merchant untuk melakukan verifikasi menggunakan Inquiry API ini.</aside>

## Request Parameters - Cek Status

> Sample JSON Request

```json
{
	"timeStamp":"20180305115011",
	"tXid":"TESTIDTEST05201803051150375209",
	"iMid":"TESTIDTEST",
	"referenceNo":"ORD12345",
	"amt":"10000",
	"merchantToken":"a1b747ad8ce72461de6194e1fff3ef5b5022b957d9003d14b52f4d52b5b55fe8"
}
```

| **Parameter**                    | **Type** | **Size** | Description                         | Example                          |
| -------------------------------- | -------- | -------- | ----------------------------------- | -------------------------------- |
| **`timeStamp`** **Required**     | **N**    | **14**   | API Request Date (YYYYMMDDHH24MISS) | 20170708123456                   |
| **`tXid`** **Required**          | **AN**   | **30**   | Transaction Id                      | IONPAYTEST02201607291027025291   |
| **`iMid`** **Required**          | **AN**   | **10**   | Merchant Id                         | IONPAYTEST                       |
| **`referenceNo`** **Required**   | **ANS**  | **40**   | Merchant Order No                   | OrdNo20160525000-52104           |
| **`amt`** **Required**           | **N**    | **12**   | Transaction Amount                  | 1000                             |
| **`merchantToken`** **Required** | **AN**   | **255**  | merchantToken                       | 6cfccfc0046773c1b89d8e98f8b59... |

## Response Parameters - Cek Status

> Contoh JSON Response

```json
{
    "tXid": "TESTIDTEST05201803051150375209",
    "iMid": "TESTIDTEST",
    "currency": "IDR",
    "amt": "10000",
    "instmntMon": null,
    "instmntType": "1",
    "referenceNo": "ORD12345",
    "goodsNm": "Test Transaction Nicepay",
    "payMethod": "05",
    "billingNm": "Customer Name",
    "reqDt": "20180305",
    "reqTm": "115037",
    "status": "9",
    "resultCd": "0000",
    "resultMsg": "init",
    "cardNo": null,
    "preauthToken": null,
    "acquBankCd": null,
    "issuBankCd": null,
    "vacctValidDt": null,
    "vacctValidTm": null,
    "vacctNo": null,
    "bankCd": null,
    "payNo": null,
    "mitraCd": null,
    "receiptCode": null,
    "cancelAmt": null,
    "transDt": null,
    "transTm": null,
    "recurringToken": null,
    "ccTransType": null,
    "payValidDt": null,
    "payValidTm": null,
    "mRefNo": null,
    "acquStatus": null,
    "cardExpYymm": null,
    "acquBankNm": null,
    "issuBankNm": null,
    "depositDt": null,
    "depositTm": null
}
```

| **Parameter**     | **Type** | **Size** | Description                                |
| ----------------- | -------- | -------- | ------------------------------------------ |
| **`resultCd`**    | **N**    | **4**    | [Result Code](#error-code)                 |
| **`resultMsg`**   | **AN**   | **255**  | [Result Message](#error-code)              |
| **`tXid`**        | **AN**   | **30**   | Transaction Id                             |
| **`iMid`**        | **AN**   | **10**   | Merchant Id                                |
| **`referenceNo`** | **ANS**  | **40**   | Merchant Order No                          |
| **`payMethod`**   | **N**    | **2**    | [Payment Method](#payment-method)          |
| **`amt`**         | **N**    | **12**   | Payment amount                             |
| **`cancelAmt`**   | **N**    | **12**   | Cancel amount                              |
| **`reqDt`**       | **N**    | **8**    | Transaction request date (YYYYMMDD)        |
| **`reqTm`**       | **N**    | **6**    | Transaction request time (HH24MISS)        |
| **`transDt`**     | **N**    | **8**    | Transaction date (YYYYMMDD)                |
| **`transTm`**     | **N**    | **6**    | Transaction time (HH24MISS)                |
| **`depositDt`**   | **N**    | **8**    | Transaction deposit date (YYYYMMDD)        |
| **`depositTm`**   | **N**    | **6**    | Transaction deposit time (HH24MISS)        |
| **`currency`**    | **A**    | **3**    | Currency                                   |
| **`goodsNm`**     | **AN**   | **100**  | Goods Name                                 |
| **`billingNm`**   | **A**    | **30**   | Buyer name                                 |
| **`status`**      | **N**    | **1**    | [Transaction Status](#payment-status-code) |

### Parameter Response Tambahan - Credit Card

| **Parameter**        | **Type** | **Size** | Description                                                  |
| -------------------- | -------- | -------- | ------------------------------------------------------------ |
| **`authNo`**         | **N**    | **10**   | Approval Number                                              |
| **`issuBankCd`**     | **A**    | **4**    | Issuer [Bank Code](#bank-code)                               |
| **`acquBankCd`**     | **A**    | **4**    | Acquire [Bank Code](#bank-code)                              |
| **`cardNo`**         | **ANS**  | **20**   | Masked Card Number                                           |
| **`cardExpYymm`**    | **N**    | **4**    | Card Expiration (YYMM)                                       |
| **`instmntMon`**     | **N**    | **2**    | Installment Month                                            |
| **`instmntType`**    | **N**    | **2**    | [Installment Type](#installment-type)                        |
| **`preauthToken`**   | **AN**   | **255**  | Pre-Auth Token (Needed for Capture Payment)                  |
| **`recurringToken`** | **AN**   | **255**  | Recurring Token (Needed for Recurring Payment)               |
| **`ccTransType`**    | **N**    | **2**    | Credit Card Transaction Type                                 |
| **`acquStatus`**     | **N**    | **2**    | Purchase Status<br>1: Normal<br>2: Recurring<br>3: Pre-auth<br>4: Capture |
| **`vat`**            | **N**    | **12**   | Vat                                                          |
| **`fee`**            | **N**    | **12**   | Service Fee                                                  |
| **`notaxAmt`**       | **N**    | **12**   | Tax-free Amount                                              |

### Parameter Response Tambahan - Virtual Account

| **Parameter**      | **Type** | **Size** | Description                 |
| ------------------ | -------- | -------- | --------------------------- |
| **`bankCd`**       | **A**    | **4**    | [Bank Code](#bank-code)     |
| **`vacctNo`**      | **N**    | **16**   | Bank Virtual Account Number |
| **`vacctValidDt`** | **N**    | **8**    | VA expiry date (YYYYMMDD)   |
| **`vacctValidTm`** | **N**    | **6**    | VA expiry time (HH24MISS)   |

### Parameter Response Tambahan - Others

| **Parameter**     | **Type** | **Size** | Description                                                  |
| ----------------- | -------- | -------- | ------------------------------------------------------------ |
| **`mitraCd`**     | **A**    | **4**    | [Mitra code](#mitra-code)<br>(CVS, ClickPay, E-Wallet, Payloan) |
| **`payNo`**       | **N**    | **12**   | CVS number (CVS)                                             |
| **`payValidDt`**  | **N**    | **8**    | CVS expiry date  (YYYYMMDD) (CVS)                            |
| **`payValidTm`**  | **N**    | **6**    | CVS expiry time (HH24MISS) (CVS)                             |
| **`receiptCode`** | **ANS**  | **20**   | Authorization code (CVS)                                     |
| **`mRefNo`**      | **AN**   | **20**   | Bank reference No (ClickPay)                                 |
