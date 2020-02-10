# Notification

> Contoh POST for Notification

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

Server NICEPay akan mengirimkan pemberitahuan ke sisi Merchant dbProcessUrl untuk menginformasikan kepada Merchant mengenai Transaksi.

 &nbsp; | &nbsp;
---------- | -------
**notification url** | **https://example.com/notificationUrl**
Metode | POST
Deskripsi | Pemberitahuan hasil transaksi (bila berhasil).<br>Jika sistem Anda menggunakan firewall, mohon tambahkan allow policy untuk IP NICEpay. :<br>development: 103.20.51.39<br>production: 103.20.51.34
Merchant Token | SHA256 (Merchant ID + Transaction ID + Amount + Merchant Key)


**Parameter untuk Notifikasi**

Parameter | Tipe | Ukuran | Deskripsi
---------- | ---------- | ---------- | ----------
tXid | N | 30 | Transaction ID
merchantToken | AN | 255 | Merchant Token
referenceNo | N | 40 | Merchant Order No
payMethod | N | 2 | Payment method. Refer Code at [Here](#payment-method)
amt | N | 12 | Payment amount
transDt | N | 8 | Transaction date
transTm | N | 6 | Transaction time
currency | N | 3 | Currency
goodsNm | N | 100 | Goods name
billingNm | N | 30 | Billing name
matchCl | N | 1 | Payment amount match flag. Refer Code at [Here](#notification-match-amount-indicator)
status | AN | 1 | Deposit Status<br>0: Deposit<br>1: Reversal

**Parameter Tambahan untuk notifikasi Credit Card**

Parameter | Tipe | Ukuran | Deskripsi
---------- | ---------- | ---------- | ----------
authNo | N | 10 | Approval number
IssueBankCd | A | 4 | Issue bank code. Refer Code at [Here](#bank-code)
IssueBankNm | A | &nbsp; | Issue bank name. 
acquBankCd | A | &nbsp; | Acquire bank code. Refer Code at [Here](#bank-code)
acquBankNm | A | &nbsp; | Acquire bank name.
cardNo | AN | 20 | Card no with masking
cardExpYymm | N | &nbsp; | Card expiry (YYMM)
instmntMon | N | 2 | Installment month
instmntType | N | 2 | Installment Type. Refer Code at [Here](#installment-type)
preauthToken | AN | 255 | Preauth Token
recurringToken | AN | 255 | Recurring token 
ccTransType | AN | 2 | Credit card transaction type<br>1: Normal<br>2: Recurring<br>3: Pre-auth<br>4: Captured
vat | N | 12 | Vat number
fee | N | 12 | service fee
notaxAmt | N | 12 | tax free amount

**Parameter Tambahan untuk notifikasi Virtual Account**

Parameter | Tipe | Ukuran | Deskripsi
---------- | ---------- | ---------- | ----------
bankCd  | N | 4 | Bank Code. Refer Code at [Here](#bank-code)
vacctNo | N | 16 | Bank Virtual Account number
vacctValidDt  | N | 8 | VA expiry date
vacctValidTm | N | 6 | VA expiry time
depositDt | N | &nbsp; | Deposit date
depositTm | N | &nbsp; | Deposit time

**Parameter Tambahan untuk notifikasi metode pembayaran lainnya**

Parameter | Tipe | Ukuran | Deskripsi
---------- | ---------- | ---------- | ----------
mitraCd | A | 4 |  Mitra Code. Refer Code at [Here](#mitra-code)
payNo | N | 12 | Pay number to mitra
payValidDt | N | 8 | CVS expiry date
payValidTm | N | 6 | CVS expiry time
receiptCode | ANS | 20 | Authorization number
mRefNo | AN | 18 | Bank reference No
depositDt | N | &nbsp; | Deposit date
depositTm | N | &nbsp; | Deposit time