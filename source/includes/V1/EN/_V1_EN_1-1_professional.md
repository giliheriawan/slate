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
### API Specifications
> Sample API Response <strong>After Registration</strong><br> 
> Take notes that <code>tXid</code> will be needed for payment.

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

|                                                   |                                               |
|---------------------------------------------------|-----------------------------------------------|
| **API url**                                       | `/nicepay/api/orderRegist.do`                 |
| **Method** **application/x-www-form-urlencoded**  | `POST`                                        |
| **Description**                                   | Perform transaction registration.             |
| **Merchant Token**                                | SHA256(`iMid``referenceNo``amt``merchantKey`) |

### This API creates and register a new Transaction for:
<ol type="1">
  <li>Credit Card
  <li>Virtual Account
  <li>Convenience Store
  <li>ClickPay
  <li>E-Wallet
</ol>

### All Parameters for Registration

| **Description**                       	      | Parameter       | Type        | Size | Example Value                                                                                  |
|-------------------------------------------------|-----------------|-------------|------|------------------------------------------------------------------------------------------------|
| **Merchant ID** **Required**                    | iMid            | AN          | 10   | IONPAYTEST                                                                                     |
| **Merchant Token** **Required**                 | merchantToken   | AN          | 255  | 6cfccfc0046773c1b589d8e98f8b<br>596c284f3c70a4ecf86eba14c18944b74bcd                           |
| **Payment Method** **Required**                 | payMethod       | AN          | 2    | 01: Credit Card<br>02: Virtual Account<br>03:Convenience Store<br>04: ClickPay<br>05: E-Wallet |
| **Currency** **Required**                       | currency        | A           | 3    | IDR                                                                                            |
| **Transaction Amount** **Required**             | amt             | N           | 12   | 10000                                                                                          |
| **Installment Type** **Required for CC**        | instmntType     | N           | 2    | 1: Customer charge<br>2: Merchant charge                                                       |
| **Installment Month** **Required for CC**       | instmntMon      | N           | 2    | 1                                                                                              |
| **Merchant Order Number** **Required**          | referenceNo     | ANS         | 40   | MerchantReferenceNumber1                                                                       |
| **Goods Name** **Required**                     | goodsNm         | AN          | 100  | Merchant Goods 1                                                                               |
| **Billing Name** **Required**                   | billingNm       | A           | 30   | Buyer Name                                                                                     |
| **Billing Phone Number** **Required**           | billingPhone    | N           | 15   | 2123456789                                                                                     |
| **Billing Email** **Required**                  | billingEmail    | AN          | 40   | buyer@merchant.com                                                                             |
| **Billing Address**                         	  | billingAddr     | AN          | 100  | Billing Address                                                                                |
| **Billing City** **Required for CC**            | billingCity     | A           | 50   | Jakarta Utara                                                                                  |
| **Billing State** **Required for CC**           | billingState    | A           | 50   | DKI Jakarta                                                                                    |
| **Billing Postcode** **Required for CC**        | billingPostCd   | A           | 10   | 10160                                                                                          |
| **Billing Country** **Required for CC**         | billingCountry  | A           | 10   | Indonesia                                                                                      |
| **Delivery Name**                          	  | deliveryNm      | A           | 30   | Delivery name                                                                                  |
| **Delivery Phone Number**                  	  | deliveryPhone   | N           | 15   | 2123456789                                                                                     |
| **Delivery Address**                       	  | deliveryAddr    | AN          | 100  | Delivery Address                                                                               |
| **Delivery City**                           	  | deliveryCity    | A           | 50   | Jakarta Utara                                                                                  |
| **Delivery State**                         	  | deliveryState   | A           | 50   | DKI Jakarta                                                                                    |
| **Delivery Postcode**                     	  | deliveryPostCd  | N           | 10   | 10160                                                                                          |
| **Delivery Country**                       	  | deliveryCountry | A           | 10   | indonesia                                                                                      |
| **Payment Result Page URL**  **Required**       | callBackUrl     | AN          | 255  | https://merchant.com/callBackUrl                                                               |
| **Push Notification URL**  **Required**         | dbProcessUrl    | AN          | 255  | https://merchant.com/dbProcessUrl                                                              |
| **Vat Number**                            	  | vat             | N           | 12   | 0                                                                                              |
| **Service Fee**                            	  | fee             | N           | 12   | 0                                                                                              |
| **Tax Free Amount**                        	  | notaxAmt        | N           | 12   | 0                                                                                              |
| **Transaction Description**  **Required**       | description     | AN          | 100  | this is test order                                                                             |
| **Request Date**                            	  | reqDt           | N           | 8    | 20180303                                                                                       |
| **Request Time**                            	  | reqTm           | N           | 6    | 135959                                                                                         |
| **Request domain**                          	  | reqDomain       | AN          | 100  | merchant.com                                                                                   |
| **Request Server IP Address**               	  | reqServerIP     | AN          | 15   | 127.0.0.1                                                                                      |
| **Request Client Version**                  	  | reqClientVer    | AN          | 50   | 1                                                                                              |
| **User IP address** **Required for CC**     	  | userIP          | AN          | 15   | 127.0.0.1                                                                                      |
| **User Session ID**                        	  | userSessionID   | AN          | 100  | userSessionID                                                                                  |
| **User Agent Information**                  	  | userAgent       | AN          | 100  | Mozilla                                                                                        |
| **User Language**                           	  | userLanguage    | A           | 2    | en-US                                                                                          |
| **Recurring Option**                        	  | recurrOpt       | N           | 2    | 0: Automatic Cancel<br>1: Do not cancel<br>2: Do not make token                                |
| **Transaction Cart Data**                   	  | cartData        |`JSON OBJECT`| 4000 | (JSON Format)                                                                                  |
| **Worker**                                 	  | worker          | AN          | 10   | worker                                                                                         |
| **Merchant Fix VA Number**  				  	  | merFixAcctId    | N           | 40   | 14015824                                                                                       |
| **Virtual Account Valid Date**     	      	  | vacctValidDt    | N           | 8    | 20180404                                                                                       |
| **Virtual Account Valid Time**              	  | vacctValidTm    | N           | 6    | 235959                                                                                         |
| **Payment Expired Date**                    	  | paymentExpDt    | N           | 8    | 20180404                                                                                       |
| **Payment Expired Time**                    	  | paymentExpTm    | N           | 6    | 235959                                                                                         |
| **CVS Valid Date**                          	  | payValidDt      | N           | 8    | 20180404                                                                                       |
| **CVS Valid Time**                         	  | payValidTm      | N           | 6    | 235959                                                                                         |
| **Transaction ID**            			  	  | tXid            | AN          | 30   | IONPAYTEST1251831956130431                                                                     |
| **Mitra Code**					          	  | mitraCd         | AN          | 4    | ALMA                                                                                           |
| **Bank Reference No.**                      	  | mRefNo          | N           | 18   | bankcd123456789                                                                                |
| **Timestamp**                               	  | timeStamp       | N           | 14   | 20180404165639                                                                                 |
| **SDK Version**                             	  | version         | AN          |      | D2                                                                                             |

