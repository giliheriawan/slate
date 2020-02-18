---
title: NICEPAY API Documentation

language_tabs: # must be one of https://git.io/vQNgJ
  - java
  - php
  - python
  
toc_footers:
  - <a href='http://nicepay.co.id/'>Sign Up</a>

includes:

search: true
---
# Introduction

> Welcome to NICEPAY

```java
    _   __________________   ____  _____  __
   / | / /  _/ ____/ ____/  / __ \/   \ \/ /
  /  |/ // // /   / __/    / /_/ / /| |\  / 
 / /|  // // /___/ /___   / ____/ ___ |/ /  
/_/ |_/___/\____/_____/  /_/   /_/  |_/_/   

```

**Welcome to NICEPAY API Documentation and References.**

**NICEPAY Payment Solution** is a product of PT. IONPAY NETWORKS that provide various electronic payment over the Internet safely without separate security device. 
Using our latest technology, we are integrated with Banks, E-wallets and other financial services via encrypted host to host connection to provide a secure and fast transaction.

There are two Versions of our API, allowing you to interact securely with our API using different approach.

| **API**               | **Request Data**                      | **Response**         | Payment Page                 |
| --------------------- | ------------------------------------- | -------------------- | ---------------------------- |
| **V1 Professional**   | **application/x-www-form-urlencoded** | **application/json** | NICEPAY Secure Payment Page  |
| **V1 Enterprise**     | **application/x-www-form-urlencoded** | **application/json** | Merchant-hosted payment page |
| **V2**                | **application/json**                  | **application/json** | Merchant-hosted payment page |

Have any inquiry ?<br>Feel free contact us : [it@nicepay.co.id](mailto:it@nicepay.co.id).

### Prerequisites
<ol type="1">
  <li>Contact our Merchant Acquisition Staff
  <li>Get Test MID (Merchant ID)
  <li>Get Test API Key (Merchant Key)
  <li>NICEPAY SDK if necessary (Java,PHP,and other)
  <li>Read NICEPAY API Documentation
</ol>

### Integration Process
<ol type="1">
  <li>Understanding SDK, Parameters and Payment Flow
  <li>Explore API Operation Calls
  <li>Integration
  <li>Implementation Test (Development Environment)
  <li>Request Production MID and API Key
  <li>Go Live
</ol>

# NICEPAY URLs
NICEPAY APIs should be requested through HTTPS request to our Endpoint URL.

| **Environment** | **Protocol** | Base URL |
| --- | --- | --- |
| **Development** | **https** | https://dev.nicepay.co.id/ |
| **Staging** | **https** | https://staging.nicepay.co.id/ |
| **Production** | **https** | https://www.nicepay.co.id/ |

## NICEPAY API Authentication

> Example: Generating Merchant Token

```java
public String makeTokenV1(String amount, String ReferenceNo) throws Exception {
		MessageDigest md = MessageDigest.getInstance("SHA-256");
		String textToken = iMid + referenceNo + amt + merchantKey;

		md.update(textToken.getBytes("UTF-8"));
		merchantToken = String.format("%064x", new java.math.BigInteger(1, md.digest()));

		return merchantToken;
	}
```

```php
<?php
public function merchantToken() {
        return hash('sha256',   $this->get('iMid').
                                $this->get('referenceNo').
                                $this->get('amt').
                                $this->merchantKey
        );
    }
?>
```

```python
def getMerchantToken():
    if not iMid:
        sys.exit("Cannot set Merchant Token, please set param iMid using NICEPay.iMid = iMid values")
    elif not referenceNo:
        sys.exit("Cannot set Merchant Token, please set param referenceNo using NICEPay.referenceNo = referenceNo values")
    elif not amt:
        sys.exit("Cannot set Merchant Token, please set param amt using NICEPay.amt = amt values")
    elif not merchantKey:
        sys.exit("Cannot set Merchant Token, please set param merchantKey using NICEPay.merchantKey = merchantKey values")
    else:
        mercToken = iMid + referenceNo + amt + merchantKey
        token = hashlib.sha256(mercToken.encode('ascii')).hexdigest()
        return token
```

To connect to our APIs, `merchantToken` is **required** to be sent along with other parameters.
This token is generated using `SHA-256` hashing which includes secret keys such as `iMid` and `merchantKey`.

<aside class="notice">
Concatenation of the keys to generate <code>merchantToken</code> should not include spaces.
</aside>

<aside class="warning">
Do not share your secret keys.
</aside>

## API V1 Endpoints

| **API** | Merchant Token | **Method** | End Point | Description |
| --- | --- | --- | --- | --- |
| **V1**  **Professional** | `iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/orderRegist.do` | Transaction Registration |
| **V1**  **Enterprise** | `iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/onePassToken.do` | Request Credit Card Token |
| **V1**  **Enterprise** | `n/a` | **Pop-up** | `/nicepay/api/secureVeRequest.do` | Request 3DS Pages |
| **V1**  **Enterprise** | `n/a` | **Pop-up** | `/nicepay/api/migsRequest.do` | Request MIGS Pages |
| **V1**  **Enterprise** |`iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/onePass.do` | Transaction Payment (Credit Card) and Registration for other payment methods. |
| **V1**  **Enterprise** | `iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/ewalletTrans.do` | E-Wallet Trans? |
| **V1** | `iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/onePassStatus.do` | Status Inquiry |
| **V1** | `iMid`<br>`tXid`<br>`amt`<br>`merchantKey` | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/onePassAllCancel.do` | Cancel Transaction |


## API V2 Endpoints

| **API** | Merchant Token | **Method** | End Point | Description |
| --- | --- | --- | --- | --- |
| **V2** | `timeStamp`<br>`iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` | **POST** *application/json* | `/nicepay/direct/v2/registration` | Transaction Registration |
| **V2** | `timeStamp`<br>`iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` | **POST** *application/x-www-form-urlencoded* | `/nicepay/direct/v2/payment` | Transaction Payment |
| **V2** | `timeStamp`<br>`iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` | **POST** *application/json* | `/nicepay/direct/v2/inquiry` | Transaction Status Inquiry |
| **V2** | `timeStamp`<br>`iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` | **POST** *application/json* | `/nicepay/direct/v2/cancel` | Transaction Cancel |
| **V2** | `timeStamp`<br>`iMid`<br>`msgRefno`<br>`merchantKey` 			| **POST** *application/json* | `/nicepay/direct/v2/sms-transmit` | SMS Transmit |
