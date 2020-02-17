
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

| **Method** | Merchant Token | IP | Description |
| --- | --- | --- | --- |
| **POST** *application/x-www-form-urlencoded* | `iMid`<br>`tXid`<br>`amt`<br>`merchantKey` | `103.20.51.0/24` <br> `103.117.8.0/24` | Notification from `User-Agent: Jakarta Commons-HttpClient/3.1` |

<aside class="notice">
Merchant Token received by your Notification Endpoint should be compared internally to prevent fake Notifications.
</aside>

## Common Parameter for Notification

| **Parameter**    		   | **Size and Type** | Description																		    |
|--------------------------| ----------------- | ---------------------------------------------------------------------------------------|
| **tXid**         		   | **N**  **30**     | Transaction ID																			|
| **merchantToken**		   | **AN** **255**    | Merchant Token																			|
| **referenceNo**  		   | **N**  **40**     | Merchant Order No																		|
| **payMethod**    		   | **N**  **2**      | Payment method. Refer Code at [Here](#payment-method)									|
| **amt**          		   | **N**  **12**     | Payment amount																			|
| **transDt**      		   | **N**  **8**      | Transaction date																		|
| **transTm**      		   | **N**  **6**      | Transaction time																		|
| **currency**     		   | **N**  **3**      | Currency																			    |
| **goodsNm**      		   | **N**  **100**    | Goods name																				|
| **billingNm**    		   | **N**  **30**     | Billing name																			|
| **matchCl**      		   | **N**  **1**      | Payment amount match flag. Refer Code at [Here](#notification-match-amount-indicator)	|
| **status**       		   | **AN** **1**      | Deposit Status<br>0: Deposit<br>1: Reversal										    |

### Additional Parameter for Credit Card Notification

| **Parameter**    			| **Size and Type** | Description																			   |
|---------------------------| ------------------| -----------------------------------------------------------------------------------------|
| **authNo**         		| **10**  **N**     | Approval number																		   |
| **IssueBankCd**    		| **4**   **A**     | Issue bank code. Refer Code at [Here](#bank-code)										   |
| **IssueBankNm**    		|    	  **A**     | Issue bank name. 																		   |
| **acquBankCd**     		|     	  **A**     | Acquire bank code. Refer Code at [Here](#bank-code)									   |
| **acquBankNm**     		|    	  **A**     | Acquire bank name.																	   |
| **cardNo**         		| **20**  **AN**    | Card no with masking																	   |
| **cardExpYymm**    		|     	  **N**     | Card expiry (YYMM)																	   |
| **instmntMon**     		| **2**   **N**     | Installment month																		   |
| **instmntType**    		| **2**   **N**     | Installment Type. Refer Code at [Here](#installment-type)							       |
| **preauthToken**   		| **255** **AN**    | Preauth Token																			   |
| **recurringToken** 		| **255** **AN**    | Recurring token 																		   |
| **ccTransType**    		| **2**   **AN**    | Credit card transaction type<br>1: Normal<br>2: Recurring<br>3: Pre-auth<br>4: Captured  |
| **vat**            		| **12**  **N**     | Vat number																			   |
| **fee**            		| **12**  **N**     | Service fee																			   | 
| **notaxAmt**       		| **12**  **N**     | Tax free amount																		   |
 
### Additional Parameter for Virtual Account Notification

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
bankCd  | N | 4 | Bank Code. Refer Code at [Here](#bank-code)
vacctNo | N | 16 | Bank Virtual Account number
vacctValidDt  | N | 8 | VA expiry date
vacctValidTm | N | 6 | VA expiry time
depositDt | N | &nbsp; | Deposit date
depositTm | N | &nbsp; | Deposit time

### Additional Parameter for Others Payment Method Notification

Parameter | Type | Size | Description
---------- | ---------- | ---------- | ----------
mitraCd | A | 4 |  Mitra Code. Refer Code at [Here](#mitra-code)
payNo | N | 12 | Pay number to mitra
payValidDt | N | 8 | CVS expiry date
payValidTm | N | 6 | CVS expiry time
receiptCode | ANS | 20 | Authorization number
mRefNo | AN | 18 | Bank reference No
depositDt | N | &nbsp; | Deposit date
depositTm | N | &nbsp; | Deposit time
