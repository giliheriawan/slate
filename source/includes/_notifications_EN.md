
# Notification

> Sample POST for Notification

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

NICEPAY provides push notification through merchant's `dbProcessUrl`.<br>
To Allow Push Notifications from NICEPAY Server, please add these details to your firewall whitelist:

| **Method**                                      | Merchant Token                            | IP                                     | Description                                                  |
| ----------------------------------------------- | ----------------------------------------- | -------------------------------------- | ------------------------------------------------------------ |
| **POST** **application/x-www-form-urlencoded*** | SHA256(`iMid`+`tXid`+`amt`+`merchantKey`) | `103.20.51.0/24` <br> `103.117.8.0/24` | Notification from `User-Agent: Jakarta Commons-HttpClient/3.1` |

## Notification Parameter

| **Parameter**       | **Type** | **Size** | Description                                          |
| ------------------- | -------- | -------- | ---------------------------------------------------- |
| **`tXid`**          | **N**    | **30**   | Transaction ID                                       |
| **`merchantToken`** | **AN**   | **255**  | Merchant Token                                       |
| **`referenceNo`**   | **ANS**  | **40**   | Merchant Order No                                    |
| **`payMethod`**     | **N**    | **2**    | [Payment method](#payment-method)                    |
| **`amt`**           | **N**    | **12**   | Payment amount                                       |
| **`transDt`**       | **N**    | **8**    | Transaction date                                     |
| **`transTm`**       | **N**    | **6**    | Transaction time                                     |
| **`currency`**      | **A**    | **3**    | Currency                                             |
| **`goodsNm`**       | **AN**   | **100**  | Goods name                                           |
| **`billingNm`**     | **A**    | **30**   | Billing name                                         |
| **`matchCl`**       | **N**    | **1**    | Payment [Flag](#notification-match-amount-indicator) |
| **`status`**        | **A**    | **1**    | Deposit Status:<br>`0` Deposit<br>`1` Reversal       |

### Additional Parameter for Credit Card Notification

| **Parameter**        | **Type** | **Size** | Description                                                  |
| -------------------- | -------- | -------- | ------------------------------------------------------------ |
| **`authNo`**         | **N**    | **10**   | Approval number                                              |
| **`IssueBankCd`**    | **A**    | **4**    | [Issue bank code](#bank-code)                                |
| **`IssueBankNm`**    | **A**    |          | Issue bank name.                                             |
| **`acquBankCd`**     | **A**    |          | [Acquire bank code](#bank-code)                              |
| **`acquBankNm`**     | **A**    |          | Acquire bank name.                                           |
| **`cardNo`**         | **ANS**  | **20**   | Card no with masking                                         |
| **`cardExpYymm`**    | **N**    |          | Card expiry (YYMM)                                           |
| **`instmntMon`**     | **N**    | **2**    | Installment month                                            |
| **`instmntType`**    | **N**    | **2**    | [Installment Type](#installment-type)                        |
| **`preauthToken`**   | **AN**   | **255**  | Preauth Token                                                |
| **`recurringToken`** | **AN**   | **255**  | Recurring token                                              |
| **`ccTransType`**    | **A**    | **2**    | Credit Card Trans type<br>`1` Normal<br>`2` Recurring<br>`3` Pre-auth<br>`4` Captured |
| **`vat`**            | **N**    | **12**   | Vat number                                                   |
| **`fee`**            | **N**    | **12**   | Service fee                                                  |
| **`notaxAmt`**       | **N**    | **12**   | Tax free amount                                              |

### Additional Parameter for Virtual Account Notification

| **Parameter**      | **Type** | **Size** | Description                  |
| ------------------ | -------- | -------- | ---------------------------- |
| **`bankCd`**       | **A**    | **4**    | [Bank Code](#bank-code)      |
| **`vacctNo`**      | **N**    | **16**   | Bank VA Number               |
| **`vacctValidDt`** | **N**    | **8**    | VA Expiry Date (YYYYMMDD)    |
| **`vacctValidTm`** | **N**    | **6**    | VA Expiry Time	(HH24MISS)    |
| **`depositDt`**    | **N**    | **8**    | Deposit Date (YYYYMMDD)      |
| **`depositTm`**    | **N**    | **6**    | Deposit Time (HH24MISS)      |

### Additional Parameter for Others Payment Method Notification

| **Parameter**     | **Type** | **Size** | Description               |
| ----------------- | -------- | -------- | ------------------------- |
| **`mitraCd`**     | **A**    | **4**    | [Mitra Code](#mitra-code) |
| **`payNo`**       | **N**    | **12**   | Payment Number            |
| **`payValidDt`**  | **N**    | **8**    | Expiry Date (YYYYMMDD)    |
| **`payValidTm`**  | **N**    | **6**    | Expiry Time (HH24MISS)    |
| **`receiptCode`** | **ANS**  | **20**   | Authorization number      |
| **`mRefNo`**      | **AN**   | **18**   | Reference No.             |
| **`depositDt`**   | **N**    | **8**    | Deposit Date (YYYYMMDD)   |
| **`depositTm`**   | **N**    | **6**    | Deposit Time (HH24MISS)   |
<aside class="notice">
Merchant Token received by your Notification Endpoint should be compared internally to prevent fake Notifications.
</aside>
