# Pengecekan Status Transaksi 
## Spesifikasi API - Check Status
API ini berguna untuk melakukan pengecekan status transaksi secara manual.

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/api/onePassStatus.do`                                                                               |
| **Request Method** **application/x-www-form-urlencoded**  | `POST`                                                                                                        |
| **Deskripsi**                                             | Melakukan Request Check Status ke Nicepay.                                                                    |
| **Merchant Token**                                        | SHA256(`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                              |

## Parameter Request - Check Status 

> Contoh API Request

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

| **Parameter**                    | **Type** | **Size** | Deskripsi      | Contoh Data                    |
| -------------------------------- | -------- | -------- | -------------- | ------------------------------ |
| **`iMid`** **Required**          | **AN**   | **10**   | Merchant ID    | IONPAYTEST                     |
| **`merchantToken`** **Required** | **AN**   | **255**  | Merchant Token | 6cfccfc0046773c1b89d8e98c...   |
| **`tXid`** **Required**          | **AN**   | **30**   | Transaction ID | IONPAYTEST02201607291027025291 |
| **`amt`** **Required**           | **N**    | **12**   | Nominal        | 15000                          |
| **`referenceNo`** **Required**   | **ANS**  | **40**   | Reference No.  | OrdNo20160525000               |

## Response - Check Status

> Contoh response:

```json
{
    "tXid": "NORMALTEST01202002031344071337",
    "iMid": "NORMALTEST",
    "currency": "IDR",
    "amt": "12000",
    "instmntMon": "1",
    "instmntType": "1",
    "referenceNo": "ord20200203130299",
    "goodsNm": "Testing Normal FULL PAYMENT CC Va",
    "payMethod": "01",
    "billingNm": "Customer Name",
    "reqDt": "20200203",
    "reqTm": "134407",
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

| **Parameter**     | **Type** | **Size** | Deskripsi                                  |
| ----------------- | -------- | -------- | ------------------------------------------ |
| **`resultCd`**    | **N**    | **4**    | [Result Code](#error-code)                 |
| **`resultMsg`**   | **AN**   | **255**  | [Result Message](#error-code)              |
| **`tXid`**        | **AN**   | **30**   | Transaction ID                             |
| **`iMid`**        | **AN**   | **10**   | Merchant ID                                |
| **`referenceNo`** | **ANS**  | **40**   | Merchant Order No                          |
| **`payMethod`**   | **N**    | **2**    | [Payment method](#payment-method)          |
| **`amt`**         | **N**    | **12**   | Nominal Pembayaran                         |
| **`reqDt`**       | **N**    | **8**    | Tgl Request (YYYYMMDD)                     |
| **`reqTm`**       | **N**    | **6**    | Waktu Request (HH24MISS)                   |
| **`currency`**    | **A**    | **3**    | Currency                                   |
| **`goodsNm`**     | **AN**   | **100**  | Nama Barang                                |
| **`billingNm`**   | **AN**   | **30**   | Nama Pembeli                               |
| **`status`**      | **N**    | **1**    | [Transaction status](#payment-status-code) |
| **`instmntMon`**  | **N**    | **2**    | Installment month                          |
| **`instmntType`** | **N**    | **2**    | [Installment Type](#installment-type)      |

### Response Tambahan untuk Virtual Account

| **Parameter**      | **Type** | **Size** | Deskripsi                 |
| ------------------ | -------- | -------- | ------------------------- |
| **`vacctValidDt`** | **N**    | **8**    | Batas Tgl VA (YYYYMMDD)   |
| **`vacctValidTm`** | **N**    | **6**    | Batas Waktu VA (HH24MISS) |
| **`vacctNo`**      | **N**    | **16**   | Nomor VA                  |
| **`bankCd`**       | **A**    | **4**    | [Bank Code](#bank-code)   |


### Response Tambahan untuk Payment Method Lainnya

| **Parameter**     | **Type** | **Size** | Deskripsi                                            |
| ----------------- | -------- | -------- | ---------------------------------------------------- |
| **`mitraCd`**     | **A**    | **4**    | [Mitra Code](#mitra-code) (CVS, E-Wallet, Payloan)   |
| **`payNo`**       | **N**    | **12**   | Nomor Pembayaran (CVS)                               |
| **`payValidDt`**  | **N**    | **8**    | Batas Tgl Pembayaran CVS (YYYYMMDD)                  |
| **`payValidTm`**  | **N**    | **6**    | Batas Waktu Pembayaran CVS (HH24MISS)                |
| **`receiptCode`** | **ANS**  | **18**   | Auth Number                                          |

### Tambahan Lainnya (Coming Soon)
