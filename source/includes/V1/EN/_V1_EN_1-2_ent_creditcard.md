# Credit Card
Transaction Flow:
<ol type="1">
  <li>Request `onePassToken`.
  <li>Redirect to 3DS / MIGS page.
  <li>**Customer** input `OTP` on 3DS page.
  <li>Merchant Register Transaction.
  <li>NICEPay Send Notification
</ol>

<div class="wrapper">
<ul>
  <li>
    <input type="checkbox" id="list-item-ccv1">
    <label for="list-item-ccv1" class="first">Credit Card Flow</label>
    <ul>
      <img src="/images/ent-cc-flow.png">
    </ul>
  </li>
</ul>
</div>

## Request Token
Merchant need to request `onePassToken` for each `Credit Card` transaction using NICEPay Enterprise.

### API Specifications - Request Token

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/api/onePassToken.do`                                                                                |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Request `onePassToken` for Credit Card Transaction.                                                           |
| **Merchant Token**                                        | SHA256(`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                                 |
| **Payment Methods**                                       | `01` Credit Card                                                                                              |

### Request Parameter - Request Token

> Sample API Request

```java
// Payment Mandatory Field
nicePay.setCardNo("5409123456789123");
nicePay.setCardExpYymm("2012");
nicePay.setAmt ("10000");
nicePay.setReferenceNo ("ABC123");
nicePay.setMerchantToken(nicePay.makeToken(nicePay.getAmt(), nicePay.getReferenceNo()));

// Payment Request
nicePay.transactionToken();

// Payment Response
String responseString = nicePay.getResponseString()); // JSON in String format
Hashtable<String, String> HTResponse = nicePay.getHtResponse(); // JSON in HashTable<String, String> format
16.
String resultCd = nicePay.Get("resultCd");
String resultMsg = nicePay.Get("resultMsg");
String cardToken= nicePay.Get("cardToken");
String paymentType= nicePay.Get("paymentType");
```

