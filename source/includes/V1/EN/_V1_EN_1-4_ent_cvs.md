# Convenience Store

NICEPay offers Convenience Store (CVS) as Payment Method. This method allows customer to make payment at their nearest Convenience Stores such as Alfamart and Indomaret.
Real time Notification will be sent when customer has completed the payment.

**Supported CVS by NICEPay:**

<ol type="1">
  <li>Alfamart
  <li>Indomaret
  <li>Lawson
  <li>Alfamidi
  <li>Dan+Dan Store
</ol>

**Transaction Flow:**

<ol type="1">
  <li>Merchant Request CVS Registration to NICEPay.
  <li>Merchant Display CVS Details and How-To Pay Details.
  <li>Customer pay CVS with Preferred Payment Channel.
  <li>NICEPay Send Notification to Merchant.
  <li>Merchant Handle Notification.
</ol>

<div class="wrapper">
<ul>
  <li>
    <input type="checkbox" id="list-item-1">
    <label for="list-item-1" class="first">CVS Flow</label>
    <ul>
      <img src="/images/ent-cvs-flow.png">
    </ul>
  </li>
</ul>
</div>

## CVS Registration
### CVS Registration API Specifications

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/api/onePass.do`                                                                                     |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Request `payNo` for CVS Payment                                                                               |
| **Merchant Token**                                        | SHA256(`iMid``referenceNo``amt``merchantKey`)                                                                 |
| **Payment Methods**                                       | `03` Convenience Store                                                                                        |

### CVS Request Parameter

> Sample Request

```java
// Payment Mandatory Field
nicePay.setPayMethod("03");
nicePay.setCurrency("IDR");
nicePay.setAmt("1000");
nicePay.setReferenceNo("MerchantReferenceNumber001");
nicePay.setMitraCd("ALMA");
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
nicePay.setPayValidDt("20160303");
nicePay.setPayValidTm("135959");


// Payment Request
nicePay.payment();

// Payment Response
System.out.println("Response String : " + nicePay.getResponseString()); // JSON in String format

