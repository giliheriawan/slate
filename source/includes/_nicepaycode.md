# Nicepay Code
## Field Type

| **Value Code** | Meaning                 |
| -------------- | ----------------------- |
| **A**          | Alphabet                |
| **AN**         | Alphabet Numeric        |
| **N**          | Numeric                 |
| **ANS**        | Alphabet Numeric Symbol |
| **AOO**        | Array of Object         |


## Installment Type

| **Value Code** | Meaning         |
| -------------- | --------------- |
| **`1`**        | Customer charge |
| **`2`**        | Merchant charge |

## Payment Method

| **Value Code** | Meaning                 |
| -------------- | ----------------------- |
| **`01`**       | Credit Card             |
| **`02`**       | Virtual Account         |
| **`03`**       | CVS (Convenience Store) |
| **`04`**       | ClickPay                |
| **`05`**       | E-Wallet                |
| **`06`**       | Payloan                 |

## Payment Status Code

| **Credit Card** |                           |
| --------------- | ------------------------- |
| **`0`**         | Success                   |
| **`1`**         | Failed                    |
| **`2`**         | Void/Refund               |
| **`9`**         | Initialization / Reversal |

| **Virtual Account**   |          |
| --------------------- | -------- |
| **`0`**               | Paid     |
| **`3`**               | Unpaid   |
| **`4`**               | Expired  |

| **CVS**  	 |                              |
| ---------- | ---------------------------- |
| **`0`**    | Paid                         |
| **`3`**    | Unpaid                       |
| **`4`**    | Expired                      |
| **`5`**    | Ready to Paid (for Alfamart) |

## Notification Status Code

| **Value Code**   | Meaning  |
| ---------------- | -------- |
| **`0`**          | Deposit  |
| **`1`**          | Reversal |

## Notification Match Amount Indicator

| **Value Code**   | Meaning |
| ---------------- | ------- |
| **`1`**          | Match   |
| **`2`**          | Over    |
| **`3`**          | Under   |

## Cancel Type

| **Value Code**   | Meaning              |
| ---------------- | -------------------- |
| **`1`**          | Full Cancellation    |
| **`2`**          | Partial Cancellation |

## Bank Code

| **Value Code**   | Meaning                              |
| ---------------- | ------------------------------------ |
| **`BMRI`**       | Bank Mandiri                         |
| **`IBBK`**       | Bank International Indonesia Maybank |
| **`BBBA`**       | Bank Permata                         |
| **`CENA`**       | Bank Central Asia                    |
| **`BNIN`**       | Bank Negara Indonesia 46             |
| **`HNBN`**       | Bank KEB Hana Indonesia              |
| **`BRIN`**       | Bank Rakyat Indonesia                |
| **`BNIA`**       | Bank PT. BANK CIMB NIAGA, TBK.       |
| **`BDIN`**       | Bank PT. BANK DANAMON INDONESIA, TBK |
| **`OTHR`**       | etc, unknown                         |

## Mitra Code

| **Value Code**   | Meaning              |
| ---------------- | -------------------- |
| **`ALMA`**       | CVS Alfamart         |
| **`INDO`**       | CVS Indomaret        |
| **`MDRC`**       | ClickPay Mandiri     |
| **`BCAC`**       | ClickPay BCA         |
| **`CIMC`**       | ClickPay CIMB        |
| **`MDRE`**       | E-Wallet Mandiri     |
| **`BCAE`**       | E-Wallet BCA(Sakuku) |
| **`AKLP`**       | Akulaku              |
| **`KDVI`**       | Kredivo              |
| **`OVOE`**       | OVO                  |

## Error Code

