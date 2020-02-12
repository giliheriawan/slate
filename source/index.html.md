---
title: NICEPAY API Documentation

language_tabs: # must be one of https://git.io/vQNgJ
  - java
  - csharp
  - php
  - python
  - ruby
  
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
There are API two Versions of our API, allowing you to interact securely with our API using different approach. **JSON is used by API V2 for requests and responses**, including errors.
On the other hand, **application/x-www-form-urlencoded is used for API V1**.

Give us a shot because we are confident that we can provide you with the best Payment Solution to grow your business.

Have any inquiry ?<br>Feel free contact us : [it@nicepay.co.id](mailto:it@nicepay.co.id).

# Prerequisites
<ol type="1">
  <li>Contact our Merchant Acquisition Staff
  <li>Get Test MID (Merchant ID)
  <li>Get Test API Key (Merchant Key)
  
  <li>NICEPAY SDK if necessary (Java,PHP,and other)
  <li>Read NICEPAY API Documentation
</ol>

# NICEPAY URLs
NICEPAY APIs should be requested through HTTPS request to our Endpoint URL.

| **Environment** | **Protocol** | **Base URL** |
| --- | --- | --- |
| Development | **https** | https://dev.nicepay.co.id/ |
| Staging | **https** | https://staging.nicepay.co.id/ |
| Production | **https** | https://www.nicepay.co.id/ |

## NICEPAY API Authentication
To connect to our APIs, `merchantToken` is **required** to be sent along with other parameters.
This token is generated using `SHA-256` hashing which includes secret keys such as `iMid` and `merchantKey`.

### API V1 Endpoints

| **API** | **Merchant Token** | **Method** | **End Point** | **Description** |
| --- | --- | --- | --- | --- |
| **V1**  **Professional** | SHA256 (`iMid`+`referenceNo`+`amt`+`merchantKey`) | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/orderRegist.do` | Transaction Registration |
| **V1**  **Enterprise** | SHA256 (`iMid`+`referenceNo`+`amt`+`merchantKey`) | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/onePassToken.do` | Request Credit Card Token |
| **V1**  **Enterprise** | n/a | **Pop-up** | `/nicepay/api/secureVeRequest.do` | Request 3DS Pages |
| **V1**  **Enterprise** | n/a | **Pop-up** | `/nicepay/api/migsRequest.do` | Request MIGS Pages |
| **V1**  **Enterprise** | SHA256 (`iMid`+`referenceNo`+`amt`+`merchantKey`) | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/onePass.do` | Transaction Payment (Credit Card) and Registration for other payment methods. |
| **V1**  **Enterprise** | SHA256 (`iMid`+`referenceNo`+`amt`+`merchantKey`) | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/ewalletTrans.do` | E-Wallet Trans? |
| **V1** | SHA256 (`iMid`+`referenceNo`+`amt`+`merchantKey`) | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/onePassStatus.do` | Status Inquiry |
| **V1** | SHA256 (`iMid`+`tXid`+`amt`+`merchantKey`) | **POST** *application/x-www-form-urlencoded* | `/nicepay/api/onePassAllCancel.do` | Cancel Transaction |
| **V1**  *Notification* | SHA256 (`iMid`+`tXid`+`amt`+`merchantKey`) | **POST** *application/x-www-form-urlencoded* | NICEPAY | Notification from NICEPAY |

<aside class="notice">
Concatenation of the keys to generate `merchantToken` should not include spaces or '+' symbol.
</aside>

### API V2 Endpoints
TBA

<aside class="notice">
Concatenation of the keys to generate `merchantToken` should not include spaces or '+' symbol.
</aside>

## Notifications

For Notifications, please add NICEPAY to your whitelist if you have firewalls:<br>
`
103.117.8.33    # NICEPAY - Server 1 <br>
103.117.8.34    # NICEPAY - Server 2 <br>
103.117.8.0/24  # NICEPAY - Server 3 <br>
103.20.51.39    # NICEPAY - Server Dev <br>
User Agent: NICEPAY 
`

# Test Postman
Try our POSTMAN Collection!

Enterprise | Professional
---------- | ------------
<div class="postman-run-button" data-postman-action="collection/import" data-postman-var-1="4e6690cd6c51963cf691"></div> | <div class="postman-run-button" data-postman-action="collection/import" data-postman-var-1="ea2fa74dab4e0b686e34"></div>