| **Parameter**                        | **Type** | **Size** | Description                           | Example Value                                                |
| ------------------------------------ | -------- | -------- | ------------------------------------- | ------------------------------------------------------------ |
| **`iMid`** **Required**              | **AN**   | 10       | Merchant ID                           | IONPAYTEST                                                   |
| **`merchantToken`** **Required**     | **AN**   | 255      | Merchant Token                        | c69fd0a2e36fb9d97fc8418f6b22699143a1177e570769dac2cf4d2008558946 |
| **`cardNo`** **Required**            | **N**    | 16       | Card number                           | 5409123456789123                                             |
| **`cardExpYYmm`** **Required**       | **N**    | 4        | Card expiry (YYMM)                    | 2012                                                         |
| **`cardHolderNm`** **Required CIMB** | **AN**   | 50       | Card holder name                      | asdasdas                                                     |
| **`amt`** **Required**               | **N**    | 12       | Payment amount                        | 10000                                                        |
| **`referenceNo`** **Required**       | **ANS**  | 40       | Merchant Order Number Required        | ABC123                                                       |
| **`instmntType`**                    | **N**    | 2        | [Installment Type](#installment-type) | 1                                                            |
| **`instmntMon`**                     | **N**    | 2        | Installment month                     | 1                                                            |

### Response Parameter - Request Token

> Sample JSON response

```json
{
    "resultCd": "0000",
    "cardToken": "ed5ce66bf69926c52cfa237c56fb38601f7c08985d385e615971a268b510db75",
    "resultMsg": "SUCCESS",
    "paymentType": "3"
}
```

| **Parameter**     | **Type** | **Size** | Description                    |
| ----------------- | -------- | -------- | ------------------------------ |
| **`resultCd`**    | **N**    | **4**    | result code                    |
| **`resultMsg`**   | **AN**   | **255**  | result message                 |
| **`cardToken`**   | **AN**   | **64**   | one time use transaction token |
| **`paymentType`** | **N**    | **1**    | CC Authorization type          |

<aside class="notice">Kindly check the <code>paymentType</code> value from <code>onePassToken.do</code> response.
This will be needed for the next step to determine whether to use <code>3DS</code> or <code>MIGS</code>.</aside>

| **`paymentType`** | Description                                      |
| ----------------- | ------------------------------------------------ |
| **`1`**           | 3D Secure                                        |
| **`2`**           | KeyIn (Proceed to Registration without 3DS/MIGS) |
| **`3`**           | MIGS                                             |

## 3DS Request
Proceed with this API when you get `paymentType = 1` from `onePassToken.do` response.

3DS Steps:
<ol type="1">
  <li>Send parameters to 3DS Request API.
  <li>Popup to Bank 3D Secure Page.
  <li>Customer input OTP.
  <li>NICEPay will send response parameter to <code>callbackUrl</code>.
</ol>

### API Specifications - 3DS

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/api/secureVeRequest.do`                                                                             |
| **Request Method** **application/json**                   | `POPUP` or `Redirect`                                                                                         |
| **Description**                                           | Request `3DS` page for `paymentType = 1`                                                                      |
| **Merchant Token**                                        | SHA256(`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                                 |
| **Payment Methods**                                       | `01` Credit Card                                                                                              |

### Request Parameter - 3DS

> Sample Request

```
https://www.nicepay.co.id/nicepay/api/secureVeRequest.do?country=360&callbackUrl={callbackUrl}&onePassToken={onePassToken}
```

| **Parameter**                   | **Type** | **Size** | Description                    | Sample Data                                                  |
| ------------------------------- | -------- | -------- | ------------------------------ | ------------------------------------------------------------ |
| **`country`** **Required**      | **N**    | **3**    | Country                        | 360                                                          |
| **`callbackUrl`** **Required**  | **ANS**  | **200**  | Callback Url                   | http://merchant.com/callback                                 |
| **`onePassToken`** **Required** | **AN**   | **64**   | One time use transaction token | c5bd0b91bcc3d21358cd004c60e54<br>579441c23aa8e7553b41ce3402db1113fff |

### 3DS Response Parameter

> Sample URL Parameter 3DS Response

```
http://merchant.com/callbackUrl?resultCd={resultCd}&resultMsg={resultMsg}&referenceNo={referenceNo}&merchantToken={merchantToken}
```

| **Parameter**       | **Type** | **Size** | Description                   |
| ------------------- | -------- | -------- | ----------------------------- |
| **`resultCd`**      | **N**    | **4**    | [Result Code](#eror-code)     |
| **`resultMsg`**     | **AN**   | **255**  | [Result Message](#error-code) |
| **`referenceNo`**   | **ANS**  | **40**   | Merchant Order Number         |
| **`merchantToken`** | **AN**   | **255**  | Merchant Token                |

## MIGS Request
Proceed with this API when you get `paymentType = 3` from `onePassToken.do` response.

MIGS Steps:
<ol type="1">
  <li>Send parameters to MIGS Request API.
  <li>Popup to Bank MIGS Page.
  <li>Customer input OTP.
  <li>NICEPay will send response parameter to <code>callbackUrl</code>.
</ol>

### API Specifications - MIGS

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/api/migsRequest.do`                                                                             |
| **Request Method** **application/json**                   | `POPUP` or `Redirect`                                                                                         |
| **Description**                                           | Request `MIGS` page for `paymentType = 3`                                                                      |
| **Merchant Token**                                        | SHA256(`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                                 |
| **Payment Methods**                                       | `01` Credit Card                                                                                              |

### Request Parameter - MIGS

> Sample URL Parameter MIGS Request

```
https://www.nicepay.co.id/nicepay/api/migsRequest.do?instmntType=1&instmntMon=1&referenceNo={referenceNo}&cardCvv={cardCvv}&callbackUrl={callbackUrl}&onePassToken={onePassToken}
```

| **Parameter**                   | **Type** | **Size** | Description                           | Example Value                   |
| ------------------------------- | -------- | -------- | ------------------------------------- | ------------------------------- |
| **`instmntType`**               | **N**    | **2**    | [Installment Type](#installment-type) | 1                               |
| **`instmntMon`**                | **N**    | **2**    | Installment Month                     | 1                               |
| **`referenceNo`** **Required**  | **ANS**  | **40**   | Merchant Order Number                 | OrdNo-125315314                 |
| **`cardCvv`**                   | **N**    | **3**    | Card CVV                              | 123                             |
| **`callbackUrl`** **Required**  | **ANS**  | **200**  | Callback Url for result               | http://merchant.com/callbackUrl |
| **`onePassToken`** **Required** | **AN**   | **64**   | One time use token                    | 92869482578275828fdvf432        |

### Response Parameter - MIGS

> Sample URL Parameter MIGS Response

```
http://merchant.com/callbackUrl?resultCd={resultCd}&resultMsg={resultMsg}&referenceNo={referenceNo}&merchantToken={merchantToken}
```

| **Parameter**   | **Type** | **Size** | Description                   |
| --------------- | -------- | -------- | ----------------------------- |
| **`resultCd`**  | **N**    | **4**    | [Result code](#error-code)    |
| **`resultMsg`** | **AN**   | **255**  | [Result message](#error-code) |

## Credit Card Registration
### API Specifications - CC Registration

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/api/onePass.do`                                                                                     |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Register Transaction and Charge Credit Card using onePassToken                                                |
| **Merchant Token**                                        | SHA256(`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                                 |
| **Payment Methods**                                       | `01` Credit Card                                                                                              |

### Request parameter - CC Registration

>Sample API Request

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
nicePay.setDeliveryNm("Buyer Name ");
nicePay.setDeliveryPhone("02112345678");
nicePay.setDeliveryAddr("Billing Address ");
nicePay.setDeliveryCity("Jakarta ");
nicePay.setDeliveryState("Jakarta ");
nicePay.setDeliveryPostCd("12345");
nicePay.setDeliveryCountry("Indonesia ");
nicePay.setCallBackUrl(merchantDomain + "callback");
nicePay.setDbProcessUrl(merchantDomain + "dbprocess");
nicePay.setVat("0");
nicePay.setFee("0");
nicePay.setNotaxAmt("0");
nicePay.setDescription("Description");
nicePay.setUserIP("127.0.0.1");
nicePay.setMerchantToken(nicePay.makeToken(nicePay.getAmt(), nicePay.getReferenceNo()));
nicePay.setCartData("{}");
nicePay.setInstmntMon("1");
nicePay.setInstmntType("1");
nicePay.setRecurrOpt(“0”); // for Recurring
nicePay.setCardCvv("123");
nicePay.setOnePassToken("9338d54573688ae18e175240b0257de48d89c6ef1c9c7b5c094dc4beed9e435f");
nicePay.setCardExpYymm("2012")

// Payment Optional Field
nicePay.setReqDt("20160301");
nicePay.setReqTm("135959");
nicePay.setReqDomain("merchant.com");
nicePay.setReqServerIP("127.0.0.1");
nicePay.setReqClientVer("1.0");
nicePay.setUserSessionID("userSessionID");
nicePay.setUserAgent("Mozilla");
nicePay.setUserLanguage("en-US");
nicePay.setMerFixAcctId("9999000000000001");
nicePay.setPaymentExpiryDt("20160303");
nicePay.setPaymentExpiryTm("135959");

// Payment Request
nicePay.payment();

// Payment Response
System.out.println("Response String : " + nicePay.getResponseString()); // JSON in String format

String resultCd = nicePay.Get("resultCd");
String resultMsg = nicePay.Get("resultMsg");
String tXid= nicePay.Get("tXid ");
String referenceNo= nicePay.Get("referenceNo");
String authNo= nicePay.Get("authNo");
String payMethod= nicePay.Get("payMethod");
String amount= nicePay.Get("amount");
String transDt = nicePay.Get("transDt ");
String transTm = nicePay.Get("transTm ");
String description= nicePay.Get("description");
String callbackUrl= nicePay.Get("callbackUrl");
```

```csharp
protected void CheckOutCC(object sender, EventArgs e)
{
    if (!string.IsNullOrEmpty(TbillingNm.Text) && !string.IsNullOrEmpty(onePassToken.Text) )
    {
        objNicepay.currency = "IDR";
        //Populate Mandatory parameters to send
        // payment type
        objNicepay.PayMethod = "01";
        // Total gross amount
        objNicepay.amt = "100";
        // Invoice Number or Referenc Number Generated by merchant
        objNicepay.referenceNo = generateReference();
        objNicepay.description = "Payment Invoice No. " + objNicepay.referenceNo;
        // Transaction description
        objNicepay.billingNm = "Donald Duck";
        objNicepay.billingPhone = "021987456321";
        objNicepay.billingEmail = "donald@duck.com";
        objNicepay.billingAddr = "King of money street";
        objNicepay.billingCity = "King";
        objNicepay.billingState = "Money";
        objNicepay.billingPostCd = "123654";
        objNicepay.billingCountry = "Indonesia";

        objNicepay.deliveryNm = "Donald Duck";
        objNicepay.deliveryPhone = "021987456321";
        objNicepay.deliveryEmail = "donald@duck.com";
        objNicepay.deliveryAddr = "King of money street";
        objNicepay.deliveryCity = "King";
        objNicepay.deliveryState = "Money";
        objNicepay.deliveryPostCd = "123654";
        objNicepay.deliveryCountry = "Indonesia";

        objNicepay.onePassToken = onePassToken.Text;
        objNicepay.cardExpYymm = TcardExpYymm.Text;
        objNicepay.cardCvv = TcardCvv.Text;

        objResult = objNicepayClass.ChargeCard(objNicepay);

        if (!string.IsNullOrEmpty(objResult.data.resultCd) & objResult.data.resultCd == "0000")
        {
            Tresult.InnerText = objResult.resultCd;
            TtXid.InnerText = objResult.data.tXid;
            TcallbackUrl.InnerText = objResult.callbackUrl;
            Tdescription.InnerText = objResult.description;
            TreferenceNo.InnerText = objResult.referenceNo;
            TpayMethod.InnerText = objResult.payMethod;
            //YYMMDD
            TtransDT.InnerText = objResult.transDt;
            //HH24MISS
            TTranstm.InnerText = objResult.transTm;
            TresultMsg.InnerText = objResult.resultMsg;
            wrapper.Visible = false;
            Myresult.Visible = true;
        }
        else if (objResult.resultCd != null)
        {
            EresultCd.InnerText = objResult.resultCd;
            EresultMsg.InnerText = objResult.resultMsg;
            wrapper.Visible = false;
            ErrData.Visible = true;
        }
        else
        {
            //Timeout, you can redirect back to checkout page Or echo error message.
            //In this sample, we echo error message
            ERR_.InnerText = "Connection Timeout. Please Try again.";
            wrapper.Visible = false;
            ERR.Visible = true;
        }
    }
}
```

```php
<?php
// Include Config File
include_once "lib/NicepayLib.php";
$nicepay = new NicepayLib();

function generateReference()
{
    $micro_date = microtime();
    $date_array = explode(" ",$micro_date);
    $date = date("YmdHis",$date_array[1]);
    $date_array[0] = preg_replace('/[^\p{L}\p{N}\s]/u', '', $date_array[0]);
    return "Ref".$date.$date_array[0].rand(100,999);
}
/*
 * ____________________________________________________________
 *
 * Credit Card Payment Method
 * ____________________________________________________________
 */

if(isset($_POST['payMethod'])
    && $_POST['payMethod'] == '01'
    && isset($_POST['billingNm'])
    && $_POST['billingNm']
    && isset($_POST['onePassToken'])
    && $_POST['onePassToken']
  )
{
  $billingNm      = $_POST['billingNm'];
  $onePassToken   = $_POST['onePassToken'];
  $cardExpYymm    = $_POST['cardExpYymm'];
  $cardCvv        = $_POST['cardCvv'];
  $referenceNo    = $_POST['referenceNo'];

  // Populate Mandatory parameters to send
  $nicepay->set('payMethod', '01');
  $nicepay->set('currency', 'IDR');
  $nicepay->set('amt', 10000); // Total gross amount
  $nicepay->set('referenceNo', $referenceNo); // Invoice Number or Reference Number Generated by merchant
  $nicepay->set('description', 'Payment of Invoice No '.$nicepay->get('referenceNo')); // Transaction description

  $nicepay->set('billingNm', 'John Doe'); // Customer name
  $nicepay->set('billingPhone', '02112345678'); // Customer phone number
  $nicepay->set('billingEmail', 'john@example.com'); //
  $nicepay->set('billingAddr', 'Jl. Jend. Sudirman No. 28');
  $nicepay->set('billingCity', 'Jakarta Pusat');
  $nicepay->set('billingState', 'DKI Jakarta');
  $nicepay->set('billingPostCd', '10210');
  $nicepay->set('billingCountry', 'Indonesia');

  $nicepay->set('deliveryNm', 'John Doe'); // Delivery name
  $nicepay->set('deliveryPhone', '02112345678');
  $nicepay->set('deliveryEmail', 'john@example.com');
  $nicepay->set('deliveryAddr', 'Jl. Jend. Sudirman No. 28');
  $nicepay->set('deliveryCity', 'Jakarta Pusat');
  $nicepay->set('deliveryState', 'DKI Jakarta');
  $nicepay->set('deliveryPostCd', '10210');
  $nicepay->set('deliveryCountry', 'Indonesia');
  $nicepay->set('onePassToken', $onePassToken);
  $nicepay->set('cardExpYymm', $cardExpYymm);
  $nicepay->set('cardCvv', $cardCvv);

  // Send Data
  $response = $nicepay->chargeCard();

  // Response from NICEPAY
  if (isset($response->resultCd) && $response->resultCd == "0000") {
    echo "<pre>";
    echo "tXid              : $response->tXid\n";
    echo "callbackUrl       : $response->callbackUrl\n";
    echo "description       : $response->description\n";
    echo "payment date      : $response->transDt\n"; // YYYYMMDD
    echo "payment time      : $response->transTm\n"; // HH24MISS
    echo "result code       : $response->resultCd\n";
    echo "result message    : $response->resultMsg\n";
    echo "reference no      : $response->referenceNo\n";
    echo "payment method    : $response->payMethod\n";
    echo "recurring token   : $response->recurringToken";
    echo "</pre>";
  } elseif(isset($response->resultCd)) {
    // API data not correct or error happened in bank system, you can redirect back to checkout page or echo error message.
    // In this sample, we echo error message
    echo "<pre>";
    echo "Oops! Something happened, please notice your system administrator.\n\n";
    echo "result code       : $response->resultCd\n";
    echo "result message    : $response->resultMsg\n";
    echo "</pre>";
  } else {
    // Timeout, you can redirect back to checkout page or echo error message.
    // In this sample, we echo error message
    echo "<pre>Connection Timeout. Please Try again.</pre>";
  }
}
?>
```

```python
import json

from nicepay import NICEPay

#Set MID & Merchant Key
NICEPay.iMid = "BMRITEST01" #Set Merchant ID
NICEPay.merchantKey = "33F49GnCMS1mFYlGXisbUDzVf2ATWCl9k3R++d5hDd3Frmuos/XLx8XhXpe+LDYAbpGKZYSwtlyyLOtS/8aD7A==" #Set Merchant Key

#Set Mandatory Value
NICEPay.payMethod = "01" #Set Payment Method
NICEPay.amt = "100" #Total Gross Amount
NICEPay.referenceNo = "NiceTest00003" #Invoice Number By Merchant
NICEPay.goodsNm = NICEPay.referenceNo #Goods Name
NICEPay.billingNm = "John Doe"
NICEPay.billingPhone = "02112345678"
NICEPay.billingEmail = "john@example.co`m"
NICEPay.billingAddr = "Jl. Jend. Sudirman No. 28"
NICEPay.billingCity = "Jakarta Pusat"
NICEPay.billingState = "DKI Jakarta"
NICEPay.billingPostCd = "10210"
NICEPay.billingCountry = "Indonesia"
NICEPay.callBackUrl = "http://example.com/callback"
NICEPay.dbProcessUrl = "https://example.com/notification-handler.php"
NICEPay.description = "Payment Of Ref No." + NICEPay.referenceNo
NICEPay.merchantToken = NICEPay.getMerchantToken()
NICEPay.userIP = NICEPay.getUserIp()
NICEPay.cartData = "{}" #Json Array Value
NICEPay.instmntMon = "1"
NICEPay.instmntType = "1"
NICEPay.cardCvv = "321"
NICEPay.ccOnePassToken = "e76b6b65dbd4a854699ee8628f0cf62916a16216bb133902d75159593fc1ed08"

# // Payment Request
resultData = NICEPay.apiRequest()
result = json.loads(resultData)

#Payment Response String Format
try:
    result['resultCd']
except NameError:
    print "Connection Timeout. Please Try Again!"
else:
    if result['resultCd'] == '0000':
        print("resultCd : " + result['resultCd'])
        print("resultMsg : " + result['resultMsg'])
        print("tXid : " + result['tXid'])
        print("referenceNo : " + result['referenceNo'])
        print("payMethod : " + result['payMethod'])
        print("amount : " + result['amount'])
        print("transDt : " + result['transDt'])
        print("transTm : " + result['transTm'])
        print("description : " + result['description'])
        print("callbackUrl : " + result['callbackUrl'])
        print("authNo : " + result['authNo'])
    else:
        print("resultCd : " + result['resultCd'])
        print("resultMsg : " + result['resultMsg'])
```

| **Parameter**                     | **Type** | **Size** | Description                                                  | Sample Data                                                  |
| --------------------------------- | -------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **`iMid`** **Required**           | **AN**   | **10**   | Merchant ID                                                  | IONPAYTEST                                                   |
| **`payMethod`** **Required**      | **N**    | **2**    | [Pay Method](#payment-method)                                | 01                                                           |
| **`currency`** **Required**       | **A**    | **3**    | Currency                                                     | IDR                                                          |
| **`amt`** **Required**            | **N**    | **12**   | Goods Amount                                                 | 1000                                                         |
| **`referenceNo`** **Required**    | **ANS**  | **40**   | Merchant Order No                                            | MerchantReferenceNumber001                                   |
| **`goodsNm`** **Required**        | **AN**   | **100**  | Goods Name                                                   | Merchant Goods 1                                             |
| **`billingNm`** **Required**      | **A**    | **30**   | Billing Name                                                 | Buyer Name                                                   |
| **`billingPhone`** **Required**   | **N**    | **15**   | Billing Phone Number                                         | 02112345678                                                  |
| **`billingEmail`** **Required**   | **ANS**  | **40**   | Billing Email                                                | buyer@merchant.com                                           |
| **`billingCity`** **Required**    | **A**    | **50**   | Billing City                                                 | Jakarta                                                      |
| **`billingState`** **Required**   | **A**    | **50**   | Billing State                                                | Jakarta                                                      |
| **`billingPostCd`** **Required**  | **N**    | **10**   | Billing Post Number                                          | 12345                                                        |
| **`billingCountry`** **Required** | **A**    | **10**   | Billing Country                                              | Indonesia                                                    |
| **`callBackUrl`** **Required**    | **ANS**  | **255**  | Payment Result Forward Url (On Browser)                      | www.merchant.com/callback                                    |
| **`dbProcessUrl`** **Required**   | **ANS**  | **255**  | Payment Result Receive Url (Server Side)                     | www.merchant.com/dbprocess                                   |
| **`description`** **Required**    | **AN**   | **100**  | Description                                                  | Description                                                  |
| **`merchantToken`** **Required**  | **AN**   | **255**  | Merchant Token                                               | 6cfccfc0046773c1b589d8e98...                                 |
| **`userIP`** **Required**         | **ANS**  | **15**   | User IP                                                      | 127.0.0.1                                                    |
| **`cartData`** **Required**       | **ANS**  | **4000** | Cart Data (Json Format)                                      | {}                                                           |
| **`instmntType`** **Required**    | **N**    | **2**    | [Installment Type](#installment-type)                        | 1                                                            |
| **`instmntMon`** **Required**     | **N**    | **2**    | Installment Month                                            | 1                                                            |
| **`cardCvv`**                     | **N**    | **3**    | Card CVV                                                     | 123                                                          |
| **`onePassToken`** **Required**   | **AN**   |          | One time use Token                                           | 9338d54573688ae18e175240b0257<br>de48d89c6ef1c9c7b5c094dc4beed9e435f |
| **`recurrOpt`**                   | **N**    | **2**    | `0` Automatic Cancel<br>`1` Do not cancel<br>`2` Do not make token | 1                                                            |
| **`billingAddr`**                 | **AN**   |          | Billing Address                                              | Billing Address                                              |
| **`deliveryNm`**                  | **A**    | **30**   | Delivery Name                                                | Buyer Name                                                   |
| **`deliveryPhone`**               | **N**    | **15**   | Delivery Phone                                               | 02112345678                                                  |
| **`deliveryAddr`**                | **AN**   | **100**  | Delivery Address                                             | Billing Address                                              |
| **`deliveryEmail`**               | **AN**   |          | Delivery Email                                               | buyer@merchant.com                                           |
| **`deliveryCity`**                | **A**    | **50**   | Delivery City                                                | Jakarta                                                      |
| **`deliveryState`**               | **A**    | **50**   | Delivery State                                               | Jakarta                                                      |
| **`deliveryPostCd`**              | **N**    | **10**   | Delivery Post Number                                         | 12345                                                        |
| **`deliveryCountry`**             | **A**    | **10**   | Delivery Country                                             | Indonesia                                                    |
| **`vat`**                         | **N**    | **12**   | Vat                                                          | 0                                                            |
| **`fee`**                         | **N**    | **12**   | Service Tax                                                  | 0                                                            |
| **`notaxAmt`**                    | **N**    | **12**   | Tax Free Amount                                              | 0                                                            |
| **`reqDt`**                       | **N**    | **8**    | Request Date (YYYYMMDD)                                      | 20160301                                                     |
| **`reqTm`**                       | **N**    | **6**    | Request Time (HH24MISS)                                      | 135959                                                       |
| **`reqDomain`**                   | **ANS**  | **100**  | Request Domain                                               | merchant.com                                                 |
| **`reqServerIP`**                 | **ANS**  | **15**   | Request Server IP                                            | 127.0.0.1                                                    |
| **`reqClientVer`**                | **ANS**  | **50**   | Request Client Version                                       | 1.0                                                          |
| **`userSessionID`**               | **AN**   | **100**  | User Session ID                                              | userSessionID                                                |
| **`userAgent`**                   | **ANS**  | **100**  | User Agent Information                                       | Mozilla                                                      |
| **`userLanguage`**                | **ANS**  |          | User Language                                                | en-US                                                        |
### Response Parameter - CC Registration

> Sample JSON Response

```json
{
  "resultCd": "0000",
  "amount": "1000",
  "authNo": "005911",
  "referenceNo": "Ref20170526111736065300000988",
  "transTm": "112041",
  "recurringToken": "",
  "tXid": "BMRITEST0101201705261120395118",
  "description": "Payment Of Ref No.Ref20170526111736065300000988",
  "cardNo": "123456******3456",
  "resultMsg": "SUCCESS",
  "payMethod": "01",
  "callbackUrl": "http://www.merchant.com/ExampleCallback",
  "transDt": "20170526",
  "issuBankCd": "CENA",
  "issuBankNm": "PT Bank Central Asia, TBK",
  "acquBankCd": "BMRI",
  "acquBankNm": "PT Bank Mandiri (Persero)"
}
```

| **Parameter**        | **Type** | **Size**             | Description                           |
| -------------------- | -------- | -------------------- | ------------------------------------- |
| **`resultCd`**       | **N**    | **4**                | [Result Code](#error-code)            |
| **`resultMsg`**      | **AN**   | **255**              | [Result Message](#error-code)         |
| **`tXid`**           | **AN**   | **30**               | Transaction ID                        |
| **`referenceNo`**    | **ANS**  | **40**               | Merchant Order No                     |
| **`payMethod`**      | **N**    | **2**                | [Payment Method](#payment-method)     |
| **`amount`**         | **N**    | **12**               | Transaction Amount                    |
| **`currency`**       | **AN**   | **3**                | Currency                              |
| **`goodsNm`**        | **N**    | **100**              | Goods Name                            |
| **`billingNm`**      | **N**    | **30**               | Buyer Name                            |
| **`transDt`**        | **N**    | **8**                | Transaction date (YYYYMMDD)           |
| **`transTm`**        | **N**    | **6**                | Transaction time (HH24MISS)           |
| **`description`**    | **AN**   | **100**              | Transaction description               |
| **`callbackUrl`**    | **ANS**  | **100**              | Callback Url                          |
| **`authNo`**         | **N**    | **10**               | Authorization Number                  |
| **`issuBankCd`**     | **A**    | **4**                | [Issue Bank Code](#bank-code)         |
| **`issuBankNm`**     | **A**    |                      | Issue Bank Name.                      |
| **`acquBankCd`**     | **A**    | **4**                | [Acquire Bank Code](#bank-code)       |
| **`acquBankNm`**     | **A**    |                      | Acquire Bank Name.                    |
| **`cardNo`**         | **ANS**  | **20**               | Card Number (Masked)                  |
| **`instmntMon`**     | **N**    | **2**                | Installment month                     |
| **`instmntType`**    | **N**    | **2**                | [Installment type](#installment-type) |
| **`recurringToken`** | **AN**   | **64**               | Token for Recurring Payment           |
| **`preauthToken`**   | **AN**   | **64**               | Token for Preauth Payment             |
| **`ccTransType`**    | **N**    | **2**                | Credit Card Transaction Type          |
| **`vat`**            | **N**    | **12**               | Vat number                            |
| **`fee`**            | **N**    | **12**               | Service fee                           |
| **`notaxAmt`**       | **N**    | **12**               | Tax free amount                       |