<aside class="success">
For more specific parameters requirement for each payment method, read their own respective sections.
</aside>

## Transaction Payment
### API Specifications

|                                                   |                                                                                                                           |
|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| **API url**                                       | `/nicepay/api/orderInquiry.do`                                                                                            |
| **Method** **application/x-www-form-urlencoded**  | `REDIRECT`                                                                                                                |
| **Description**                                   | URL Redirect to NICEPAY Payment Page                                                                                      |
| **Example**                                       | `https://www.nicepay.co.id/nicepay/api/orderInquiry.do?tXid=IONPAYTEST01201608291733081257&optDisplayCB=0&optDisplayBL=0` |


### Payment Parameters
> Sample API Request

```java
if (nicePay.Get("resultCd").equals("0000")) {   
    String site = nicePay.Get("requestURL") + "&optDisplayCB=0" + "&optDisplayBL=0"; 
             response.setStatus(response.SC_MOVED_TEMPORARILY);   
             response.setHeader("Location", site);   
         } 
```

| **Description**                       	      | Parameter       | Type        | Size | Example Value                     |
|-------------------------------------------------|-----------------|-------------|------|-----------------------------------|
| **Transaction ID** **Required**                 | tXid            | AN          | 30   | IONPAYTEST02201607291027025291    |
| **Display change button**                       | optDisplayCB    | N           | 2    | `show = 0` `hide = 1`             |
| **Display back link**                           | optDisplayBL    | N           | 2    | `show = 0` `hide = 1`             |

### NICEPAY Secure Payment Page
![alt text](/images/payment-page-with-options.jpg "Payment Page with Options")

## Credit Card
### API Specifications

|                                                   |                                               |
|---------------------------------------------------|-----------------------------------------------|
| **API url**                                       | `/nicepay/api/orderRegist.do`                 |
| **Method** **application/x-www-form-urlencoded**  | `POST`                                        |
| **Description**                                   | Perform transaction registration.             |
| **Merchant Token**                                | SHA256(`iMid``referenceNo``amt``merchantKey`) |

### Registration Parameters
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

