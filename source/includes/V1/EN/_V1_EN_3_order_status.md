# Check Transaction Status 

```java
// Order Status Mandatory Field    
nicePay.setTrxId("IONPAYTEST02201603091207051498");    
nicePay.setReferenceNo("MerchantReferenceNumber001");    
nicePay.setAmt("1000");    
nicePay.setMerchantToken(nicePay.makeToken(nicePay.getAmt(), nicePay.getReferenceNo()));    
// Order Status Request    
nicePay.orderStatus();    
// Order Status Response    
System.out.println("Response String : " + nicePay.getResponseString()); // JSON in String format    
nicePay.getHtResponse(); // JSON in HashTable<String, String> format    

String resultCd = nicePay.Get("resultCd");           
String resultMsg = nicePay.Get("resultMsg");           
String tXid= nicePay.Get("tXid ");           
String iMid= nicePay.Get("iMid");     
String currency= nicePay.Get("currency");  
String amount= nicePay.Get("amount");           
String instmntMon= nicePay.Get("instmntMon");           
String instmntType= nicePay.Get("instmntType");     
String referenceNo= nicePay.Get("referenceNo");    
String goodsNm = nicePay.Get("goodsNm");           
String payMethod = nicePay.Get("payMethod");           
String billingNm= nicePay.Get("billingNm");           
String merchantToken= nicePay.Get("merchantToken");     
String reqDt= nicePay.Get("reqDt");    
String reqTm = nicePay.Get("reqTm");           
String status = nicePay.Get("status");           
String bankCd= nicePay.Get("bankCd");  
String vacctValidDt= nicePay.Get("vacctValidDt");            
String vacctValidTm= nicePay.Get("vacctValidTm");     
String vacctNo= nicePay.Get("vacctNo");
```

```csharp
public NotificationResult ChargcheckPaymentStatuseCard(string tXid, string referenceNo, string amt)
{
    string RequestType = "checkPaymentStatus";
    Nicepay Nicepay = new Nicepay();

    Nicepay.iMid = NicepayConfig.NICEPAY_IMID;
    Nicepay.tXid = tXid;
    Nicepay.referenceNo = referenceNo;
    Nicepay.amt = amt;
    Nicepay.merchantToken = merchantToken(Nicepay, RequestType);

    CheckParam(Nicepay.iMid, "01");
    CheckParam(Nicepay.amt, "04");
    CheckParam(Nicepay.referenceNo, "06");
    CheckParam(Nicepay.merchantToken, "28");
    CheckParam(Nicepay.tXid, "30");

    string API_Url = GetApiRequest(RequestType);
    string SingleString = BuildString(Nicepay);

    string ResultString = WebRequestPostHttp.Post_Http(SingleString, API_Url);
    JavaScriptSerializer JsonSerializer = new JavaScriptSerializer();

    return JsonSerializer.Deserialize<NotificationResult>(ResultString);

}
```

```php
<?php
$nicepay->set('tXid',$tXid);
$nicepay->set('referenceNo',$referenceNo);
$nicepay->set('amt',$amt);
$nicepay->set('iMid',$iMid);
$merchantToken = $nicepay->merchantTokenC();
$nicepay->set('merchantToken', $merchantToken);

//Request To Nicepay
$paymentStatus = $nicepay->checkPaymentStatus($tXid,$referenceNo, $amt);

//Response From Nicepay
if($pushedToken == $merchantToken){
  if(isset($paymentStatus->status) && $paymentStatus->status == '0'){
    echo "<pre>Success</pre>";
  }elseif (isset($paymentStatus->status) && $paymentStatus->status == '1') {
    echo "<pre>Void</pre>";
  }elseif (isset($paymentStatus->status) && $paymentStatus->status == '2') {
    echo "<pre>Refund</pre>";
  }elseif (isset($paymentStatus->status) && $paymentStatus->status == '9') {
    echo "<pre>Reversal</pre>";
  }else {
    echo "<pre>Status Unknown</pre>";
  }
}
?>
```

