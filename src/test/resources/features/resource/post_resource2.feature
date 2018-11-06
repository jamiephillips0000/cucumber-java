Feature: Add a Resource

  Scenario: A POST request is sent to create a Resource.
    When a "POST" request is prepared to be sent to "/api/v1/resource"
    And the "Content-Type" attribute of the request header is "application/json"
    And the content is :
    """
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
    """
    And the request is sent
    Then the HTTP status code is 201
    And the "Content-Type" attribute of the response header is "application/json;charset=UTF-8"
    And the message is persisted and returned in full with an ID
    
    
    
    Scenario: A POST request is sent to create a Resource and there is not enough money to pay for the transaction.
    When a "POST" request is prepared to be sent to "/api/v1/resource"
    And the "Content-Type" attribute of the request header is "application/json"
    And the content is :
    """
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "190.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
    """
    And the message is sent and rejected with an error message "Amount left after sender charges has been chanrged cannot be less than zero"
    
    
    
    
    
    

  Scenario: A POST request is sent with incorrect value '$.type'
    When a "POST" request is prepared to be sent to "/api/v1/resource"
    And the "Content-Type" attribute of the request header is "application/json"
    And the content is :
    """
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
    """
    

	And the attribute "$.type" is incorrectly set to "ayment"
    And the request is sent and fails and error message contains "type must be equal 'Payment' and not 'ayment'"
    And the attribute "$.type" is not present
    And the request is sent and fails and the error code is "400"
    And the attribute "$.type" is incorrectly set to ""
    And the request is sent and fails and the error code is "400"
    
    
    Scenario: A POST request is sent with incorrect value '$.version'
    When a "POST" request is prepared to be sent to "/api/v1/resource"
    And the "Content-Type" attribute of the request header is "application/json"
    And the content is :
    """
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
    """
    
    And the attribute "$.version" is not present
	And the request is sent and fails and the error code is "400"
    And the attribute "$.version" is incorrectly set to ""
	And the request is sent and fails and the error code is "400"
	
	Scenario: A POST request is sent with incorrect value '$.organization'
    When a "POST" request is prepared to be sent to "/api/v1/resource"
    And the "Content-Type" attribute of the request header is "application/json"
    And the content is :
    """
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
    """
	
	
	And the attribute "$.organisation_id" is incorrectly set to ""
	And the request is sent and fails and the error code is "400"
    And the attribute "$.organisation_id" is not present
	And the request is sent and fails and the error code is "400"
	
Scenario: A POST request is sent with incorrect value '$.attributes/amount'
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.amount" is incorrectly set to "1A"
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.amount" is incorrectly set to "-1"
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.amount" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.amount" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
    
    
    Scenario: A POST request is sent with incorrect value $.attributes.currency, $.attriutes.charges_information.receiver_charges_currency $.attriutes.charges_information.sender_charges.currency
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.currency" is incorrectly set to "US"
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.currency" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.currency" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.currency" is incorrectly set to "EUR"
And the request is sent and fails and error message contains "$.attriutes.currency 'EUR is not one of the known currencies GBP,USD"

And the attribute "$.attributes.charges_information.receiver_charges_currency" is incorrectly set to "US"
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.receiver_charges_currency" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.receiver_charges_currency" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.receiver_charges_currency" is incorrectly set to "EUR"
And the request is sent and fails and error message contains "$.attriutes.charges_information.receiver_charges_currencyEUR is not one of the known currencies GBP,USD"

And the attribute "$.attributes.charges_information.sender_charges.[0].currency" is incorrectly set to "US"
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.sender_charges.[0].currency" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.sender_charges.[0].currency" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.sender_charges.[0].currency" is incorrectly set to "EUR"
And the request is sent and fails and error message contains "$.attributes.charges_information.sender_charges.[0].currencyEUR is not one of the known currencies GBP,USD"

And the attribute "$.attributes.charges_information.sender_charges.[1].currency" is incorrectly set to "US"
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.sender_charges.[1].currency" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.sender_charges.[1].currency" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.sender_charges.[1].currency" is incorrectly set to "EUR"
And the request is sent and fails and error message contains " $.attributes.charges_information.sender_charges.[1].currency'EUR is not one of the known currencies GBP,USD"

