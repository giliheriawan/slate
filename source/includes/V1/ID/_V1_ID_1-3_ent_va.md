# Virtual Account

NICEPay menawarkan Virtual Account sebagai metode pembayaran. Dengan ini Pembeli dapat melakukan pembayaran melalui ATM, SMS Banking, Internet Banking, atau Mobile Banking. 
Real time Notification akan dikirimkan ketika pembeli berhasil melakukan pembayaran.

**Virtual Account Bank yang Didukung NICEPay:**

<ol type="1">
  <li>Bank Mandiri
  <li>Bank International Indonesia Maybank
  <li>Bank Permata
  <li>Bank Central Asia (BCA)
  <li>Bank Negara Indonesia 46 (BNI)
  <li>Bank KEB Hana Indonesia
  <li>Bank Rakyat Indonesia (BRI)
  <li>Bank CIMB Niaga
  <li>Bank DANAMON
</ol>

Kami juga mendukung pembayaran Virtual Account dari Bank lain melalui ATM BERSAMA, ALTO, LINK, and PRIMA.

**Alur Transaksi**

<ol type="1">
  <li>Merchant melakukan Request untuk Registrasi VA.
  <li>Merchant menampilkan detail dan cara pembayaran.
  <li>Pembeli melakukan pembayaran dengan channel yang diinginkan (m-Banking, Atm, dll).
  <li>NICEPay mengirimkan Notifikasi ke Merchant.
</ol>

<div class="wrapper">
<ul>
  <li>
    <input type="checkbox" id="list-item-vav1">
    <label for="list-item-vav1" class="first">Virtual Account Flow</label>
    <ul>
      <img src="/images/ent-va-flow.png">
    </ul>
  </li>
</ul>
</div>

## Registrasi Virtual Account
### Spesifikasi - VA Registration 

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/api/onePass.do`                                                                                     |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Deskripsi**                                             | Request `vacctNo` untuk pembayaran Virtual Account                                                            |
| **Merchant Token**                                        | SHA256(`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                              |
| **Payment Methods**                                       | `02` Virtual Account                                                                                          |

### Parameter Request - VA Registration 

> Contoh API Request

```java
// Payment Mandatory Field
nicePay.setPayMethod("02");
nicePay.setCurrency("IDR");
nicePay.setAmt("1000");
nicePay.setReferenceNo("MerchantReferenceNumber001");
nicePay.setBankCd("BMRI");
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
nicePay.setVacctValidDt("20160303");
nicePay.setVacctValidTm("135959");


// Payment Request
nicePay.payment();

// Payment Response
System.out.println("Response String : " + nicePay.getResponseString()); // JSON in String format

String resultCd = nicePay.Get("resultCd");
String resultMsg = nicePay.Get("resultMsg");
String tXid= nicePay.Get("tXid ");
String referenceNo= nicePay.Get("referenceNo");
String bankVacctNo= nicePay.Get("bankVacctNo");
String payMethod= nicePay.Get("payMethod");
String amount= nicePay.Get("amount");
String transDt = nicePay.Get("transDt ");
String transTm = nicePay.Get("transTm ");
String description= nicePay.Get("description");
String callbackUrl= nicePay.Get("callbackUrl");
```

