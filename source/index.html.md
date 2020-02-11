---
title: NICEPAY API Documentation

language_tabs: # must be one of https://git.io/vQNgJ
  - java
  - php

toc_footers:
  - <a href='http://nicepay.co.id/'>Sign Up</a>

includes:
  - footer

search: true
---
# Introduction
```java
class HelloWorld 
{ 
    public static void main(String args[]) 
    { 
        System.out.println("Hello World, Have a Nice Pay!"); 
    } 
} 
```
```php
<?php
  $string = 'Hello World, Have a Nice Pay!<br>';
  echo $string;
?>
```
Welcome to NICEPAY API Documentation and References.
**NICEPAY Payment Solution** is a product of PT. IONPAY NETWORKS that provide various electronic payment over the Internet safely without separate security device. 
Using our latest technology, we are integrated with Banks, E-wallets and other financial services via encrypted host to host connection to provide a secure and fast transaction. 
Give us a shot because we are confident that we can provide you with the best Payment Solution to grow your business.

## Prerequisites
<ol type="1">
  <li>Contact our Merchant Acquisition Staff
  <li>Get Test MID (Merchant ID)
  <li>Get Test API Key (Merchant Key)
  <li>NICEPAY SDK if necessary (Java,PHP,and other)
  <li>Read NICEPAY API Documentation
</ol>

## NICEPAY URLs
NICEPAY APIs should be requested through HTTPS request to our Endpoint URL.

**NICEPAY BASE URLs**
Development Environment : https://**dev**.nicepay.co.id/<br>
Production Environment : https://**api**.nicepay.co.id/

### NICEPAY API V1 Endpoints
API Endpoint | Method | Description
------------ | ------------| ------------------------
ADD | MORE | URL FOR V1

### NICEPAY API V2 Endpoints
API Endpoint | Method | Description
------------ | ------------| ------------------------
/nicepay/direct/v2/registration | POST JSON | Transaction Registration
/nicepay/direct/v2/payment | POST JSON | Transaction Payment
/nicepay/direct/v2/inquiry | POST | Transaction Status Inquiry
/nicepay/direct/v2/cancel | POST | Transaction Cancel
ADD | MORE | URL