Scenario: A POST request is sent with incorrect value $.attributes.end_to_end_reference
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.end_to_end_reference" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.end_to_end_reference" is incorrectly set to ""
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $.attributes.numeric_reference
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.numeric_reference" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.numeric_reference" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.numeric_reference" is incorrectly set to "123ABC"
And the request is sent and fails and error message contains "$.attributes.numeric_reference must be a number and not '123ABC'"

Scenario: A POST request is sent with incorrect value $.payment_id
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.payment_id" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.payment_id" is incorrectly set to ""
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $.payment_purpose
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.payment_purpose" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.payment_purpose" is incorrectly set to ""
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $attributes.payment_scheme
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.payment_scheme" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.payment_scheme" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.payment_scheme" is incorrectly set to "XYZ"
And the request is sent and fails and error message contains "$.attriutes.payment_schemes'XYZ is not one of the known payment schemes FPS"

Scenario: A POST request is sent with incorrect value $attributes.payment_type
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.payment_type" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.payment_type" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.payment_type" is incorrectly set to "XYZ"
And the request is sent and fails and error message contains "$.attriutes.payment_type'XYZ is not one of the known payment schemes Credit"


    
    
Scenario: A POST request is sent with incorrect value $attributes.processing_date
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.processing_date" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.processing_date" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.processing_date" is incorrectly set to "2118-01-01"
And the request is sent and fails and the error code is "400"    
        
        
Scenario: A POST request is sent with incorrect value $attributes.reference
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.reference" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.reference" is incorrectly set to ""
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $attributes.scheme_payment_sub_type
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.scheme_payment_sub_type" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.scheme_payment_sub_type" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.scheme_payment_sub_type" is incorrectly set to "XYZ"
And the request is sent and fails and error message contains "$.attriutes.scheme_payment_sub_type'XYZ is not one of the known scheme payment sub types InternetBanking"

Scenario: A POST request is sent with incorrect value $attributes.scheme_payment_type
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.scheme_payment_type" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.scheme_payment_type" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.scheme_payment_type" is incorrectly set to "XYZ"
And the request is sent and fails and error message contains "$.attriutes.scheme_payment_type'XYZ is not one of the known scheme payment types ImmediatePayment"

Scenario: A POST request is sent with incorrect value $.attributes.beneficiary_party.account_name
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.beneficiary_party.account_name" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.beneficiary_party.account_name" is incorrectly set to ""
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.beneficiary_party.account_number
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.beneficiary_party.account_name" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.beneficiary_party.account_name" is incorrectly set to ""
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $.attributes.beneficiary_party.account_number_code
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.beneficiary_party.account_number_code" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.beneficiary_party.account_number_code" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.beneficiary_party.account_number_code" is incorrectly set to "XYZ"
And the request is sent and fails and error message contains "$.attriutes.beneficiary_party.account_number_code'XYZ is not one of the known scheme payment types BBAN,IBAN"


Scenario: A POST request is sent with incorrect value $.attributes.beneficiary_party.account_type
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.beneficiary_party.account_type" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.beneficiary_party.account_type" is incorrectly set to "-1"
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.beneficiary_party.address
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.beneficiary_party.address" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.beneficiary_party.address" is incorrectly set to ""
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $.attributes.beneficiary_party.name
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.beneficiary_party.name" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.beneficiary_party.name" is incorrectly set to ""  
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $.attributes.beneficiary_party.bank_id 
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.beneficiary_party.bank_id" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.beneficiary_party.bank_id" is incorrectly set to ""  
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.beneficiary_party.bank_id_code
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.beneficiary_party.bank_id_code" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.beneficiary_party.bank_id_code" is incorrectly set to ""  
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $.attributes.debtor_party.account_name
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.debtor_party.account_name" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.debtor_party.account_name" is incorrectly set to ""
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.debtor_party.account_number
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.debtor_party.account_name" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.debtor_party.account_name" is incorrectly set to ""
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $.attributes.debtor_party.account_number_code
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.debtor_party.account_number_code" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.debtor_party.account_number_code" is incorrectly set to ""
And the request is sent and fails and the error code is "400"