| **Description**                       	      | Parameter       | Type        | Size | Example Value                                                                                  |
|-------------------------------------------------|-----------------|-------------|------|------------------------------------------------------------------------------------------------|
| **Merchant ID** **Required**                    | iMid            | AN          | 10   | IONPAYTEST                                                                                     |
| **Merchant Token** **Required**                 | merchantToken   | AN          | 255  | 6cfccfc0046773c1b589d8e98f8b596c284f<br>3c70a4ecf86eba14c18944b74bcd                               |
| **Payment Method** **Required**                 | payMethod       | AN          | 2    | 01: Credit Card<br>02: Virtual Account<br>03:Convenience Store<br>04: ClickPay<br>05: E-Wallet |
| **Currency** **Required**                       | currency        | A           | 3    | IDR                                                                                            |
| **Transaction Amount** **Required**             | amt             | N           | 12   | 10000                                                                                          |
| **Installment Type** **Required for CC**        | instmntType     | N           | 2    | 1: Customer charge<br>2: Merchant charge                                                       |
| **Installment Month** **Required for CC**       | instmntMon      | N           | 2    | 1                                                                                              |
| **Merchant Order Number** **Required**          | referenceNo     | ANS         | 40   | MerchantReferenceNumber1                                                                       |
| **Goods Name** **Required**                     | goodsNm         | AN          | 100  | Merchant Goods 1                                                                               |
| **Billing Name** **Required**                   | billingNm       | A           | 30   | Buyer Name                                                                                     |
| **Billing Phone Number** **Required**           | billingPhone    | N           | 15   | 2123456789                                                                                     |
| **Billing Email** **Required**                  | billingEmail    | AN          | 40   | buyer@merchant.com                                                                             |
| **Billing Address**                         	  | billingAddr     | AN          | 100  | Billing Address                                                                                |
| **Billing City** **Required for CC**            | billingCity     | A           | 50   | Jakarta Utara                                                                                  |
| **Billing State** **Required for CC**           | billingState    | A           | 50   | DKI Jakarta                                                                                    |
| **Billing Postcode** **Required for CC**        | billingPostCd   | A           | 10   | 10160                                                                                          |
| **Billing Country** **Required for CC**         | billingCountry  | A           | 10   | Indonesia                                                                                      |
| **Payment Result Page URL**  **Required**       | callBackUrl     | AN          | 255  | https://merchant.com/callBackUrl                                                               |
| **Push Notification URL**  **Required**         | dbProcessUrl    | AN          | 255  | https://merchant.com/dbProcessUrl                                                              |
| **User IP address** **Required for CC**     	  | userIP          | AN          | 15   | 127.0.0.1                                                                                      |
| **Transaction Description** **Required**        | description     | AN          | 100  | this is test order                                                                             |
| **Vat Number**                            	  | vat             | N           | 12   | 0                                                                                              |
| **Service Fee**                            	  | fee             | N           | 12   | 0                                                                                              |
| **Tax Free Amount**                        	  | notaxAmt        | N           | 12   | 0                                                                                              |
| **Request Date**                            	  | reqDt           | N           | 8    | 20180303                                                                                       |
| **Request Time**                            	  | reqTm           | N           | 6    | 135959                                                                                         |
| **Request domain**                          	  | reqDomain       | AN          | 100  | merchant.com                                                                                   |
| **Request Server IP Address**               	  | reqServerIP     | AN          | 15   | 127.0.0.1                                                                                      |
| **Request Client Version**                  	  | reqClientVer    | AN          | 50   | 1                                                                                              |
| **User Session ID**                        	  | userSessionID   | AN          | 100  | userSessionID                                                                                  |
| **User Agent Information**                  	  | userAgent       | AN          | 100  | Mozilla                                                                                        |
| **User Language**                           	  | userLanguage    | A           | 2    | en-US                                                                                          |

<aside class="success">
After your transaction has been Registered, don't forget to redirect your client to our Payment Page [internal link](#nicepay-payment-page)
</aside>

### Credit Card Payment Page
![alt text](/images/credit-card.png "Payment Page for Credit Card")

## Virtual Account
>Sample API Request

```java
// Payment Mandatory Field
nicePay.setPayMethod("02");
nicePay.setCurrency("IDR");
nicePay.setAmt("1000");
nicePay.setReferenceNo("MerchantReferenceNumber001");
nicePay.setGoodsNm("Merchant Goods 1");
nicePay.setBillingNm("Buyer Name");
nicePay.setBillingEmail("buyer@merchant.com");
nicePay.setBillingPhone("02112345678");
nicePay.setCallBackUrl("www.merchant.com/callback");
nicePay.setDbProcessUrl("www.merchant.com/dbprocess");
nicePay.setDescription("Description");
nicePay.setMerchantToken(nicePay.makeToken(nicePay.getAmt(), nicePay.getReferenceNo()));
nicePay.setCartData("{}");

// Payment Optional Field
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
nicePay.setVat("0");
nicePay.setFee("0");
nicePay.setNotaxAmt("0");
nicePay.setReqDt("20160301");
nicePay.setReqTm("135959");
nicePay.setReqDomain("www.merchant.com");
nicePay.setReqServerIP("127.0.0.1");
nicePay.setReqClientVer("1.0");
nicePay.setUserIP("127.0.0.1");
nicePay.setUserSessionID("userSessionID");
nicePay.setUserAgent("Mozilla");
nicePay.setUserLanguage("en-US");

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
```

