# Payment
## Specifications - Register API V2

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/payment`                                                                                  |
| **Request Method** **application/x-www-form-urlencoded**  | `Popup`, `Redirect`, `Submit`                                                                                 |
| **Description**                                           | Performs Payment Request to NICEPAY                                                                           |
| **Merchant Token**                                        | SHA256(`timeStamp``iMid``referenceNo``amt``merchantKey`)                                                      |

**Payment Methods:**

| **Code** | **PayMethod**   | Description                                                                                 |
| -------- | --------------- | ------------------------------------------------------------------------------------------- |
| **`01`** | **Credit Card** | If 3DS / MIGS authentication is required, users will be redirected to the card issuer page. |
| **`04`** | **ClickPay**    | Redirect to Bank Page                                                                       |
| **`05`** | **E-Wallet**    | Redirect to E-Wallet Page / App Notification                                                |
| **`06`** | **Payloan**     | Redirect to Payloan Mitra Page                                                              |

<aside class="notice">Note: Before using the <code>Payment API</code>, please register your payment using <code>Registration API</code> first.</aside>

## Request Parameters - Payment API V2

> Sample JSON Request

```
https://dev.nicepay.co.id/nicepay/direct/v2/payment?timeStamp=20180302112151&tXid=TESTIDTEST01201803021122164984&merchantToken=b4171e8228be7a75d19ad29b509e76d5fc70a4c000ef87bc55cf0cda72767e72&cardNo=1234567890123456&cardExpYymm=2006&cardCvv=123&cardHolderNm=Thomas Alfa Edison&recurringToken=&preauthToken=&clickPayNo=&dataField3=&clickPayToken=&callBackUrl=https://merchant.com/callBackUrl
```

Parameter | Mandatory | Type | Size | Description
---------- | ---------- | ---------- | ---------- | ----------
timeStamp | Y | N | 14 | API Request Date
tXid | Y | AN | 30 | Transaction ID
cardNo | CC | N | 20 | Full card number
cardExpYymm | CC | N | 4 | card expiry(YYMM)
cardCvv | CC | N | 4 | card CVV
cardHolderNm | CC CIMB | AN | 50 | Card Holder Name
recurringToken | CC | AN | 64 | Recurring Token
preauthToken | CC | AN | 64 | Pre-Auth Token
clickPayNo | ClickPay | N | 16 | ClickPay number
dataField3 | ClickPay | N | 16 | Token input 3 for clickpay
clickPayToken | ClickPay | N | 6 | Code response from token
merchantToken | Y | AN | 255 | merchantToken
callBackUrl | Y | AN | 255 | Payment result forward url (on browser)

## Response Parameters - Payment API V2

> Sample Response Parameter (Redirect to the callbackUrl)

```
https://merchant.com/callBackUrl?callbackUrl?resultCd=0000&resultMsg=SUCCESS&tXid=TESTIDTEST01201803021122164984&referenceNo=99997&payMethod=01&amt=10000&transDt=20180302&transTm=112216&description=Payment of referenceNo 99997&authNo=164984&issuBankCd=BMRI&issuBankNm=PT Bank Mandiri (Persero)&acquBankCd=BMRI&acquBankNm=PT Bank Mandiri (Persero)&cardNo=123456******3456&receiptCode=&mitraCd=&recurringToken=&preauthToken=&currency=IDR&goodsNm=Test Transaction Nicepay&billingNm=Customer Name&ccTransType=1&mRefNo=&instmntType=2&instmntMon=1&cardExpYymm=2006
```

Parameter | Type | Size | Description | Remark
---------- | ---------- | ---------- | ---------- | ----------
resultCd | N | 4 | result code | 
resultMsg | AN | 255 | Result Message | 
tXid | AN | 30 | Transaction Id (Key from NICEPay)
referenceNo | ANS | 40 | Merchant Order No (Key from merchant)
payMethod | N | 2 | Payment Method | When success
amt | N | 12 | Payment amount | When success
currency | AN | 3 | currency | When success
goodsNm | AN | 100 | Goods Name | When success
billingNm | AN | 30 | Buyer name | When success
transDt | N | 8 | Transaction date (YYYYMMDD) | When success
transTm | N | 6 | Transaction time (HH24MISS) | When success
description | AN | 100 | Transaction Description  | When success
authNo | N | 10 | Approval number | When success, CC
issuBankCd | A | 4 | Issuer Bank Code | When success, CC. Refer Code at [Here](#bank-code)
issuBankNm | A | &nbsp; | Issuer Bank Name | When success, CC. 
acquBankCd | A | 4 | Acquire Bank Code | When success, CC. Refer Code at [Here](#bank-code)
acquBankNm | A | &nbsp; | Acquire Bank Name | When success, CC. 
cardNo | AN | 20 | Card No with masking | When success, CC
cardExpYymm | N | 4 | card expiry(YYMM) | When success, CC
instmntMon | N | 2 | Installment month | When success, CC
instmntType | N | 2 | Installment Type | When success, CC Refer Code at [Here](#installment-type)
recurringToken | AN | 64 | Token that using recurring payment | When Success CC Recurring
preauthToken | AN | 64 | Token that using Capture process | When Success CC Pre-Auth
ccTransType | AN | 2 | Credit Card Transaction Type | When Success, CC<br>1: Normal<br>2: Recurring<br>3: Pre-auth<br>4: Capture
vat | N | 12 | Vat | When Success, CC
fee | N | 12 | service fee | When Success, CC
notaxAmt | N | 12 | tax free amount | When Success, CC
mitraCd | AN | 4 | Mitra Code | When success ClickPay, E-Wallet. Refer Code at [Here](#mitra-code)
receiptCode | ANS | 20 | Authrization number | When success ClickPay
mRefNo | AN | 18 | Bank Reference No | When success ClickPay
