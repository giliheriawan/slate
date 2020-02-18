# Check Transaction Status 
## API Specifications

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

> Sample response:

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

This API is intended for merchant to check the status of the transaction.

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/api/onePassStatus.do`                                                                               |
| **Request Method** **application/x-www-form-urlencoded**  | `POST`                                                                                                        |
| **Description**                                           | Inquires transaction status to NICEPAY server.                                                                |
| **Merchant Token**                                        | SHA256(`iMid``referenceNo``amt``merchantKey`)                                                                 |

## Request Parameters

| Parameter       | **Type**    | **Size** | **Description**                       | Example Value                       										|
|-----------------|-------------|----------|---------------------------------------|----------------------------------------------------------------------------|
| `iMid`          | **AN**      | **10**   | **Merchant ID** **Required**          | IONPAYTEST           														|
| `merchantToken` | **AN**      | **255**  | **Merchant Token** **Required**       | 6cfccfc0046773c1b89d8e98f8b596c<br>284f3c70a4ecf86eba14c18944b74bcd        |
| `tXid`   		  | **AN**      | **30**   | **Transaction ID** **Required**       | IONPAYTEST02201607291027025291       										|
| `amt`   		  | **N**       | **12**   | **Amount** **Required**               | 15000               														|
| `referenceNo`   | **ANS**     | **40**   | **referenceNo** **Required**          | OrdNo20160525000          													|

## Response Object

| Parameter   	 | **Type** 	| **Size** 	   | **Description**                   	   		| Example Value                       |
| ------------	 | -------- 	| -------- 	   | --------------------------------- 	   		| ----------------------------------- |
| `resultCd`  	 | **N**        | **4**        | **Result Code**                       		| [0000](#error-code)                 |
| `resultMsg`    | **AN**       | **255**      | **Result Message**                    		| [SUCCESS]                           |
| `tXid`         | **AN**       | **30**       | **Transaction ID**                    		| IONPAYTEST02201607291027025291      |
| `iMid`         | **AN**       | **10**       | **Merchant ID**                       		| IONPAYTEST                          |
| `referenceNo`  | **ANS**      | **40**       | **Merchant Order No**                 		| OrderNo. 1231531513                 |
| `payMethod`    | **N**        | **2**        | **Payment method**                    		| [01](#payment-method)               |
| `amt`          | **N**        | **12**       | **Payment amount**                    		| 15000                               |
| `reqDt`        | **N**        | **8**        | **Transaction request date** *YYYYMMDD* 	| 20201204                            |
| `reqTm`        | **N**        | **6**        | **Transaction request time** *HH24MISS* 	| 135959                              |
| `currency`     | **N**        | **3**        | *Currency*                          		| IDR                                 |
| `goodsNm`      | **AN**       | **100**      | **Goods name**                        		| Sepatu Merah                        |
| `billingNm`    | **AN**       | **30**       | **Billing name**                      		| John Doe                            |
| `status`       | **N**        | **1**        | **Transaction status**                		| [0](#payment-status-code) (paid)    |
| `instmntMon`   | **N**        | **2**        | **Installment month**                 		| Default 1                           |
| `instmntType`  | **N**        | **2**        | **Installment Type**                  	 	| Default [Type](#installment-type) 1 |

### Additional Response for Virtual Account

| Parameter    	 | **Type** | Size | Description             		| Example Value      |
| ------------ 	 | ---- 	| ---- | ----------------------- 		| ------------------ |
| `vacctValidDt` | **N**    | 8    | **VA Expiry Date** *YYYYMMDD* 	| 20201201           |
| `vacctValidTm` | **N**    | 6    | **VA Expiry Time** *HH24MISS* 	| 135959             |
| `vacctNo`      | **N**    | 16   | **VA Number**               	| 1234567891011101   |
| `bankCd`       | **AN**   | 4    | **Bank Code**               	| [CENA](#bank-code) |

## Additional Response for Others Payment Method

| Parameter     | **Type** | Size   | Description                        | Example Value       |
| ------------- | -------- | ------ | ---------------------------------- | ------------------- |
| `mitraCd`     | **A**    | **4**  | **Mitra Code**                     | [ALFA](#mitra-code) |
| `payNo`       | **N**    | **12** | **Payment Number**                 | 123456789101        |
| `payValidDt`  | **N**    | **8**  | **Payment Expiry Date** *YYYYMMDD* | 20201201            |
| `payValidTm`  | **N**    | **6**  | **Payment Expiry Time** *HH24MISS* | 135959              |
| `receiptCode` | **ANS**  | **18** | **Auth Number**                    |                     |
