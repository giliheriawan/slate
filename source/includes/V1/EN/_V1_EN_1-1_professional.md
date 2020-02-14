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

|                                                   |                                                                                                               |
|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                       | `/nicepay/api/orderRegist.do`                                                                                 |
| **Method** **application/x-www-form-urlencoded**  | `POST`                                                                                                        |
| **Description**                                   | Perform transaction registration.                                                                             |
| **Merchant Token**                                | SHA256(`iMid``referenceNo``amt``merchantKey`)                                                                 |
| **Payment Methods**                               | `01` Credit Card <br> `02` Virtual Account <br> `03` Convenience Store <br> `04` Click Pay <br> `05` E-Wallet |

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

| **Description**                       	      | Parameter       | Type        | Size | Example Value                                                                                  |
|-------------------------------------------------|-----------------|-------------|------|------------------------------------------------------------------------------------------------|
| **Merchant ID** **Required**                    | iMid            | AN          | 10   | IONPAYTEST                                                                                     |
| **Merchant Token** **Required**                 | merchantToken   | AN          | 255  | 6cfccfc0046773c1b589d8e98f8b<br>596c284f3c70a4ecf86eba14c18944b74bcd                           |
| **Payment Method** **Required**                 | payMethod       | AN          | 2    | `01` Credit Card <br> `02` Virtual Account <br> `03` Convenience Store <br> `04` ClickPay <br> `05 E-Wallet |
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
| **Billing City** **Required**                   | billingCity     | A           | 50   | Jakarta Utara                                                                                  |
| **Billing State** **Required**                  | billingState    | A           | 50   | DKI Jakarta                                                                                    |
| **Billing Postcode** **Required**               | billingPostCd   | A           | 10   | 10160                                                                                          |
| **Billing Country** **Required**                | billingCountry  | A           | 10   | Indonesia                                                                                      |
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
| **User IP address** **Required**     	          | userIP          | AN          | 15   | 127.0.0.1                                                                                      |
| **User Session ID**                        	  | userSessionID   | AN          | 100  | userSessionID                                                                                  |
| **User Agent Information**                  	  | userAgent       | AN          | 100  | Mozilla                                                                                        |
| **User Language**                           	  | userLanguage    | A           | 2    | en-US                                                                                          |
| **Recurring Option**                        	  | recurrOpt       | N           | 2    | 0: Automatic Cancel<br>1: Do not cancel<br>2: Do not make token                                |
| **Transaction Cart Data**                   	  | cartData        |`JSON OBJECT`| 4000 | [cartData](#cart-data) JSON                                                                    |
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
### API Specifications

|                                                   |                                                                                                                           |
|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| **API url**                                       | `/nicepay/api/orderInquiry.do`                                                                                            |
| **Method** **application/x-www-form-urlencoded**  | `REDIRECT`                                                                                                                |
| **Description**                                   | URL Redirect to NICEPAY Payment Page                                                                                      |

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

| **Description**                       	      | Parameter       | Type        | Size | Example Value                     |
|-------------------------------------------------|-----------------|-------------|------|-----------------------------------|
| **Transaction ID** **Required**                 | tXid            | AN          | 30   | IONPAYTEST02201607291027025291    |
| **Display change button**                       | optDisplayCB    | N           | 2    | `show = 0` `hide = 1`             |
| **Display back link**                           | optDisplayBL    | N           | 2    | `show = 0` `hide = 1`             |

<aside class="notice">
To prevent your client from changing the payment method, set <code>optDisplayCB = 1</code>
</aside>

## NICEPAY Secure Payment Page

![alt text](/images/payment-page-with-options.jpg "Payment Page with Options")

<details>
  <summary>Credit Card Payment Page</summary>

![alt text](/images/credit-card.png "Payment Page for Credit Card")

</details>

<details>
  <summary>Virtual Account</summary>

![alt text](/images/virtual-account.png "Payment Page for Credit Card")

</details>



### Credit Card Payment Page
![alt text](/images/credit-card.png "Payment Page for Credit Card")

### Virtual Account Payment Page
![alt text](/images/virtual-account.png "Payment Page for Credit Card")

### Convenience Store Payment Page
![alt text](/images/cvs.png "Payment Page for Credit Card")

### Click Pay Payment Page
![alt text](/images/clickpay.png "Payment Page for Credit Card")

### E-Wallet Payment Page
![alt text](/images/ewallet.png "Payment Page for Credit Card")
