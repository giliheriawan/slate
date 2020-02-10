---
title: NICEPay - API V1 Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - java
  - csharp
  - php
  - python

toc_footers:
  - <a href='http://nicepay.co.id/'>Sign Up</a>
  - <a href='./api-V1-ID.html'>Bahasa Indonesia</a>

includes:
  - V1/EN/V1_EN_1-1_professional
  - V1/EN/V1_EN_1-2_ent_creditcard
  - V1/EN/V1_EN_1-3_ent_va
  - V1/EN/V1_EN_1-4_ent_cvs
  - V1/EN/V1_EN_1-5_ent_clickpay
  - V1/EN/V1_EN_1-6_ent_ewallet
  - V1/EN/V1_EN_2_Notification
  - V1/EN/V1_EN_3_order_status
  - V1/EN/V1_EN_4_Cancel
  - nicepaycode
  - faq_en
  - changelog/changelog_v1

search: true
---
# API V1 DOCUMENTATION

# Introduction

Welcome to the **NICEPay API Reference**.

**NICEPay** Payment Solution is a product of PT IONPAY NETWORKS that provide various electronic payment over the Internet safely without separate security device. NICEPay have integrate with Banks via host to host connection for better and faster performance. Using latest technology, NICEPay confidence to grow your business together.

We have multiple programming language like in *java, csharp, php, python,* and *ruby*.

## Preparation

NICEPay API can be requested through HTTPS Request to the NICEPay Base URL endpoint.

Development Environment : **https://dev.nicepay.co.id/**<br>
Production Environment : **https://api.nicepay.co.id/**


## Integration Process
<ol type="1">
  <li>Understanding SDK, Parameters and Payment Flow
  <li>Explore API Operation Calls
  <li>Integration
  <li>Implementation Test (Development Environment)
  <li>Request Production MID and API Key
  <li>Go Live
</ol>

## Prerequisites
<ol type="1">
  <li>Test MID
  <li>Test API Key
  <li>NICEPAY Programming Language SDK (Java,PHP,and other)
  <li>Change API Url : dev -> api
</ol>

## NICEPay API Methods

API Endpoint | Method | Description
------------ | ------------| ------------------------
/nicepay/api/onePassToken.do | POST | One time token request for credit card before transaction
/nicepay/api/secureVeRequest.do| POST | Popup Page
/nicepay/api/migsRequest.do | POST | Popup Page
/nicepay/api/ewalletTrans.do | POST | Perform for E-wallet payment
/nicepay/api/onePass.do | POST | Perform for payment a transaction (Credit Card, VA, CVS, ClickPay)
/nicepay/api/orderRegist.do | POST | Perform for registration a transaction (professional only)
/notification (example) | POST | Transaction Result Notification (when successs)
/nicepay/api/onePassStatus.do | POST | Order Status Inquiry
/nicepay/api/onePassAllCancel.do | POST | Perform for cancel a transaction (Credit Card, VA, CVS)
