# Cancel
## Specifications - Cancel

|                                                           |                                                                                                               |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **API url**                                               | `/nicepay/direct/v2/cancel`                                                                                   |
| **Request Method** **application/json**                   | `POST`                                                                                                        |
| **Description**                                           | Performs Transaction Cancel Request to NICEPAY                                                                |
| **Merchant Token**                                        | SHA256(`timeStamp`+`iMid`+`tXid`+`amt`+`merchantKey`)                                                             |

**Payment Methods Available for Payment:**

| **Code** | **PayMethod**         |
| -------- | --------------------- |
| **`01`** | **Credit Card**       |
| **`02`** | **Virtual Account**   |
| **`03`** | **Convenience Store** |
| **`04`** | **ClickPay**          |
| **`05`** | **E-Wallet**          |
| **`06`** | **Payloan**           |

## Request Parameters - Cancel

> Sample JSON request

```json
{
	"timeStamp":"20180305115011",
	"tXid":"TESTIDTEST01201803051530400331",
	"iMid":"TESTIDTEST",
	"payMethod":"01",
	"cancelType":"1",
	"cancelMsg":"Request Cancel",
	"merchantToken":"306a14c6b6effbe9979ec13dfd6cfe17ddfee2eabe7a7d8bbe55630e27e9e86e",
	"preauthToken":"",
	"amt":"10000",
	"cancelServerIp":"127.0.0.1",
	"cancelUserId":"admin",
	"cancelUserIp":"127.0.0.1",
	"cancelUserInfo":"Customer Cancel Transaction",
	"cancelRetryCnt":"",
	"worker":""
}
```


| Parameter        | **Type** | **Size** | Description                            | Example                        |
| ---------------- | -------- | -------- | -------------------------------------- | ------------------------------ |
| `timeStamp`      | **N**    | **14**   | **API Request Timestamp** **Required** | 20170708123456                 |
| `tXid`           | **AN**   | **30**   | **Transaction Id** **Required**        | IONPAYTEST02201603091207051498 |
| `iMid`           | **AN**   | **10**   | **Merchant Id** **Required**           | IONPAYTEST                     |
| `payMethod`      | **N**    | **2**    | **Payment Method** **Required**        | 01                             |
| `cancelType`     | **N**    | **2**    | **Cancel Type** **Required**           | 1                              |
| `merchantToken`  | **AN**   | **255**  | **merchantToken** **Required**         | 6cfccfc0046773c1b89d8e98f8b5…  |
| `amt`            | **N**    | **12**   | **Payment Amount** **Required**        | 1000                           |
| `cancelMsg`      | **AN**   | **255**  | **Cancel Message**                     | Test Cancel                    |
| `preauthToken`   | **AN**   | **100**  | **Pre-authToken**                      | d4ef98b26f917a697691807cf…     |
| `fee`            | **N**    | **12**   | **Fee**                                | 0                              |
| `vat`            | **N**    | **12**   | **Vat**                                | 0                              |
| `notaxAmt`       | **N**    | **12**   | **Tax-free Amount**                    | 0                              |
| `cancelServerIp` | **AN**   | **15**   | **Server IP**                          | 127.0.0.1                      |
| `cancelUserId`   | **AN**   | **30**   | **User ID**                            | Admin                          |
| `cancelUserIp`   | **AN**   | **15**   | **User IP**                            | 127.0.0.1                      |
| `cancelUserInfo` | **AN**   | **100**  | **User Information**                   | Test Cancel                    |
| `cancelRetryCnt` | **N**    | **2**    | **Retry Count**                        | 5                              |
| `worker`         | **AN**   | **10**   | **Worker**                             | Worker                         |

## Response Parameters - Cancel

> Sample JSON Response

```json
{
    "tXid": "TESTIDTEST01201803051530400331",
    "referenceNo": "ORD12345",
    "resultCd": "0000",
    "resultMsg": "SUCCESS",
    "transDt": "20180305",
    "transTm": "153040",
    "description": "Order Description",
    "amt": "10000"
}
```

| Parameter     | **Type** | **Size** | **Description**                   | Remark       |
| ------------- | -------- | -------- | --------------------------------- | ------------ |
| `resultCd`    | **N**    | **4**    | **[Result Code](#error-code)**    |              |
| `resultMsg`   | **AN**   | **255**  | **[Result Message](#error-code)** |              |
| `tXid`        | **AN**   | **30**   | **Transaction ID**                | When Success |
| `referenceNo` | **ANS**  | **40**   | **Merchant Order No**             | When Success |
| `transDt`     | **N**    | **8**    | **Transaction Date**              | When Success |
| `transTm`     | **N**    | **6**    | **Transaction Time**              | When Success |
| `description` | **AN**   | **255**  | **Description**                   | When Success |
| `amt`         | **N**    | **12**   | **Amount**                        | When Success |
| `canceltXid`  | **AN**   | **30**   | **Cancel Transaction ID**         | When Success |
