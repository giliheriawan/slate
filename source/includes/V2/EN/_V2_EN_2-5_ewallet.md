# E-Wallet
NICEPay offers E-Wallet as a Payment Method.<br>
Notification will be sent real-time when customer has completed the payment.<br>

Supported E-Wallet:
<ol type="1">
  <li>OVO</li>
  <li>Link Aja</li>
</ol>

Integration Step :
<ol type="1">
  <li>Merchant Request Registration
  <li>Merchant Request Payment
  <li>NICEPay will Redirect to E-Wallet Page or Send Notification to App
  <li>Customer Make Payment on E-Wallet Page / App
  <li>NICEPay Send Notification
  <li>Handle Notification
</ol>

<div class="wrapper">
<ul>
  <li>
    <input type="checkbox" id="list-item-ovov2">
    <label for="list-item-ovov2" class="first">OVO Transaction Flow (CHANGE THIS)</label>
    <ul>
      <img src="/images/cpay-normal-v2-flow.png">
    </ul>
  </li>
</ul>
</div>

<div class="wrapper">
<ul>
  <li>
    <input type="checkbox" id="list-item-linkv2">
    <label for="list-item-linkv2" class="first">LinkAja Transaction Flow (CHANGE THIS)</label>
    <ul>
      <img src="/images/cpay-normal-v2-flow.png">
    </ul>
  </li>
</ul>
</div>

## Registration - E-Wallet

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/registration`                                                                             |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Performs Transaction Regist to NICEPAY                                                                        |        
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`referenceNo`+`amt`+`merchantKey`)                                                  |

### Request Parameters - E-Wallet Registration
> Sample JSON Request

```json
{
  "timeStamp":"20190813141070",
  "iMid":"IONPAYTEST",
  "payMethod":"05",
  "currency":"IDR",
  "amt":"6500000",
  "referenceNo":"OrdNo20181023141070",
  "merchantToken":"f13aca1c9793987581c9afe0bad6c09d2cb70c7840e269a78911a8b96d15eea5",
  "goodsNm":"iPhone 5S",
  "billingNm":"HongGilDong",
  "billingPhone":"0878777665544",
  "billingEmail":"no-reply@ionpay.net",
  "billingAddr":"Jalan Jenderal Gatot Subroto Kav.57",
  "billingCity":"Jakarta",
  "billingState":"DKI Jakarta",
  "billingPostCd":"12950",
  "billingCountry":"ID",
  "deliveryNm":"HongGilDong",
  "deliveryPhone":"62-21-0000-0000",
  "deliveryAddr":"Jalan Jenderal Gatot Subroto Kav.57",
  "deliveryCity":"Jakarta",
  "deliveryState":"DKI Jakarta",
  "deliveryPostCd":"12950",
  "deliveryCountry":"ID",
  "dbProcessUrl":"http://127.0.0.1:8080/nicepay/test3/dbProcess.do",
  "vat":"0",
  "fee":"0",
  "notaxAmt":"0",
  "description":"this is test transaction!!",
  "reqDt":"20190813",
  "reqTm":"091098",
  "reqDomain":"merchant.com",
  "reqServerIP":"172.29.2.178",
  "reqClientVer":"",
  "userIP":"0:0:0:0:0:0:0:1",
  "userSessionID":"697D6922C961070967D3BA1BA5699C2C",
  "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/60.0.3112.101 Safari/537.36",
  "userLanguage":"en-US",
  "cartData":"{“count”: ”2”,”item”: [{“img_url”: ”http://img.aaa.com/ima1.jpg”,”goods_name”: ”Item 1 Name”,”goods_detail”: ”Item 1 Detail”,”goods_amt”: ”700”},{“img_url”: ”http://img.aaa.com/ima2.jpg”,”goods_name”: ”Item 2 Name”,”goods_detail”: ”Item 2 Detail”,”goods_amt”: ”300”}]}",
  "mitraCd":"OVOE"
}
```

<aside class="notice">Please refer to <a href="#registration">Register API</a> for Complete Parameters, the parameters below are the additional that will be required for E-Wallet Registration</aside>

| Parameters  | **Type** | **Size** | **Description**                                  | Value         |
| ----------- | -------- | -------- | ------------------------------------------------ | ------------- |
| `payMethod` | **AN**   | **2**    | **E-Wallet** **Required**                        | 05            |
| `mitraCd`   | **A**    | **4**    | **[Mitra Code](#mitra-code)** **Required**       | OVOE          |
| `userIP`    | **AN**   | **15**   | **Customer IP** **Required**                     | 127.0.0.1     |
| `cartData`  | **AN**   | **4000** | **[Cart Data](#ewallet-cart-data)** **Required** | `JSON FORMAT` |

### E-Wallet Cart Data
<h3 id="ewallet-cart-data"></h3>

| **Parameter**                      |  Description                                        |
|-------------------------------     |--------------------------------                     |
|**count**                           | Total cart data count                               |
|**item**                            |                                                     |
|**item ->** **img_url**             | Good's image URL (50x50 size)                       |
|**item ->** **goods_name**          | Good's name                                         |
|**item ->** **goods_detail**        | Good's description                                  |
|**item ->** **goods_amt**           | Good's amount                                       |
|**item ->** **goods_quantity**      | Good's Quantity (Only for LinkAja)                  |

<div class="center-column"></div>
```json
{
    "count": "2",  
    "item": [  
        {
            "img_url": "http://img.aaa.com/ima1.jpg",  
            "goods_name": "Item 1 Name",
            "goods_detail": "Item 1 Detail",
            "goods_amt": "700",
            "goods_quantity: "2" //Only for LinkAja
        },  
	    {
            "img_url": "http://img.aaa.com/ima2.jpg",
            "goods_name": "Item 2 Name",
            "goods_detail": "Item 2 Detail",
            "goods_amt": "300",
            "goods_quantity: "1" //Only for LinkAja
        }  
        ] 
} 
```


### Response Parameters - E-Wallet Registration
> Sample JSON Response

```json
{
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "tXid": "IONPAYTEST05201908131117277404",
    "referenceNo": "OrdNo20181023141070",
    "payMethod": "05",
    "amt": "6500000",
    "transDt": "20190813",
    "transTm": "111550",
    "description": "this is test transaction!!"
}
```

| Parameters    | **Type** | **Size** | Description                       |
| ------------- | -------- | -------- | --------------------------------- |
| `resultCd`    | **N**    | **4**    | [Result Code](#error-code)        |
| `resultMsg`   | **AN**   | **255**  | [Result Message](#error-code)     |
| `tXid`        | **AN**   | **30**   | Transactionn ID                   |
| `referenceNo` | **ANS**  | **40**   | Merchant Ref. No                  |
| `payMethod`   | **N**    | **2**    | [Payment Method](#payment-method) |
| `amt`         | **N**    | **12**   | Payment Amount                    |
| `transDt`     | **N**    | **8**    | Transaction Date (YYYYMMDD)       |
| `transTm`     | **N**    | **6**    | Transction Time (HH24MISS)        |
| `description` | **AN**   | **100**  | Transaction Description           |






















BELUM DIEDITBELUM DIEDITBELUM DIEDITBELUM DIEDITBELUM DIEDITBELUM DIEDITBELUM DIEDITBELUM DIEDITBELUM DIEDITBELUM DIEDITBELUM DIEDIT
## E-Wallet Payment

> Sample POST Parameter Request
>
> `callBackUrl=http://localhost/ci_nicepay_v2/CallPaymentEW?tXid=IONPAYTEST05201908141607307963&timeStamp=20180123095456&amt=100000&merchantToken=1f90b3f4fbfc7476a800cf2c108509be3cf193f4678dc91e9a69c3b941d97ccc`

