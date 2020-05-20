# Notifikasi

> Contoh POST Notifikasi dari NICEPAY

```
tXid={tXid}  
referenceNo={referenceNo}  
amt={amt}  
merchantToken={merchantToken}  
matchCl={matchCl}
status={status}
bankCd={bankCd}
vacctNo={vacctNo}
authNo={authNo}
cardNo={cardNo}
issuBankCd = {issuBankCd}
issuBankNm = {issuBankNm}
acquBankCd = {acquBankCd}
acquBankNm = {acquBankNm}
depositDt = {depositDt}
depositTm = {depositTm}
payNo={payNo}
mitraCd={mitraCd}
```

NICEPAY memberikan layanan push notification secara real-time melalui `dbProcessUrl` yang diberikan merchant.<br>
Untuk menghindari terjadinya Notifikasi yang terblokir oleh firewall Merchant, silahkan menambahkan Server NICEPay kedalam Whitelist:

| **Method**                                      | Merchant Token                            | IP                                     | User-Agent                                                   |
| ----------------------------------------------- | ----------------------------------------- | -------------------------------------- | ------------------------------------------------------------ |
| **POST** **application/x-www-form-urlencoded*** | SHA256(`iMid`+`tXid`+`amt`+`merchantKey`) | `103.20.51.0/24` <br> `103.117.8.0/24` |  `Jakarta Commons-HttpClient/3.1`                            |

## Parameter Notifikasi

| **Parameter**       | **Type** | **Size** | Deskripsi                                            |
| ------------------- | -------- | -------- | ---------------------------------------------------- |
| **`tXid`**          | **N**    | **30**   | Transaction ID                                       |
| **`merchantToken`** | **AN**   | **255**  | Merchant Token                                       |
| **`referenceNo`**   | **ANS**  | **40**   | Merchant Order No                                    |
| **`payMethod`**     | **N**    | **2**    | [Payment method](#payment-method)                    |
| **`amt`**           | **N**    | **12**   | Nominal Pembayaran                                   |
| **`transDt`**       | **N**    | **8**    | Tgl Transaksi                                        |
| **`transTm`**       | **N**    | **6**    | Waktu Transaksi                                      |
| **`currency`**      | **A**    | **3**    | Currency                                             |
| **`goodsNm`**       | **AN**   | **100**  | Nama Barang                                          |
| **`billingNm`**     | **A**    | **30**   | Nama Pembeli                                         |
| **`matchCl`**       | **N**    | **1**    | [Flagging Pembayaran](#notification-match-amount-indicator) |
| **`status`**        | **A**    | **1**    | Deposit Status:<br>`0` Deposit<br>`1` Reversal       |

### Parameter Tambahan untuk Notifikasi Credit Card

| **Parameter**        | **Type** | **Size** | Deskripsi                                                    |
| -------------------- | -------- | -------- | ------------------------------------------------------------ |
| **`authNo`**         | **N**    | **10**   | Approval number                                              |
| **`IssueBankCd`**    | **A**    | **4**    | [Kode Bank Penerbit](#bank-code)                             |
| **`IssueBankNm`**    | **A**    |          | Nama Bank Penerbit                                           |
| **`acquBankCd`**     | **A**    |          | [Kode Bank Penerima](#bank-code)                             |
| **`acquBankNm`**     | **A**    |          | Nama Bank Penerima                                           |
| **`cardNo`**         | **ANS**  | **20**   | Card No. degan Masking                                       |
| **`cardExpYymm`**    | **N**    |          | Card expiry (YYMM)                                           |
| **`instmntMon`**     | **N**    | **2**    | Bulan Cicilan                                                |
| **`instmntType`**    | **N**    | **2**    | [Installment Type](#installment-type)                        |
| **`preauthToken`**   | **AN**   | **255**  | Preauth Token                                                |
| **`recurringToken`** | **AN**   | **255**  | Recurring token                                              |
| **`ccTransType`**    | **A**    | **2**    | Credit Card Trans type<br>`1` Normal<br>`2` Recurring<br>`3` Pre-auth<br>`4` Captured |
| **`vat`**            | **N**    | **12**   | Vat number                                                   |
| **`fee`**            | **N**    | **12**   | Service fee                                                  |
| **`notaxAmt`**       | **N**    | **12**   | Tax free amount                                              |

### Parameter Tambahan untuk Notifikasi Virtual Account

| **Parameter**      | **Type** | **Size** | Deskripsi                    |
| ------------------ | -------- | -------- | ---------------------------- |
| **`bankCd`**       | **A**    | **4**    | [Bank Code](#bank-code)      |
| **`vacctNo`**      | **N**    | **16**   | Nomor VA                     |
| **`vacctValidDt`** | **N**    | **8**    | VA Expiry Date (YYYYMMDD)    |
| **`vacctValidTm`** | **N**    | **6**    | VA Expiry Time	(HH24MISS)    |
| **`depositDt`**    | **N**    | **8**    | Tgl Pembayaran (YYYYMMDD)    | 
| **`depositTm`**    | **N**    | **6**    | Waktu Pembayaran (HH24MISS)  |

### Parameter Tambahan untuk Notifikasi Metode Pembayaran Lain

| **Parameter**     | **Type** | **Size** | Description                                        |
| ----------------- | -------- | -------- | -------------------------------------------------- |
| **`mitraCd`**     | **A**    | **4**    | [Mitra Code](#mitra-code) (CVS, E-Wallet, Payloan  |
| **`payNo`**       | **N**    | **12**   | Nomor Pembayaran CVS                               |
| **`payValidDt`**  | **N**    | **8**    | Batas Tgl CVS (YYYYMMDD)                           |
| **`payValidTm`**  | **N**    | **6**    | Batas Waktu CVS (HH24MISS)                         |
| **`receiptCode`** | **ANS**  | **20**   | Authorization number                               |
| **`mRefNo`**      | **AN**   | **18**   | Reference No.                                      |
| **`depositDt`**   | **N**    | **8**    | Tgl Pembayaran (YYYYMMDD)                          |
| **`depositTm`**   | **N**    | **6**    | Waktu Pembayaran (HH24MISS)                        |

<aside class="notice">
Merchant Token yang diterima oleh Endpoint Notifikasi Merchant harus divalidasi secara internal untuk mencegah Notifikasi palsu.
</aside>
