---
title: NICEPAY API Documentation
  
toc_footers:
  - <a href='http://nicepay.co.id/'>Sign Up</a>
  - <li><a href="mailto:it@nicepay.co.id?Subject=Hello%20Nicepay!" target="_top">Contact Us</a></li>

includes:

search: true
---
# NICEPAY

**Welcome to NICEPAY API Documentation and References.**

**NICEPAY Payment Solution** is a product of PT. IONPAY NETWORKS that provide various electronic payment over the Internet safely without separate security device. 
Using our latest technology, we are integrated with Banks, E-wallets and other financial services via encrypted host to host connection to provide a secure and fast transaction.

There are two Versions of our API, allowing you to interact securely with our API using different approach.

| **API**                   | Request Data                      | Response         | Payment Page                 |
| ------------------------- | --------------------------------- | ---------------- | ---------------------------- |
| **V1** **Professional**   | application/x-www-form-urlencoded | application/json | NICEPAY Secure Payment Page  |
| **V1** **Enterprise**     | application/x-www-form-urlencoded | application/json | Merchant-hosted payment page |
| **V2**                    | application/json                  | application/json | Merchant-hosted payment page |

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

| Environment | Protocol | Base URL                         |
| ----------- | -------- | -------------------------------- |
| Development | https    | `https://dev.nicepay.co.id/`     |
| Staging     | https    | `https://staging.nicepay.co.id/` |
| Production  | https    | `https://www.nicepay.co.id/`     |

## API V1 Endpoints

| **API**                  | **Method**                                     | End Point                          | Merchant Token                                    |  Description                                                  |
| ------------------------ | ---------------------------------------------- | ---------------------------------- | ------------------------------------------------- |  ------------------------------------------------------------ |
| **V1**  **Professional** | **POST** **application/x-www-form-urlencoded** | `/nicepay/api/orderRegist.do`      | `iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` |  Transaction Registration                                     |
| **V1**  **Enterprise**   | **POST** **application/x-www-form-urlencoded** | `/nicepay/api/onePassToken.do`     | `iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` |  Request Credit Card Token                                    |
| **V1**  **Enterprise**   | **Pop-up**                                     | `/nicepay/api/secureVeRequest.do`  | `n/a`                                             |  Request 3DS Pages                                            |
| **V1**  **Enterprise**   | **Pop-up**                                     | `/nicepay/api/migsRequest.do`      | `n/a`                                             |  Request MIGS Pages                                           |
| **V1**  **Enterprise**   | **POST** **application/x-www-form-urlencoded** | `/nicepay/api/onePass.do`          | `iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` |  Transaction Payment (Credit Card) and Registration for other payment methods. |
| **V1**  **Enterprise**   | **POST** **application/x-www-form-urlencoded** | `/nicepay/api/ewalletTrans.do`     | `iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` |  E-Wallet Trans                                               |
| **V1**                   | **POST** **application/x-www-form-urlencoded** | `/nicepay/api/onePassStatus.do`    | `iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` |  Status Inquiry                                               |
| **V1**                   | **POST** **application/x-www-form-urlencoded** | `/nicepay/api/onePassAllCancel.do` | `iMid`<br>`tXid`<br>`amt`<br>`merchantKey`        |  Cancel Transaction                                           |


## API V2 Endpoints

| **API** | **Method**                                     | End Point                         | Merchant Token                                                   |  Description                |
| ------- | ---------------------------------------------- | --------------------------------- | ---------------------------------------------------------------- |  -------------------------- |
| **V2**  | **POST** **application/json**                  | `/nicepay/direct/v2/registration` | `timeStamp`<br>`iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` |  Transaction Registration   |
| **V2**  | **POST** **application/x-www-form-urlencoded** | `/nicepay/direct/v2/payment`      | `timeStamp`<br>`iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` |  Transaction Payment        |
| **V2**  | **POST** **application/json**                  | `/nicepay/direct/v2/inquiry`      | `timeStamp`<br>`iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` |  Transaction Status Inquiry |
| **V2**  | **POST** **application/json**                  | `/nicepay/direct/v2/cancel`       | `timeStamp`<br>`iMid`<br>`referenceNo`<br>`amt`<br>`merchantKey` |  Transaction Cancel         |
| **V2**  | **POST** **application/json**                  | `/nicepay/direct/v2/sms-transmit` | `timeStamp`<br>`iMid`<br>`msgRefno`<br>`merchantKey`             |  SMS Transmit               |