```php
<?php
$nicepay = new NicepayLib();

//Ignore this function if you have invoice number.
function generateReference()
{
  $micro_date = microtime();
  $date_array = explode(" ",$microdate);
  $date = date("YmdHis",$date_array[1]);
  $date_array[0] = preg_replace('/[^\p{L}\p{N}\s]/u', '', $date_array[0]);
  return "Ref".$date.$date_array[0].rand(100,999);
}

if(isset($_POST['payMethod']) && $_POST['payMethod'] == '02'){
  //Populate Mandatory parameters to send
  $nicepay->set('payMethod', '02');
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
  $response = $nicepay->requestVA();

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
NICEPay.payMethod = "02" #Set Payment Method
NICEPay.amt = "1000" #Total Gross Amount
NICEPay.referenceNo = str(random.randrange(111111, 999999)) #Invoice Number By Merchant
NICEPay.goodsNm = NICEPay.referenceNo #Goods Name
NICEPay.billingNm = "John Doe"
NICEPay.billingPhone = "02112345678"
NICEPay.billingEmail = "john@example.com"
NICEPay.callBackUrl = "http://www.merchant.com/callback"
NICEPay.dbProcessUrl = "https://www.merchant.com/notification"
NICEPay.description = "Payment Of Ref No." + NICEPay.referenceNo
NICEPay.merchantToken = NICEPay.getMerchantToken()
NICEPay.userIP = NICEPay.getUserIp()
NICEPay.cartData = "{}" #Json Array Value

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
  "tXid": "TESTIDTEST02201705261652026146",
  "requestDate": "20170526165202",
  "responseDate": "20170526165202",
  "data": {
    "tXid": "TESTIDTEST02201705261652026146",
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "requestURL": "https://www.nicepay.co.id/nicepay/api/orderInquiry.do"
  }
}
```

Below sample **Transaction Registration** for **Virtual Account**

Notice | &nbsp;
---------- | -------
payMethod | 02
Description | Virtual Account

<br>**Mandatory Parameter for Virtual Account**

Parameter | Type | Size | Description | Example Data
---------- | ---------- | ---------- | ---------- | ----------
iMid | AN | 10 | Merchant ID | IONPAYTEST
payMethod | AN | 2 | Pay Method | 02
currency | AN | 3 | Currency | IDR
amt | N | 12 | Goods Amount | 1000
referenceNo | ANS | 40 | Merchant Order No | MerchantReferenceNumber001
goodsNm | AN | 100 | Goods Name | Merchant Goods 1
billingNm | A | 30 | Billing Name | Buyer Name
billingPhone | N | 15 | Billing Phone Number | 02112345678
billingEmail | AN | 40 | Billing Email | buyer@merchant.com
callBackUrl | AN | 255 | Payment Result Forward Url (On Browser) | www.merchant.com/callback
dbProcessUrl | AN | 255 | Payment Result Receive Url (Server Side) | www.merchant.com/dbprocess
description | AN | 12 | Description | Description
merchantToken | AN | 255 | Merchant Token | 6cfccfc0046773c1b589d8e98f8b596c284f3c70a4ecf86eba14c18944b74bcd
cartData | AN | 4000 | Cart Data (Json Format) | {}

<br>**Optional Parameter for Virtual Account**

Parameter | Type | Size | Description | Example Data
---------- | ---------- | ---------- | ---------- | ----------
billingAddr | AN | 100 | Billing Address | Billing Address
billingCity | A | 50 | Billing City | Jakarta
billingState | A | 50 | Billing State | Jakarta
billingPostCd | N | 10 | Billing Post Number | 12345
billingCountry | A | 10 | Billing Country | Indonesia
deliveryNm | A | 30 | Delivery Name | Buyer Name
deliveryPhone | N | 15 | Delivery Phone | 02112345678
deliveryAddr | AN | 100 | Delivery Address | Billing Address
deliveryEmail | AN | &nbsp; | Delivery Email | buyer@merchant.com
deliveryCity | A | 50 | Delivery City | Jakarta
deliveryState | A | 50 | Delivery State | Jakarta
deliveryPostCd | N | 10 | Delivery Post Number | 12345
deliveryCountry | A | 10 | Delivery Country | Indonesia
vat | N | 12 | Vat | 0
fee | N | 12 | Service Tax | 0
notaxAmt | N | 12 | Tax Free Amount | 0
reqDt | N | 8 | Request Date(YYYYMMDD) | 20160301
reqTm | N | 6 | Request Time(HH24MISS) | 135959
reqDomain | AN | 100 | Request Domain | merchant.com
reqServerIP | AN | 15 | Request Server IP | 127.0.0.1
reqClientVer | AN | 50 | equest Client Version | 1.0
userIP | AN | 15 | User IP (Customer) | 127.0.0.1
userSessionID | AN | 100 | User Session ID | userSessionID
userAgent | AN | 100 | User Agent Information | Mozilla
userLanguage | AN | 2 | User Language | en-US

##- Convenience Store

```java
nicePay.setPayMethod("03");
nicePay.setCurrency("IDR");
nicePay.setAmt("1000");
nicePay.setReferenceNo("MerchantReferenceNumber001");
nicePay.setGoodsNm("Merchant Goods 1");
nicePay.setBillingNm("Buyer Name");
nicePay.setBillingEmail("buyer@merchant.com");
nicePay.setBillingPhone("02112345678");
nicePay.setCallBackUrl("www.merchant.com/callback");
nicePay.setDbProcessUrl("www.merchant.com/dbprocess");
nicePay.setDescription("Description");
nicePay.setMerchantToken(nicePay.makeToken(nicePay.getAmt(), nicePay.getReferenceNo()));
nicePay.setCartData("{}");

// Payment Optional Field
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
nicePay.setVat("0");
nicePay.setFee("0");
nicePay.setNotaxAmt("0");
nicePay.setReqDt("20160301");
nicePay.setReqTm("135959");
nicePay.setReqDomain("www.merchant.com");
nicePay.setReqServerIP("127.0.0.1");
nicePay.setReqClientVer("1.0");
nicePay.setUserIP("127.0.0.1");
nicePay.setUserSessionID("userSessionID");
nicePay.setUserAgent("Mozilla");
nicePay.setUserLanguage("en-US");

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
```