Value | Description
--------- | ---------
&nbsp;| **Common**
0000 | Success
1001 | Connection error
1002 | Socket error
1003 | Server error
1004 | Timeout error
9501 | Invalid transaction number.
9502 | Transaction not allowed.
9503 | It has been stopped or terminated in its stores.
9504 | No offus information.
9505 | No bank information.
9506 | No Merchant Paymethod information.
9507 | Http timeout exception.
&nbsp;| **Order**
8001 | Order registration error.
8002 | Order inquiry error.
8003 | Order registration data error.
8004 | The tXid error during the order inquiry.
8005 | OrderAuthType API Response data null.
9001 | Failed to register your order. Please check your HTTP Message.
9002 | Server is busy. Please kindly try again in few minutes.
9003 | Invalid Order.
9004 | Error on inquiry of order confirmation.
9005 | Failed to check status. Please contact NICEPay for further information.
9006 | Transaction number generated error.
9007 | Undefined: Amount. Please check your request parameter and make sure [amt] is defined.
9008 | Invalid Request Amount. Amount should only number and do not includes decimal.
9009 | Reference Number already exist. Please generate unique [referenceNo].
9010 | Invalid Merchant Token. Contact NICEPay for further information.
9011 | Invalid MID, Merchant is not registered. Contact NICEPay for further information.
9012 | This Payment method is currently not activated. Contact Nicepay for further information.
9013 | Undefined: Currency Code. Please check your request parameter and make sure [currencyCode] is defined.
9014 | Undefined: Reference No. Please check your request parameter and make sure [referenceNo] is defined.
9015 | Undefined: Goods Name. Please check your request parameter and make sure [goodsNm] is defined.
9016 | Undefined: Buyer Name. Please check your request parameter and make sure [billingNm] is defined.
9017 | Undefined: Buyer Phone Number. Please check your request parameter and make sure [billingPhone] is defined.
9018 | Undefined: Buyer Email Address. Please check your request parameter and make sure [billingEmail] is defined.
9019 | Undefined: Callback URL. Please check your request parameter and make sure [callbackUrl] is defined.
9020 | Undefined: Debit Process URL. Please check your request parameter and make sure [dbProcessUrl] is defined.
9021 | Failed in inquiring the criterion information (BO_MER_MGNT ORD_NO_DUP_CHK_FLG).
9022 | Invalid Card Data. Please check [cartData] parameter, and make sure you send valid JSON format.
9023 | Invalid Cart Data. Amount is different with Cart Data total amount. Please make sure [amt] = sum of [amt] in [cartData]
9024 | Undefined: Customer IP Address. Please check your request parameter and make sure [userIP] is defined.
9025 | Undefined: Buyer City. Please check your request parameter and make sure [billingCity] is defined.
9026 | Undefined: Buyer State. Please check your request parameter and make sure [billingState] is defined.
9027 | Undefined: Buyer Postal Code. Please check your request parameter and make sure [billingPostCd] is defined.
9028 | Undefined: Buyer Country. Please check your request parameter and make sure [billingCountry] is defined.
9029 | Installment is not available for defined month
9030 | Transaction Fail. Please check information.
9031 | Date/Time check.
&nbsp;| **Card**
8021 | Card authorization error.
8022 | The tXid error during the card authorization.
8023 | The tXid error during the card net cancel.
8024 | The MID error during the card net cancel.
8026 | Failed card VISA 3D.
8027 | Invalid Parameter (PAN or expiry or country_code)
8028 | Invalid Parameter (callbackUrl)
8029 | Invalid Parameter (onePassToken)
8030 | Not Support Keyin Payment.
9101 | Server is busy. Please kindly try again in few minutes.
9102 | Server is busy. Please kindly try again in few minutes.
9103 | Error in inquiring card ledger.
9104 | Server is busy. Please kindly try again in few minutes.
9105 | Server is busy. Please kindly try again in few minutes.
9106 | Transaction failed.
9107 | Server is busy. Please kindly try again in few minutes.
9108 | This Payment method is currently not activated. Contact Nicepay for further information.
9109 | Reference Number Maximum Length Exceed. [referenceNo] should have maximum 40 characters length.
9110 | Transaction failed. Please check card information and try again.
9111 | Transaction failed. Please check card information and try again.
9112 | Transaction failed. Please check card information and try again.
9113 | Transaction failed. Please check card information and try again.
9114 | MERCHANT_CARDINFO query error.
9115 | Invalid Amount: too low. Please increase amount.
9116 | Transaction already exist. Please make new transaction.
9117 | 3D Secure Failed. Please kindly check your card data and try again.
9118 | Invalid Installment Type.
9119 | Transaction failed: Invalid Terminal ID or Merchant ID
9120 | Transaction failed: Invalid Terminal ID or Merchant ID
9121 | This Payment method is currently not activated. Contact Nicepay for further information.
9122 | Transaction failed. Please check settlement interval.
9123 | Transaction failed. Transaction limit reached.
9124 | Invalid Amount: too low. Please increase amount.
9125 | Transaction failed. Please check card information and try again.
9126 | Transaction already approved.
9127 | Transaction already exist. Please make new transaction.
9128 | Transaction failed.  Please check card information and try again.
9129 | Transaction failed: Expired transaction. Please make new transaction.
9130 | Forbidden. You do not have permission to access this resource.
9131 | Invalid Token. Please check [onePassToken] parameter
9132 | Transaction failed. Please check Risk Management.
9133 | Email not sent.
9134 | Card Recurring Token Failed.
9135 | Card Recurring Auto Void Failed.
9136 | Card Recurring Token Unregistraion Failed.
9137 | Card MIGS Transaction Number not found. (queryDR, vpc_DRExists : N)
9138 | Card MIGS SecureHash not match.
9139 | Card MIGS Amount not match.
9140 | Recurring Payment Parameter CVV code is mandatary.
9141 | Recurring Payment AuthType is '1' or '2'.
9142 | Cards issued overseas can not be paymented.
9143 | Card PreAuth Token Failed.
9144 | Card PreAuth Token Unregistraion Failed.
9145 | capture amount must be less than pre-authorised amount.
9146 | Failed to card token inquiry
9147 | Invalid parameters.
9148 | Recurring Token is only available for 3DS.
9149 | Recurring Payment Use Check : Fail.
9150 | Recurring Payment CVV Check : Fail.
9151 | cardBin Information exist in blackList.
9152 | FDS Check : high risk score.
9153 | FDS Check : binCountry is not local card.
9154 | card daily transaction limit count over.
9155 | card daily transaction limit amount over.
9156 | FDS Check : server communication error.
9157 | There is no valid authentication data. Please make new transaction.
9158 | Card Holder Name is Mandatory.
9159 | Transaction failed. please contact merchant.
9160 | Invalid expired date format YYMM
9161 | Token not found
9162 | FDS Check : binCountry is not permit to payment.
00 | Successful approval/completion or that V.I.P. PIN verification is valid
01 | Refer to card issuer
02 | Refer to card issuer, special condition
03 | Invalid merchant or service provider
04 | Pickup card
05 | Do not honor
06 | General Error
07 | Pickup card, special condition (other than lost/stolen card)
08 | Honor with identification
09 | Request in progress
10 | Partial Approval
11 | V.I.P. approval
12 | Invalid transaction
13 | Invalid amount (currency conversion field overflow) or amount exceeds maximum for card program
14 | Invalid account number (no such number)
15 | No such issuer
16 | Insufficient funds
17 | Customer cancellation
19 | Re-enter transaction
20 | Invalid response
21 | No action taken (unable to back out prior transaction)
22 | Suspected Malfunction
25 | Unable to locate record in file, or account number is missing from the inquiry
28 | File is temporarily unavailable
30 | Format Error
41 | Pickup card (lost card)
43 | Pickup card (stolen card)
51 | Insufficient funds
52 | No checking account
53 | No savings account
54 | Expired card
55 | Incorrect PIN
57 | Transaction not permitted to cardholder
58 | Transaction not allowed at terminal
59 | Suspected fraud
61 | Activity amount limit exceeded
62 | Restricted card (for example, in Country Exclusion table)
63 | Security violation
65 | Activity count limit exceeded
68 | Response received too late
75 | Allowable number of PIN - entry tries exceeded
76 | Unable to locate previous message (no match on Retrieval Reference number)
77 | Previous message located for a repeat or reversal, but repeat or reversal data are inconsistent with original message
78 | ’Blocked, first used’ - The transaction is from a new cardholder, and the card has not been properly unblocked.
80 | Visa transactions: credit issuer unavailable. Private label and check acceptance: Invalid date
81 | PIN cryptographic error found (error found by VIC security module during PIN decryption)
82 | Negative CAM, dCVV, iCVV, or CVV results
83 | Unable to verify PIN
85 | No reason to decline a request for account number verification, address verification, CVV2 verification, or a credit voucher or merchandise return
91 | Issuer unavailable or switch inoperative (STIP not applicable or available for this transaction)
92 | Destination cannot be found for routing
93 | Transaction cannot be completed, violation of law
94 | Duplicate Transmission
95 | Reconcile error
96 | System malfunction, System malfunction or certain field error conditions
B1 | Surcharge amount not permitted on Visa cards (U.S. acquirers only)
N0 | Force STIP
N3 | Cash service not available
N4 | Cashback request exceeds issuer limit
N7 | Decline for CVV2 failure
P2 | Invalid biller information
P5 | PIN Change/Unblock request declined
P6 | Unsafe PIN
Q1 | Card Authentication failed
R0 | Stop Payment Order
R1 | Revocation of Authorization Order
R3 | Revocation of All Authorizations Order
XA | Forward to issuer
XD | Forward to issuer
Z3 | Unable to go online
C101 | Error setting mandatory fields, TRANSACTION_TYPE is  empty! 
C102 | Invalid value for TRANSACTION_TYPE! Acceptable Value :  QUERY=1, SALES=2, AUTHORIZED=3, CAPTURE=4 
C103 | This transaction is not authorized, cannot proceed to be  captured. 
C104 | Error setting mandatory fields, MERCHANT_ACC_NO is  empty! 
C105 | Invalid MERCHANT_ACC_NO! Unable to find merchant with  provided MERCHANT_ACC_NO. 
C106 | The status of this MERCHANT_ACC_NO is suspended! All  transactions are not allowed temporary. Please check with  administrator for the status.
C107 | The status of this MERCHANT_ACC_NO is still pending and  not yet activated. Please check with administrator for the status. 
C108 | The status of this MERCHANT_ACC_NO is invalid! Please  check the merchant setting. 
C109 | The setting of this MERCHANT_ACC_NO does not allow the  requested transaction type. Please check the merchant setting. 
C110 | The setting of this MERCHANT_ACC_NO do not allow transaction request from this IP address. Please checks the  merchant allow IP setting. 
C111 | Error setting mandatory fields, AMOUNT is empty! 
C112 | Invalid value for AMOUNT 
C113 | Error setting mandatory fields, CARD_NO is empty! 
C114 | Error setting mandatory fields, CARD_EXP_MM is empty! 
C115 | Error setting mandatory fields, CARD_EXP_YY is empty! 
C116 | Error setting mandatory fields, CARD_CVC is empty! 
C117 | Invalid value for CARD_NO. CARD_NO must be numeric and  with valid length! 
C118 | Invalid value for CARD_EXP_MM. CARD_EXP_MM must be  numeric and with valid length! 
C119 | Invalid value for CARD_EXP_YY. CARD_EXP_YY must be  numeric and with valid length! 
C120 | Invalid value for CARD_CVC. CARD_CVC must be numeric  and with valid length! 
C121 | Invalid payment method. Please call bank to check Merchant  Settings. 
C122 | Amount has been over transaction limit for today. Please call  bank to check Merchant Settings. 
C123 | Transaction not permitted through this merchant type. Please  call bank to check Merchant Settings. 
C124 | Undefined Error. Error Code:1024
C301 | Error setting mandatory fields, TRANSACTION_ID is empty! TRANSACTION_ID is required for CAPTURE transaction  type  
C302 | Error setting mandatory fields, RETURN_URL is empty! 
C303 | Error setting mandatory fields, RESPONSE_TYPE is empty! 
C304 | Error setting mandatory fields, TXN_URL is Null for  RESPONSE_TYPE using HTTP! 
C305 | Invalid value for RESPONSE_TYPE for non-3D transaction!  Acceptable Value : HTTP, XML, PLAIN 
C306 | Error setting mandatory fields, TXN_SIGNATURE is empty! 
C307 | Invalid value for TXN_SIGNATURE! Computed signature  does not match one included in the request. 
C308 | Invalid format for TXN_SIGNATURE! TXN_SIGNATURE  must be length of 32, and in hexadecimal format. 
C309 | Unable to find the transaction record! 
C310 | MERCHANT_ACC_NO not matched with previous submitted  transaction request! To capture/query previous transaction,  please ensure the MERCHANT_ACC_NO is the same  MERCHANT_ACC_NO submitted during previous transaction. 
C311 | AMOUNT not matched with previous submitted transaction  request! To capture/query previous transaction, please ensure  the AMOUNT is the same AMOUNT submitted during  previous transaction. 
C312 | CUSTOMER_ID not matched with previous submitted  transaction request! To capture/query previous transaction, if  this field is being used, please ensure the CUSTOMER_ID is  the same CUSTOMER_ID submitted during previous  transaction. 
C313 | MERCHANT_TRANID not matched with previous submitted  transaction request! To capture/query previous transaction,  please ensure the MERCHANT_TRANID is the same  MERCHANT_TRANID submitted during previous transaction. 
C314 | Insecure mode for RETURN_URL. Please specify an URL  which uses HTTPS protocol! 
C315 | Insecure mode for TXN_URL. Please specify an URL which  uses HTTPS protocol! 
C401 | Error setting mandatory fields, CARD_HOLDER_NAME is  empty! 
C402 | Error setting mandatory fields, MERCHANT_TRANID is  empty! 
C403 | Duplicate MERCHANT_TRANID detected! Please ensure the  MERCHANT_TRANID is always unique.
C404 | Error setting mandatory fields, TXN_DESC is empty! 
C405 | Error setting mandatory fields for 3D transaction, MPI_CODE  is empty! 
C406 | Error setting mandatory fields for 3D transaction, MPI_CAVV  is empty! 
C407 | Error setting mandatory fields for 3D transaction,  MPI_CAVV_ALG is empty! 
C408 | Error setting mandatory fields for 3D transaction, MPI_ECI is empty! 
C409 | Error setting mandatory fields for 3D transaction, MPI_MSG is  empty! 
C501 | Error setting mandatory fields for fraud risk detection,  FR_HIGHRISK_EMAIL is empty! 
C502 | Error setting mandatory fields for fraud risk detection,  FR_HIGHRISK_COUNTRY is empty! 
C503 | Error setting mandatory fields for fraud risk detection,  FR_BILLING_ADDRESS is empty! 
C504 | Error setting mandatory fields for fraud risk detection,  FR_SHIPPING_ADDRESS is empty! 
C505 | Error setting mandatory fields for fraud risk detection,  FR_SHIPPING_COST is empty! 
C506 | Error setting mandatory fields for fraud risk detection,  CUSTOMER_IP is empty! 
C507 | Error setting mandatory fields for fraud risk detection,  FR_PURCHASE_HOUR is empty! 
C508 | Transaction was blocked due to fraud level exceeded threshold  limit.
C509 | Transaction was blocked due to blacklisted card detected. 
C601 | Unable to get connection to MPI Server! 
C602 | Time out occurred during communication with MPI Server! 
C603 | Unable to update MPI Ref. No in system. Please try again.
C604 | There was an error occurred during 3D authentication with  MPI. Please check logs for details. 
C605 | Invalid message or response received from MPI. Please try  again. 
C606 | MPI Settings are not configured correctly. Please check  MPI_HOST and MPI_PORT in system configuration. 
C607 | Error occurred when trying to display ACS Form in web  browser for 3D authentication. Please try again. 
C608 | Problem occurred on MPI side, cannot proceed to display ACS  Form. Please check MPI message or try again. 
C609 | Unable to locate back transaction to update system after 3-D  authentication process. Please try again.
C610 | Empty response received from MPI, please try again. 
C611 | MPI Code received is not allowed to proceed to process the  transaction. 
C612 | Transaction was aborted because 3-D authentication process is  not completed. 
C613 | Attempted duplicate submission of 3-D authentication result.  Please try with new transaction. 
C614 | MALL NAME is required for 3-D transaction. Please call bank  to check Merchant Settings. 
C615 | MALL URL is required for 3-D transaction. Please call bank to  check Merchant Settings. 
C616 | Invalid value for RESPONSE_TYPE for 3D transaction!  Acceptable Value : HTTP only
C801 | This MERCHANT_ACC_NO is not authorized to proceed with this transaction via website! Please check the merchant setting. 
C802 | This MERCHANT_ACC_NO is not authorized to proceed with  this transaction via batch upload! Please check the merchant  setting. 
C803 | Exception while query Payment Server! 
C804 | Exception while checking for fraud risk!
C999 | Internal Exception. Please call bank to report.
C988 | Server Time Out Exception.
C977 | Bank Connection Error! 
C966 | Reply from bank is empty/incorrect! 
C967 | Bank rejected transaction! 
C955 | Error when trying to insert transaction table. Transaction ID is  empty! 
C933 | Server interruption occurred during processing. Manual  checking required. Please inform Administrator. 
C935 | Cancel payment by customer. 
C937 | Insufficient point to redeem in cardholder's account. Please  enter another card number.
1 | Transaction could not be processed
2 | Transaction Declined - Contact Issuing Bank
3 | Transaction Declined- No reply from Bank
4 | Transaction Declined - Expired Card
5 | Transaction Declined - Insufficient credit
6 | Transaction Declined - Bank system error
7 | Payment Server Processing Error - Typically caused by invalid input data such as an invalid credit card number. Processing errors can also occur. (This is only relevant for Payment Servers that enforce the uniqueness of this field) Processing errors can also occur.
8 | Transaction Declined - Transaction Type Not Supported
9 | Bank Declined Transaction (Do not contact Bank)
A | Transaction Aborted
B | Transaction Blocked - Returned
C | Transaction Cancelled
D | Deferred Transaction
E | Transaction Declined - Refer to card issuer
F | 3D Secure Authentication Failed
I | Card Security Code Failed
L | Shopping Transaction Locked (This indicates that there is another transaction taking place using the same shopping transaction number)
N | Cardholder is not enrolled in 3D Secure (Authentication Only)
P | Transaction is Pending
R | Retry Limits Exceeded, Transaction Not Processed
T | Address Verification Failed
U | Card Security Code Failed
V | Address Verification and Card Security Code Failed
&nbsp;| **Virtual Account**
8041 | Virtual account registration error.
8042 | The tXid error during the vertual account registration.
8045 | requestVacctCustomerInquiryAPI is null.
9201 | Server is busy. Please kindly try again in few minutes.
9202 | Server is busy. Please kindly try again in few minutes.
9203 | Failed to generate virtual account. Pool is empty or reached maximum.
9204 | Server is busy. Please kindly try again in few minutes.
9205 | Failed to generate virtual account. Invalid Virtual Account.
9206 | Server is busy. Please kindly try again in few minutes.
9207 | Reference Number Maximum Length Exceed. [referenceNo] should have maximum 40 characters length.
9208 | Error in non-usage of criterion information.
9209 | the payment amount is too small.
9210 | Error in expiration date of deposit, expiration time for deposit, and inclusion of letters.
9211 | Expiration date and time for deposit length is not valid.
9212 | Error of check for merchant ID, payment method.
9213 | TB_TRANS_HISTORY registration error.
9214 | Failed in inquiring settlement interval.
9215 | Order number redundancy check (TB_MOID_VERIFY) updates error.
9216 | Virtual account failure ledger (TB_VACCT_FAIL) registration error.
9217 | Order number redundancy check (TB_MOID_VERIFY) delete error.
9218 | Virtual account ledger inquiry failure.
9219 | Server is busy. Please kindly try again in few minutes.
9220 | Server is busy. Please kindly try again in few minutes.
9221 | Error in non-usage of criterion information(VACCT_SET).
9222 | Error in non-usage of criterion information(VACCT_CONT).
9223 | Invalid customer id.
9224 | Error of check for customerId.
9225 | Invalid Merchant Token. Contact NICEPay for further information.
9226 | VacctNo is exceeded limit digit.
9227 | DB insert error.
9228 | Transaction not found.
9229 | Fix account accountType error.
9230 | Not exist customerId.
9231 | Data is null error.
9232 | iMid is exist.
9233 | vacctNo is duplicate.
9234 | customerId already exist.
9235 | Invalid customer name.
9236 | Try check date.
9237 | Invalid BankCd.
&nbsp;| **Cancel**
8061 | Full canceled error.
8062 | Partial cancled error.
8063 | The MID error during the full cancel.
8064 | The tXID error during the full cancel.
8065 | The MID error during the partial cancel.
8066 | The tXID error during the partial cancel.
8067 | The amount error during the partial cancel.
8090 | Net canceled error.
9301 | Invalid Cancel Type.
9302 | Server is busy. Please kindly try again in few minutes.
9303 | Server is busy. Please kindly try again in few minutes.
9304 | TB_TRANS_HISTORY update error.
9305 | Ledger card registration error.
9306 | Ledger partial cancel registration error.
9307 | Cards query error.
9308 | Database connection error.
9309 | Bank connection error.
9310 | TB_TRANS HISTORY registration error.
9311 | Transaction number generated error. 
9312 | No cancellation amount or cancellation amount includes the letter.
9313 | Partial cancellation is only possible mandiri.
9314 | Can not cancel your request transaction number.
9315 | Cancel Ledger duplicate registration error.
9316 | Bank code duplication errors.
9317 | Bank Mandiri is available once a partial canceled.
9318 | Virtual account can not request to cancel.
9319 | The amount you entered is larger than the amount you want to cancel.
9320 | Can not cancel the entire data already partially canceled.
9321 | Please fill in the requested amount greater than zero.
9322 | Merchant infomaition(CARD_BIN) query fail.
9323 | Merchant infomaition(Merchant_INFO) query fail.
9324 | MERCHANT_CARDINFO query error.
9325 | B_MID,B_TID query error.
9326 | It can not be canceled after purchase.
9327 | It can not be partial cancelation before purchase.
9328 | The information can not be canceled (Void Risk Check).
9329 | The information can not be partial cancelation (Void Risk Check).
9330 | Virtual account deposit has been completed can not be canceled.
9331 | The merchant can not be canceled.
9332 | The merchant can not be partial cancellation.
9333 | The merchant can not be cancellation. (Debt cancellation prevent restrictions)
9334 | Cancellation period exceeds(limit 90 days).
&nbsp;| **One Pass**
8200 | One Pass inquiry error.
8201 | OnePass Token Duplicate.
8202 | OnePass Invalid Amount.
&nbsp;| **CVS**
9501 | Server is busy. Please kindly try again in few minutes.
9502 | Server is busy. Please kindly try again in few minutes.
9503 | Failed to generate CVS Number. Pool is empty or reached maximum.
9504 | Server is busy. Please kindly try again in few minutes.
9505 | Failed to generate virtual account. Invalid CVS.
9506 | Server is busy. Please kindly try again in few minutes.
9507 | Reference Number Maximum Length Exceed. [referenceNo] should have maximum 40 characters length.
9508 | Error in non-usage of criterion information.
9509 | the payment amount is too small.
9510 | Error in expiration date of deposit, expiration time for deposit, and inclusion of letters.
9511 | Expiration date and time for deposit length is not valid.
9512 | Error of check for merchant ID, payment method.
9513 | TB_TRANS_HISTORY registration error.
9514 | Failed in inquiring settlement interval.
9515 | Order number redundancy check (TB_MOID_VERIFY) updates error.
9516 | CVS NUmber failure ledger (TB_CVS_FAIL) registration error.
9517 | Order number redundancy check (TB_MOID_VERIFY) delete error.
9518 | CVS ledger inquiry failure.
9519 | Server is busy. Please kindly try again in few minutes.
9520 | Server is busy. Please kindly try again in few minutes.
9521 | Error in non-usage of criterion information(CVS_SET).
9522 | Error in non-usage of criterion information(MITRA_CONT).
9523 | Invalid customer id.
9524 | Error of check for customerId.
9525 | Invalid Merchant Token. Contact NICEPay for further information.
9526 | CVS Number is exceeded limit digit.
9527 | DB insert error.
9528 | Transaction not found.
9529 | Fix account accountType error.
9530 | Not exist customerId.
9531 | Data is null error.
9532 | iMid is exist.
9533 | CVS Number is duplicate.
9534 | customerId already exist.
9535 | Invalid customer name.
9536 | Try check date.
&nbsp;| **EWALLET**
9750 | E-Wallet Generate ID Fail.
9751 | Invalid Parameter.
9752 | E-Wallet Payment Fail.
&nbsp;| **CLICKPAY** 
9801 | Internal system error
9802 | Invalid parameter
9803 | User registration error
9804 | Invalid Token
9805 | Invalid Card Number
9806 | Transaction Payment Fail
9807 | Transaction Reversal Fail
9808 | TXID is duplicate
9809 | Failed in inquiring settlement interval
9810 | Other error


