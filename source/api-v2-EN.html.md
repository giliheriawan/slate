---
title: NICEPAY API Documentation - V2

language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='http://nicepay.co.id/'>Sign Up</a>
  - <a href='api-v2-ID.html'>Bahasa Indonesia</a>

includes:
  - V2/EN/V2_EN_1_registration
  - V2/EN/V2_EN_2_payment
  - V2/EN/V2_EN_2-1_creditcard
  - V2/EN/V2_EN_2-2_va
  - V2/EN/V2_EN_2-3_cvs
  - V2/EN/V2_EN_2-4_clickpay
  - V2/EN/V2_EN_2-5_ewallet
  - V2/EN/V2_EN_2-6_payloan
  - V2/EN/V2_EN_4_inquiry
  - V2/EN/V2_EN_5_cancel
  - notifications_EN
  - nicepaycode
  - faq_en

search: true
---
# API V2 DOCUMENTATION
# Introduction

Welcome to the **NICEPay API Reference**.

**NICEPay** Payment Solution is a product of PT IONPAY NETWORKS that provide various electronic payment over the Internet safely without separate security device. NICEPay have integrate with Banks via host to host connection for better and faster performance. Using latest technology, NICEPay confidence to grow your business together.

We have multiple programming language like in java, csharp, php, python, and ruby.

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

## API Methods

API Endpoint | Method | Description
------------ | ------------| ------------------------
/nicepay/direct/v2/registration | POST | perform for registration transaction
/nicepay/direct/v2/payment | POST | Perform for a payment transaction
/notification (example) | POST | Perform for Notification (dbProcessUrl on Registration API request)
/nicepay/direct/v2/inquiry | POST | Perform for check order status by tXid
/nicepay/direct/v2/cancel | POST | Perform for cancel transaction
