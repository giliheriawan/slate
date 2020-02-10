# Cancel

> Contoh JSON request

```json
{
	"timeStamp":"20180305115011",
	"tXid":"TESTIDTEST01201803051530400331",
	"iMid":"TESTIDTEST",
	"payMethod":"01",
	"cancelType":"1",
	"cancelMsg":"Request Cancel",
	"merchantToken":"306a14c6b6effbe9979ec13dfd6cfe17ddfee2eabe7a7d8bbe55630e27e9e86e",
	"preauthToken":"",
	"amt":"10000",
	"cancelServerIp":"127.0.0.1",
	"cancelUserId":"admin",
	"cancelUserIp":"127.0.0.1",
	"cancelUserInfo":"Customer Cancel Transaction",
	"cancelRetryCnt":"",
	"worker":""
}
```

> Contoh JSON Response

```json
{
    "tXid": "TESTIDTEST01201803051530400331",
    "referenceNo": "ORD12345",
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "transDt": "20180305",
    "transTm": "153040",
    "description": "Order Description",
    "amt": "10000"
}
```

This API is for request to cancel of transaction.<br>
type of transaction can be requested :

Code | Deskripsi
---------- | ----------
01 | Credit Card
02 | Virtual Account
03 | CVS (Convenience Store)

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/cancel**
Metode | POST, JSON
Description | Perform cancel API for Credit Card, Virtual Account, and CVS
Merchant Token | SHA256 (timeStamp + iMid + tXid + amt + Merchant Key)

<br>**Request Json Object**

Parameter | Mandatory | Tipe | Ukuran | Deskripsi
---------- | ---------- | ---------- | ---------- | ----------
timeStamp | Y | N | 14 | API Request Date
tXid | Y | AN | 30 | Transaction Id
iMid | Y |AN | | 10 Merchant Id
payMethod | Y | N | 2 | Payment Method
cancelType | Y | N | 2 | Cancel Type
cancelMsg | N | AN | 255 | Cancel Message
merchantToken | Y | AN | 255 | merchantToken
preauthToken | Y | AN | 100 | PreauthToken
amt | Y | N | 12 | Payment amount
fee | N | N | 12 | Fee
vat | N | N | 12 | Vat
notaxAmt | N | N | 12 | No tax Amount	
cancelServerIp | N | AN | 15 | Server IP
cancelUserId | N | AN | 30 | User ID	
cancelUserIp | N | AN | 15 | User IP
cancelUserInfo | N | AN | 100 | User Information
cancelRetryCnt | N | N | 2 | Retry Count
worker | N | AN | 10 | Worker

<br>**Response Json Object**

Parameter | Tipe | Ukuran | Deskripsi | Remark
---------- | ---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result Code | 
resultMsg | AN | 255 | Result Message | 
tXid | AN | 30 | Transaction ID | When Success
referenceNo | ANS | 30 | Merchant Order No | When Success
transDt | N | 40 | Transaction Date | When Success
transTm | N | 12 | Transaction Time | When Success
description | AN | 255 | Description | When Success
amt | N | 8 | Amount | When Success
canceltXid | AN | 6 | Cancel transaction ID | When Success