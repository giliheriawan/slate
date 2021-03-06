# Credit Card

Alur Transaksi:
<ol type="1">
  <li>Merchant melakukan Request ke API Register NICEPay.
  <li>Merchant melakukan Request ke API Payment NICEPay.
  <li>NICEPay memindahkan pembeli ke halamnan 3DS Bank.
  <li>Pembeli memasukan kode OTP di halaman 3DS Bank.
  <li>NICEPay akan mengirimkan Notifikasi setelah transaksi selesai.
  <li>Merchant mengolah Notifikasi yang didapatkan.
</ol>

<div class="wrapper">
<ul>
  <li>
    <input type="checkbox" id="list-item-ccv2">
    <label for="list-item-ccv2" class="first">Credit Card V2 Flow</label>
    <ul>
      <img src="/images/cc-normal-v2-flow.png">
    </ul>
  </li>
</ul>
</div>

## Registrasi - Credit Card

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/registration`                                                                             |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Request Registrasi Transaksi ke NICEPAY                                                                         |        
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                  |

### Request Parameters - Credit Card Registration

> Sample JSON Request

```json
{
	"timeStamp":"20180123100505",
	"iMid":"IONPAYTEST",
	"payMethod":"01",
	"currency":"IDR",
	"amt":"10000",
	"referenceNo":"ORD12345",
	"goodsNm":"Test Transaction Nicepay",
	"billingNm":"Customer Name",
	"billingPhone":"12345678",
	"billingEmail":"email@merchant.com",
	"billingAddr":"Jalan Bukit Berbunga 22",
	"billingCity":"Jakarta",
	"billingState":"DKI Jakarta",
	"billingPostCd":"12345",
	"billingCountry":"Indonesia",
	"deliveryNm":"email@merchant.com",
	"deliveryPhone":"12345678",
	"deliveryAddr":"Jalan Bukit Berbunga 22",
	"deliveryCity":"Jakarta",
	"deliveryState":"DKI Jakarta",
	"deliveryPostCd":"12345",
	"deliveryCountry":"Indonesia",
	"dbProcessUrl":"http://ptsv2.com/t/0ftrz-1519971382/post",
	"merchantToken":"f9d30f6c972e2b5718751bd087b178534673a91bbac845f8a24e60e8e4abbbc5",
	"reqDomain":"merchant.com",
	"reqServerIP":"127.0.0.1",
	"userIP":"127.0.0.1",
	"userSessionID":"697D6922C961070967D3BA1BA5699C2C",
	"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/60.0.3112.101 Safari/537.36",
	"userLanguage":"ko-KR,en-US;q=0.8,ko;q=0.6,en;q=0.4",
	"instmntType":"2",
	"instmntMon":"1",
	"recurrOpt":"2"
}
```

<aside class="notice">Mohon merujuk kepada <a href="#registration">Register API</a> untuk Parameter yang lengkap, Parameter di bawah merupakah tambahan yang dibutuhkan untuk Registrasi Credit Card.</aside>

<br>**Parameter Tambahan Registrasi Credit Card**

| **Parameters**                 | **Type** | Size | Description                                                  | Value |
| ------------------------------ | -------- | ---- | ------------------------------------------------------------ | ----- |
| **`payMethod`** **Required**   | **N**    | 2    | Credit Card (CC)                                             | 1     |
| **`instmntType`** **Required** | **N**    | 2    | [Installment Type](#installment-type)                        | 2     |
| **`instmntMon`** **Required**  | **N**    | 2    | Default 1 for Full Payment                                   | 1     |
| **`recurrOpt`** **Required**   | **N**    | 2    | `0`: Automatic Cancel<br/> `1`: Do not cancel <br/>`2`: Do not make token<br> | 2     |

### Response Parameters - Registrasi Credit Card

> Sample JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "IONPAYTEST01201804191157304666",
    "referenceNo": "ORD12345",
    "payMethod": "01",
    "amt": "10000",
    "transDt": "20180419",
    "transTm": "115714",
    "description": null,
    "bankCd": null,
    "vacctNo": null,
    "mitraCd": null,
    "payNo": null,
    "currency": null,
    "goodsNm": null,
    "billingNm": null,
    "vacctValidDt": null,
    "vacctValidTm": null,
    "payValidDt": null,
    "payValidTm": null
}
```

