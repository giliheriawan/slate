# NICEPay Professional
All Transaction with NICEPAY API V1 Professional will `redirect` to **NICEPay Secure Payment Page** for payment process.

NICEPAY Professional Step:
<ol type="1">
  <li>Transaction Registration.
  <li>Redirect to NICEPay Secure Payment Page.
  <li>Finish Payment in NICEPay Secure Payment Page.
  <li>NICEPay will redirect end-user to Merchant `callbackUrl` to give the payment information.
</ol>

## Transaction Registration
**API Specifications**

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/api/orderRegist.do`                                                                                 |
| **Request Method** **application/x-www-form-urlencoded**  | `POST`                                                                                                        |
| **Description**                                           | Perform transaction registration.                                                                             |
| **Merchant Token**                                        | SHA256(`iMid``referenceNo``amt``merchantKey`)                                                                 |
| **Payment Methods**                                       | `01` Credit Card <br> `02` Virtual Account <br> `03` Convenience Store <br> `04` Click Pay <br> `05` E-Wallet |

### All Parameters for Registration
> Sample API Request

```java
// Payment Mandatory Field
nicePay.setPayMethod("01");
nicePay.setCurrency("IDR");
nicePay.setAmt("1000");
nicePay.setInstmntMon("1");
nicePay.setReferenceNo("MerchantReferenceNumber001");
nicePay.setGoodsNm("Merchant Goods 1");
nicePay.setBillingNm("Buyer Name");
nicePay.setBillingEmail("buyer@merchant.com");
nicePay.setBillingPhone("02112345678");
nicePay.setBillingAddr("Billing Address");
nicePay.setBillingCity("Jakarta");
nicePay.setBillingState("Jakarta");
nicePay.setBillingPostCd("12345");
nicePay.setBillingCountry("Indonesia");
nicePay.setDeliveryNm("Buyer Name");
nicePay.setDeliveryPhone("02112345678");
nicePay.setDeliveryAddr("Billing Address ");
nicePay.setDeliveryCity("Jakarta");
nicePay.setDeliveryState("Jakarta");
nicePay.setDeliveryPostCd("12345");
nicePay.setDeliveryCountry("Indonesia");
nicePay.setCallBackUrl("www.merchant.com/callback");
nicePay.setDbProcessUrl("www.merchant.com/dbprocess");
nicePay.setVat("0");
nicePay.setFee("0");
nicePay.setNotaxAmt("0");
nicePay.setDescription("Description");
nicePay.setUserIP("127.0.0.1");
nicePay.setMerchantToken(nicePay.makeToken(nicePay.getAmt(), nicePay.getReferenceNo()));
nicePay.setCartData("{}");
nicePay.setInstmntMon("1");
nicePay.setInstmntType("1");
nicePay.setReccurOpt("0");

// Payment Optional Field
nicePay.setReqDt("20160301");
nicePay.setReqTm("135959");
nicePay.setReqDomain("www.merchant.com");
nicePay.setReqServerIP("127.0.0.1");
nicePay.setReqClientVer("1.0");
nicePay.setUserSessionID("userSessionID");
nicePay.setUserAgent("Mozilla");
nicePay.setUserLanguage("en-US");
nicePay.setMerFixAcctId("9999000000000001");
nicePay.setVacctValidDt("20160303");
nicePay.setVacctValidTm("135959");
nicePay.setPaymentExpiryDt("20160303");
nicePay.setPaymentExpiryTm("135959");

// Payment Request
nicePay.payPage();

// Payment Response
System.out.println("Response String : " + nicePay.getResponseString()); // JSON in String format

