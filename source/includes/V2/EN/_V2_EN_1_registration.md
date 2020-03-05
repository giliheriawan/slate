# Registration
## Specifications - Register

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/registration`                                                                                |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Performs Transaction Regist to NICEPAY                                                           |
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                                 |

**Payment Methods:**

| **Code** | **PayMethod**         | Description                                 |
| -------- | --------------------- | ------------------------------------------- |
| **`01`** | **Credit Card**       | Order will be created                       |
| **`02`** | **Virtual Account**   | Virtual Account (`vacctNo`) will be created |
| **`03`** | **Convenience Store** | Pay Number (`payNo`) will be created        |
| **`04`** | **ClickPay**          | Order will be created                       |
| **`05`** | **E-Wallet**          | Order will be created                       |
| **`06`** | **Payloan**           | Order will be created                       |

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

| Parameter         | **Type** | **Size** | **Description**                                              | Example                                                      |
| ----------------- | -------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `timeStamp`       | **N**    | **14**   | **Request Timestamp** **Required** *(YYYYMMDDHH24MISS)*      | 20170708123456                                               |
| `iMid`            | **AN**   | **10**   | **Merchant  ID** **Required**                                | IONPAYTEST                                                   |
| `payMethod`       | **AN**   | **2**    | **[Payment  Method](#payment-method)** **Required**          | 01                                                           |
| `currency`        | **AN**   | **3**    | **Currency** **Required**                                    | IDR                                                          |
| `amt`             | **N**    | **12**   | **Amount** **Required**                                      | 1000                                                         |
| `referenceNo`     | **ANS**  | **40**   | **Merchant's RefNo.** **Required**                           | MerchantReferenceNumber001                                   |
| `goodsNm`         | **AN**   | **100**  | **Goods  Name** **Required**                                 | Merchant Goods 1                                             |
| `billingNm`       | **A**    | **30**   | **Buyer  Name** **Required**                                 | John Doe                                                     |
| `billingPhone`    | **N**    | **15**   | **Buyer  Phone No**. **Required**                            | 2112345678                                                   |
| `billingEmail`    | **AN**   | **40**   | **Buyer  Email** **Required**                                | [buyer@merchant.com](mailto:buyer@merchant.com)              |
| `billingAddr`     | **AN**   | **100**  | **Buyer  Address**                                           | Jln Merdeka 123                                              |
| `billingCity`     | **A**    | **50**   | **Buyer  City** **Required**                                 | Jakara Selatan                                               |
| `billingState`    | **A**    | **50**   | **Billing  State** **Required**                              | DKI Jakarta                                                  |
| `billingPostCd`   | **N**    | **10**   | **Billing  Post Number** **Required**                        | 14350                                                        |
| `billingCountry`  | **A**    | **10**   | **Billing  Country** **Required**                            | Indonesia                                                    |
| `cartData`        | **AN**   | **4000** | **[Cart Data](#cart-data-v2)** **Required**                  | {}                                                           |
| `instmntType`     | **N**    | **2**    | **[Installment Type](#installment-type)** **Required for CC** | 1                                                            |
| `instmntMon`      | **N**    | **2**    | **Installment  Month** **Required for CC**                   | 1                                                            |
| `recurrOpt`       | **N**    | **2**    | `0`: Automatic Cancel<br> `1`: Do not cancel <br>`2`: Do not make token | 2                                                            |
| `bankCd`          | **A**    | **4**    | **[Bank Code](#bank-code)** **Required for VA**              | CENA                                                         |
| `vacctValidDt`    | **N**    | **8**    | **VA  Expiry Date** **(YYYYMMDD)**                           | 20200303                                                     |
| `vacctValidTm`    | **N**    | **6**    | **VA  Expiry Time** **(HH24MISS)**                           | 135959                                                       |
| `merFixAcctId`    | **AN**   | **40**   | **Merchant  Reserved VA ID**                                 | 4                                                            |
| `mitraCd`         | **A**    | **4**    | **[Mitra Code](#mitra-code)** **Required for CVS, E-Wallet, Payloan** | AKLP                                                         |
| `userIP`          | **AN**   | **15**   | **User IP** **Required for CC**                              | 127.0.0.1                                                    |
| `dbProcessUrl`    | **AN**   | **255**  | **Notification URL** **Required**                            | https://merchant.com/dbProcessUrl                            |
| `merchantToken`   | **AN**   | **255**  | **merchantToken**  **Required**                              | 6cfccfc0046773c1b589d8e 98f8b596c284f3c70a4ecf8  6eba14c18944b74bcd |
| `deliveryNm`      | **A**    | **30**   | **Delivery Name**                                            | John Doe                                                     |
| `deliveryPhone`   | **N**    | **15**   | **Delivery Phone**                                           | 8124125931                                                   |
| `deliveryAddr`    | **AN**   | **100**  | **Delviery Address**                                         | Jln Merdeka Riau 161                                         |
| `deliveryCity`    | **A**    | **50**   | **Delivery  City**                                           | Riau                                                         |
| `deliveryState`   | **A**    | **50**   | **Delivery  State**                                          | Riau                                                         |
| `deliveryPostCd`  | **N**    | **10**   | **Delivery Post Code**                                       | 14350                                                        |
| `deliveryCountry` | **A**    | **10**   | **Delivery Country**                                         | Indonesia                                                    |
| `vat`             | **N**    | **12**   | **Vat**                                                      | 0                                                            |
| `fee`             | **N**    | **12**   | **Service Fee**                                              | 0                                                            |
| `notaxAmt`        | **N**    | **12**   | **Tax-free Amount**                                          | 0                                                            |
| `description`     | **AN**   | **100**  | **Transaction  Description**                                 | Test Transaction                                             |
| `reqDt`           | **N**    | **8**    | **Request  Date** **(YYYYMMDD)**                             | 20200303                                                     |
| `reqTm`           | **N**    | **6**    | **Request  Time** **(HH24MISS)**                             | 135959                                                       |
| `reqDomain`       | **AN**   | **100**  | **Request Domain**                                           | merchant.com                                                 |
| `reqServerIP`     | **AN**   | **15**   | **Request Server IP**                                        | 127.0.0.1                                                    |
| `reqClientVer`    | **AN**   | **50**   | **Client Version**                                           | 1.0                                                          |
| `userSessionID`   | **AN**   | **100**  | **User Session ID**                                          | userSessionID                                                |
| `userAgent`       | **AN**   | **100**  | u                                                            | Mozilla                                                      |
| `userLanguage`    | **A**    | **2**    | **User Language**                                            | en-US                                                        |

## Cart Data - Register
<h3 id="cart-data-v2"></h3>

| **Parameter**                 |  Description                   |
|-------------------------------|--------------------------------|
|**count**                      | Total cart data count          |
|**item**                       |                                |
|**item ->** **img_url**        | Good's image URL (50x50 size)  |
|**item ->** **goods_name**     | Good's name                    |
|**item ->** **goods_detail**   | Good's description             |
|**item ->** **goods_amt**      | Good's amount                  |

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

| Parameter      | **Type** | **Size** | **Description**                       | Remark                              |
| -------------- | -------- | -------- | ------------------------------------- | ----------------------------------- |
| `resultCd`     | **N**    | **4**    | **[Result Code](#error-code)**        |                                     |
| `resultMsg`    | **AN**   | **255**  | **[Result Message](#error-code)**     |                                     |
| `tXid`         | **AN**   | **30**   | **Transaction ID**                    | When success                        |
| `referenceNo`  | **ANS**  | **40**   | **Merchant Order No**                 | When success                        |
| `payMethod`    | **N**    | **2**    | **[Payment Method](#payment-method)** | When success                        |
| `amt`          | **N**    | **12**   | **Payment amount**                    | When success                        |
| `currency`     | **AN**   | **3**    | **Currency**                          | When success VA and CVS             |
| `goodsNm`      | **AN**   | **100**  | **Goods Name**                        | When success VA and CVS             |
| `billingNm`    | **A**    | **30**   | **Buyer name**                        | When success VA and CVS             |
| `transDt`      | **N**    | **8**    | **Transaction Date** **(YYYYMMDD)**   | When success                        |
| `transTm`      | **N**    | **6**    | **Transaction Time** **(HH24MISS)**   | When success                        |
| `description`  | **AN**   | **100**  | **Transaction Description**           | When success VA and CVS             |
| `bankCd`       | **A**    | **4**    | **[Bank Code](#bank-code)**           | When success VA                     |
| `vacctNo`      | **N**    | **20**   | **Virtual Account No.**               | When success VA                     |
| `vacctValidDt` | **N**    | **8**    | **VA Expiry Date** **(YYYYMMDD)**     | When success VA                     |
| `vacctValidTm` | **N**    | **6**    | **VA Expiry Time** **(HH24MISS)**     | When success VA                     |
| `mitraCd`      | **AN**   | **4**    | **[Mitra Code](#mitra-code)**         | When success CVS, Payloan, E-Wallet |
| `payNo`        | **N**    | **12**   | **CVS Payment Number**                | When success CVS                    |
| `payValidDt`   | **N**    | **8**    | **CVS Expiry Date** **(YYYYMMDD)**    | When success CVS                    |
| `payValidTm`   | **N**    | **6**    | **CVS Expiry Time** **(HH24MISS)**    | When success CVS                    |