Scenario: A POST request is sent with incorrect value $.attributes.debtor_party.address
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.debtor_party.address" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.debtor_party.address" is incorrectly set to ""
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $.attributes.debtor_party.name
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.debtor_party.name" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.debtor_party.name" is incorrectly set to ""  
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $.attributes.debtor_party.bank_id 
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.debtor_party.bank_id" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.debtor_party.bank_id" is incorrectly set to ""  
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.debtor_party.bank_id_code
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.debtor_party.bank_id_code" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.debtor_party.bank_id_code" is incorrectly set to ""  
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.sponsor_party.account_name
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.debtor_party.account_name" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.debtor_party.account_name" is incorrectly set to ""
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.sponsor_party.account_number
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.debtor_party.account_name" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.debtor_party.account_name" is incorrectly set to ""
And the request is sent and fails and the error code is "400"





Scenario: A POST request is sent with incorrect value $.attributes.sponsor_party.bank_id 
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.debtor_party.bank_id" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.debtor_party.bank_id" is incorrectly set to ""  
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.sponsor_party.bank_id_code
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.debtor_party.bank_id_code" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.debtor_party.bank_id_code" is incorrectly set to ""  
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.fx.contract_reference
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.fx.contract_reference" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.fx.contract_reference" is incorrectly set to ""
And the request is sent and fails and the error code is "400"


Scenario: A POST request is sent with incorrect value $.attributes.fx.exchange_rate
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.fx.exchange_rate" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.fx.exchange_rate" is incorrectly set to ""
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.fx.original_amount
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.fx.original_amount" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.fx.original_amount" is incorrectly set to ""
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.charges_information.bearer_code
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.charges_information.bearer_code" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.bearer_code" is incorrectly set to ""
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.bearer_code" is incorrectly set to "XYZ"
And the request is sent and fails and the error code is "400"



Scenario: A POST request is sent with incorrect value $.attributes.charges_information.receiver_charges_amount
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}

"""	
And the attribute "$.attributes.charges_information.receiver_charges_amount" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.receiver_charges_amount" is incorrectly set to ""
And the request is sent and fails and the error code is "400"

Scenario: A POST request is sent with incorrect value $.attributes.charges_information.receiver_charges_currency
When a "POST" request is prepared to be sent to "/api/v1/resource"
And the "Content-Type" attribute of the request header is "application/json"
And the content is :
"""
    {"type": "Payment","version": 0,"organisation_id": "743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb",
	"attributes": {
		"amount": "100.21",
		"currency": "GBP",
		"end_to_end_reference": "Wil piano Jan",
		"numeric_reference": "1002001",
		"payment_id": "123456789012345678",
		"payment_purpose": "Paying for goods/services",
		"payment_scheme": "FPS",
		"payment_type": "Credit",
		"processing_date": "2017-01-18",
		"reference": "Payment for Em's piano lessons",
		"scheme_payment_sub_type": "InternetBanking",
		"scheme_payment_type": "ImmediatePayment",
		"beneficiary_party": {"account_name": "W Owens","account_number": "31926819","account_number_code": "BBAN","account_type": 0,"address": "1 The Beneficiary Localtown SE2","bank_id": "403000","bank_id_code": "GBDSC","name": "Wilfred Jeremiah Owens"},
		"charges_information": {"bearer_code": "SHAR","sender_charges": [{"amount": "5.00","currency": "GBP"}, {"amount": "10.00","currency": "USD"}],"receiver_charges_amount": "1.00","receiver_charges_currency": "USD"},
		"debtor_party": {"account_name": "EJ Brown Black","account_number": "GB29XABC10161234567801","account_number_code": "IBAN","address": "10 Debtor Crescent Sourcetown NE1","bank_id": "203301","bank_id_code": "GBDSC","name": "Emelia Jane Brown"},
		"fx": {"contract_reference": "FX123","exchange_rate": "2.00000","original_amount": "200.42","original_currency": "USD"},
		"sponsor_party": {"account_number": "56781234","bank_id": "123123","bank_id_code": "GBDSC"}
		}
	}
"""	
And the attribute "$.attributes.charges_information.receiver_charges_currency" is not present
And the request is sent and fails and the error code is "400"
And the attribute "$.attributes.charges_information.receiver_charges_currency" is incorrectly set to ""
And the request is sent and fails and the error code is "400"


















