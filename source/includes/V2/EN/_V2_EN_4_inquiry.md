# Order Status (Inquiry)

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

> Sample JSON Response

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

This API is for request to check status of transaction. Merchant can check order status using inquiry API. when merchant receive notification, NICEPay strongly to recommend for the Merchant re-check the transaction using the Inquiry API.

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/inquiry**
Method | POST, JSON
Description | Order Status Inquiry
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + Merchant Key)

<br>**Request Json Object**

Parameter | Mandatory | Type | Size | Description
---------- | ---------- | ---------- | ---------- | ----------
timeStamp | Y | N | 14 | API Request Date
tXid | Y | AN | 30 | Transaction Id
iMid | Y | AN | 10 | Merchant Id
referenceNo | Y | ANS | 40 | Merchant Order No
amt | Y | N | 12 | Transaction  Amount
merchantToken | Y | AN | 255 | merchantToken

<br>**Response Json Object**

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result Code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transaction Id(Key from NICEPay)
iMid | AN | 10 | Merchant Id
referenceNo | ANS | 40 | Merchant Order No(Key from merchant)
payMethod | N | 2 | Payment Method
amt | N | 12 | Payment amount
cancelAmt | N | 12 | Cancel amount
reqDt | N | 8 | Transaction request date(YYYYMMDD)
reqTm | N | 6 | Transaction request time(HH24MISS)
transDt | N | 8 | Transaction date(YYYYMMDD)
transTm | N | 6 | Transaction time(HH24MISS)
depositDt | N | &nbsp; | Transaction deposit date(YYYYMMDD)
depositTm | N | &nbsp; | Transaction deposit time(HH24MISS)
currency | AN | 3 | currency
goodsNm | AN | 100 | Goods Name
billingNm | AN | 30 | Buyer name
status | N | 1 | Transaction status, refer Code at [Here](#payment-status-code)

<br>**Additional Credit Card Response Json Object**

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
authNo | N | 10 | Approval Number
issuBankCd | A | 4 | Issue Bank Code, refer Code at [Here](#bank-code)
acquBankCd | A | 4 | Acquire Bank Code, refer Code at [Here](#bank-code)
cardNo | AN | 20 | Card No with masking
cardExpYymm | N | 4 | card expiry(YYMM)
instmntMon | N | 2 | Installment month
instmntType | N | 2 | Installment Type, refer Code at [Here](#installment-type)
preauthToken | AN | 255 | Pre-Auth Token (need for capture)
recurringToken | AN | 255 | Recurring Token (Can use next payment)
ccTransType | AN | 2 | Credit Card Transaction Type
acquStatus | AN | 2 | Purchase Status<br>1: Normal<br>2: Recurring<br>3: Pre-auth<br>4: Capture
vat | N | 12 | Vat
fee | N | 12 | service fee
notaxAmt | N | 12 | tax free amount

<br>**Additional Virtual Account Response Json Object**

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
bankCd | AN | 4 | Bank Code, refer Code at [Here](#bank-code)
vacctNo | N | 16 | Bank Virtual Account number
vacctValidDt | N | 8 | VA expiry date (YYYYMMDD)
vacctValidTm | N | 6 | VA expiry time (HH24MISS)

<br>**Additional Others Response Json Object**

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
mitraCd | A | 4 | Mitra code, refer Code at [Here](#mitra-code)<br>(CVS, ClickPay, E-Wallet)
payNo | N | 12 | CVS number (CVS)
payValidDt | N | 8 | CVS expiry date  (YYYYMMDD) (CVS)
payValidTm | N | 6 | CVS expiry time (HH24MISS) (CVS)
mRefNo | AN | 20 | Bank reference No (CVS)
receiptCode | ANS | 18 | Authorization code (CVS)