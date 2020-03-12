---
title: NICEPAY API Documentation

language_tabs: # must be one of https://git.io/vQNgJ

  
toc_footers:
  - <a href='http://nicepay.co.id/'>Sign Up</a>
  - <li><a href="mailto:it@nicepay.co.id?Subject=Hello%20Nicepay!" target="_top">Contact Us</a></li>

includes:

search: true
---
# Introduction

**Welcome to NICEPAY API Documentation and References.**

**NICEPAY Payment Solution** is a product of PT. IONPAY NETWORKS that provide various electronic payment over the Internet safely without separate security device. 
Using our latest technology, we are integrated with Banks, E-wallets and other financial services via encrypted host to host connection to provide a secure and fast transaction.

There are two Versions of our API, allowing you to interact securely with our API using different approach.

| **API**                   | **Request Data**                      | **Response**         | Payment Page                 |
| ------------------------- | ------------------------------------- | -------------------- | ---------------------------- |
| **V1** **Professional**   | **application/x-www-form-urlencoded** | **application/json** | NICEPAY Secure Payment Page  |
| **V1** **Enterprise**     | **application/x-www-form-urlencoded** | **application/json** | Merchant-hosted payment page |
| **V2**                    | **application/json**                  | **application/json** | Merchant-hosted payment page |

Have any inquiry ?<br>Feel free contact us : [it@nicepay.co.id](mailto:it@nicepay.co.id).

## Prerequisites
<ol type="1">
  <li>Contact our Merchant Acquisition Staff
  <li>Get Test MID (Merchant ID)
  <li>Get Test API Key (Merchant Key)
  <li>NICEPAY SDK if necessary (Java,PHP,and other)
  <li>Read NICEPAY API Documentation
</ol>

## Integration Process
<ol type="1">
  <li>Understanding SDK, Parameters and Payment Flow
  <li>Explore API Operation Calls
  <li>Integration
  <li>Implementation Test (Development Environment)
  <li>Request Production MID and API Key
  <li>Go Live
</ol>

# Authentication and Credentials

To connect to our APIs, `merchantToken` is **required** to be sent along with other parameters.
This token is generated using `SHA-256` hashing which includes secret keys such as `iMid`, `merchantKey` and other keys.

## Sandbox Credentials
The credentials below are provided only for testing purposes

|                           |                                                              |
| ------------------------- | ------------------------------------------------------------ |
| **`iMid `** **(Merchant ID)** | IONPAYTEST                                                   |
| **`merchantKey`**         | 33F49GnCMS1mFYlGXisbUDzVf2ATWCl9k3R++d5hDd3Frmuos/XLx8XhXpe+LDYAbpGKZYSwtlyyLOtS/8aD7A== |

<aside class="notice">
Concatenation of the keys to generate <code>merchantToken</code> should not include spaces.
</aside>

# NICEPAY URLs
NICEPAY APIs should be requested through HTTPS request to our Endpoint URL.

| **Environment** | **Protocol** | Base URL |
| --- | --- | --- |
| **Development** | **https** | `https://dev.nicepay.co.id/` |
| **Staging** | **https** | `https://staging.nicepay.co.id/` |
| **Production** | **https** | `https://www.nicepay.co.id/` |

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
