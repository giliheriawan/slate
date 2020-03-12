# Payment
## Specifications - Register

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/payment`                                                                                  |
| **Request Method** **application/x-www-form-urlencoded**  | `Popup`, `Redirect`, `Submit`                                                                                 |
| **Description**                                           | Performs Payment Request to NICEPAY                                                                           |
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                      |

**Payment Methods Available for Payment:**

| **Code** | **PayMethod**   | Description                                                                                 |
| -------- | --------------- | ------------------------------------------------------------------------------------------- |
| **`01`** | **Credit Card** | If 3DS / MIGS authentication is required, users will be redirected to the card issuer page. |
| **`04`** | **ClickPay**    | Redirect to Bank Page                                                                       |
| **`05`** | **E-Wallet**    | Redirect to E-Wallet Page / App Notification                                                |
| **`06`** | **Payloan**     | Redirect to Payloan Mitra Page                                                              |

<aside class="notice">Note: Before using the <code>Payment API</code>, please register your payment using <code>Registration API</code> first.</aside>

## Request Parameters - Payment

> Sample Request

```
https://dev.nicepay.co.id/nicepay/direct/v2/payment?timeStamp=20180302112151&tXid=TESTIDTEST01201803021122164984&merchantToken=b4171e8228be7a75d19ad29b509e76d5fc70a4c000ef87bc55cf0cda72767e72&cardNo=1234567890123456&cardExpYymm=2006&cardCvv=123&cardHolderNm=Thomas Alfa Edison&recurringToken=&preauthToken=&clickPayNo=&dataField3=&clickPayToken=&callBackUrl=https://merchant.com/callBackUrl
```

| **Parameter**                                   | **Type** | **Size** | Description                              | Example                           |
| ----------------------------------------------- | -------- | -------- | ---------------------------------------- | --------------------------------- |
| **`timeStamp`** **Required**                    | **N**    | **14**   | API Request Timestamp (YYYYMMDDHH24MISS) | 20170708123456                    |
| **`tXid`** **Required**                         | **AN**   | **30**   | Transaction ID                           | BMRITEST0102201607291027025291    |
| **`cardNo`** **Required for CC**                | **N**    | **20**   | Credit Card Number                       | 1234567890123450                  |
| **`cardExpYymm`** **Required for CC**           | **N**    | **4**    | Card Expiry (YYMM)                       | 2412                              |
| **`cardCvv`** **Required for CC**               | **N**    | **4**    | Card CVV                                 | 141                               |
| **`cardHolderNm`** **Required for CIMB**        | **A**    | **50**   | Card Holder Name                         | John Doe                          |
| **`recurringToken`** **Required for Recurring** | **AN**   | **64**   | Recurring Token                          | 9338d54573688ae18e175240b025...   |
| **`preauthToken`** **Required for Capture**     | **AN**   | **64**   | Pre-Auth Token                           | 9338d54573688ae18e175240b025...   |
| **`merchantToken`** **Required**                | **AN**   | **255**  | merchantToken                            | 6cfccfc0046773c1b589d8e98f8b59... |
| **`callBackUrl`** **Required**                  | **ANS**  | **255**  | Payment Result URL                       | https://merchant.com/callBackUrl  |
| **`clickPayNo`**                                | **N**    | **16**   | ClickPay No                              | 1234567890123450                  |
| **`dataField3`**                                | **N**    | **16**   | Token 3 for Clickpay                     | 123                               |
| **`clickPayToken`**                             | **N**    | **6**    | Code Response Token                      | 123456                            |

## Response Parameters - Payment

> Sample Response Parameter (Redirect to the callbackUrl)

```
https://merchant.com/callBackUrl?callbackUrl?resultCd=0000&resultMsg=SUCCESS&tXid=TESTIDTEST01201803021122164984&referenceNo=99997&payMethod=01&amt=10000&transDt=20180302&transTm=112216&description=Payment of referenceNo 99997&authNo=164984&issuBankCd=BMRI&issuBankNm=PT Bank Mandiri (Persero)&acquBankCd=BMRI&acquBankNm=PT Bank Mandiri (Persero)&cardNo=123456******3456&receiptCode=&mitraCd=&recurringToken=&preauthToken=&currency=IDR&goodsNm=Test Transaction Nicepay&billingNm=Customer Name&ccTransType=1&mRefNo=&instmntType=2&instmntMon=1&cardExpYymm=2006
```

| **Parameter**        | **Type** | **Size** | Description                           | Remark                                                       |
| -------------------- | -------- | -------- | ------------------------------------- | ------------------------------------------------------------ |
| **`resultCd`**       | **N**    | **4**    | [Result Code](#error-code)            |                                                              |
| **`resultMsg`**      | **AN**   | **255**  | [Result Message](#error-code)         |                                                              |
| **`tXid`**           | **AN**   | **30**   | Transaction ID                        | When success                                                 |
| **`referenceNo`**    | **ANS**  | **40**   | Merchant Order No                     | When success                                                 |
| **`payMethod`**      | **N**    | **2**    | [Payment Method](#payment-method)     | When success                                                 |
| **`amt`**            | **N**    | **12**   | Payment Amount                        | When success                                                 |
| **`currency`**       | **A**    | **3**    | Currency                              | When success                                                 |
| **`goodsNm`**        | **AN**   | **100**  | Goods Name                            | When success                                                 |
| **`billingNm`**      | **A**    | **30**   | Buyer Name                            | When success                                                 |
| **`transDt`**        | **N**    | **8**    | Transaction Date (YYYYMMDD)           | When success                                                 |
| **`transTm`**        | **N**    | **6**    | Transaction Time (HH24MISS)           | When success                                                 |
| **`description`**    | **AN**   | **100**  | Transaction Description               | When success                                                 |
| **`authNo`**         | **N**    | **10**   | Approval Number                       | When success, CC                                             |
| **`issuBankCd`**     | **A**    | **4**    | Issuer Bank Code                      | When success, CC                                             |
| **`acquBankCd`**     | **A**    | **4**    | Acquire Bank Code                     | When success, CC                                             |
| **`cardNo`**         | **ANS**  | **20**   | Masked Card No                        | When success, CC                                             |
| **`cardExpYymm`**    | **N**    | **4**    | Card Expiry (YYMM)                    | When success, CC                                             |
| **`instmntMon`**     | **N**    | **2**    | Installment Month                     | When success, CC                                             |
| **`instmntType`**    | **N**    | **2**    | [Installment Type](#installment-type) | When   success, CC                                           |
| **`recurringToken`** | **AN**   | **64**   | Recurring Payment Token               | When Success CC Recurring                                    |
| **`preauthToken`**   | **AN**   | **64**   | Pre-Auth Payment Token                | When Success CC Pre-Auth                                     |
| **`ccTransType`**    | **N**    | **2**    | Credit Card Transaction Type          | When Success, CC<br>`1`:  Normal<br>`2`: Recurring<br>`3`: Pre-auth<br>`4`:  Capture |
| **`vat`**            | **N**    | **12**   | Vat                                   | When Success, CC                                             |
| **`fee`**            | **N**    | **12**   | Service Fee                           | When Success, CC                                             |
| **`notaxAmt`**       | **N**    | **12**   | Tax-free Amount                       | When Success, CC                                             |
| **`mitraCd`**        | **A**    | **4**    | [Mitra Code](#mitra-code)             | When success   ClickPay, E-Wallet, Payloan                   |
| **`receiptCode`**    | **ANS**  | **20**   | Authrization No                       | When success ClickPay                                        |
| **`mRefNo`**         | **AN**   | **18**   | Bank Reference No                     | When success ClickPay                                        |
