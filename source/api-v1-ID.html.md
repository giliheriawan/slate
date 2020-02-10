---
title: NICEPay - API V1 Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - java
  - csharp
  - php
  - python

toc_footers:
  - <a href='http://nicepay.co.id/signup'>Sign Up</a>

includes:
  - V1/ID/V1_ID_1-1_professional
  - V1/ID/V1_ID_1-2_ent_creditcard
  - V1/ID/V1_ID_1-3_ent_va
  - V1/ID/V1_ID_1-4_ent_cvs
  - V1/ID/V1_ID_1-5_ent_clickpay
  - V1/ID/V1_ID_1-6_ent_ewallet
  - V1/ID/V1_ID_2_Notification
  - V1/ID/V1_ID_3_order_status
  - V1/ID/V1_ID_4_Cancel
  - nicepaycode
  - faq_id
  - changelog/changelog_v1

search: true
---
# DOKUMENTASI API V1

# Pengantar

Selamat datang di **Referensi API NICEPay**.

**NICEPay** Payment Solution adalah produk dari PT IONPAY NETWORKS yang menyediakan berbagai pembayaran elektronik melalui Internet dengan aman tanpa perangkat pengaman yang terpisah. NICEPay telah berintegrasi dengan Bank melalui host ke host connection untuk kinerja yang lebih baik dan cepat. Dengan menggunakan teknologi terkini, NICEPay percaya untuk menumbuhkan bisnis Anda bersama.

kami memiliki beberapa bahasa pemrograman seperti di *java, csharp, php, python,* dan *ruby*.

## Persiapan

API NICEPay dapat diminta melalui HTTPS Request ke endpoint URL NICEPay Base.

Development Environment : **https://dev.nicepay.co.id/**<br>
Production Environment : **https://api.nicepay.co.id/**


## Proses Integrasi
<ol type="1">
  <li>Memahami SDK, Parameter, dan Flow pembayaran.</li>
  <li>Menjelajahi API Operation Calls.</li>
  <li>Integrasi.</li>
  <li>Tes pelaksanaan (Development).</li>
  <li>Minta MID dan API Key untuk production.</li>
  <li>Go Live.</li>
</ol>

## Prasyarat
<ol type="1">
  <li>Test MID
  <li>Test API Key
  <li>SDK Bahasa Pemrograman NICEPay (Java,PHP,and other)
  <li>Ubah url API : dev -> api
</ol>

## Metode API NICEPay

API Endpoint | Metode | Deskripsi
------------ | ------------| ------------------------
/nicepay/api/onePassToken.do | POST | Permintaan token satu kali kartu kredit sebelum transaksi
/nicepay/api/secureVeRequest.do| POST | Halaman Popup untuk 3DS Secure
/nicepay/api/migsRequest.do | POST | Halaman Popup untuk MIGS Secure
/nicepay/api/ewalletTrans.do | POST | API untuk melakukan registrasi pembayaran E-Wallet
/nicepay/api/onePass.do | POST | API untuk melakukan registrasi pembayaran (Credit Card, VA, CVS, ClickPay)
/nicepay/api/orderRegist.do | POST | API untuk melakukan registrasi transaksi (hanya untuk professional)
/notification (example) | POST | Pemberitahuan hasil transaksi (ketika sukses)
/nicepay/api/onePassStatus.do | POST | API untuk permintaan status Order
/nicepay/api/onePassAllCancel.do | POST | API untuk membatalkan transaksi (Credit Card, VA, CVS)