```csharp
protected void CheckOut(object sender, EventArgs e)
{
    if (!string.IsNullOrEmpty(BankCd.SelectedValue))
    {
        objNicepay.currency = "IDR";
        objNicepay.BankCd = BankCd.SelectedValue;
        objNicepay.DateNow = DateTime.Now.ToString("yyyymmdd");
        // Set VA expiry date +1 day (optional)
        objNicepay.vaExpDate = DateTime.Now.AddDays(1).ToString("yyyymmdd");
        //Populate Mandatory parameters to send
        // payment type Bank
        objNicepay.PayMethod = "02";
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

        objNicepay.vacctValidDt = objNicepay.vaExpDate;
        objNicepay.vacctValidTm = DateTime.Now.ToString("hhmmss");

        objResult = objNicepayClass.CreateVA(objNicepay);

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
            tbankVacctNo.InnerText = objResult.bankVacctNo;
            TresultMsg.InnerText = objResult.resultMsg;
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

if(isset($_POST['payMethod']) && $_POST['payMethod'] == '02'
    && isset($_POST['bankCd']) && $_POST['bankCd'])
{
  $billingNm      = $_POST['billingNm'];
  $referenceNo    = $_POST['referenceNo'];
  $bankCd         = $_POST['bankCd'];

  // Populate Mandatory parameters to send
  $nicepay->set('payMethod', '02');
  $nicepay->set('currency', 'IDR');
  $nicepay->set('amt', 10000); // Total gross amount
  $nicepay->set('referenceNo', $referenceNo); // Invoice Number or Reference Number Generated by merchant
  $nicepay->set('description', 'Payment of Invoice No '.$nicepay->get('referenceNo')); // Transaction description
  $nicepay->set('bankCd', $bankCd);

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
  $response = $nicepay->requestVA();

  // Response from NICEPAY
  if (isset($response->resultCd) && $response->resultCd == "0000") {
    echo "<pre>";
    echo "tXid              : $response->tXid\n";
    echo "callbackUrl       : $response->callbackUrl\n";
    echo "description       : $response->description\n";
    echo "payment date      : $response->transDt\n"; // YYYYMMDD
    echo "payment time      : $response->transTm\n"; // HH24MISS
    echo "virtual account   : $response->bankVacctNo\n";
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
NICEPay.payMethod = "02" #Set Payment Method
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
NICEPay.bankCd = "BMRI"
NICEPay.vacctValidDt = "20160303"
NICEPay.vacctValidTm = "135959"


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
        print("bankVacctNo : " + result['bankVacctNo'])
    else:
        print("resultCd : " + result['resultCd'])
        print("resultMsg : " + result['resultMsg'])
```