String resultCd = nicePay.Get("resultCd");
String resultMsg = nicePay.Get("resultMsg");
String tXid= nicePay.Get("tXid");
String requestURL= nicePay.Get("requestURL");
```

```csharp
public JsonResult ChargeCard(Nicepay Nicepay) {
    string RequestType = "CreditCard";
    Nicepay.iMid = NicepayConfig.NICEPAY_IMID;
    Nicepay.merchantToken = merchantToken(Nicepay, RequestType);
    Nicepay.dbProcessUrl = NicepayConfig.NICEPAY_DBPROCESS_URL;
    Nicepay.callBackUrl = NicepayConfig.NICEPAY_CALLBACK_URL;
    Nicepay.instmntMon = "1";
    Nicepay.instmntType = "1";
    Nicepay.userIP = GetUserIP();
    Nicepay.goodsNm = Nicepay.description;
    Nicepay.vat = "0";
    Nicepay.fee = "0";
    Nicepay.notaxAmt = "0";
    if (Nicepay.cartData == null) {
        Nicepay.cartData = "{}";
    }
    CheckParam(Nicepay.iMid, "01");
    CheckParam(Nicepay.PayMethod, "02");
    CheckParam(Nicepay.currency, "03");
    CheckParam(Nicepay.amt, "04");
    CheckParam(Nicepay.instmntMon, "05");
    CheckParam(Nicepay.referenceNo, "06");
    CheckParam(Nicepay.goodsNm, "07");
    CheckParam(Nicepay.billingNm, "08");
    CheckParam(Nicepay.billingPhone, "09");
    CheckParam(Nicepay.billingEmail, "10");
    CheckParam(Nicepay.billingAddr, "11");
    CheckParam(Nicepay.billingCity, "12");
    CheckParam(Nicepay.billingState, "13");
    CheckParam(Nicepay.billingCountry, "14");
    CheckParam(Nicepay.deliveryNm, "15");
    CheckParam(Nicepay.deliveryPhone, "16");
    CheckParam(Nicepay.deliveryAddr, "17");
    CheckParam(Nicepay.deliveryCity, "18");
    CheckParam(Nicepay.deliveryState, "19");
    CheckParam(Nicepay.deliveryPostCd, "20");
    CheckParam(Nicepay.deliveryCountry, "21");
    CheckParam(Nicepay.callBackUrl, "22");
    CheckParam(Nicepay.dbProcessUrl, "23");
    CheckParam(Nicepay.vat, "24");
    CheckParam(Nicepay.fee, "25");
    CheckParam(Nicepay.notaxAmt, "26");
    CheckParam(Nicepay.description, "27");
    CheckParam(Nicepay.merchantToken, "28");

    string API_Url = GetApiRequest(RequestType);
    string SingleString = BuildString(Nicepay);
    string ResultString = WebRequestPostHttp.Post_Http(SingleString, API_Url);
    ResultString = ResultString.Remove(0, 4);
    JavaScriptSerializer JsonSerializer = new JavaScriptSerializer();

    return JsonSerializer.Deserialize<JsonResult>(ResultString);
}
```

```php
<?php
$nicepay = new NicepayLib();

//Ignore this function if you have invoice number.
function generateReference() {
  $micro_date = microtime();
  $date_array = explode(" ",$microdate);
  $date = date("YmdHis",$date_array[1]);
  $date_array[0] = preg_replace('/[^\p{L}\p{N}\s]/u', '', $date_array[0]);
  return "Ref".$date.$date_array[0].rand(100,999);
}