```php
<?php
$nicepay = new NicepayLib();

//Ignore this function if you have invoice number.
function generateReference()
{
  $micro_date = microtime();
  $date_array = explode(" ",$microdate);
  $date = date("YmdHis",$date_array[1]);
  $date_array[0] = preg_replace('/[^\p{L}\p{N}\s]/u', '', $date_array[0]);
  return "Ref".$date.$date_array[0].rand(100,999);
}

if(isset($_POST['payMethod']) && $_POST['payMethod'] == '03'){
  //Populate Mandatory parameters to send
  $nicepay->set('payMethod', '03');
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
  $response = $nicepay->requestCVS();

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
NICEPay.payMethod = "03" #Set Payment Method
NICEPay.amt = "1000" #Total Gross Amount
NICEPay.referenceNo = str(random.randrange(111111, 999999)) #Invoice Number By Merchant
NICEPay.goodsNm = NICEPay.referenceNo #Goods Name
NICEPay.billingNm = "John Doe"
NICEPay.billingPhone = "02112345678"
NICEPay.billingEmail = "john@example.com"
NICEPay.callBackUrl = "http://www.merchant.com/callback"
NICEPay.dbProcessUrl = "https://www.merchant.com/notification"
NICEPay.description = "Payment Of Ref No." + NICEPay.referenceNo
NICEPay.merchantToken = NICEPay.getMerchantToken()
NICEPay.userIP = NICEPay.getUserIp()
NICEPay.cartData = "{}" #Json Array Value

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

> Sample API response :


```json
{
  "apiType": "M0",
  "tXid": "TESTIDTEST03201705291553243107",
  "requestDate": "20170526165202",
  "responseDate": "20170526165202",
  "data": {
    "tXid": "TESTIDTEST03201705291553243107",
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "requestURL": "https://www.nicepay.co.id/nicepay/api/orderInquiry.do"
  }
}
```

Below sample **Transaction Registration** for **Convenience Store (CVS)**

Notice | &nbsp;
---------- | -------
payMethod | 03
Description | Convenience Store (CVS)

<br>**Mandatory Parameter for Convenience Store (CVS)**

Parameter | Type | Size | Description | Example Data
---------- | ---------- | ---------- | ---------- | ----------
iMid | AN | 10 | Merchant ID | IONPAYTEST
payMethod | AN | 2 | Pay Method | 03
currency | AN | 3 | Currency | IDR
amt | N | 12 | Goods Amount | 1000
referenceNo | ANS | 40 | Merchant Order No | MerchantReferenceNumber001
goodsNm | AN | 100 | Goods Name | Merchant Goods 1
billingNm | A | 30 | Billing Name | Buyer Name
billingPhone | N | 15 | Billing Phone Number | 02112345678
billingEmail | AN | 40 | Billing Email | buyer@merchant.com
callBackUrl | AN | 255 | Payment Result Forward Url (On Browser) | www.merchant.com/callback
dbProcessUrl | AN | 255 | Payment Result Receive Url (Server Side) | www.merchant.com/dbprocess
description | AN | 12 | Description | Description
merchantToken | AN | 255 | Merchant Token | 6cfccfc0046773c1b589d8e98f8b596c284f3c70a4ecf86eba14c18944b74bcd
cartData | AN | 4000 | Cart Data (Json Format) | {}

<br>**Optional Parameter for Convenience Store (CVS)**

Parameter | Type | Size | Description | Example Data
---------- | ---------- | ---------- | ---------- | ----------
payValidDt | N | 8 | CVS valid date | 20180323
payValidTm | N | 6 | CVS valid time | 205959
billingAddr | AN | 100 | Billing Address | Billing Address
billingCity | A | 50 | Billing City | Jakarta
billingState | A | 50 | Billing State | Jakarta
billingPostCd | N | 10 | Billing Post Number | 12345
billingCountry | A | 10 | Billing Country | Indonesia
deliveryNm | A | 30 | Delivery Name | Buyer Name
deliveryPhone | N | 15 | Delivery Phone | 02112345678
deliveryAddr | AN | 100 | Delivery Address | Billing Address
deliveryEmail | AN | &nbsp; | Delivery Email | buyer@merchant.com
deliveryCity | A | 50 | Delivery City | Jakarta
deliveryState | A | 50 | Delivery State | Jakarta
deliveryPostCd | N | 10 | Delivery Post Number | 12345
deliveryCountry | A | 10 | Delivery Country | Indonesia
vat | N | 12 | Vat | 0
fee | N | 12 | Service Tax | 0
notaxAmt | N | 12 | Tax Free Amount | 0
reqDt | N | 8 | Request Date(YYYYMMDD) | 20160301
reqTm | N | 6 | Request Time(HH24MISS) | 135959
reqDomain | AN | 100 | Request Domain | merchant.com
reqServerIP | AN | 15 | Request Server IP | 127.0.0.1
reqClientVer | AN | 50 | equest Client Version | 1.0
userIP | AN | 15 | User IP (Customer) | 127.0.0.1
userSessionID | AN | 100 | User Session ID | userSessionID
userAgent | AN | 100 | User Agent Information | Mozilla
userLanguage | AN | 2 | User Language | en-US

##- ClickPay

```java
// Payment Mandatory Field
nicePay.setPayMethod("04");
nicePay.setCurrency("IDR");
nicePay.setAmt("1000");
nicePay.setReferenceNo("MerchantReferenceNumber001");
nicePay.setGoodsNm("Merchant Goods 1");
nicePay.setBillingNm("Buyer Name");
nicePay.setBillingEmail("buyer@merchant.com");
nicePay.setBillingPhone("02112345678");
nicePay.setCallBackUrl("www.merchant.com/callback");
nicePay.setDbProcessUrl("www.merchant.com/dbprocess");
nicePay.setDescription("Description");
nicePay.setMerchantToken(nicePay.makeToken(nicePay.getAmt(), nicePay.getReferenceNo()));
nicePay.setCartData("{}");
nicePay.setUserIP("127.0.0.1");