String resultCd = nicePay.Get("resultCd");
String resultMsg = nicePay.Get("resultMsg");
String tXid= nicePay.Get("tXid ");
String referenceNo= nicePay.Get("referenceNo");
String payNo= nicePay.Get("payNo");
String payMethod= nicePay.Get("payMethod");
String amount= nicePay.Get("amount");
String transDt = nicePay.Get("transDt ");
String transTm = nicePay.Get("transTm ");
String description= nicePay.Get("description");
String callbackUrl= nicePay.Get("callbackUrl");
String mitraCd= nicePay.Get("mitraCd");
```

```csharp
protected void CheckOut(object sender, EventArgs e)
{
    if (!string.IsNullOrEmpty(BankCd.SelectedValue))
    {
        objNicepay.currency = "IDR";
        objNicepay.DateNow = DateTime.Now.ToString("yyyymmdd");
        // Set VA expiry date +1 day (optional)
        objNicepay.vaExpDate = DateTime.Now.AddDays(1).ToString("yyyymmdd");
        //Populate Mandatory parameters to send
        // payment type Bank
        objNicepay.PayMethod = "03";
        // Total gross amount
        objNicepay.amt = "10000";
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

        objNicepay.MitraCd = "ALMA";
        objNicepay.PayValidDt = "20170404";
        objNicepay.PayValidTm = "131300";

        objResult = objNicepayClass.CreateCVS(objNicepay);

        if (objResult.resultCd == "0000")
        {
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
            payNo.InnerText = objResult.payNo;
            TresultMsg.InnerText = objResult.resultMsg;
            mitraCd.InnerText = objResult.mitraCd;
            amount.InnerText = objResult.amount;
            wrapper.Visible = false;
            Myresult.Visible = true;
        }
        else if (objResult.resultCd != null)
        {
            //API data Not correct, you can redirect back to checkout page Or echo error message.
            //In this sample, we echo error message
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

if(isset($_POST['payMethod']) && $_POST['payMethod'] == '03'
    && isset($_POST['mitraCd']) && $_POST['mitraCd'])
{
  $billingNm      = $_POST['billingNm'];
  $referenceNo    = $_POST['referenceNo'];
  $mitraCd         = $_POST['mitraCd'];

  // Populate Mandatory parameters to send
  $nicepay->set('payMethod', '03');
  $nicepay->set('currency', 'IDR');
  $nicepay->set('amt', 10000); // Total gross amount
  $nicepay->set('referenceNo', $referenceNo); // Invoice Number or Reference Number Generated by merchant
  $nicepay->set('description', 'Payment of Invoice No '.$nicepay->get('referenceNo')); // Transaction description
  $nicepay->set('mitraCd', $mitraCd);

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

  // Send Data
  $response = $nicepay->requestCVS();

  // Response from NICEPAY
  if (isset($response->resultCd) && $response->resultCd == "0000") {
    echo "<pre>";
    echo "tXid              : $response->tXid\n";
    echo "callbackUrl       : $response->callbackUrl\n";
    echo "description       : $response->description\n";
    echo "payment date      : $response->transDt\n"; // YYYYMMDD
    echo "payment time      : $response->transTm\n"; // HH24MISS
    echo "pay number        : $response->payNo\n";
    echo "result code       : $response->resultCd\n";
    echo "result message    : $response->resultMsg\n";
    echo "reference no      : $response->referenceNo\n";
    echo "payment method    : $response->payMethod\n";
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
NICEPay.payMethod = "03" #Set Payment Method
NICEPay.amt = "1000" #Total Gross Amount
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
NICEPay.mitraCd = "INDO"
NICEPay.payValidDt = "20160303"
NICEPay.payValidTm = "135959"



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
        print("payNo : " + result['payNo'])
        print("mitraCd : " + result['mitraCd'])
    else:
        print("resultCd : " + result['resultCd'])
        print("resultMsg : " + result['resultMsg'])
```

| Parameter         | Type   | Size     | Description                                    | Example Value                                                |
| ----------------- | ------ | -------- | ------------------------------------------     | ------------------------------------------------------------ |
| `iMid`            | **AN** | **10**   | **Merchant ID** **Required**                   | IONPAYTEST                                                   |
| `payMethod`       | **AN** | **2**    | [Pay Method](#payment-method) **Required**     | 03                                                           |
| `currency`        | **AN** | **3**    | **Currency** **Required**                      | IDR                                                          |
| `amt`             | **N**  | **12**   | **Goods Amount** **Required**                  | 15000                                                        |
| `referenceNo`     | **AN** | **40**   | **Merchant Order No** **Required**             | ordNo123124                                                  |
| `goodsNm`         | **AN** | **100**  | **Goods Name** **Required**                    | Test Goods                                                   |
| `billingNm`       | **A**  | **30**   | **Billing Name** **Required**                  | John Doe                                                     |
| `billingPhone`    | **N**  | **15**   | **Billing Phone Number** **Required**          | 081249195                                                    |
| `billingEmail`    | **AN** | **40**   | **Billing Email** **Required**                 | test@merchant.com                                            |
| `billingCity`     | **A**  | **50**   | **Billing City** **Required**                  | Jakarta                                                      |
| `billingState`    | **A**  | **50**   | **Billing State** **Required**                 | DKI Jakarta                                                  |
| `billingPostCd`   | **N**  | **10**   | **Billing Post Number** **Required**           | 14350                                                        |
| `billingCountry`  | **A**  | **10**   | **Billing Country** **Required**               | Indonesia                                                    |
| `callBackUrl`     | **AN** | **255**  | **Payment Result Page** **Required**           | https://merchant.com/callBackUrl                             |
| `dbProcessUrl`    | **AN** | **255**  | **Payment Notif Url** **Required**             | https://merchant.com/dbProcessUrl                            |
| `description`     | **AN** | **100**  | **Description** **Required**                   | test item                                                    |
| `merchantToken`   | **AN** | **255**  | **Merchant Token** **Required**                | 6cfccfc0046773c1b589d8e<br>98f8b596c284f3c70a4ecf8<br>6eba14c18944b74bcd |
| `userIP`          | **AN** | **15**   | **User IP (Customer)** **Required**            | 127.0.0.1                                                    |
| `cartData`        | **AN** | **4000** | **Cart Data (Json Format)** **Required**       | {}                                                           |
| `mitraCd`         | **AN** | **4**    | **[Mitra Code](#mitra-code)** **Required**     | ALMA                                                         |
| `billingAddr`     | **AN** | **100**  | **Billing Address**                            | Jln Cendrawasih                                              |
| `deliveryNm`      | **A**  | **30**   | **Delivery Name**                              | JohnDoe                                                      |
| `deliveryPhone`   | **N**  | **15**   | **Delivery Phone**                             | 08125912342                                                  |
| `deliveryAddr`    | **AN** | **100**  | **Delivery Address**                           | Jln Merak                                                    |
| `deliveryEmail`   | **AN** |          | **Delivery Email**                             | test@merchant.com                                            |
| `deliveryCity`    | **A**  | **50**   | **Delivery City**                              | Jakarta                                                      |
| `deliveryState`   | **A**  | **50**   | **Delivery State**                             | DKI Jakarta                                                  |
| `deliveryPostCd`  | **N**  | **10**   | **Delivery Post Code**                         | 14350                                                        |
| `deliveryCountry` | **A**  | **10**   | **Delivery Country**                           | Indonesia                                                    |
| `vat`             | **N**  | **12**   | **Vat**                                        | 0                                                            |
| `fee`             | **N**  | **12**   | **Service Tax**                                | 0                                                            |
| `notaxAmt`        | **N**  | **12**   | **Tax Free Amount**                            | 0                                                            |
| `reqDt`           | **N**  | **8**    | **Request Date** **(YYYYMMDD)**                | 20160301                                                     |
| `reqTm`           | **N**  | **6**    | **Request Time** **(HH24MISS)**                | 135959                                                       |
| `reqDomain`       | **AN** | **100**  | **Request Domain**                             | merchant.com                                                 |
| `reqServerIP`     | **AN** | **15**   | **Request Server IP**                          | 127.0.0.1                                                    |
| `reqClientVer`    | **AN** | **50**   | **Request Client Version**                     | 1.0                                                          |
| `userSessionID`   | AN     | **100**  | **User Session ID**                            | userSessionID                                                |
| `userAgent`       | **AN** | **100**  | **User Agent**                                 | Mozilla                                                      |
| `userLanguage`    | **AN** | **2**    | **User Language**                              | en-US                                                        |
| `payValidDt`      | **N**  | **8**    | **CVS expiry date** **(YYYYMMDD)**             | 20200303                                                     |
| `payValidTm`      | **N**  | **6**    | **CVS expiry time** **(HH24MISS)**             | 135959                                                       |

### CVS Response

> Sample JSON Response

```json
{
    "resultCd": "0000",
    "amount": "10000",
    "goodsNm": "Test Transaction Nicepay",
    "referenceNo": "99997",
    "transTm": "110847",
    "mitraCd": "ALMA",
    "tXid": "TESTIDTEST03201803011108471311",
    "description": "Payment of referenceNo 99997,This Description",
    "resultMsg": "SUCCESS",
    "billingNm": "Thomas Alfa Edison",
    "payNo": "011108471311",
    "payValidTm": "235959",
    "payMethod": "03",
    "callbackUrl": "http://www.merchant.com/callbackUrl",
    "payValidDt": "20180308",
    "currency": "IDR",
    "transDt": "20180301"
}
```

| Parameter     | Type    | Size    | Description                       |
| ------------- | ------- | ------- | --------------------------------- |
| `resultCd`    | **N**   | **4**   | [Result Code](#error-code)        |
| `resultMsg`   | **AN**  | **255** | [Result Message](#error-code)     |
| `tXid`        | **AN**  | **30**  | Transaction ID                    |
| `referenceNo` | **ANS** | **40**  | Merchant Order No                 |
| `payMethod`   | **N**   | **2**   | [Payment Method](#payment-method) |
| `amount`      | **N**   | **12**  | Transaction Amount                |
| `transDt`     | **N**   | **8**   | Transaction date (YYYYMMDD)       |
| `transTm`     | **N**   | **6**   | Transaction time (HH24MISS)       |
| `mitraCd`     | **AN**  | **4**   | [Mitra Code](#mitra-code)         |