| **Parameter**     | **Type** | **Size** | Description                       |
| ----------------- | -------- | -------- | --------------------------------- |
| **`resultCd`**    | **N**    | **4**    | [Result Code](#error-code)        |
| **`resultMsg`**   | **AN**   | **255**  | [Result Message](#error-code)     |
| **`tXid`**        | **AN**   | **30**   | Transactionn ID                   |
| **`referenceNo`** | **ANS**  | **40**   | Merchant Reference No.            |
| **`payMethod`**   | **N**    | **2**    | [Payment Method](#payment-method) |
| **`amt`**         | **N**    | **12**   | Payment Amount                    |
| **`transDt`**     | **N**    | **8**    | Transaction Date (YYYYMMDD)       |
| **`transTm`**     | **N**    | **6**    | Transction Tim (HH24MISS)         |
| **`description`** | **AN**   | **100**  | Transaction Description           |

## Pembayaran - Credit Card

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/payment`                                                                                  |
| **Request Method** **application/x-www-form-urlencoded**  | `Popup`, `Redirect`, `Submit`                                                                                 |
| **Description**                                           | Melakukan Request Pembayaran                                                                                  |
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                  |

### Request Parameters - Pembayaran Credit Card

>Sample POST Request Parameter
>
> `timeStamp=20180123100505&tXid=IONPAYTEST01201804191202084760&merchantToken=f9d30f6c972e2b5718751bd087b178534673a91bbac845f8a24e60e8e4abbbc5&cardNo=4222222222222222&cardExpYymm=2006&cardCvv=123&cardHolderNm=Thomas Alfa Edison&callBackUrl=http://merchant.com/callbackUrl`

<aside class="notice">Pembayaran hanya dapat diproses setelah melakukan Registrasi menggunakan <a href="#registration-credit-card">Registration API</a>.</aside>

<br>**Parameter Pembayaran Credit Card**

| **Parameter**                        | **Type** | **Size** | Description                               | Example                          |
| ------------------------------------ | -------- | -------- | ----------------------------------------- | -------------------------------- |
| **`timeStamp`** **Required**         | **N**    | **14**   | API Request Timestamp  (YYYYMMDDHH24MISS) | 20170708123456                   |
| **`tXid`** **Required**              | **AN**   | **30**   | Transaction ID                            | BMRITEST0102201607291027025291   |
| **`cardNo`** **Required**            | **N**    | **20**   | Card Number                               | 1234567890123450                 |
| **`cardExpYymm`** **Required**       | **N**    | **4**    | Expiry (YYMM)                             | 2412                             |
| **`cardCvv`** **Required**           | **N**    | **4**    | Card CVV                                  | 141                              |
| **`cardHolderNm`** **Required CIMB** | **AN**   | **50**   | Card Holder Name                          | John Doe                         |
| **`merchantToken`** **Required**     | **AN**   | **255**  | merchantToken                             | 9338d54573688ae18e175240b025…    |
| **`callBackUrl`** **Required**       | **ANs**  | **255**  | Payment Result URL                        | https://merchant.com/callBackUrl |

### Response Parameters - Credit Card Payment

> Contoh parameter response yang didapat callBackUrl.
>
> referenceNo: ORD12345<br>
> authNo: 084760<br>
> ccTransType: 1<br>
> mRefNo: <br>
> issuBankCd: BMRI<br>
> issuBankNm: PT Bank Mandiri (Persero)<br>
> tXid: IONPAYTEST01201804191202084760<br>
> transTm: 120208<br>
> mitraCd: <br>
> recurringToken: <br>
> resultCd: 0000<br>
> transDt: 20180419<br>
> acquBankCd: BMRI<br>
> acquBankNm: PT Bank Mandiri (Persero)<br>
> instmntType: 2<br>
> instmntMon: 1<br>
> payMethod: 01<br>
> receiptCode: <br>
> cardExpYymm: 2012<br>
> cardNo: 422222******2222<br>
> description: <br>
> resultMsg: SUCCESS<br>
> goodsNm: Test Transaction Nicepay<br>
> preauthToken: <br>
> amt: 10000<br>
> billingNm: Customer Name<br>
> currency: IDR<br>
>

| **Parameter**     | **Type** | **Size** | Description                           |
| ----------------- | -------- | -------- | ------------------------------------- |
| **`resultCd`**    | **N**    | **4**    | Result Code                           |
| **`resultMsg`**   | **AN**   | **255**  | Result Message                        |
| **`tXid`**        | **AN**   | **30**   | Transaction ID                        |
| **`referenceNo`** | **ANS**  | **40**   | Merchant Ref. No                      |
| **`payMethod`**   | **N**    | **2**    | Payment Method                        |
| **`amt`**         | **N**    | **12**   | Payment Amount                        |
| **`transDt`**     | **N**    | **8**    | Transaction Date (YYYYMMDD)           |
| **`transTm`**     | **N**    | **6**    | Transaction Time (HH24MISS)           |
| **`description`** | **AN**   | **100**  | Transaction Description               |
| **`authNo`**      | **N**    | **10**   | Approval No                           |
| **`issuBankCd`**  | **A**    | **4**    | Issue [Bank Code](#bank-code)         |
| **`issuBankNm`**  | **A**    | &nbsp;   | Issue Bank Name                       |
| **`acquBankCd`**  | **A**    | **4**    | Acquire [Bank Code](#bank-code)       |
| **`acquBankNm`**  | **A**    | &nbsp;   | Acquire Bank Name.                    |
| **`cardNo`**      | **N**    | **20**   | Masked Card Number                    |
| **`cardExpYymm`** | **N**    | **4**    | Card Expiry (YYMM)                    |
| **`currency`**    | **AN**   | **3**    | Currency                              |
| **`goodsNm`**     | **AN**   | **100**  | Goods Name                            |
| **`billingNm`**   | **A**    | **30**   | Billing Name                          |
| **`ccTransType`** | **AN**   | **2**    | Credit Card Trans Type                |
| **`instmntType`** | **N**    | **2**    | [Installment Type](#installment-type) |
| **`instmntMon`**  | **N**    | **2**    | Insatllment Month                     |