// Payment Optional Field
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
nicePay.setVat("0");
nicePay.setFee("0");
nicePay.setNotaxAmt("0");
nicePay.setReqDt("20160301");
nicePay.setReqTm("135959");
nicePay.setReqDomain("www.merchant.com");
nicePay.setReqServerIP("127.0.0.1");
nicePay.setReqClientVer("1.0");
nicePay.setUserSessionID("userSessionID");
nicePay.setUserAgent("Mozilla");
nicePay.setUserLanguage("en-US");

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
```

```php
<?php
$nicepay = new NicepayLib();

//Ignore this function if you have invoice number.
function generateReference()
{
  $micro_date = microtime();
  $date_array = explode(" ",$microdate);
  $date = date("YmdHis",$date_array[1]);
  $date_array[0] = preg_replace('/[^\p{L}\p{N}\s]/u', '', $date_array[0]);
  return "Ref".$date.$date_array[0].rand(100,999);
}

if(isset($_POST['payMethod']) && $_POST['payMethod'] == '04'){
  //Populate Mandatory parameters to send
  $nicepay->set('payMethod', '04');
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
  $response = $nicepay->requestClickPay();

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
NICEPay.payMethod = "04" #Set Payment Method
NICEPay.amt = "1000" #Total Gross Amount
NICEPay.referenceNo = str(random.randrange(111111, 999999)) #Invoice Number By Merchant
NICEPay.goodsNm = NICEPay.referenceNo #Goods Name
NICEPay.billingNm = "John Doe"
NICEPay.billingPhone = "02112345678"
NICEPay.billingEmail = "john@example.com"
NICEPay.callBackUrl = "http://www.merchant.com/callback"
NICEPay.dbProcessUrl = "https://www.merchant.com/notification"
NICEPay.description = "Payment Of Ref No." + NICEPay.referenceNo
NICEPay.merchantToken = NICEPay.getMerchantToken()
NICEPay.userIP = NICEPay.getUserIp()
NICEPay.cartData = "{}" #Json Array Value

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
  "tXid": "TESTIDTEST02201705261652026146",
  "requestDate": "20170526165202",
  "responseDate": "20170526165202",
  "data": {
    "tXid": "TESTIDTEST02201705261652026146",
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "requestURL": "https://www.nicepay.co.id/nicepay/api/orderInquiry.do"
  }
}
```

Below sample **Transaction Registration** for **ClickPay**

Notice | &nbsp;
---------- | -------
payMethod | 04
Description | ClickPay

<br>**Mandatory Parameter for ClickPay**

Parameter | Type | Size | Description | Example Data
---------- | ---------- | ---------- | ---------- | ----------
iMid | AN | 10 | Merchant ID | IONPAYTEST
payMethod | AN | 2 | Pay Method | 04
currency | AN | 3 | Currency | IDR
amt | N | 12 | Goods Amount | 1000
referenceNo | ANS | 40 | Merchant Order No | MerchantReferenceNumber001
goodsNm | AN | 100 | Goods Name | Merchant Goods 1
billingNm | A | 30 | Billing Name | Buyer Name
billingPhone | N | 15 | Billing Phone Number | 02112345678
billingEmail | AN | 40 | Billing Email | buyer@merchant.com
callBackUrl | AN | 255 | Payment Result Forward Url (On Browser) | www.merchant.com/callback
dbProcessUrl | AN | 255 | Payment Result Receive Url (Server Side) | www.merchant.com/dbprocess
description | AN | 12 | Description | Description
merchantToken | AN | 255 | Merchant Token | 6cfccfc0046773c1b589d8e98f8b596c284f3c70a4ecf86eba14c18944b74bcd
cartData | AN | 4000 | Cart Data (Json Format) | {}
userIP | AN | 15 | User IP (Customer) | 127.0.0.1

<br>**Optional Parameter for ClickPay**

Parameter | Type | Size | Description | Example Data
---------- | ---------- | ---------- | ---------- | ----------
paymentExpDt | N | 8 | Payment expiry date | 20180326
paymentExpTm | N | 6 | Payment Expiry time | 205959
billingAddr | AN | 100 | Billing Address | Billing Address
billingCity | A | 50 | Billing City | Jakarta
billingState | A | 50 | Billing State | Jakarta
billingPostCd | N | 10 | Billing Post Number | 12345
billingCountry | A | 10 | Billing Country | Indonesia
deliveryNm | A | 30 | Delivery Name | Buyer Name
deliveryPhone | N | 15 | Delivery Phone | 02112345678
deliveryAddr | AN | 100 | Delivery Address | Billing Address
deliveryEmail | AN | &nbsp; | Delivery Email | buyer@merchant.com
deliveryCity | A | 50 | Delivery City | Jakarta
deliveryState | A | 50 | Delivery State | Jakarta
deliveryPostCd | N | 10 | Delivery Post Number | 12345
deliveryCountry | A | 10 | Delivery Country | Indonesia
vat | N | 12 | Vat | 0
fee | N | 12 | Service Tax | 0
notaxAmt | N | 12 | Tax Free Amount | 0
reqDt | N | 8 | Request Date(YYYYMMDD) | 20160301
reqTm | N | 6 | Request Time(HH24MISS) | 135959
reqDomain | AN | 100 | Request Domain | merchant.com
reqServerIP | AN | 15 | Request Server IP | 127.0.0.1
reqClientVer | AN | 50 | equest Client Version | 1.0
userSessionID | AN | 100 | User Session ID | userSessionID
userAgent | AN | 100 | User Agent Information | Mozilla
userLanguage | AN | 2 | User Language | en-US

##- E-Wallet

```java
// Payment Mandatory Field
nicePay.setPayMethod("05");
nicePay.setCurrency("IDR");
nicePay.setAmt("1000");
nicePay.setReferenceNo("MerchantReferenceNumber001");
nicePay.setGoodsNm("Merchant Goods 1");
nicePay.setBillingNm("Buyer Name");
nicePay.setBillingEmail("buyer@merchant.com");
nicePay.setBillingPhone("02112345678");
nicePay.setCallBackUrl("www.merchant.com/callback");
nicePay.setDbProcessUrl("www.merchant.com/dbprocess");
nicePay.setDescription("Description");
nicePay.setMerchantToken(nicePay.makeToken(nicePay.getAmt(), nicePay.getReferenceNo()));
nicePay.setCartData("{}");
nicePay.setUserIP("127.0.0.1");