| **Parameter**                     | **Type**          | **Size**           | **Description**               | Example Value                                                |
| --------------------------------- | ----------------- | ------------------ | ----------------------------- | ------------------------------------------------------------ |
| **`iMid`** **Required**           | **AN**            | **10**             | Merchant ID                   | IONPAYTEST                                                   |
| **`payMethod`** **Required**      | **N**             | **2**              | [Pay Method](#payment-method) | 02                                                           |
| **`currency`** **Required**       | **A**             | **3**              | Currency                      | IDR                                                          |
| **`amt`** **Required**            | **N**             | **12**             | Goods Amount                  | 15000                                                        |
| **`referenceNo`** **Required**    | **ANS**           | **40**             | Merchant Order No             | ordNo123124                                                  |
| **`goodsNm`** **Required**        | **AN**            | **100**            | Goods Name                    | Test Goods                                                   |
| **`billingNm`** **Required**      | **A**             | **30**             | Billing Name                  | John Doe                                                     |
| **`billingPhone`** **Required**   | **N**             | **15**             | Billing Phone Number          | 081249195                                                    |
| **`billingEmail`** **Required**   | **ANS**           | **40**             | Billing Email                 | test@merchant.com                                            |
| **`billingCity`** **Required**    | **A**             | **50**             | Billing City                  | Jakarta                                                      |
| **`billingState`** **Required**   | **A**             | **50**             | Billing State                 | DKI Jakarta                                                  |
| **`billingPostCd`** **Required**  | **N**             | **10**             | Billing Post Number           | 14350                                                        |
| **`billingCountry`** **Required** | **A**             | **10**             | Billing Country               | Indonesia                                                    |
| **`callBackUrl`** **Required**    | **ANS**           | **255**            | Payment Result Url            | https://merchant.com/callBackUrl                             |
| **`dbProcessUrl`** **Required**   | **ANS**           | **255**            | Payment Notif Url             | https://merchant.com/dbProcessUrl                            |
| **`description`** **Required**    | **AN**            | **100**            | Description                   | test item                                                    |
| **`merchantToken`** **Required**  | **AN**            | **255**            | Merchant Token                | 6cfccfc0046773c1b589d8e 98f8b596c284f3c70a4ecf8 6eba14c18944b74bcd |
| **`userIP`** **Required**         | **ANS**           | **15**             | User IP (Customer)            | 127.0.0.1                                                    |
| **`cartData`** **Required**       | **`JSON OBJECT`** | **4000**           | Cart Data (Json Format)       | {}                                                           |
| **`bankCd`** **Required**         | **A**             | **4**              | [Bank Code](#bank-code)       | CENA                                                         |
| **`billingAddr`**                 | **AN**            | **AN**             | Billing Address               | Jln Cendrawasih                                              |
| **`deliveryNm`**                  | **A**             | **30**             | Delivery Name                 | JohnDoe                                                      |
| **`deliveryPhone`**               | **N**             | **15**             | Delivery Phone                | 08125912342                                                  |
| **`deliveryAddr`**                | **AN**            | **100**            | Delivery Address              | Jln Merak                                                    |
| **`deliveryEmail`**               | **ANS**           | **Delivery Email** | buyer@merhcant.com            | test@merchant.com                                            |
| **`deliveryCity`**                | **A**             | **50**             | Delivery City                 | Jakarta                                                      |
| **`deliveryState`**               | **A**             | **50**             | Delivery State                | DKI Jakarta                                                  |
| **`deliveryPostCd`**              | **N**             | **10**             | Delivery Post Code            | 14350                                                        |
| **`deliveryCountry`**             | **A**             | **10**             | Delivery Country              | Indonesia                                                    |
| **`vat`**                         | **N**             | **12**             | Vat                           | 0                                                            |
| **`fee`**                         | **N**             | **12**             | Service Tax                   | 0                                                            |
| **`notaxAmt`**                    | **N**             | **12**             | Tax Free Amount               | 0                                                            |
| **`reqDt`**                       | **N**             | **8**              | Request Date (YYYYMMDD)       | 20160301                                                     |
| **`reqTm`**                       | **N**             | **6**              | Request Time (HH24MISS)       | 135959                                                       |
| **`reqDomain`**                   | **ANS**           | **100**            | Request Domain                | merchant.com                                                 |
| **`reqServerIP`**                 | **ANS**           | **15**             | Request Server IP             | 127.0.0.1                                                    |
| **`reqClientVer`**                | **ANS**           | **50**             | Request Client Version        | 1.0                                                          |
| **`userSessionID`**               | **AN**            | **100**            | User Session ID               | userSessionID                                                |
| **`userAgent`**                   | **ANS**           | **100**            | User Agent                    | Mozilla                                                      |
| **`userLanguage`**                | **ANS**           |                    | User Language                 | en-US                                                        |
| **`vacctValidDt`**                | **N**             | **8**              | VA expiry date (YYYYMMDD)     | 20200303                                                     |
| **`vacctValidTm`**                | **N**             | **6**              | VA expiry time (HH24MISS)     | 135959                                                       |

### Parameter Response - VA Registration 

> Contoh JSON Response

```json
{
    "resultCd": "0000",
    "amount": "10000",
    "goodsNm": "Test Transaction Nicepay",
    "referenceNo": "99997",
    "transTm": "104721",
    "tXid": "TESTIDTEST02201803011047210789",
    "description": "Payment of referenceNo 99997,This Description",
    "bankVacctNo": "1047210789",
    "resultMsg": "SUCCESS",
    "billingNm": "Thomas Alfa Edison",
    "vacctValidDt": "20180308",
    "payMethod": "02",
    "bankCd": "BMRI",
    "callbackUrl": "http://www.merchant.com/callbackUrl",
    "currency": "IDR",
    "transDt": "20180301",
    "vacctValidTm": "235959"
}
```

| **Parameter**      | **Type** | **Size** | Deskripsi                         |
| ------------------ | -------- | -------- | --------------------------------- |
| **`resultCd`**     | **N**    | **4**    | [Result Code](#error-code)        |
| **`resultMsg`**    | **AN**   | **255**  | [Result Message](#error-code)     |
| **`tXid`**         | **AN**   | **30**   | Transaction ID                    |
| **`referenceNo`**  | **ANS**  | **40**   | Merchant Order No                 |
| **`payMethod`**    | **N**    | **2**    | [Payment Method](#payment-method) |
| **`amount`**       | **N**    | **12**   | Nominal Transaksi                 |
| **`currency`**     | **A**    | **3**    | Currency                          |
| **`goodsNm`**      | **N**    | **100**  | Nama Barang                       |
| **`billingNm`**    | **N**    | **30**   | Nama Pembeli                      |
| **`transDt`**      | **N**    | **8**    | Tgl Transaksi (YYYYMMDD)          |
| **`transTm`**      | **N**    | **6**    | Waktu Transaksu (HH24MISS)        |
| **`description`**  | **ANS**  | **100**  | Deskripsi                         |
| **`callbackUrl`**  | **ANS**  | **100**  | Callback Url                      |
| **`bankCd`**       | **A**    | **4**    | [Bank Code](#bank-code)           |
| **`bankVacctNo`**  | **N**    | **20**   | Nomor Virtual Account             |
| **`vacctValidDt`** | **N**    | **8**    | VA expiry date                    |
| **`vacctValidTm`** | **N**    | **6**    | VA expiry time                    |
