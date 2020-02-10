# Membatalkan Transaksi

```java
nicePay.setCancelMsg("Cancel Message");    
nicePay.setAmt("1000");    
nicePay.setFee("0");    
nicePay.setVat("0");    
nicePay.setNotaxAmt("0");    
nicePay.setReqServerIP("127.0.0.1");    
nicePay.setCancelUserId("");    
nicePay.setUserIP("127.0.0.1");    
nicePay.setCancelUserInfo("Customer cancel transaction");    
nicePay.setCancelRetryCnt("3");    
nicePay.setWorker("");    
// Cancel Mandatory Field    
nicePay.setTrxId("IONPAYTEST02201603091207051498");    
nicePay.setPayMethod("02");    
nicePay.setCancelType("1");    
nicePay.setMerchantToken(nicePay.makeToken(nicePay.getAmt(), nicePay.getTrxId()));    
// Cancel request    
nicePay.cancel();    
// Cancel Response    
System.out.println("Response String : " + nicePay.getResponseString()); // JSON in String format    
nicePay.getHtResponse(); // JSON in HashTable<String, String> format    
String resultCd = nicePay.Get("resultCd");         
String resultMsg = nicePay.Get("resultMsg");         
String tXid= nicePay.Get("tXid ");         
String referenceNo= nicePay.Get("referenceNo");   
String transDt= nicePay.Get("transDt");   
String transTm= nicePay.Get("transTm");   
String description= nicePay.Get("description");   
String amount= nicePay.Get("amount");
```

```csharp
string RequestType = "cancel";
Nicepay Nicepay = new Nicepay();

Nicepay.iMid = NicepayConfig.NICEPAY_IMID;
Nicepay.tXid = tXid;
Nicepay.amt = amt;
Nicepay.merchantToken = merchantToken(Nicepay, RequestType);
Nicepay.PayMethod = "02";
Nicepay.cancelType = "1";

objResult = objNicepayClass.Cancel (Nicepay);

Tresult.InnerText = objResult.resultCd;
TtXid.InnerText = objResult.tXid;
TcallbackUrl.InnerText = objResult.callbackUrl;
Tdescription.InnerText = objResult.description;
TreferenceNo.InnerText = objResult.referenceNo;
TpayMethod.InnerText = objResult.payMethod;
//YYMMDD
TtransDT.InnerText = objResult.transDt;
//HH24MISS
TTranstm.InnerText = objResult.transTm;
TresultMsg.InnerText = objResult.resultMsg;
```

```php
<?php
$nicepay = new NicepayLib();  
if(!emptyempty($_POST['tXid']) && !emptyempty($_POST['tXid']))  
{  
  $iMid               = $nicepay->iMid;  
  $tXid               = $_POST['tXid'];  
  $amt                = $_POST['amt'];  

  $nicepay->set('tXid', $tXid);  
  $nicepay->set('payMethod', '02');  
  $nicepay->set('amt', $amt);  
  $nicepay->set('iMid',$iMid);  
  $nicepay->set('cancelType', 1);  

  $merchantToken = $nicepay->merchantTokenC();  
  $nicepay->set('merchantToken', $merchantToken);  

  // <REQUEST to NICEPAY>  
  $response = $nicepay->cancel($tXid, $amt);  

  // <RESPONSE from NICEPAY>  
  echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';  
  echo "<pre>";  
  var_dump($response);  
  echo "</pre>";
}
?>
```