// Payment Optional Field
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
nicePay.setVat("0");
nicePay.setFee("0");
nicePay.setNotaxAmt("0");
nicePay.setReqDt("20160301");
nicePay.setReqTm("135959");
nicePay.setReqDomain("www.merchant.com");
nicePay.setReqServerIP("127.0.0.1");
nicePay.setReqClientVer("1.0");
nicePay.setUserSessionID("userSessionID");
nicePay.setUserAgent("Mozilla");
nicePay.setUserLanguage("en-US");

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
```

```php
<?php
$nicepay = new NicepayLib();

//Ignore this function if you have invoice number.
function generateReference()
{
  $micro_date = microtime();
  $date_array = explode(" ",$microdate);
  $date = date("YmdHis",$date_array[1]);
  $date_array[0] = preg_replace('/[^\p{L}\p{N}\s]/u', '', $date_array[0]);
  return "Ref".$date.$date_array[0].rand(100,999);
}

if(isset($_POST['payMethod']) && $_POST['payMethod'] == '04'){
  //Populate Mandatory parameters to send
  $nicepay->set('payMethod', '05');
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
  $response = $nicepay->requestClickPay();

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
NICEPay.payMethod = "05" #Set Payment Method
NICEPay.amt = "1000" #Total Gross Amount
NICEPay.referenceNo = str(random.randrange(111111, 999999)) #Invoice Number By Merchant
NICEPay.goodsNm = NICEPay.referenceNo #Goods Name
NICEPay.billingNm = "John Doe"
NICEPay.billingPhone = "02112345678"
NICEPay.billingEmail = "john@example.com"
NICEPay.callBackUrl = "http://www.merchant.com/callback"
NICEPay.dbProcessUrl = "https://www.merchant.com/notification"
NICEPay.description = "Payment Of Ref No." + NICEPay.referenceNo
NICEPay.merchantToken = NICEPay.getMerchantToken()
NICEPay.userIP = NICEPay.getUserIp()
NICEPay.cartData = "{}" #Json Array Value

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
  "tXid": "TESTIDTEST02201705261652026146",
  "requestDate": "20170526165202",
  "responseDate": "20170526165202",
  "data": {
    "tXid": "TESTIDTEST02201705261652026146",
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "requestURL": "https://www.nicepay.co.id/nicepay/api/orderInquiry.do"
  }
}
```

Below sample **Transaction Registration** for **E-Wallet**

Notice | &nbsp;
---------- | -------
payMethod | 05
Description | E-Wallet

<br>**Mandatory Parameter for E-Wallet**

Parameter | Type | Size | Description | Example Data
---------- | ---------- | ---------- | ---------- | ----------
iMid | AN | 10 | Merchant ID | IONPAYTEST
payMethod | AN | 2 | Pay Method | 05
currency | AN | 3 | Currency | IDR
amt | N | 12 | Goods Amount | 1000
referenceNo | ANS | 40 | Merchant Order No | MerchantReferenceNumber001
goodsNm | AN | 100 | Goods Name | Merchant Goods 1
billingNm | A | 30 | Billing Name | Buyer Name
billingPhone | N | 15 | Billing Phone Number | 02112345678
billingEmail | AN | 40 | Billing Email | buyer@merchant.com
callBackUrl | AN | 255 | Payment Result Forward Url (On Browser) | www.merchant.com/callback
dbProcessUrl | AN | 255 | Payment Result Receive Url (Server Side) | www.merchant.com/dbprocess
description | AN | 12 | Description | Description
merchantToken | AN | 255 | Merchant Token | 6cfccfc0046773c1b589d8e98f8b596c284f3c70a4ecf86eba14c18944b74bcd
cartData | AN | 4000 | Cart Data (Json Format) | {}
userIP | AN | 15 | User IP (Customer) | 127.0.0.1

<br>**Optional Parameter for E-Wallet**

Parameter | Type | Size | Description | Example Data
---------- | ---------- | ---------- | ---------- | ----------
paymentExpDt | N | 8 | Payment expiry date | 20180326
paymentExpTm | N | 6 | Payment Expiry time | 205959
billingAddr | AN | 100 | Billing Address | Billing Address
billingCity | A | 50 | Billing City | Jakarta
billingState | A | 50 | Billing State | Jakarta
billingPostCd | N | 10 | Billing Post Number | 12345
billingCountry | A | 10 | Billing Country | Indonesia
deliveryNm | A | 30 | Delivery Name | Buyer Name
deliveryPhone | N | 15 | Delivery Phone | 02112345678
deliveryAddr | AN | 100 | Delivery Address | Billing Address
deliveryEmail | AN | &nbsp; | Delivery Email | buyer@merchant.com
deliveryCity | A | 50 | Delivery City | Jakarta
deliveryState | A | 50 | Delivery State | Jakarta
deliveryPostCd | N | 10 | Delivery Post Number | 12345
deliveryCountry | A | 10 | Delivery Country | Indonesia
vat | N | 12 | Vat | 0
fee | N | 12 | Service Tax | 0
notaxAmt | N | 12 | Tax Free Amount | 0
reqDt | N | 8 | Request Date(YYYYMMDD) | 20160301
reqTm | N | 6 | Request Time(HH24MISS) | 135959
reqDomain | AN | 100 | Request Domain | merchant.com
reqServerIP | AN | 15 | Request Server IP | 127.0.0.1
reqClientVer | AN | 50 | equest Client Version | 1.0
userSessionID | AN | 100 | User Session ID | userSessionID
userAgent | AN | 100 | User Agent Information | Mozilla
userLanguage | AN | 2 | User Language | en-US
















## - Credit Card
below sample **Credit Card** for **NICEPay Payment Page**<br><br>
<img src="/images/credit-card.png">

### Callback URL
Response Parameter :

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result Code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transaction ID
referenceNo | ANS | 40 | Merchant Order No
authNo | N | 10 | Authorization Number
amount | N | 12 | Transaction Amount
transDt | N | 8 | Registration date
transTm | N | 6 | Registration time
description | AN | 100 | Transaction Description

## - Virtual Account
below sample **Virtual Account** for **NICEPay Payment Page**<br><br>
<img src="/images/virtual-account.png">

### Callback URL
Response Parameter :

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result Code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transaction ID
bankVacctNo | N | 20 | Bank Virtual Account Number
referenceNo | ANS | 40 | Merchant Order No
amount | N | 12 | Transaction Amount
transDt | N | 8 | Registration date
transTm | N | 6 | Registration time
bankCd | A | 4 | Bank Code, refer Code at [Here](#bank-code)
description | AN | 100 | Transaction Description

## - Convenience Store
below sample **Convenience Store** for **NICEPay Payment Page**<br><br>
<img src="/images/cvs.png">

### Callback URL
Response Parameter :

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result Code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transaction ID
referenceNo | ANS | 40 | Merchant Order No
amount | N | 12 | Transaction Amount
transDt | N | 8 | Registration date
transTm | N | 6 | Registration time
payNo | A | 16 | Payment Number
mitraCd | A | 4 | Mitra Code, refer Code at [Here](#mitra-code)

## - ClickPay
below sample **ClickPay** for **NICEPay Payment Page**<br><br>
<img src="/images/clickpay.png">

### Callback URL
Response Parameter :

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result Code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transaction ID
referenceNo | ANS | 40 | Merchant Order No
amount | N | 12 | Transaction Amount
transDt | N | 8 | Registration date
transTm | N | 6 | Registration time
receiptCode | ANS | 20 | Authorization Number

## - E-Wallet
below sample **E-Wallet** for **NICEPay Payment Page**<br><br>
<img src="/images/ewallet.png">

### Callback URL
Response Parameter :

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | Result Code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transaction ID
referenceNo | ANS | 40 | Merchant Order No
amount | N | 12 | Transaction Amount
transDt | N | 8 | Registration date
transTm | N | 6 | Registration time