if(isset($_POST['payMethod']) && $_POST['payMethod'] == '01'){
  //Populate Mandatory parameters to send
  $nicepay->set('payMethod', '01');
  $nicepay->set('currency', 'IDR');
  $nicepay->set('amt', 12000); //Total Gross Amount
  $nicepay->set('referenceNo',generateReference()); //Invoice Number or Reference Number Generated by Merchant
  $nicepay->set('description', 'Payment of Invoice No '.$nicepay->get('referenceNo'));//Transaction Description

  $nicepay->set('billingNm', 'John Doe'); //Customer name
  $nicepay->set('billingPhone', '02112345678'); //Customer phone number
  $nicepay->set('billingEmail', 'john@example.com');
  $nicepay->set('billingAddr', 'Jl. Jendral Sudirman No.28');
  $nicepay->set('billingCity', 'Jakarta Pusat');
  $nicepay->set('billingState', 'DKI Jakarta');
  $nicepay->set('billingPostCd', '10210');
  $nicepay->set('billingCountry', 'Indonesia');

  $nicepay->set('deliveryNm', 'John Doe'); //Delivery name
  $nicepay->set('deliveryPhone', '02112345678');
  $nicepay->set('deliveryEmail', 'john@example.com');
  $nicepay->set('deliveryAddr', 'Jl. Jendral Sudirman No.28');
  $nicepay->set('deliveryCity', 'Jakarta Pusat');
  $nicepay->set('deliveryState', 'DKI Jakarta');
  $nicepay->set('deliveryPostCd', '10210');
  $nicepay->set('deliveryCountry', 'Indonesia');

  //Send Data
  $response = $nicepay->chargeCard();

  //Process response from NICEPAY
  if(isset($response->data->resultCd) && $response->data->resultCd == "0000"){
    header("Location: ".$response->data->requestURL."?tXid=".$response->tXid);
    //Please save your tXid in your database
  }elseif (isset($response->resultCd)) {
    // In this sample, we echo error message
    echo "<pre>";
    echo "result code    : ".$response->resultCd."\n";
    echo "result message : ".$response->resultMsg."\n";
    echo "</pre>";
  }else {
    // In this sample, we echo error message
    echo "<pre>Connection Timeout. Please Try Again.</pre>";
  }
}
?>
```

```python
#Set Mandatory Value
NICEPay.payMethod = "01" #Set Payment Method
NICEPay.amt = "1000" #Total Gross Amount
NICEPay.referenceNo = str(random.randrange(111111, 999999)) #Invoice Number By Merchant
NICEPay.goodsNm = NICEPay.referenceNo #Goods Name
NICEPay.billingNm = "John Doe"
NICEPay.billingPhone = "02112345678"
NICEPay.billingEmail = "john@example.com"
NICEPay.billingAddr = "Jl. Jend. Sudirman No. 28"
NICEPay.billingCity = "Jakarta Pusat"
NICEPay.billingState = "DKI Jakarta"
NICEPay.billingPostCd = "10210"
NICEPay.billingCountry = "Indonesia"
NICEPay.callBackUrl = "http://www.merchant.com/callback"
NICEPay.dbProcessUrl = "https://www.merchant.com/notification"
NICEPay.description = "Payment Of Ref No." + NICEPay.referenceNo
NICEPay.merchantToken = NICEPay.getMerchantToken()
NICEPay.userIP = NICEPay.getUserIp()
NICEPay.cartData = "{}" #Json Array Value
NICEPay.instmntMon = "1"
NICEPay.instmntType = "1"

#Payment Request
resultData = NICEPay.apiRequest()

#Payment Result
jsonResult = resultData[4:]
result = json.loads(jsonResult)

