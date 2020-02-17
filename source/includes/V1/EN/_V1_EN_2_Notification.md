
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
| **POST** *application/x-www-form-urlencoded* | SHA256(`iMid`+`tXid`+`amt`+`merchantKey`) | `103.20.51.0/24` <br> `103.117.8.0/24` | Notification from `User-Agent: Jakarta Commons-HttpClient/3.1` |

<aside class="notice">
Merchant Token received by your Notification Endpoint should be compared internally to prevent fake Notifications.
</aside>

## Notification Parameter

| **Parameter**    		   | **Type and Size** | Description																		    |
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

| **Parameter**    			| **Type and Size** | Description																			   |
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

| **Parameter**    			| **Type and Size** | Description		                            |
|---------------------------| ------------------| ----------------------------------------------|
| **bankCd**         		| **4**   **N**     | Bank Code							            |
| **vacctNo**    			| **16**  **N**     | Bank VA Number				                |
| **vacctValidDt**    		| **8**	  **N**     | VA Expiry Date 					            |
| **vacctValidTm**     		| **6**   **N**     | VA Expiry Time		                        |
| **depositDt**     		|    	  **N**     | Deposit Date							        |
| **depositTm**     		|    	  **N**     | Deposit TIme							        |

### Additional Parameter for Others Payment Method Notification

| **Parameter**    			| **Type and Size** | Description																			   |
|---------------------------| ------------------| -----------------------------------------------------------------------------------------|
| **mitraCd**         		| **4**   **A**     | Mitra Code																		       |
| **payNo**    				| **1**   **N**     | Payment Number 								   										   |
| **payValidDt**    		| **8**	  **N**     | Expiry Date																		       |
| **payValidTm**     		| **6**   **N**     | Expiry Time									   										   |
| **receiptCode**     		| **20**  **ANS**   | Authorization number																	   |
| **mRefNo**    			| **18**  **AN**    | Reference No.																	           |
| **depositDt**     		|         **N**     | Deposit Date									   										   |
| **depositTm**     		|    	  **N**     | Deposit Time																	           |