## CIMB Error Code
Value | Description
--------- | ---------
0 | APPROVED OR COMPLETED 
1001 | Error setting mandatory fields, TRANSACTION_TYPE is  empty! 
1002 | Invalid value for TRANSACTION_TYPE! Acceptable Value :  QUERY=1, SALES=2, AUTHORIZED=3, CAPTURE=4 
1003 | This transaction is not authorized, cannot proceed to be  captured. 
1004 | Error setting mandatory fields, MERCHANT_ACC_NO is  empty! 
1005 | Invalid MERCHANT_ACC_NO! Unable to find merchant with  provided MERCHANT_ACC_NO. 
1006 | The status of this MERCHANT_ACC_NO is suspended! All  transactions are not allowed temporary. Please check with  administrator for the status.
1007 | The status of this MERCHANT_ACC_NO is still pending and  not yet activated. Please check with administrator for the status. 
1008 | The status of this MERCHANT_ACC_NO is invalid! Please  check the merchant setting. 
1009 | The setting of this MERCHANT_ACC_NO does not allow the  requested transaction type. Please check the merchant setting. 
1010 | The setting of this MERCHANT_ACC_NO do not allow transaction request from this IP address. Please checks the  merchant allow IP setting. 
1011 | Error setting mandatory fields, AMOUNT is empty! 
1012 | Invalid value for AMOUNT 
1013 | Error setting mandatory fields, CARD_NO is empty! 
1014 | Error setting mandatory fields, CARD_EXP_MM is empty! 
1015 | Error setting mandatory fields, CARD_EXP_YY is empty! 
1016 | Error setting mandatory fields, CARD_CVC is empty! 
1017 | Invalid value for CARD_NO. CARD_NO must be numeric and  with valid length! 
1018 | Invalid value for CARD_EXP_MM. CARD_EXP_MM must be  numeric and with valid length! 
1019 | Invalid value for CARD_EXP_YY. CARD_EXP_YY must be  numeric and with valid length! 
1020 | Invalid value for CARD_CVC. CARD_CVC must be numeric  and with valid length! 
1021 | Invalid payment method. Please call bank to check Merchant  Settings. 
1022 | Amount has been over transaction limit for today. Please call  bank to check Merchant Settings. 
1023 | Transaction not permitted through this merchant type. Please  call bank to check Merchant Settings. 
1024 | Undefined Error. Error Code:1024
3001 | Error setting mandatory fields, TRANSACTION_ID is empty! TRANSACTION_ID is required for CAPTURE transaction  type  
3002 | Error setting mandatory fields, RETURN_URL is empty! 
3003 | Error setting mandatory fields, RESPONSE_TYPE is empty! 
3004 | Error setting mandatory fields, TXN_URL is Null for  RESPONSE_TYPE using HTTP! 
3005 | Invalid value for RESPONSE_TYPE for non-3D transaction!  Acceptable Value : HTTP, XML, PLAIN 
3006 | Error setting mandatory fields, TXN_SIGNATURE is empty! 
3007 | Invalid value for TXN_SIGNATURE! Computed signature  does not match one included in the request. 
3008 | Invalid format for TXN_SIGNATURE! TXN_SIGNATURE  must be length of 32, and in hexadecimal format. 
3009 | Unable to find the transaction record! 
3010 | MERCHANT_ACC_NO not matched with previous submitted  transaction request! To capture/query previous transaction,  please ensure the MERCHANT_ACC_NO is the same  MERCHANT_ACC_NO submitted during previous transaction. 
3011 | AMOUNT not matched with previous submitted transaction  request! To capture/query previous transaction, please ensure  the AMOUNT is the same AMOUNT submitted during  previous transaction. 
3012 | CUSTOMER_ID not matched with previous submitted  transaction request! To capture/query previous transaction, if  this field is being used, please ensure the CUSTOMER_ID is  the same CUSTOMER_ID submitted during previous  transaction. 
3013 | MERCHANT_TRANID not matched with previous submitted  transaction request! To capture/query previous transaction,  please ensure the MERCHANT_TRANID is the same  MERCHANT_TRANID submitted during previous transaction. 
3014 | Insecure mode for RETURN_URL. Please specify an URL  which uses HTTPS protocol! 
3015 | Insecure mode for TXN_URL. Please specify an URL which  uses HTTPS protocol! 
4001 | Error setting mandatory fields, CARD_HOLDER_NAME is  empty! 
4002 | Error setting mandatory fields, MERCHANT_TRANID is  empty! 
4003 | Duplicate MERCHANT_TRANID detected! Please ensure the  MERCHANT_TRANID is always unique.
4004 | Error setting mandatory fields, TXN_DESC is empty! 
4005 | Error setting mandatory fields for 3D transaction, MPI_CODE  is empty! 
4006 | Error setting mandatory fields for 3D transaction, MPI_CAVV  is empty! 
4007 | Error setting mandatory fields for 3D transaction,  MPI_CAVV_ALG is empty! 
4008 | Error setting mandatory fields for 3D transaction, MPI_ECI is empty! 
4009 | Error setting mandatory fields for 3D transaction, MPI_MSG is  empty! 
5001 | Error setting mandatory fields for fraud risk detection,  FR_HIGHRISK_EMAIL is empty! 
5002 | Error setting mandatory fields for fraud risk detection,  FR_HIGHRISK_COUNTRY is empty! 
5003 | Error setting mandatory fields for fraud risk detection,  FR_BILLING_ADDRESS is empty! 
5004 | Error setting mandatory fields for fraud risk detection,  FR_SHIPPING_ADDRESS is empty! 
5005 | Error setting mandatory fields for fraud risk detection,  FR_SHIPPING_COST is empty! 
5006 | Error setting mandatory fields for fraud risk detection,  CUSTOMER_IP is empty! 
5007 | Error setting mandatory fields for fraud risk detection,  FR_PURCHASE_HOUR is empty! 
5008 | Transaction was blocked due to fraud level exceeded threshold  limit.
5009 | Transaction was blocked due to blacklisted card detected. 
6001 | Unable to get connection to MPI Server! 
6002 | Time out occurred during communication with MPI Server! 
6003 | Unable to update MPI Ref. No in system. Please try again.
6004 | There was an error occurred during 3D authentication with  MPI. Please check logs for details. 
6005 | Invalid message or response received from MPI. Please try  again. 
6006 | MPI Settings are not configured correctly. Please check  MPI_HOST and MPI_PORT in system configuration. 
6007 | Error occurred when trying to display ACS Form in web  browser for 3D authentication. Please try again. 
6008 | Problem occurred on MPI side, cannot proceed to display ACS  Form. Please check MPI message or try again. 
6009 | Unable to locate back transaction to update system after 3-D  authentication process. Please try again.
6010 | Empty response received from MPI, please try again. 
6011 | MPI Code received is not allowed to proceed to process the  transaction. 
6012 | Transaction was aborted because 3-D authentication process is  not completed. 
6013 | Attempted duplicate submission of 3-D authentication result.  Please try with new transaction. 
6014 | MALL NAME is required for 3-D transaction. Please call bank  to check Merchant Settings. 
6015 | MALL URL is required for 3-D transaction. Please call bank to  check Merchant Settings. 
6016 | Invalid value for RESPONSE_TYPE for 3D transaction!  Acceptable Value : HTTP only
8001 | This MERCHANT_ACC_NO is not authorized to proceed with this transaction via website! Please check the merchant setting. 
8002 | This MERCHANT_ACC_NO is not authorized to proceed with  this transaction via batch upload! Please check the merchant  setting. 
8003 | Exception while query Payment Server! 
8004 | Exception while checking for fraud risk!
9999 | Internal Exception. Please call bank to report.
9988 | Server Time Out Exception.
9977 | Bank Connection Error! 
9966 | Reply from bank is empty/incorrect! 
9967 | Bank rejected transaction! 
9955 | Error when trying to insert transaction table. Transaction ID is  empty! 
9933 | Server interruption occurred during processing. Manual  checking required. Please inform Administrator. 
9935 | Cancel payment by customer. 
9937 | Insufficient point to redeem in cardholder's account. Please  enter another card number.