#Payment Response String Format
print("resultCd : " + result['data']['resultCd'])
print("resultMsg : " + result['data']['resultMsg'])
print("requestURL: " + result['data']['requestURL'] + "?tXid=" + result['data']['tXid'])
print("tXid : " + result['data']['tXid'])
```

> Sample API Response 

```json
{
    "apiType": "M0",
    "tXid": "IONPAYTEST01202002130920175001",
    "requestDate": "20200213092017",
    "responseDate": "20200213092017",
    "data": {
        "tXid": "IONPAYTEST01202002130920175001",
        "resultCd": "0000",
        "resultMsg": "SUCCESS",
        "requestURL": "https://dev.nicepay.co.id/nicepay/api/orderInquiry.do"
    }
}
```

| Parameter         | **Type**      	| **Size** | **Description**                       	      					| Example Value                                                                                  			|
|-------------------|-------------------|----------|----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| `iMid`            | **AN**          	| **10**   | **Merchant ID** **Required**                    				| IONPAYTEST                                                                                     			|
| `merchantToken`   | **AN**          	| **255**  | **Merchant Token** **Required**                 				| 6cfccfc0046773c1b589d8e98f8b596c<br>284f3c70a4ecf86eba14c18944b74bcd                           			|
| `payMethod`       | **AN**          	| **2**    | **[Payment Method](#payment-method)** **Required**             | 01												                               							|
| `currency`        | **A**           	| **3**    | **Currency** **Required**                       				| IDR                                                                                            			|
| `amt`             | **N**           	| **12**   | **Transaction Amount** **Required**             				| 10000                                                                                          			|
| `instmntType`     | **N**           	| **2**    | **[Installment Type](#installment-type)** **Required for CC**  | 1                                                    					                                    |
| `instmntMon`      | **N**           	| **2**    | **Installment Month** **Required for CC**       				| 1                                                                                              			|
| `referenceNo`     | **ANS**         	| **40**   | **Merchant Order Number** **Required**          				| MerchantReferenceNumber1                                                                       			|
| `goodsNm`         | **AN**          	| **100**  | **Goods Name** **Required**                     				| Merchant Goods 1                                                                               			|
| `callBackUrl`     | **AN**          	| **255**  | **Payment Result Page URL**  **Required**       				| https://merchant.com/callBackUrl                                                               			|
| `dbProcessUrl`    | **AN**          	| **255**  | **Push Notification URL**  **Required**         				| https://merchant.com/dbProcessUrl                                                              			|
| `userIP`          | **AN**          	| **15**   | **User IP address** **Required**     	          				| 127.0.0.1                                                                                      			|
| `description`     | **AN**          	| **100**  | **Transaction Description**  **Required**       				| this is test order                                                                             			|
| `billingNm`       | **A**           	| **30**   | **Billing Name** **Required**                   				| Buyer Name                                                                                     			|
| `billingPhone`    | **N**           	| **15**   | **Billing Phone Number** **Required**           				| 2123456789                                                                                     			|
| `billingEmail`    | **AN**          	| **40**   | **Billing Email** **Required**                  				| buyer@merchant.com                                                                             			|
| `billingCity`     | **A**           	| **50**   | **Billing City** **Required**                   				| Jakarta Utara                                                                                  			|
| `billingState`    | **A**           	| **50**   | **Billing State** **Required**                  				| DKI Jakarta                                                                                    			|
| `billingPostCd`   | **A**           	| **10**   | **Billing Postcode** **Required**               				| 10160                                                                                          			|
| `billingCountry`  | **A**           	| **10**   | **Billing Country** **Required**                				| Indonesia                                                                                      			|
| `billingAddr`     | **AN**          	| **100**  | **Billing Address**                         	  				| Billing Address                                                                                			|
| `deliveryNm`      | **A**           	| **30**   | **Delivery Name**                          	  				| Delivery name                                                                                  			|
| `deliveryPhone`   | **N**           	| **15**   | **Delivery Phone Number**                  	  				| 2123456789                                                                                     			|
| `deliveryAddr`    | **AN**          	| **100**  | **Delivery Address**                       	  				| Delivery Address                                                                               			|
| `deliveryCity`    | **A**           	| **50**   | **Delivery City**                           	  				| Jakarta Utara                                                                                  			|
| `deliveryState`   | **A**           	| **50**   | **Delivery State**                         	  				| DKI Jakarta                                                                                    			|
| `deliveryPostCd`  | **N**           	| **10**   | **Delivery Postcode**                     	  					| 10160                                                                                          			|
| `deliveryCountry` | **A**           	| **10**   | **Delivery Country**                       	  				| indonesia                                                                                      			|
| `vat`             | **N**           	| **12**   | **Vat Number**                            	  					| 0                                                                                              			|
| `fee`             | **N**           	| **12**   | **Service Fee**                            	  				| 0                                                                                              			|
| `notaxAmt`        | **N**           	| **12**   | **Tax Free Amount**                        	  				| 0                                                                                              			|
| `reqDt`           | **N**           	| **8**    | **Request Date**                            	  				| 20180303                                                                                       			|
| `reqTm`           | **N**           	| **6**    | **Request Time**                            	  				| 135959                                                                                         			|
| `reqDomain`       | **AN**          	| **100**  | **Request domain**                          	  				| merchant.com                                                                                   			|
| `reqServerIP`     | **AN**          	| **15**   | **Request Server IP Address**               	  				| 127.0.0.1                                                                                      			|
| `reqClientVer`    | **AN**          	| **50**   | **Request Client Version**                  	  				| 1                                                                                              			|
| `userSessionID`   | **AN**          	| **100**  | **User Session ID**                        	  				| userSessionID                                                                                  			|
| `userAgent`       | **AN**          	| **100**  | **User Agent Information**                  	  				| Mozilla                                                                                        			|
| `userLanguage`    | **A**           	| **2**    | **User Language**                           	  				| en-US                                                                                          			|
| `cartData`        | **`JSON OBJECT`** | **4000** | **Transaction Cart Data**                   	  				| [cartData](#cart-data) JSON                                                                    			|
| `worker`          | **AN**          	| **10**   | **Worker**                                 	  				| worker                                                                                         			|
| `merFixAcctId`    | **N**           	| **40**   | **Merchant Fix VA Number** **Required for Fix-Type VA**		| 14015824                                                                                       			|
| `vacctValidDt`    | **N**           	| **8**    | **Virtual Account Valid Date** *YYYYMMDD*     	      	  		| 20180404                                                                                       			|
| `vacctValidTm`    | **N**           	| **6**    | **Virtual Account Valid Time** *HH24MISS*              	  	| 235959                                                                                         			|
| `paymentExpDt`    | **N**           	| **8**    | **Payment Expired Date** *YYYYMMDD*                    	  	| 20180404                                                                                       			|
| `paymentExpTm`    | **N**           	| **6**    | **Payment Expired Time** *HH24MISS*                   	  		| 235959                                                                                         			|
| `payValidDt`      | **N**           	| **8**    | **CVS Valid Date** *YYYYMMDD*                          	 	| 20180404                                                                                       			|
| `payValidTm`      | **N**           	| **6**    | **CVS Valid Time** *HH24MISS*                        	  		| 235959                                                                                         			|
| `mRefNo`          | **N**           	| **18**   | **Bank Reference No.**                      	  				| bankcd123456789                                                                                			|
| `timeStamp`       | **N**           	| **14**   | **Timestamp** *YYYYMMDDHH24MISS*                              	| 20180404165639                                                                                 			|
| `version`         | **AN**          	|      	   | **Version**                                 	  				| Nicepay Lite                                                                                             	|
					
### Cart Data API V1
<h3 id="cart-data"></h3>

| **Parameter**                 |  Description                   |
|-------------------------------|--------------------------------|
|**count**                      | Total cart data count          |
|**item**                       |                                |
|**item ->** **img_url**        | Good's image URL (50x50 size)  |
|**item ->** **goods_name**     | Good's name                    |
|**item ->** **goods_detail**   | Good's description             |
|**item ->** **goods_amt**      | Good's amount                  |

<div class="center-column"></div>
```json
{
    "count": "2",
    "item": [
        {
            "goods_id": "BB12345678",
            "goods_name": "iPhone 5S",
            "goods_amt": "500000",
            "img_url": "http://merchant.com/cellphones/iphone5s_64g"
        },
        {
            "goods_id": "AZ14565678",
            "goods_name": "Hailee Sneakers Blink Silver",
            "goods_amt": "250000",
            "goods_url": "http://merchant.com/fashion/shoes/sneakers-blink-shoes"
        }
    ]
}
```

<aside class="success">
After your transaction has been Registered, don't forget to redirect your client to our Payment Page.
</aside>

## Transaction Payment
**API Specifications**

|                                                           |                                                                                                                           |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/api/orderInquiry.do`                                                                                            |
| **Request Method** **application/x-www-form-urlencoded**  | `REDIRECT`                                                                                                                |
| **Description**                                           | URL Redirect to NICEPAY Payment Page                                                                                      |