E-Wallet Payment can be process if [ Registration E-Wallet](#e-wallet-registration) is **Success**

 &nbsp; | &nbsp;
---------- | -------
**API url** | **/nicepay/direct/v2/payment**
Method | POST (Popup, Redirect, Submit, etc) [not server to server API]
Description | Perform for Transaction Registration
Merchant Token | SHA256 (timeStamp + iMid + referenceNo + amt + merchantKey)

<br>Please refer to [here](#payment) for POST request and response parameters<br>
**Mandatory POST parameters**

Parameter | Mandatory | Type | Size | Description
---------- | ---------- | ---------- | ---------- | ----------
timeStamp | Y | N | 14 | API Request Date
tXid | Y | AN | 30 | Transaction ID
merchantToken | Y | AN | 255 | merchantToken
callBackUrl | Y | AN | 255 | Payment result forward url (on browser)

<br>**Response POST Parameter(redirect to the callBackUrl)**
> Sample callbackUrl with parameter
>
> `http://merchant.com/callbackUrl?resultCd=0000&resultMsg=SUCCESS&tXid=IONPAYTEST05201908141607307963&referenceNo=ORD12345&payMethod=05&amt=10000&transDt=20180302&transTm=151052&description=Transaction Description&mitraCd=OVOE&currency=IDR&goodsNm=Test Transaction Nicepay&billingNm=Customer Name`


Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
resultCd | N | 4 | result code
resultMsg | AN | 255 | Result Message
tXid | AN | 30 | Transaction Id (Key from NICEPay)
referenceNo | ANS | 40 | Merchant Order No (Key from merchant)
payMethod | N | 2 | Payment Method
amt | N | 12 | Payment amount
currency | AN | 3 | currency
goodsNm | AN | 100 | Goods Name
billingNm | AN | 30 | Buyer name
transDt | N | 8 | Transaction date (YYYYMMDD)
transTm | N | 6 | Transaction time (HH24MISS)
description | AN | 100 | Transaction Description
mitraCd | AN | 4 | Mitra Code, refer Code at [Here](#mitra-code)
