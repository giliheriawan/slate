# Registration

> Sample **cartData** JSON

```json
{
    "count": "2",  
    "item": [  
        {
            "img_url": "http://img.aaa.com/ima1.jpg",  
            "goods_name": "Item 1 Name",
            "goods_detail": "Item 1 Detail",
            "goods_amt": "700"
        },  
	    {
            "img_url": "http://img.aaa.com/ima2.jpg",
            "goods_name": "Item 2 Name",
            "goods_detail": "Item 2 Detail",
            "goods_amt": "300"
        }  
        ] 
} 
```

> Sample JSON Request

```json
{
	"deliveryPhone":"62-21-0000-0000",
	"mitraCd":"ALMA",
	"fee":"0",
	"amt":"1000",
	"description":"this is test transaction!!",
	"notaxAmt":"0",
	"reqDomain":"localhost",
	"userLanguage":"ko-KR,en-US;q=0.8,ko;q=0.6,en;q=0.4",
	"vacctValidDt":"",
	"billingEmail":"no-reply@ionpay.net",
	"merFixAcctId":"",
	"payMethod":"01",
	"deliveryAddr":"Jalan Jenderal Gatot Subroto Kav.57",
	"billingCountry":"ID",
	"userIP":"0:0:0:0:0:0:0:1",
	"instmntMon":"1",
	"currency":"IDR",
	"payValidDt":"",
	"deliveryCity":"Jakarta",
	"merchantToken":"b5149659e1a2f1271fb0833f8ea20e174b6fd389db26bc6ad036cc0dae6fa797",
	"goodsNm":"T-1000",
	"referenceNo":"OrdNo2017717942577",
	"vat":"0",
	"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/60.0.3112.101 Safari/537.36",
	"billingState":"Jakarta",
	"userSessionID":"697D6922C961070967D3BA1BA5699C2C",
	"instmntType":"1",
	"deliveryNm":"HongGilDong",
	"deliveryPostCd":"12950",
	"reqClientVer":"",
	"iMid":"IONPAYTEST",
	"billingNm":"HongGilDong",
	"timeStamp":"20170822170942",
	"dbProcessUrl":"http://127.0.0.1:8080/nicepay/test3/dbProcess.do",
	"payValidTm":"",
	"cartData":"{“count”: “1”,“item”: [{“img_url”: “https://www.lecs.com/image/introduction/img_vmd020101.jpg”,“goods_name”: “Jam Tangan Army - Strap Kulit - Hitam”,“goods_detail”: “jumlah 1”,“goods_amt”: “400”}]}",
	"deliveryState":"Jakarta",
	"deliveryCountry":"ID",
	"bankCd":"",
	"billingPostCd":"12950",
	"billingAddr":"Jalan Jenderal Gatot Subroto Kav.57",
	"reqServerIP":"172.29.2.178",
	"vacctValidTm":"",
	"billingPhone":"021-579-00000",
	"billingCity":"Jakarta"
}
```

> Sample JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "IONPAYTEST01201804191154334593",
    "referenceNo": "OrdNo2017717942577",
    "payMethod": "01",
    "amt": "1000",
    "transDt": "20180419",
    "transTm": "115416",
    "description": "this is test transaction!!",
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

This API for Transaction Registration.<br>
Detail Payment Method regarding Registration :

Code | PayMethod | Description | Status
---------- | ---------- | ---------- | ----------
01 | Credit Card (CC) | Order will be created | Available
02 | Virtual Account (VA) | Virtual Account will be created | Available
03 | Convenience Store (CVS) | Pay number will be created | Available
04 | ClickPay | Order will be created | Coming Soon
05 | E-Wallet | Order will be created | Coming Soon

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/registration**
Method | POST, JSON
Description | Perform for Transaction Registration
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>**Request JSON Object**

