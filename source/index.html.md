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

## Prerequisites
<ol type="1">
  <li>Contact our Merchant Acquisition Staff
  <li>Get Test MID (Merchant ID)
  <li>Get Test API Key (Merchant Key)
  
  <li>NICEPAY SDK if necessary (Java,PHP,and other)
  <li>Read NICEPAY API Documentation
</ol>

## NICEPAY API Authentication
To connect to our APIs, <code>merchantToken</code> is <strong>required</required> to be sent along with other parameters.
This token is generated using <code>SHA-256</code> hashing which includes secret keys such as <code>iMid</code> and <code>merchantKey</code>.
These secret keys should never be shared.

## NICEPAY URLs
NICEPAY APIs should be requested through HTTPS request to our Endpoint URL.

Environment | Protocol | Base URL
------------ | ------------| ------------------------
Development | https | https://dev.nicepay.co.id/
Staging | https | https://staging.nicepay.co.id/
Production | https | https://www.nicepay.co.id/

### NICEPAY API V1 Endpoints
API Endpoint | Method | Description
------------ | ------------| ------------------------
ADD | MORE | URL FOR V1

### NICEPAY API V2 Endpoints
API Endpoint | Method | Description
------------ | ------------| ------------------------
/nicepay/direct/v2/registration | POST JSON | Transaction Registration
/nicepay/direct/v2/payment | POST JSON | Transaction Payment
/nicepay/direct/v2/inquiry | POST JSON | Transaction Status Inquiry
/nicepay/direct/v2/cancel | POST JSON | Transaction Cancel
ADD | MORE | URL

# Test Postman
Try our POSTMAN Collection!

Enterprise | Professional
---------- | ------------
<div class="postman-run-button" data-postman-action="collection/import" data-postman-var-1="4e6690cd6c51963cf691"></div> | <div class="postman-run-button" data-postman-action="collection/import" data-postman-var-1="ea2fa74dab4e0b686e34"></div>

