---
title: NICEPAY API Documentation - V2

language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:
  - <a href='http://nicepay.co.id/'>Sign Up</a>
  - <a href='api-v2-EN.html'>English</a>

includes:
  - V2/ID/V2_ID_1_registration
  - V2/ID/V2_ID_2_payment
  - V2/ID/V2_ID_2-1_creditcard
  - V2/ID/V2_ID_2-2_va
  - V2/ID/V2_ID_2-3_cvs
  - V2/ID/V2_ID_2-4_clickpay
  - V2/ID/V2_ID_2-5_ewallet
  - V2/ID/V2_ID_2-6_payloan
  - V2/ID/V2_ID_4_inquiry
  - V2/ID/V2_ID_5_cancel
  - notifications_ID
  - nicepaycode
  - faq_id
  - changelog/changelog_v2

search: true
---
# DOKUMENTASI API V2
# Pengantar

Selamat datang di **Referensi API NICEPay**.

**NICEPay** Payment Solution adalah produk dari PT IONPAY NETWORKS yang menyediakan berbagai pembayaran elektronik melalui Internet dengan aman tanpa perangkat pengaman yang terpisah. NICEPay telah berintegrasi dengan Bank melalui host ke host connection untuk kinerja yang lebih baik dan cepat. Dengan menggunakan teknologi terkini, NICEPay percaya untuk menumbuhkan bisnis Anda bersama.

Kami memiliki beberapa bahasa pemrograman seperti di *java, csharp, php, python,* dan *ruby*.

## Preparation
API NICEPay dapat diminta melalui HTTPS Request ke endpoint URL NICEPay Base.

Development Environment : **https://dev.nicepay.co.id/**<br>
Production Environment : **https://api.nicepay.co.id/**

## Integration Process
<ol type="1">
  <li>Memahami SDK, Parameter, dan Flow pembayaran.
  <li>Menjelajahi API Operation Calls.
  <li>Integrasi
  <li>Tes pelaksanaan (Development)
  <li>Minta MID dan API Key untuk production.
  <li>Go Live
</ol>

## Prerequisites
<ol type="1">
  <li>Test MID
  <li>Test API Key
  <li>SDK Bahasa Pemrograman NICEPay (Java,PHP,and other)
  <li>Ubah Url API : dev -> api
</ol>

## API Methods

API Endpoint | Method | Description
------------ | ------------| ------------------------
/nicepay/direct/v2/registration | POST | API untuk pendaftaran transaksi
/nicepay/direct/v2/payment | POST | API untuk pembayaran transaksi
/notification (example) | POST | API untuk notifikasi (dbProcessUrl dalam registration API)
/nicepay/direct/v2/inquiry | POST | API untuk cek status transaksi
/nicepay/direct/v2/cancel | POST | API untuk membatalkan transaksi
