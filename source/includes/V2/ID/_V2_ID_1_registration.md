# Registrasi
## Spesifikasi - Register

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/registration`                                                                                |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Request Registrasi Transaksi ke NICEPAY                                                            |
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                                 |

**Payment Methods:**

| **Code** | **PayMethod**         | Deskripsi                                   |
| -------- | --------------------- | ------------------------------------------- |
| **`01`** | **Credit Card**       | Membuat Transaksi Baru                      |
| **`02`** | **Virtual Account**   | Generate Nomor Virtual Account (`vacctNo`)  |
| **`03`** | **Convenience Store** | Generate Nomor Pembayaran CVS (`payNo`)     |
| **`04`** | **ClickPay**          | Membuat Transaksi Baru                      |
| **`05`** | **E-Wallet**          | Membuat Transaksi Baru                      |
| **`06`** | **Payloan**           | Membuat Transaksi Baru                      |

## Request Parameters - Register

> Sample JSON Request

```json
{
	"deliveryPhone":"62-21-0000-0000",
	"mitraCd":"ALMA",
	"fee":"0",
	"amt":"1000",
	"description":"this is test transaction!!",
	"notaxAmt":"0",
	"reqDomain":"localhost",
	"userLanguage":"ko-KR,en-US;q=0.8,ko;q=0.6,en;q=0.4",
	"vacctValidDt":"",
	"billingEmail":"no-reply@ionpay.net",
	"merFixAcctId":"",
	"payMethod":"01",
	"deliveryAddr":"Jalan Jenderal Gatot Subroto Kav.57",
	"billingCountry":"ID",
	"userIP":"0:0:0:0:0:0:0:1",
	"instmntMon":"1",
	"currency":"IDR",
	"payValidDt":"",
	"deliveryCity":"Jakarta",
	"merchantToken":"b5149659e1a2f1271fb0833f8ea20e174b6fd389db26bc6ad036cc0dae6fa797",
	"goodsNm":"T-1000",
	"referenceNo":"OrdNo2017717942577",
	"vat":"0",
	"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/60.0.3112.101 Safari/537.36",
	"billingState":"Jakarta",
	"userSessionID":"697D6922C961070967D3BA1BA5699C2C",
	"instmntType":"1",
	"deliveryNm":"HongGilDong",
	"deliveryPostCd":"12950",
	"reqClientVer":"",
	"iMid":"IONPAYTEST",
	"billingNm":"HongGilDong",
	"timeStamp":"20170822170942",
	"dbProcessUrl":"http://127.0.0.1:8080/nicepay/test3/dbProcess.do",
	"payValidTm":"",
	"cartData":"{“count”: “1”,“item”: [{“img_url”: “https://www.lecs.com/image/introduction/img_vmd020101.jpg”,“goods_name”: “Jam Tangan Army - Strap Kulit - Hitam”,“goods_detail”: “jumlah 1”,“goods_amt”: “400”}]}",
	"deliveryState":"Jakarta",
	"deliveryCountry":"ID",
	"bankCd":"",
	"billingPostCd":"12950",
	"billingAddr":"Jalan Jenderal Gatot Subroto Kav.57",
	"reqServerIP":"172.29.2.178",
	"vacctValidTm":"",
	"billingPhone":"021-579-00000",
	"billingCity":"Jakarta"
}
```

| **Parameter**                                         | **Type**          | **Size** | Description                                                  | Example                                                      |
| ----------------------------------------------------- | ----------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **`timeStamp`** **Required**                          | **N**             | **14**   | Request Timestamp (YYYYMMDDHH24MISS)                         | 20170708123456                                               |
| **`iMid`** **Required**                               | **AN**            | **10**   | Merchant  ID                                                 | IONPAYTEST                                                   |
| **`payMethod`** **Required**                          | **N**             | **2**    | [Payment  Method](#payment-method)                           | 01                                                           |
| **`currency`** **Required**                           | **A**             | **3**    | Currency                                                     | IDR                                                          |
| **`amt`** **Required**                                | **N**             | **12**   | Amount                                                       | 1000                                                         |
| **`referenceNo`** **Required**                        | **ANS**           | **40**   | Merchant's RefNo.                                            | MerchantReferenceNumber001                                   |
| **`goodsNm`** **Required**                            | **AN**            | **100**  | Goods Name                                                   | Merchant Goods 1                                             |
| **`billingNm`** **Required**                          | **A**             | **30**   | Buyer Name                                                   | John Doe                                                     |
| **`billingPhone`** **Required**                       | **N**             | **15**   | Buyer Phone No.                                              | 2112345678                                                   |
| **`billingEmail`** **Required**                       | **ANS**           | **40**   | Buyer Email                                                  | [buyer@merchant.com](mailto:buyer@merchant.com)              |
| **`billingAddr`** **Required**                        | **AN**            | **100**  | Buyer Address                                                | Jln Merdeka 123                                              |
| **`billingCity`** **Required**                        | **A**             | **50**   | Buyer City                                                   | Jakara Selatan                                               |
| **`billingState`** **Required**                       | **A**             | **50**   | Billing State                                                | DKI Jakarta                                                  |
| **`billingPostCd`** **Required**                      | **N**             | **10**   | Billing Post Number                                          | 14350                                                        |
| **`billingCountry`** **Required**                     | **A**             | **10**   | Billing Country                                              | Indonesia                                                    |
| **`cartData`** **Required**                           | **`JSON Object`** | **4000** | [Cart Data](#cart-data-v2)                                   | {}                                                           |
| **`instmntType`** **Required for CC**                 | **N**             | **2**    | [Installment Type](#installment-type)                        | 1                                                            |
| **`instmntMon`** **Required**                         | **N**             | **2**    | Installment Month Required for CC                            | 1                                                            |
| **`recurrOpt`** **Required**                          | **N**             | **2**    | `0`: Automatic Cancel<br> `1`: Do not cancel <br>`2`: Do not make token | 2                                                            |
| **`bankCd`** **Required for VA**                      | **A**             | **4**    | [Bank Code](#bank-code)                                      | CENA                                                         |
| **`vacctValidDt`** **Required**                       | **N**             | **8**    | VA Expiry Date (YYYYMMDD)                                    | 20200303                                                     |
| **`vacctValidTm`** **Required**                       | **N**             | **6**    | VA Expiry Time (HH24MISS)                                    | 135959                                                       |
| **`merFixAcctId`** **Required**                       | **AN**            | **40**   | Merchant Reserved VA ID                                      | 4                                                            |
| **`mitraCd`** **Required for CVS, E-Wallet, Payloan** | **A**             | **4**    | [Mitra Code](#mitra-code)                                    | AKLP                                                         |
| **`userIP`** **Required for CC, E-Wallet, Payloan**   | **ANS**           | **15**   | User IP                                                      | 127.0.0.1                                                    |
| **`dbProcessUrl`** **Required**                       | **ANS**           | **255**  | Notification URL                                             | https://merchant.com/dbProcessUrl                            |
| **`merchantToken`** **Required**                      | **AN**            | **255**  | merchantToken                                                | 6cfccfc0046773c1b589d8e 98f8b596c284f3c70a4ecf8  6eba14c18944b74bcd |
| **`deliveryNm`**                                      | **A**             | **30**   | Delivery Name                                                | John Doe                                                     |
| **`deliveryPhone`**                                   | **N**             | **15**   | Delivery Phone                                               | 8124125931                                                   |
| **`deliveryAddr`**                                    | **AN**            | **100**  | Delviery Address                                             | Jln Merdeka Riau 161                                         |
| **`deliveryCity`**                                    | **A**             | **50**   | Delivery City                                                | Riau                                                         |
| **`deliveryState`**                                   | **A**             | **50**   | Delivery State                                               | Riau                                                         |
| **`deliveryPostCd`**                                  | **N**             | **10**   | Delivery Post Code                                           | 14350                                                        |
| **`deliveryCountry`**                                 | **A**             | **10**   | Delivery Country                                             | Indonesia                                                    |
| **`vat`**                                             | **N**             | **12**   | Vat                                                          | 0                                                            |
| **`fee`**                                             | **N**             | **12**   | Service Fee                                                  | 0                                                            |
| **`notaxAmt`**                                        | **N**             | **12**   | Tax-free Amount                                              | 0                                                            |
| **`description`**                                     | **AN**            | **100**  | Transaction Description                                      | Test Transaction                                             |
| **`reqDt`**                                           | **N**             | **8**    | Request Date (YYYYMMDD)                                      | 20200303                                                     |
| **`reqTm`**                                           | **N**             | **6**    | Request Time (HH24MISS)                                      | 135959                                                       |
| **`reqDomain`**                                       | **ANS**           | **100**  | Request Domain                                               | merchant.com                                                 |
| **`reqServerIP`**                                     | **ANS**           | **15**   | Request Server IP                                            | 127.0.0.1                                                    |
| **`reqClientVer`**                                    | **ANS**           | **50**   | Client Version                                               | 1.0                                                          |
| **`userSessionID`**                                   | **AN**            | **100**  | User Session ID                                              | userSessionID                                                |
| **`userAgent`**                                       | **ANS**           | **100**  | User Agent                                                   | Mozilla                                                      |
| **`userLanguage`**                                    | **AND**           |          | User Language                                                | en-US                                                        |

## Cart Data - Register
<h3 id="cart-data-v2"></h3>

| **Parameter**                 |  Deskripsi                        |
|-------------------------------|--------------------------------   |
|**count**                      | Total jenis item di dalam cart    |
|**item**                       |                                   |
|**item ->** **img_url**        | URL untuk Gambar barang (50x50)   |
|**item ->** **goods_name**     | Nama Barang                       |
|**item ->** **goods_detail**   | Deskripsi Barang                  |
|**item ->** **goods_amt**      | Harga Barang                      |

<div class="center-column"></div>
```json
{
    "count": "2",  
    "item": [  
        {
            "img_url": "http://img.aaa.com/ima1.jpg",  
            "goods_name": "Item 1 Name",
            "goods_detail": "Item 1 Detail",
            "goods_amt": "700"
        },  
	    {
            "img_url": "http://img.aaa.com/ima2.jpg",
            "goods_name": "Item 2 Name",
            "goods_detail": "Item 2 Detail",
            "goods_amt": "300"
        }  
        ] 
} 
```

## Response Parameters - Register

> Sample JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "IONPAYTEST01201804191154334593",
    "referenceNo": "OrdNo2017717942577",
    "payMethod": "01",
    "amt": "1000",
    "transDt": "20180419",
    "transTm": "115416",
    "description": "this is test transaction!!",
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

| **Parameter**      | **Type** | **Size** | Description                       | Remark                              |
| ------------------ | -------- | -------- | --------------------------------- | ----------------------------------- |
| **`resultCd`**     | **N**    | **4**    | [Result Code](#error-code)        |                                     |
| **`resultMsg`**    | **AN**   | **255**  | [Result Message](#error-code)     |                                     |
| **`tXid`**         | **AN**   | **30**   | Transaction ID                    | When success                        |
| **`referenceNo`**  | **ANS**  | **40**   | Merchant Order No                 | When success                        |
| **`payMethod`**    | **N**    | **2**    | [Payment Method](#payment-method) | When success                        |
| **`amt`**          | **N**    | **12**   | Payment amount                    | When success                        |
| **`currency`**     | **A**    | **3**    | Currency                          | When success VA and CVS             |
| **`goodsNm`**      | **AN**   | **100**  | Goods Name                        | When success VA and CVS             |
| **`billingNm`**    | **A**    | **30**   | Buyer name                        | When success VA and CVS             |
| **`transDt`**      | **N**    | **8**    | Transaction Date (YYYYMMDD)       | When success                        |
| **`transTm`**      | **N**    | **6**    | Transaction Time (HH24MISS)       | When success                        |
| **`description`**  | **AN**   | **100**  | Transaction Description           | When success VA and CVS             |
| **`bankCd`**       | **A**    | **4**    | [Bank Code](#bank-code)           | When success VA                     |
| **`vacctNo`**      | **N**    | **20**   | Virtual Account No.               | When success VA                     |
| **`vacctValidDt`** | **N**    | **8**    | VA Expiry Date (YYYYMMDD)         | When success VA                     |
| **`vacctValidTm`** | **N**    | **6**    | VA Expiry Time (HH24MISS)         | When success VA                     |
| **`mitraCd`**      | **A**    | **4**    | [Mitra Code](#mitra-code)         | When success CVS, Payloan, E-Wallet |
| **`payNo`**        | **N**    | **12**   | CVS Payment Number                | When success CVS                    |
| **`payValidDt`**   | **N**    | **8**    | CVS Expiry Date (YYYYMMDD)        | When success CVS                    |
| **`payValidTm`**   | **N**    | **6**    | CVS Expiry Time (HH24MISS)        | When success CVS                    |