```python
import json
from library import NICEPay  

#Set Parameters For Check Status  
NICEPay.iMid = "IONPAYTEST" #Set Merchant ID  
NICEPay.merchantKey = "33F49GnCMS1mFYlGXisbUDzVf2ATWCl9k3R++d5hDd3Frmuos/XLx8XhXpe+LDYAbpGKZYSwtlyyLOtS/8aD7A==" #Set Merchant Key  
NICEPay.amt = "100"  
NICEPay.referenceNo = "379072"  
NICEPay.merchantToken = NICEPay.getMerchantToken()  
NICEPay.tXid = "IONPAYTEST02201609161449136760"  

#Check Status Request  
resultCheckStatus = NICEPay.checkStatus()  

#Check Status Response  
result = json.loads(resultCheckStatus)  

#Check Payment Response String Format  
print("resultCd : " + result['resultCd'])  
print("resultMsg : " + result['resultMsg'])  
print("tXid : " + result['tXid'])  
print("iMid : " + result['iMid'])  
print("currency : " + result['currency'])  
print("amount : " + result['amt'])  
print("instmntMon : " + result['instmntMon'])  
print("instmntType : " + result['instmntType'])  
print("referenceNo : " + result['referenceNo'])  
print("goodsNm : " + result['goodsNm'])  
print("payMethod : " + result['payMethod'])  
print("billingNm : " + result['billingNm'])  
print("merchantToken : " + result['merchantToken'])  
print("reqDt : " + result['reqDt'])  
print("reqTm : " + result['reqTm'])  
print("status : " + result['status'])
```

> Sample response JSON structured (when success) :

```json
{
    "reqTm": "151024",
    "resultCd": "0000",
    "goodsNm": "Test Transaction Nicepay",
    "referenceNo": "99999",
    "transTm": "151024",
    "tXid": "IONPAYTEST02201706131510248946",
    "amt": "10000",
    "cancelAmt": null,
    "depositTm": "175005",
    "vacctNo": "1510248946",
    "resultMsg": "paid",
    "iMid": "IONPAYTEST",
    "billingNm": "Customer Name",
    "vacctValidDt": "20170620",
    "depositDt": "20170613",
    "payMethod": "02",
    "reqDt": "20170613",
    "bankCd": "BNIA",
    "currency": "IDR",
    "transDt": "20170613",
    "vacctValidTm": "235959",
    "status": "0"
}
```

This API is for request to check status of transaction.<br>

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/api/onePassStatus.do**
Method | POST
Description | Order Status Inquiry
Merchant Token | SHA256 (Merchant ID + Reference Number + amt + Merchant Key)

**Request POST Parameter**

Parameter | Mandatory | Type | Size | Description
---------- | ---------- | ---------- | ---------- | ----------
iMid | Y | AN | 10 | Merchant ID
merchantToken | Y | AN | 255 | generate SHA256 (Merchant ID + Reference Number + amt + Merchant Key)
tXid | Y | AN | 30 | Transaction ID
amt | Y | N | 12 | Transaction amount
referenceNo | Y | ANS | 40 | Merchant order No


**Response Json Object**

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result Code
resultMsg | N | 255 | Result Message
tXid | N | 30 | Transaction ID
iMid | N | 10 | Merchant ID
referenceNo | N | 40 | Merchant Order No
payMethod | N | 2 | Payment method. Refer Code at [Here](#payment-method)
amt | N | 12 | Payment amount
cancelAmt | N | 12 | Cancel amount
reqDt | N | 8 | Transaction request date
reqTm | N | 6 | Transaction request time
transDt | N | 8 | Transaction date
transTm | N | 6 | Transaction time
depositDt | N | &nbsp | Transaction deposit date
depositTm | N | &nbsp | Transaction deposit time
currency | N | 3 | Currency
goodsNm | N | 100 | Goods name
billingNm | N | 30 | Billing name
status | N | 1 | Transaction status<. Refer Code at [Here](#payment-status-code)
authNo | N | 10 | Approval number
issueBankCd | A | 4 | Issue bank code. Refer Code at [Here](#bank-code)
acquBankCd | A | 4 | Acquire bank code. Refer Code at [Here](#bank-code)
cardNo | AN | 20 | Card no with masking
instmntMon | N | 2 | Installment month
instmntType | N | 2 | Installment Type. Refer Code at [Here](#installment-type)
preauthToken | AN | 255 | Preauth Token
recurringToken | AN | 255 | Recurring token 
ccTransType | AN | 2 | Credit card transaction type<br>1: Normal<br>2: Recurring<br>3: Pre-auth<br>4: Captured
acquStatus | AN | 2 | Purchase status<br>00: not purchase<br>01: later cancel not purchase<br>10: finish purchase<br>99: etc
vat | N | 12 | Vat number
fee | N | 12 | service fee
notaxAmt | N | 12 | tax free amount

**Additional Response Json Object for Virtual Account**

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
bankCd  | N | 4 | Bank Code. Refer Code at [Here](#bank-code)
vacctNo | N | 16 | Bank Virtual Account number
vacctValidDt  | N | 8 | VA expiry date
vacctValidTm | N | 6 | VA expiry time

**Additional Response Json Object for Others Payment Method**

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
mitraCd | A | 4 |  Mitra Code. Refer Code at [Here](#mitra-code)
payNo | N | 12 | CVS number
payValidDt | N | 8 | CVS expiry date
payValidTm | N | 6 | CVS expiry time
receiptCode | ANS | 18 | Authorization number
mRefNo | AN | 20 | Bank reference No