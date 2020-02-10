# Credit Card
Integration Step :
<ol type="1">
  <li>Merchant Request Credit Card Registration to NICEPay.
  <li>Merchant Request Credit Card Payment to NICEPay.
  <li>NICEPay redirect to 3DS / MIGS Bank Page.
  <li>Customer input OTP in Bank Page.
  <li>NICEPay send notification
  <li>Merchant Handle notification
</ol>

## CC Registration

> Sample JSON Request

```json
{
	"timeStamp":"20180123100505",
	"iMid":"IONPAYTEST",
	"payMethod":"01",
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
	"merchantToken":"f9d30f6c972e2b5718751bd087b178534673a91bbac845f8a24e60e8e4abbbc5",
	"reqDomain":"merchant.com",
	"reqServerIP":"127.0.0.1",
	"userIP":"127.0.0.1",
	"userSessionID":"697D6922C961070967D3BA1BA5699C2C",
	"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/60.0.3112.101 Safari/537.36",
	"userLanguage":"ko-KR,en-US;q=0.8,ko;q=0.6,en;q=0.4",
	"instmntType":"2",
	"instmntMon":"1",
	"recurrOpt":"2"
}
```

> Sample JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "IONPAYTEST01201804191157304666",
    "referenceNo": "ORD12345",
    "payMethod": "01",
    "amt": "10000",
    "transDt": "20180419",
    "transTm": "115714",
    "description": null,
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

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/registration**
Method | POST, JSON
Description | Perform for Transaction Registration
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>Please refer to [here](#registration) for JSON parameters.<br>
Below for extra parameter will be required for Credit Card Registration:

Parameters | Mandatory | Type | Size | Value | Description
---------- | ---------- | ---------- | ---------- | ---------- | ----------
PayMethod | Y | AN | 2 | 01 | Credit Card (CC)
instmntType | Y | N | 2 | 2 | Default for full
instmntMon | Y | N | 2 | 1 | Default for full paid
recurrOpt | Y | N | 2 | 2 | Default for full paid

<br>**Response Json Object**

Paramenter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transactionn ID (Key from NICEPay)
referenceNo | ANS | 40 | Merchant order N. (Key from merchant)
payMethod | N | 2 | Payment Method
amt | N | 12 | Payment amount
transDt | N | 8 | Transaction date (YYYYMMDD)
transTm | N | 6 | Transction time (HH24MISS)
description | AN | 100 | Transaction description

## CC Payment
>Sample POST Request Parameter
>
> `timeStamp=20180123100505&tXid=IONPAYTEST01201804191202084760&merchantToken=f9d30f6c972e2b5718751bd087b178534673a91bbac845f8a24e60e8e4abbbc5&cardNo=4222222222222222&cardExpYymm=2006&cardCvv=123&cardHolderNm=Thomas Alfa Edison&callBackUrl=http://merchant.com/callbackUrl`


> Sample callbackUrl with parameter will be POST
>
> referenceNo: ORD12345<br>
> authNo: 084760<br>
> ccTransType: 1<br>
> mRefNo: <br>
> issuBankCd: BMRI<br>
> issuBankNm: PT Bank Mandiri (Persero)<br>
> tXid: IONPAYTEST01201804191202084760<br>
> transTm: 120208<br>
> mitraCd: <br>
> recurringToken: <br>
> resultCd: 0000<br>
> transDt: 20180419<br>
> acquBankCd: BMRI<br>
> acquBankNm: PT Bank Mandiri (Persero)<br>
> instmntType: 2<br>
> instmntMon: 1<br>
> payMethod: 01<br>
> receiptCode: <br>
> cardExpYymm: 2012<br>
> cardNo: 422222******2222<br>
> description: <br>
> resultMsg: SUCCESS<br>
> goodsNm: Test Transaction Nicepay<br>
> preauthToken: <br>
> amt: 10000<br>
> billingNm: Customer Name<br>
> currency: IDR<br>


CC Payment can be process if [CC Registration](#cc-registration) is **Success**

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/payment**
Method | POST (Popup, Redirect, Submit, etc) [not server to server API]
Description | Perform for Transaction Registration
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>Please refer to [here](#payment) for request JSON Desc and and response parameters<br>
**Mandatory POST parameters**

Parameter | Mandatory | Type | Size | Description
---------- | ---------- | ---------- | ---------- | ----------
timeStamp | Y | N | 14 | API Request Date
tXid | Y | AN | 30 | Transaction ID
cardNo | Y | N | 20 | Full card number
cardExpYymm | Y | N | 4 | card expiry(YYMM)
cardCvv | Y | N | 4 | card CVV
cardHolderNm | Y (CIMB) | AN | 50 | Card Holder Name
merchantToken | Y | AN | 255 | merchantToken
callBackUrl | Y | AN | 255 | Payment result forward url (on browser)

<br>**Response POST Paramenter (redirect to callbackUrl)**

Paramenter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transaction ID (Key from NICEPay)
referenceNo | ANS | 40 | Merchant order NO. (Key from merchant)
payMethod | N | 2 | Payment Method
amt | N | 12 | Payment amount
transDt | N | 8 | Transaction date (YYYYMMDD)
transTm | N | 6 | Transaction time (HH24MISS)
description | AN | 100 | Transaction description
authNo | N | 10 | Approval number
issuBankCd | A | 4 | Issue Bank Code. Refer Code at [Here](#bank-code)
issuBankNm | A | &nbsp; | Issue Bank Name.
acquBankCd | A | 4 | Acquire Bank Code. Refer Code at [Here](#bank-code)
acquBankNm | A | &nbsp; | Acquire Bank Name.
cardNo | N | 20 | Card NO. with masking
cardExpYymm | N | 4 | Card Expiry (YYMM)
currency | AN | 3 | Currency
goodsNm | AN | 100 | Goods name
billingNm | A | 30 | Billing name
ccTransType | AN | 2 | Credit card transaction type
instmntType | N | 2 | Installment Type. Refer Code at [Here](#installment-type)
instmntMon | N | 2 | Insatllment month
