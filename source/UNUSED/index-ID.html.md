----
 title: NICEPay Payment - API Documentation
 
 language_tabs: # must be one of https://git.io/vQNgJ
 
 toc_footers:
   - <a href='http://nicepay.co.id/'>Sign Up</a>
   - <a href='./index'>English</a>
 
 includes:
   - docs/EN/library
   - footer
 
 search: true
 ---
 # Introduction
Selamat datang di Dokumentasi dan Referensi NICEPAY

**NICEPAY Payment Solution** adalah produk dari PT. IONPAY NETWORKS yang menyediakan berbagai pembayaran elektronik melalui Internet dengan aman tanpa perangkat pengaman yang terpisah. 
Dengan menggunakan teknologi terkini,NICEPAY telah berintegrasi dengan Bank, E-Wallet dan layanan finansial lainnya melalui host ke host connection yang terenkripsi untuk keamanan dan kinerja yang terbaik. 
Kami yakin bahwa pengalaman kami dapat membantu untuk menumbuhkan bisnis Anda.

## Preparation
API NICEPAY dapat disambung melalui HTTPS Request ke URL ENDPOINT kami.

Development Environment : https://**dev**.nicepay.co.id/<br>
Production Environment : https://**api**.nicepay.co.id/

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
  <li>Ubah Url API : api -> dev
</ol>

## API Methods
NICEPAY API V1 Endpoints
API Endpoint | Method | Description
------------ | ------------| ------------------------
ADD | MORE | URL FOR V1

NICEPAY API V2 Endpoints
API Endpoint | Method | Description
------------ | ------------| ------------------------
/nicepay/direct/v2/registration | POST JSON | Transaction Registration
/nicepay/direct/v2/payment | POST JSON | Transaction Payment
/nicepay/direct/v2/inquiry | POST | Transaction Status Inquiry
/nicepay/direct/v2/cancel | POST | Transaction Cancel
ADD | MORE | URL

## TESTTTTT Methods

API Endpoint | Method | Description
------------ | ------------| ------------------------
/nicepay/direct/v2/registration | POST | API untuk pendaftaran transaksi
/nicepay/direct/v2/payment | POST | API untuk pembayaran transaksi
/notification (example) | POST | API untuk notifikasi (dbProcessUrl dalam registration API)
/nicepay/direct/v2/inquiry | POST | API untuk cek status transaksi
/nicepay/direct/v2/cancel | POST | API untuk membatalkan transaksi