### Payment Parameters
> Sample API Request
> `https://www.nicepay.co.id/nicepay/api/orderInquiry.do?tXid=IONPAYTEST01201608291733081257&optDisplayCB=0&optDisplayBL=0`

```java
if (nicePay.Get("resultCd").equals("0000")) {   
    String site = nicePay.Get("requestURL") + "&optDisplayCB=0" + "&optDisplayBL=0"; 
             response.setStatus(response.SC_MOVED_TEMPORARILY);   
             response.setHeader("Location", site);   
         } 
```

| Parameter         | **Type**   | **Size** | **Description**                       	      | Example Value                     |
|-------------------|------------|----------|-------------------------------------------------|-----------------------------------|
| `tXid`            | **AN**     | **30**   | **Transaction ID** **Required**                 | IONPAYTEST02201607291027025291    |
| `optDisplayCB`    | **N**      | **2**    | **Display change button**                       | `show = 0` `hide = 1`             |
| `optDisplayBL`    | **N**      | **2**    | **Display back link**                           | `show = 0` `hide = 1`             |

<aside class="notice">
To prevent your client from changing the payment method, set <code>optDisplayCB = 1</code>
</aside>

## NICEPAY Secure Payment Page

![alt text](/images/payment-page-with-options.jpg "Payment Page with Options")

### Payment Method Selection
When your buyer decided to click on the `Change` button, they will be able to see the page below and change their preferred payment method.

![alt text](/images/payment-page-change.png "Payment Page on Change Button Click")