```python
import json  

from library import NICEPay  

#Set MID & Merchant Key  
NICEPay.iMid = "IONPAYTEST" #Set Merchant ID  
NICEPay.merchantKey = "33F49GnCMS1mFYlGXisbUDzVf2ATWCl9k3R++d5hDd3Frmuos/XLx8XhXpe+LDYAbpGKZYSwtlyyLOtS/8aD7A==" #Set Merchant Key  

#Set Mandatory Value  
NICEPay.payMethod = "02"  
NICEPay.amt = "1000"  
NICEPay.tXid = "IONPAYTEST02201703301501243952"  
NICEPay.cancelType = "1"  
NICEPay.merchantToken = NICEPay.getMerchantTokenCancel()  

#Set Optional Value  
NICEPay.cancelMsg = "Cancel Message"  
NICEPay.fee = "0"  
NICEPay.vat = "0"  
NICEPay.notaxAmt = "0"  
NICEPay.reqServerIP = "127.0.0.01"  
NICEPay.cancelUserId = "Admin"  
NICEPay.userIP = "127.0.0.1"  
NICEPay.cancelUserInfo = "Customer cancel transaction"  
NICEPay.cancelRetryCnt = "5"  
NICEPay.worker = "Worker"  

#Cancel Request  
resultCancel = NICEPay.cancel()  

#Cancel Response  
result = json.loads(resultCancel)  

#Cancel Response String Format  
print("resultCd : " + result['resultCd'])  
print("resultMsg : " + result['resultMsg'])  
print("tXid : " + result['tXid'])  
print("referenceNo : " + result['referenceNo'])  
print("transDt : " + result['transDt'])  
print("transTm : " + result['transTm'])
print("description : " + result['description'])
print("amount : " + result['amount'])
```


> Contoh response JSON structured (when success) :

```json
{
    "tXid": "IONPAYTEST02201603091207051498",
    "referenceNo": "OrdNo20160525000-52104",
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "transDt": "20160303",
    "transTm": "135959",
    "description": "Payment of OrdNo20160525000-52104",
    "amount": "1000",
    "canceltXid": "IONPAYTEST02201603091207051499"
}
```

API ini untuk permintaan membatalkan transaksi.<br>
Jenis transaksi yang bisa diminta:

Code | Deskripsi
---------- | ----------
01 | Credit Card
02 | Virtual Account
03 | CVS (Convenience Store)

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/api/onePassAllCancel.do**
Metode | POST
Deskripsi | untuk permintaan membatalkan transaksi Credit Card, Virtual Account, dan CVS
Merchant Token | SHA256 (Merchant ID + NICEPay Transaction ID + Amount + Merchant Key)

**Request POST Parameter**

Parameter | Mandatory | Tipe | Ukuran | Deskripsi
---------- | ---------- | ---------- | ---------- | ----------
iMid | Y | AN | 10 | Merchant ID
merchantToken | Y | AN | 255 | generate SHA256 (Merchant ID + NICEPay Transaction ID + Amount + Merchant Key)
tXid | Y | AN | 30 | Transaction ID
payMethod | Y | AN | 2 | Payment method. Refer Code at [Here](#payment-method)
cancelType | Y | N | 2 | Cancelation type
amt | Y | N | 12 | Cancelation amount
cancelMsg | N | AN | 255 | Cancelation message
preauthToken | N | AN | 100 | Preauth Token
fee | N | AN | 12 | service fee
vat | N | N | 12 | Vat number
notaxAmt | N | N | 12 | Number Tax Amount
cancelServerIp | N | AN | 15 | Server IP address
cancelUserId | N | AN | 30 | User ID
cancelUserIp | N | AN | 15 | User IP address
cancelUserInfo | N | AN | 100 | User Information for cancel reason
cancelRetryCnt | N | N | 2 | Retry count for cancel
worker | N | N | 10 | Worker


**Response Json Object**

Parameter | Tipe | Ukuran | Deskripsi 
---------- | ---------- | ---------- | ---------- 
tXid | AN | 30 | Transaction ID
referenceNo | ANS | 30 | Merchant order No
resultCd | N | 4 | Result code
resultMsg | AN | 255 | Result message
transDt | N | 40 | Transaction date
transTm | N | 12 | Transaction time
description | AN | 255 | Description
amount | N | 8 | Amount
canceltXid | AN | 6 | Cancel transaction ID