Parameter | Mandatory | Type | Size | Description
---------- | ---------- | ---------- | ---------- | ----------
timeStamp | Y | N | 14 | API Request Date
iMid | Y | AN | 10 | Merchant Id
payMethod | Y | AN | 2 | Payment Method
currency | Y | AN | 3 | currency
amt | Y | N | 12 | Payment Amount
referenceNo | Y | ANS | 40 | Merchant Order No (Key from merchant)
goodsNm | Y | AN | 100 | Goods Name
billingNm | Y | A | 30 | Buyer name
billingPhone | Y | N | 40 | Buyer Phone Number
billingEmail | Y | AN | 15 | Buyer email
billingAddr | N | AN | 100 | Buyer address
billingCity | Y | A | 50 | Buyer city
billingState | Y | A | 50 | Billing state
billingPostCd | Y | N | 10 | Billing Post number
billingCountry | Y | A | 10 | Billing Country
deliveryNm | N | A | 30 | delivery name
deliveryPhone | N | N | 15 | delivery phone number
deliveryAddr | N | AN | 100 | delivery address
deliveryCity | N | A | 50 | delivery city
deliveryState | N | A | 50 | delivery state
deliveryPostCd | N | N | 10 | delivery post number
deliveryCountry | N | A | 10 | delivery country
dbProcessUrl | Y | AN  | 255 | Payment Notification url (Async notification)
vat | N | N | 12 | Vat
fee | N | N | 12 | service fee
notaxAmt | N | N | 12 | tax free amount
description | N | AN | 100 | Transaction description 
merchantToken | Y | AN | 255 | merchantToken
reqDt | N | N | 8 | Request date (YYYYMMDD)
reqTm | N | N | 6 | request time (HH24MISS)
reqDomain | N | AN | 100 | request domain
reqServerIP | N | AN | 15 | request server IP
reqClientVer | N | AN | 50 | request client version 
userIP | Y | AN | 15 | user IP (customer)
userSessionID | N | AN | 100 | user session ID
userAgent | N | AN | 100 | user agent information
userLanguage | N | A | 2 | user language
cartData | Y | AN | 4000 | cart data
instmntType | CC | N | 2 | Installment Type, refer Code at [Here](#installment-type)
instmntMon | CC | N | 2 | Installment month
recurrOpt | CC Recurring | N | 2 | Recurring option<br> 0: Automatic Cancel<br>1: Do not cancel<br>2: Do not make token
bankCd | VA | A | 4 | bank code, refer Code at [Here](#bank-code)
vacctValidDt | VA | N | 8 | VA expiry date (YYYYMMDD)
vacctValidTm | VA | N | 6 | VA expiry time (HH24MISS)
merFixAcctId | VA | AN | 40 | Merchant Reserved VA ID
mitraCd | CVS | A | 4 | Mitra code, refer Code at [Here](#mitra-code)

<br>**cartData JSON Object**

Parameter | Description
---------- | ----------
count | Total card data count
item | 
Item -> img_url | good's image URL (image size 50*50)
Item -> goods_name | goods name
Item -> goods_detail | goods detail description
Item -> goods_amt | goods Payment amount


<br>**Response JSON Object**

Parameter | Type | Size | Description | Remark
---------- | ---------- | ---------- | ---------- | ----------
resultCd | N | 4 | result code | 
resultMsg | AN | 255 | result message | 
tXid | AN | 30 | Transaction Id (Key from NICEPay) | When success
referenceNo | ANS | 40 | Merchant Order No (Key from merchant) | When success VA,CVS
payMethod | N | 2 | Payment Method | When success VA,CVS
amt | N | 12 | Payment amount | When success VA,CVS
currency | AN | 3 | currency | When success VA,CVS
goodsNm | AN | 100 | Goods Name | When success VA,CVS
billingNm | A | 30 | Buyer name | When success VA,CVS
transDt | N | 8 | Transaction date (YYYYMMDD) | When success VA,CVS
transTm | N | 6 | Transaction time(HH24MISS) | When success VA,CVS
description | AN | 100 | Transaction Description  | When success VA,CVS
bankCd | A | 4 | bank code | When success VA, Refer Code at [Here](#bank-code)
vacctNo | N | 20 | Virtual Account number | When success VA
vacctValidDt | N | 8 | VA expiry date (YYYYMMDD) | When success VA
vacctValidTm | N | 6 | VA expiry time (HH24MISS) | When success VA
mitraCd | AN | 4 | Mitra code | When success CVS, Refer Code at [Here](#mitra-code)
payNo | N | 12 | CVS Number | When success CVS
payValidDt | N | 8 | CVS expiry date (YYYYMMDD) | When success CVS
payValidTm | N | 6 | CVS expiry time (HH24MISS) | When success CVS