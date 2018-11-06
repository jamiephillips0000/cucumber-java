$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/resource/post_resource2.feature");
formatter.feature({
  "line": 1,
  "name": "Add a Resource",
  "description": "",
  "id": "add-a-resource",
  "keyword": "Feature"
});
formatter.before({
  "duration": 40286500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "A POST request is sent to create a Resource.",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-to-create-a-resource.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 7,
    "value": "{\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\"attributes\": {\n\"amount\": \"100.21\",\n\"currency\": \"GBP\",\n\"end_to_end_reference\": \"Wil piano Jan\",\n\"numeric_reference\": \"1002001\",\n\"payment_id\": \"123456789012345678\",\n\"payment_purpose\": \"Paying for goods/services\",\n\"payment_scheme\": \"FPS\",\n\"payment_type\": \"Credit\",\n\"processing_date\": \"2017-01-18\",\n\"reference\": \"Payment for Em\u0027s piano lessons\",\n\"scheme_payment_sub_type\": \"InternetBanking\",\n\"scheme_payment_type\": \"ImmediatePayment\",\n\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n}\n}"
  }
});
formatter.step({
  "line": 30,
  "name": "the request is sent",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the HTTP status code is 201",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "the \"Content-Type\" attribute of the response header is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the message is persisted and returned in full with an ID",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 130046435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 120264,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 191481,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_request_is_sent()"
});
formatter.result({
  "duration": 142450619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 24
    }
  ],
  "location": "ResourceSteps.the_HTTP_status_code_is(int)"
});
formatter.result({
  "duration": 9106962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json;charset\u003dUTF-8",
      "offset": 56
    }
  ],
  "location": "ResourceSteps.the_attribute_of_the_response_header_is(String,String)"
});
formatter.result({
  "duration": 2377598,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_message_is_persisted_and_returned_in_full_with_an_ID()"
});
formatter.result({
  "duration": 283968262,
  "status": "passed"
});
formatter.before({
  "duration": 18007110,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "A POST request is sent to create a Resource and there is not enough money to pay for the transaction.",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-to-create-a-resource-and-there-is-not-enough-money-to-pay-for-the-transaction.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 41,
    "value": "{\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\"attributes\": {\n\"amount\": \"100\",\n\"currency\": \"GBP\",\n\"end_to_end_reference\": \"Wil piano Jan\",\n\"numeric_reference\": \"1002001\",\n\"payment_id\": \"123456789012345678\",\n\"payment_purpose\": \"Paying for goods/services\",\n\"payment_scheme\": \"FPS\",\n\"payment_type\": \"Credit\",\n\"processing_date\": \"2017-01-18\",\n\"reference\": \"Payment for Em\u0027s piano lessons\",\n\"scheme_payment_sub_type\": \"InternetBanking\",\n\"scheme_payment_type\": \"ImmediatePayment\",\n\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"190.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200\",\"original_currency\": \"USD\"},\n\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n}\n}"
  }
});
formatter.step({
  "line": 64,
  "name": "the message is sent and rejected with an error message \"Amount left after sender charges has been chanrged cannot be less than zero\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 160207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 74074,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 53806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amount left after sender charges has been chanrged cannot be less than zero",
      "offset": 56
    }
  ],
  "location": "ResourceSteps.the_message_is_sent_and_rejected_with_an_error_message(String)"
});
formatter.result({
  "duration": 58686088,
  "status": "passed"
});
formatter.before({
  "duration": 20751086,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "A POST request is sent with incorrect value \u0027$.type\u0027",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-\u0027$.type\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 76,
    "value": "{\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\"attributes\": {\n\"amount\": \"100.21\",\n\"currency\": \"GBP\",\n\"end_to_end_reference\": \"Wil piano Jan\",\n\"numeric_reference\": \"1002001\",\n\"payment_id\": \"123456789012345678\",\n\"payment_purpose\": \"Paying for goods/services\",\n\"payment_scheme\": \"FPS\",\n\"payment_type\": \"Credit\",\n\"processing_date\": \"2017-01-18\",\n\"reference\": \"Payment for Em\u0027s piano lessons\",\n\"scheme_payment_sub_type\": \"InternetBanking\",\n\"scheme_payment_type\": \"ImmediatePayment\",\n\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n}\n}"
  }
});
formatter.step({
  "line": 101,
  "name": "the attribute \"$.type\" is incorrectly set to \"ayment\"",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the request is sent and fails and error message contains \"type must be equal \u0027Payment\u0027 and not \u0027ayment\u0027\"",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the attribute \"$.type\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the attribute \"$.type\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 242845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 89014,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 60571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.type",
      "offset": 15
    },
    {
      "val": "ayment",
      "offset": 46
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 1972244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type must be equal \u0027Payment\u0027 and not \u0027ayment\u0027",
      "offset": 58
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_error_message_contains(String)"
});
formatter.result({
  "duration": 61346138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.type",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 610086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4493915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.type",
      "offset": 15
    },
    {
      "val": "",
      "offset": 46
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 453238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 23818436,
  "status": "passed"
});
formatter.before({
  "duration": 16025088,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "A POST request is sent with incorrect value \u0027$.version\u0027",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-\u0027$.version\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 110,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 113,
    "value": "{\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\"attributes\": {\n\"amount\": \"100.21\",\n\"currency\": \"GBP\",\n\"end_to_end_reference\": \"Wil piano Jan\",\n\"numeric_reference\": \"1002001\",\n\"payment_id\": \"123456789012345678\",\n\"payment_purpose\": \"Paying for goods/services\",\n\"payment_scheme\": \"FPS\",\n\"payment_type\": \"Credit\",\n\"processing_date\": \"2017-01-18\",\n\"reference\": \"Payment for Em\u0027s piano lessons\",\n\"scheme_payment_sub_type\": \"InternetBanking\",\n\"scheme_payment_type\": \"ImmediatePayment\",\n\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n}\n}"
  }
});
formatter.step({
  "line": 137,
  "name": "the attribute \"$.version\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the attribute \"$.version\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 212023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 69519,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 60837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.version",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 482269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 9497162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.version",
      "offset": 15
    },
    {
      "val": "",
      "offset": 49
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 474159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 45366651,
  "status": "passed"
});
formatter.before({
  "duration": 16843936,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "A POST request is sent with incorrect value \u0027$.organization\u0027",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-\u0027$.organization\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 143,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 144,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 146,
    "value": "{\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\"attributes\": {\n\"amount\": \"100.21\",\n\"currency\": \"GBP\",\n\"end_to_end_reference\": \"Wil piano Jan\",\n\"numeric_reference\": \"1002001\",\n\"payment_id\": \"123456789012345678\",\n\"payment_purpose\": \"Paying for goods/services\",\n\"payment_scheme\": \"FPS\",\n\"payment_type\": \"Credit\",\n\"processing_date\": \"2017-01-18\",\n\"reference\": \"Payment for Em\u0027s piano lessons\",\n\"scheme_payment_sub_type\": \"InternetBanking\",\n\"scheme_payment_type\": \"ImmediatePayment\",\n\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n}\n}"
  }
});
formatter.step({
  "line": 171,
  "name": "the attribute \"$.organisation_id\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "the attribute \"$.organisation_id\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 229114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 70230,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 72118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.organisation_id",
      "offset": 15
    },
    {
      "val": "",
      "offset": 57
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 444536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 49901641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.organisation_id",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 417824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 3375776,
  "status": "passed"
});
formatter.before({
  "duration": 16959168,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "A POST request is sent with incorrect value \u0027$.attributes/amount\u0027",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-\u0027$.attributes/amount\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 177,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 180,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 203,
  "name": "the attribute \"$.attributes.amount\" is incorrectly set to \"1A\"",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "the attribute \"$.attributes.amount\" is incorrectly set to \"-1\"",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "the attribute \"$.attributes.amount\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "the attribute \"$.attributes.amount\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 212040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 74136,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 48029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.amount",
      "offset": 15
    },
    {
      "val": "1A",
      "offset": 59
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 441375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 12282104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.amount",
      "offset": 15
    },
    {
      "val": "-1",
      "offset": 59
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 437342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 44319487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.amount",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 398516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 2941082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.amount",
      "offset": 15
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 373103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 2824969,
  "status": "passed"
});
formatter.before({
  "duration": 17403451,
  "status": "passed"
});
formatter.scenario({
  "line": 213,
  "name": "A POST request is sent with incorrect value $.attributes.currency, $.attriutes.charges_information.receiver_charges_currency $.attriutes.charges_information.sender_charges.currency",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.currency,-$.attriutes.charges-information.receiver-charges-currency-$.attriutes.charges-information.sender-charges.currency",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 214,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 217,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 240,
  "name": "the attribute \"$.attributes.currency\" is incorrectly set to \"US\"",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "the attribute \"$.attributes.currency\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "the attribute \"$.attributes.currency\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "the attribute \"$.attributes.currency\" is incorrectly set to \"EUR\"",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "the request is sent and fails and error message contains \"$.attriutes.currency \u0027EUR is not one of the known currencies GBP,USD\"",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "the attribute \"$.attributes.charges_information.receiver_charges_currency\" is incorrectly set to \"US\"",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "the attribute \"$.attributes.charges_information.receiver_charges_currency\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "the attribute \"$.attributes.charges_information.receiver_charges_currency\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "the attribute \"$.attributes.charges_information.receiver_charges_currency\" is incorrectly set to \"EUR\"",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "the request is sent and fails and error message contains \"$.attriutes.charges_information.receiver_charges_currencyEUR is not one of the known currencies GBP,USD\"",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "the attribute \"$.attributes.charges_information.sender_charges.[0].currency\" is incorrectly set to \"US\"",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "the attribute \"$.attributes.charges_information.sender_charges.[0].currency\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "the attribute \"$.attributes.charges_information.sender_charges.[0].currency\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "the attribute \"$.attributes.charges_information.sender_charges.[0].currency\" is incorrectly set to \"EUR\"",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "the request is sent and fails and error message contains \"$.attributes.charges_information.sender_charges.[0].currencyEUR is not one of the known currencies GBP,USD\"",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "the attribute \"$.attributes.charges_information.sender_charges.[1].currency\" is incorrectly set to \"US\"",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "the attribute \"$.attributes.charges_information.sender_charges.[1].currency\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "the attribute \"$.attributes.charges_information.sender_charges.[1].currency\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "the attribute \"$.attributes.charges_information.sender_charges.[1].currency\" is incorrectly set to \"EUR\"",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "the request is sent and fails and error message contains \" $.attributes.charges_information.sender_charges.[1].currency\u0027EUR is not one of the known currencies GBP,USD\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 268345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 78779,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 62972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.currency",
      "offset": 15
    },
    {
      "val": "US",
      "offset": 61
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 377329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 49392295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.currency",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 336763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 3051089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.currency",
      "offset": 15
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 439573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4527144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.currency",
      "offset": 15
    },
    {
      "val": "EUR",
      "offset": 61
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 376730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attriutes.currency \u0027EUR is not one of the known currencies GBP,USD",
      "offset": 58
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_error_message_contains(String)"
});
formatter.result({
  "duration": 5785362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.receiver_charges_currency",
      "offset": 15
    },
    {
      "val": "US",
      "offset": 98
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 467645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 5946676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.receiver_charges_currency",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 334765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 3518604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.receiver_charges_currency",
      "offset": 15
    },
    {
      "val": "",
      "offset": 98
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 486385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4659971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.receiver_charges_currency",
      "offset": 15
    },
    {
      "val": "EUR",
      "offset": 98
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 402760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attriutes.charges_information.receiver_charges_currencyEUR is not one of the known currencies GBP,USD",
      "offset": 58
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_error_message_contains(String)"
});
formatter.result({
  "duration": 4413124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.sender_charges.[0].currency",
      "offset": 15
    },
    {
      "val": "US",
      "offset": 100
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 714310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 6217914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.sender_charges.[0].currency",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 421163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 3574290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.sender_charges.[0].currency",
      "offset": 15
    },
    {
      "val": "",
      "offset": 100
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 513312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4931458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.sender_charges.[0].currency",
      "offset": 15
    },
    {
      "val": "EUR",
      "offset": 100
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 913061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.sender_charges.[0].currencyEUR is not one of the known currencies GBP,USD",
      "offset": 58
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_error_message_contains(String)"
});
formatter.result({
  "duration": 4373484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.sender_charges.[1].currency",
      "offset": 15
    },
    {
      "val": "US",
      "offset": 100
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 590639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 5321031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.sender_charges.[1].currency",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 690711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4595030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.sender_charges.[1].currency",
      "offset": 15
    },
    {
      "val": "",
      "offset": 100
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 511286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4673371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.sender_charges.[1].currency",
      "offset": 15
    },
    {
      "val": "EUR",
      "offset": 100
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 489822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " $.attributes.charges_information.sender_charges.[1].currency\u0027EUR is not one of the known currencies GBP,USD",
      "offset": 58
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_error_message_contains(String)"
});
formatter.result({
  "duration": 3742850,
  "status": "passed"
});
formatter.before({
  "duration": 18156501,
  "status": "passed"
});
formatter.scenario({
  "line": 276,
  "name": "A POST request is sent with incorrect value $.attributes.end_to_end_reference",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.end-to-end-reference",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 277,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 278,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 280,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 303,
  "name": "the attribute \"$.attributes.end_to_end_reference\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "the attribute \"$.attributes.end_to_end_reference\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 218849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 63115,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 92344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.end_to_end_reference",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 483725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 9742545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.end_to_end_reference",
      "offset": 15
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 382397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 43386986,
  "status": "passed"
});
formatter.before({
  "duration": 13873317,
  "status": "passed"
});
formatter.scenario({
  "line": 309,
  "name": "A POST request is sent with incorrect value $.attributes.numeric_reference",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.numeric-reference",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 310,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 311,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 313,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 336,
  "name": "the attribute \"$.attributes.numeric_reference\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "the attribute \"$.attributes.numeric_reference\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "the attribute \"$.attributes.numeric_reference\" is incorrectly set to \"123ABC\"",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "the request is sent and fails and error message contains \"$.attributes.numeric_reference must be a number and not \u0027123ABC\u0027\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 194525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 65798,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 52682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.numeric_reference",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 542152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 9370235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.numeric_reference",
      "offset": 15
    },
    {
      "val": "",
      "offset": 70
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 460967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 42478144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.numeric_reference",
      "offset": 15
    },
    {
      "val": "123ABC",
      "offset": 70
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 365700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.numeric_reference must be a number and not \u0027123ABC\u0027",
      "offset": 58
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_error_message_contains(String)"
});
formatter.result({
  "duration": 3579332,
  "status": "passed"
});
formatter.before({
  "duration": 19723836,
  "status": "passed"
});
formatter.scenario({
  "line": 343,
  "name": "A POST request is sent with incorrect value $.payment_id",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.payment-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 344,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 345,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 347,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 370,
  "name": "the attribute \"$.attributes.payment_id\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "the attribute \"$.attributes.payment_id\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 228139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 78220,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 55501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.payment_id",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 348160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 7780609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.payment_id",
      "offset": 15
    },
    {
      "val": "",
      "offset": 63
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 389915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 45275805,
  "status": "passed"
});
formatter.before({
  "duration": 11641223,
  "status": "passed"
});
formatter.scenario({
  "line": 376,
  "name": "A POST request is sent with incorrect value $.payment_purpose",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.payment-purpose",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 377,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 378,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 380,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 403,
  "name": "the attribute \"$.attributes.payment_purpose\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 404,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "the attribute \"$.attributes.payment_purpose\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 211911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 64855,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 45908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.payment_purpose",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 337185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 8128684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.payment_purpose",
      "offset": 15
    },
    {
      "val": "",
      "offset": 68
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 382373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 28857183,
  "status": "passed"
});
formatter.before({
  "duration": 13290644,
  "status": "passed"
});
formatter.scenario({
  "line": 409,
  "name": "A POST request is sent with incorrect value $attributes.payment_scheme",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$attributes.payment-scheme",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 410,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 411,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 412,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 413,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 436,
  "name": "the attribute \"$.attributes.payment_scheme\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 437,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 438,
  "name": "the attribute \"$.attributes.payment_scheme\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 440,
  "name": "the attribute \"$.attributes.payment_scheme\" is incorrectly set to \"XYZ\"",
  "keyword": "And "
});
formatter.step({
  "line": 441,
  "name": "the request is sent and fails and error message contains \"$.attriutes.payment_schemes\u0027XYZ is not one of the known payment schemes FPS\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 248460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 58429,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 38887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.payment_scheme",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 288138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 7884001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.payment_scheme",
      "offset": 15
    },
    {
      "val": "",
      "offset": 67
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 355352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 31184000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.payment_scheme",
      "offset": 15
    },
    {
      "val": "XYZ",
      "offset": 67
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 397973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attriutes.payment_schemes\u0027XYZ is not one of the known payment schemes FPS",
      "offset": 58
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_error_message_contains(String)"
});
formatter.result({
  "duration": 4028546,
  "status": "passed"
});
formatter.before({
  "duration": 17779465,
  "status": "passed"
});
formatter.scenario({
  "line": 443,
  "name": "A POST request is sent with incorrect value $attributes.payment_type",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$attributes.payment-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 444,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 445,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 446,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 447,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 470,
  "name": "the attribute \"$.attributes.payment_type\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 471,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 472,
  "name": "the attribute \"$.attributes.payment_type\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 473,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "the attribute \"$.attributes.payment_type\" is incorrectly set to \"XYZ\"",
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "the request is sent and fails and error message contains \"$.attriutes.payment_type\u0027XYZ is not one of the known payment schemes Credit\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 220060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 84124,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 57925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.payment_type",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 384097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 8777866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.payment_type",
      "offset": 15
    },
    {
      "val": "",
      "offset": 65
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 423032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 41819415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.payment_type",
      "offset": 15
    },
    {
      "val": "XYZ",
      "offset": 65
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 866831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attriutes.payment_type\u0027XYZ is not one of the known payment schemes Credit",
      "offset": 58
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_error_message_contains(String)"
});
formatter.result({
  "duration": 3745955,
  "status": "passed"
});
formatter.before({
  "duration": 15446696,
  "status": "passed"
});
formatter.scenario({
  "line": 480,
  "name": "A POST request is sent with incorrect value $attributes.processing_date",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$attributes.processing-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 481,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 482,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 483,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 484,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 507,
  "name": "the attribute \"$.attributes.processing_date\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 508,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 509,
  "name": "the attribute \"$.attributes.processing_date\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 510,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 511,
  "name": "the attribute \"$.attributes.processing_date\" is incorrectly set to \"2118-01-01\"",
  "keyword": "And "
});
formatter.step({
  "line": 512,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 264777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 79438,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 48086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.processing_date",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 322400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 7382254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.processing_date",
      "offset": 15
    },
    {
      "val": "",
      "offset": 68
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 389650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 3214799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.processing_date",
      "offset": 15
    },
    {
      "val": "2118-01-01",
      "offset": 68
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 308959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 42483185,
  "status": "passed"
});
formatter.before({
  "duration": 13801995,
  "status": "passed"
});
formatter.scenario({
  "line": 515,
  "name": "A POST request is sent with incorrect value $attributes.reference",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$attributes.reference",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 516,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 517,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 518,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 519,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 542,
  "name": "the attribute \"$.attributes.reference\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 543,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 544,
  "name": "the attribute \"$.attributes.reference\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 545,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 162216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 52145,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 56348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.reference",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 962192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 8457820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.reference",
      "offset": 15
    },
    {
      "val": "",
      "offset": 62
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 240734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 39556925,
  "status": "passed"
});
formatter.before({
  "duration": 14482108,
  "status": "passed"
});
formatter.scenario({
  "line": 548,
  "name": "A POST request is sent with incorrect value $attributes.scheme_payment_sub_type",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$attributes.scheme-payment-sub-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 549,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 550,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 551,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 552,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 575,
  "name": "the attribute \"$.attributes.scheme_payment_sub_type\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 576,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 577,
  "name": "the attribute \"$.attributes.scheme_payment_sub_type\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 578,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 579,
  "name": "the attribute \"$.attributes.scheme_payment_sub_type\" is incorrectly set to \"XYZ\"",
  "keyword": "And "
});
formatter.step({
  "line": 580,
  "name": "the request is sent and fails and error message contains \"$.attriutes.scheme_payment_sub_type\u0027XYZ is not one of the known scheme payment sub types InternetBanking\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 442341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 335433,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 248796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.scheme_payment_sub_type",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 247994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 7480658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.scheme_payment_sub_type",
      "offset": 15
    },
    {
      "val": "",
      "offset": 76
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 525132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 37180163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.scheme_payment_sub_type",
      "offset": 15
    },
    {
      "val": "XYZ",
      "offset": 76
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 308835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attriutes.scheme_payment_sub_type\u0027XYZ is not one of the known scheme payment sub types InternetBanking",
      "offset": 58
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_error_message_contains(String)"
});
formatter.result({
  "duration": 3331939,
  "status": "passed"
});
formatter.before({
  "duration": 9845119,
  "status": "passed"
});
formatter.scenario({
  "line": 582,
  "name": "A POST request is sent with incorrect value $attributes.scheme_payment_type",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$attributes.scheme-payment-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 583,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 584,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 585,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 586,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 609,
  "name": "the attribute \"$.attributes.scheme_payment_type\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 610,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 611,
  "name": "the attribute \"$.attributes.scheme_payment_type\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 612,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 613,
  "name": "the attribute \"$.attributes.scheme_payment_type\" is incorrectly set to \"XYZ\"",
  "keyword": "And "
});
formatter.step({
  "line": 614,
  "name": "the request is sent and fails and error message contains \"$.attriutes.scheme_payment_type\u0027XYZ is not one of the known scheme payment types ImmediatePayment\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 158495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 61476,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 40498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.scheme_payment_type",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 196655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4840568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.scheme_payment_type",
      "offset": 15
    },
    {
      "val": "",
      "offset": 72
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 256016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 32862684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.scheme_payment_type",
      "offset": 15
    },
    {
      "val": "XYZ",
      "offset": 72
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 272395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attriutes.scheme_payment_type\u0027XYZ is not one of the known scheme payment types ImmediatePayment",
      "offset": 58
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_error_message_contains(String)"
});
formatter.result({
  "duration": 3301165,
  "status": "passed"
});
formatter.before({
  "duration": 18300685,
  "status": "passed"
});
formatter.scenario({
  "line": 616,
  "name": "A POST request is sent with incorrect value $.attributes.beneficiary_party.account_name",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.beneficiary-party.account-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 617,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 618,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 619,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 620,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 643,
  "name": "the attribute \"$.attributes.beneficiary_party.account_name\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 644,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 645,
  "name": "the attribute \"$.attributes.beneficiary_party.account_name\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 646,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 193020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 73777,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 52595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.account_name",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 316433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 8109933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.account_name",
      "offset": 15
    },
    {
      "val": "",
      "offset": 83
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 385344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 32753022,
  "status": "passed"
});
formatter.before({
  "duration": 16179893,
  "status": "passed"
});
formatter.scenario({
  "line": 648,
  "name": "A POST request is sent with incorrect value $.attributes.beneficiary_party.account_number",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.beneficiary-party.account-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 649,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 650,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 651,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 652,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 675,
  "name": "the attribute \"$.attributes.beneficiary_party.account_name\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 676,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 677,
  "name": "the attribute \"$.attributes.beneficiary_party.account_name\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 678,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 183399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 77434,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 44263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.account_name",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 407040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 6016198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.account_name",
      "offset": 15
    },
    {
      "val": "",
      "offset": 83
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 290470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 28953126,
  "status": "passed"
});
formatter.before({
  "duration": 13946958,
  "status": "passed"
});
formatter.scenario({
  "line": 681,
  "name": "A POST request is sent with incorrect value $.attributes.beneficiary_party.account_number_code",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.beneficiary-party.account-number-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 682,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 683,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 684,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 685,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 708,
  "name": "the attribute \"$.attributes.beneficiary_party.account_number_code\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 709,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 710,
  "name": "the attribute \"$.attributes.beneficiary_party.account_number_code\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 711,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 712,
  "name": "the attribute \"$.attributes.beneficiary_party.account_number_code\" is incorrectly set to \"XYZ\"",
  "keyword": "And "
});
formatter.step({
  "line": 713,
  "name": "the request is sent and fails and error message contains \"$.attriutes.beneficiary_party.account_number_code\u0027XYZ is not one of the known scheme payment types BBAN,IBAN\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 132825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 38330,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 40419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.account_number_code",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 265782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4855517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.account_number_code",
      "offset": 15
    },
    {
      "val": "",
      "offset": 90
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 374254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 25952714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.account_number_code",
      "offset": 15
    },
    {
      "val": "XYZ",
      "offset": 90
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 373997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attriutes.beneficiary_party.account_number_code\u0027XYZ is not one of the known scheme payment types BBAN,IBAN",
      "offset": 58
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_error_message_contains(String)"
});
formatter.result({
  "duration": 2380754,
  "status": "passed"
});
formatter.before({
  "duration": 12667310,
  "status": "passed"
});
formatter.scenario({
  "line": 716,
  "name": "A POST request is sent with incorrect value $.attributes.beneficiary_party.account_type",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.beneficiary-party.account-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 717,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 718,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 719,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 720,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 743,
  "name": "the attribute \"$.attributes.beneficiary_party.account_type\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 744,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 745,
  "name": "the attribute \"$.attributes.beneficiary_party.account_type\" is incorrectly set to \"-1\"",
  "keyword": "And "
});
formatter.step({
  "line": 746,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 137976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 40604,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 27825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.account_type",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 208806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4943338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.account_type",
      "offset": 15
    },
    {
      "val": "-1",
      "offset": 83
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 238912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 25197815,
  "status": "passed"
});
formatter.before({
  "duration": 12482281,
  "status": "passed"
});
formatter.scenario({
  "line": 748,
  "name": "A POST request is sent with incorrect value $.attributes.beneficiary_party.address",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.beneficiary-party.address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 749,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 750,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 751,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 752,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 775,
  "name": "the attribute \"$.attributes.beneficiary_party.address\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 776,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 777,
  "name": "the attribute \"$.attributes.beneficiary_party.address\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 778,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 164299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 49293,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 33815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.address",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 315498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 6664582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.address",
      "offset": 15
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 332888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 25323261,
  "status": "passed"
});
formatter.before({
  "duration": 12482338,
  "status": "passed"
});
formatter.scenario({
  "line": 781,
  "name": "A POST request is sent with incorrect value $.attributes.beneficiary_party.name",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.beneficiary-party.name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 782,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 783,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 784,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 785,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 808,
  "name": "the attribute \"$.attributes.beneficiary_party.name\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 809,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 810,
  "name": "the attribute \"$.attributes.beneficiary_party.name\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 811,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 145504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 52948,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 32818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.name",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 196285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 5591157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.name",
      "offset": 15
    },
    {
      "val": "",
      "offset": 75
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 246481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 23121415,
  "status": "passed"
});
formatter.before({
  "duration": 11485119,
  "status": "passed"
});
formatter.scenario({
  "line": 814,
  "name": "A POST request is sent with incorrect value $.attributes.beneficiary_party.bank_id",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.beneficiary-party.bank-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 815,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 816,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 817,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 818,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 841,
  "name": "the attribute \"$.attributes.beneficiary_party.bank_id\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 842,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 843,
  "name": "the attribute \"$.attributes.beneficiary_party.bank_id\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 844,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 177458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 70345,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 96662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.bank_id",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 347157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 6808768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.bank_id",
      "offset": 15
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 330056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 24869197,
  "status": "passed"
});
formatter.before({
  "duration": 10075473,
  "status": "passed"
});
formatter.scenario({
  "line": 846,
  "name": "A POST request is sent with incorrect value $.attributes.beneficiary_party.bank_id_code",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.beneficiary-party.bank-id-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 847,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 848,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 849,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 850,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 873,
  "name": "the attribute \"$.attributes.beneficiary_party.bank_id_code\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 874,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 875,
  "name": "the attribute \"$.attributes.beneficiary_party.bank_id_code\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 876,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 182019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 69512,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 72406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.bank_id_code",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 198528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 5808119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.beneficiary_party.bank_id_code",
      "offset": 15
    },
    {
      "val": "",
      "offset": 83
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 308676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 28288112,
  "status": "passed"
});
formatter.before({
  "duration": 13113000,
  "status": "passed"
});
formatter.scenario({
  "line": 879,
  "name": "A POST request is sent with incorrect value $.attributes.debtor_party.account_name",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.debtor-party.account-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 880,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 881,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 882,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 883,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 906,
  "name": "the attribute \"$.attributes.debtor_party.account_name\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 907,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 908,
  "name": "the attribute \"$.attributes.debtor_party.account_name\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 909,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 180326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 88660,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 36855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.account_name",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 234480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 6708420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.account_name",
      "offset": 15
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 322162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 22134541,
  "status": "passed"
});
formatter.before({
  "duration": 10801759,
  "status": "passed"
});
formatter.scenario({
  "line": 911,
  "name": "A POST request is sent with incorrect value $.attributes.debtor_party.account_number",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.debtor-party.account-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 912,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 913,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 914,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 915,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 938,
  "name": "the attribute \"$.attributes.debtor_party.account_name\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 939,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 940,
  "name": "the attribute \"$.attributes.debtor_party.account_name\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 941,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 251421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 48776,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 38074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.account_name",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 292609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4436260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.account_name",
      "offset": 15
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 234193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 19264204,
  "status": "passed"
});
formatter.before({
  "duration": 14903242,
  "status": "passed"
});
formatter.scenario({
  "line": 944,
  "name": "A POST request is sent with incorrect value $.attributes.debtor_party.account_number_code",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.debtor-party.account-number-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 945,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 946,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 947,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 948,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 971,
  "name": "the attribute \"$.attributes.debtor_party.account_number_code\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 972,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 973,
  "name": "the attribute \"$.attributes.debtor_party.account_number_code\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 974,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 204994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 52007,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 34523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.account_number_code",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 224388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 7353219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.account_number_code",
      "offset": 15
    },
    {
      "val": "",
      "offset": 85
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 325732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 21781466,
  "status": "passed"
});
formatter.before({
  "duration": 11267557,
  "status": "passed"
});
formatter.scenario({
  "line": 979,
  "name": "A POST request is sent with incorrect value $.attributes.debtor_party.address",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.debtor-party.address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 980,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 981,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 982,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 983,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1006,
  "name": "the attribute \"$.attributes.debtor_party.address\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1007,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1008,
  "name": "the attribute \"$.attributes.debtor_party.address\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1009,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 135333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 48182,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 31222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.address",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 193287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 6297826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.address",
      "offset": 15
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 250393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 22022524,
  "status": "passed"
});
formatter.before({
  "duration": 17996898,
  "status": "passed"
});
formatter.scenario({
  "line": 1012,
  "name": "A POST request is sent with incorrect value $.attributes.debtor_party.name",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.debtor-party.name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1013,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1014,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1015,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1016,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1039,
  "name": "the attribute \"$.attributes.debtor_party.name\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1040,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1041,
  "name": "the attribute \"$.attributes.debtor_party.name\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1042,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 150225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 52444,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 39211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.name",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 271350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 7205128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.name",
      "offset": 15
    },
    {
      "val": "",
      "offset": 70
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 288947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 26337682,
  "status": "passed"
});
formatter.before({
  "duration": 14481938,
  "status": "passed"
});
formatter.scenario({
  "line": 1045,
  "name": "A POST request is sent with incorrect value $.attributes.debtor_party.bank_id",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.debtor-party.bank-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1046,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1047,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1048,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1049,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1072,
  "name": "the attribute \"$.attributes.debtor_party.bank_id\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1073,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1074,
  "name": "the attribute \"$.attributes.debtor_party.bank_id\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1075,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 191071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 61959,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 42262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.bank_id",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 288534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 7645403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.bank_id",
      "offset": 15
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 445650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 26436939,
  "status": "passed"
});
formatter.before({
  "duration": 12255402,
  "status": "passed"
});
formatter.scenario({
  "line": 1077,
  "name": "A POST request is sent with incorrect value $.attributes.debtor_party.bank_id_code",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.debtor-party.bank-id-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1078,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1079,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1080,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1081,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1104,
  "name": "the attribute \"$.attributes.debtor_party.bank_id_code\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1105,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1106,
  "name": "the attribute \"$.attributes.debtor_party.bank_id_code\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1107,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 174343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 57247,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 42113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.bank_id_code",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 353380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 5635473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.bank_id_code",
      "offset": 15
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 376808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 27862274,
  "status": "passed"
});
formatter.before({
  "duration": 10991277,
  "status": "passed"
});
formatter.scenario({
  "line": 1109,
  "name": "A POST request is sent with incorrect value $.attributes.sponsor_party.account_name",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.sponsor-party.account-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1110,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1111,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1112,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1113,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1136,
  "name": "the attribute \"$.attributes.debtor_party.account_name\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1137,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1138,
  "name": "the attribute \"$.attributes.debtor_party.account_name\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1139,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 205083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 88615,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 42707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.account_name",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 260663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 6640168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.account_name",
      "offset": 15
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 410911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 25801170,
  "status": "passed"
});
formatter.before({
  "duration": 12239182,
  "status": "passed"
});
formatter.scenario({
  "line": 1141,
  "name": "A POST request is sent with incorrect value $.attributes.sponsor_party.account_number",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.sponsor-party.account-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1142,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1143,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1144,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1145,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1168,
  "name": "the attribute \"$.attributes.debtor_party.account_name\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1169,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1170,
  "name": "the attribute \"$.attributes.debtor_party.account_name\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1171,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 144737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 45764,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 46689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.account_name",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 256728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 6104823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.account_name",
      "offset": 15
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 316068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 25577290,
  "status": "passed"
});
formatter.before({
  "duration": 14324556,
  "status": "passed"
});
formatter.scenario({
  "line": 1177,
  "name": "A POST request is sent with incorrect value $.attributes.sponsor_party.bank_id",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.sponsor-party.bank-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1178,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1179,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1180,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1181,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1204,
  "name": "the attribute \"$.attributes.debtor_party.bank_id\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1205,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1206,
  "name": "the attribute \"$.attributes.debtor_party.bank_id\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1207,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 236943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 49406,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 35194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.bank_id",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 255473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 11655396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.bank_id",
      "offset": 15
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 206179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 22199021,
  "status": "passed"
});
formatter.before({
  "duration": 9844040,
  "status": "passed"
});
formatter.scenario({
  "line": 1209,
  "name": "A POST request is sent with incorrect value $.attributes.sponsor_party.bank_id_code",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.sponsor-party.bank-id-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1210,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1211,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1212,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1213,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1236,
  "name": "the attribute \"$.attributes.debtor_party.bank_id_code\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1237,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1238,
  "name": "the attribute \"$.attributes.debtor_party.bank_id_code\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1239,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 148119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 33387,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 25612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.bank_id_code",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 175534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 5421166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.debtor_party.bank_id_code",
      "offset": 15
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 285094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 26311789,
  "status": "passed"
});
formatter.before({
  "duration": 10312023,
  "status": "passed"
});
formatter.scenario({
  "line": 1241,
  "name": "A POST request is sent with incorrect value $.attributes.fx.contract_reference",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.fx.contract-reference",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1242,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1243,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1244,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1245,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1268,
  "name": "the attribute \"$.attributes.fx.contract_reference\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1269,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1270,
  "name": "the attribute \"$.attributes.fx.contract_reference\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1271,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 139135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 53365,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 29496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.fx.contract_reference",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 187844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4872043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.fx.contract_reference",
      "offset": 15
    },
    {
      "val": "",
      "offset": 74
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 360262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 16770788,
  "status": "passed"
});
formatter.before({
  "duration": 12500236,
  "status": "passed"
});
formatter.scenario({
  "line": 1274,
  "name": "A POST request is sent with incorrect value $.attributes.fx.exchange_rate",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.fx.exchange-rate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1275,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1276,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1277,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1278,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1301,
  "name": "the attribute \"$.attributes.fx.exchange_rate\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1302,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1303,
  "name": "the attribute \"$.attributes.fx.exchange_rate\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1304,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 135606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 31760,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 41415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.fx.exchange_rate",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 229958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 5405600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.fx.exchange_rate",
      "offset": 15
    },
    {
      "val": "",
      "offset": 69
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 210624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 2762381,
  "status": "passed"
});
formatter.before({
  "duration": 10346717,
  "status": "passed"
});
formatter.scenario({
  "line": 1306,
  "name": "A POST request is sent with incorrect value $.attributes.fx.original_amount",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.fx.original-amount",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1307,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1308,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1309,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1310,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1333,
  "name": "the attribute \"$.attributes.fx.original_amount\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1334,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1335,
  "name": "the attribute \"$.attributes.fx.original_amount\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1336,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 114268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 30336,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 20613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.fx.original_amount",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 167987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4783195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.fx.original_amount",
      "offset": 15
    },
    {
      "val": "",
      "offset": 71
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 267851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 2990770,
  "status": "passed"
});
formatter.before({
  "duration": 9069113,
  "status": "passed"
});
formatter.scenario({
  "line": 1338,
  "name": "A POST request is sent with incorrect value $.attributes.charges_information.bearer_code",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.charges-information.bearer-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1339,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1340,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1341,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1342,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1365,
  "name": "the attribute \"$.attributes.charges_information.bearer_code\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1366,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1367,
  "name": "the attribute \"$.attributes.charges_information.bearer_code\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1368,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1369,
  "name": "the attribute \"$.attributes.charges_information.bearer_code\" is incorrectly set to \"XYZ\"",
  "keyword": "And "
});
formatter.step({
  "line": 1370,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 130273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 44528,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 24013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.bearer_code",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 169506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 5668813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.bearer_code",
      "offset": 15
    },
    {
      "val": "",
      "offset": 84
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 239803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 17624619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.bearer_code",
      "offset": 15
    },
    {
      "val": "XYZ",
      "offset": 84
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 233500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 3393456,
  "status": "passed"
});
formatter.before({
  "duration": 12599495,
  "status": "passed"
});
formatter.scenario({
  "line": 1374,
  "name": "A POST request is sent with incorrect value $.attributes.charges_information.receiver_charges_amount",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.charges-information.receiver-charges-amount",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1375,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1376,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1377,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1378,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}\n"
  }
});
formatter.step({
  "line": 1402,
  "name": "the attribute \"$.attributes.charges_information.receiver_charges_amount\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1403,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1404,
  "name": "the attribute \"$.attributes.charges_information.receiver_charges_amount\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1405,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 162409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 38240,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 25589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.receiver_charges_amount",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 236841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 22805129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.receiver_charges_amount",
      "offset": 15
    },
    {
      "val": "",
      "offset": 96
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 390581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 3245669,
  "status": "passed"
});
formatter.before({
  "duration": 8158425,
  "status": "passed"
});
formatter.scenario({
  "line": 1407,
  "name": "A POST request is sent with incorrect value $.attributes.charges_information.receiver_charges_currency",
  "description": "",
  "id": "add-a-resource;a-post-request-is-sent-with-incorrect-value-$.attributes.charges-information.receiver-charges-currency",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 1408,
  "name": "a \"POST\" request is prepared to be sent to \"/api/v1/resource\"",
  "keyword": "When "
});
formatter.step({
  "line": 1409,
  "name": "the \"Content-Type\" attribute of the request header is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 1410,
  "name": "the content is :",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 1411,
    "value": "    {\"type\": \"Payment\",\"version\": 0,\"organisation_id\": \"743d5b63-8e6f-432e-a8fa-c5d8d2ee5fcb\",\n\t\"attributes\": {\n\t\t\"amount\": \"100.21\",\n\t\t\"currency\": \"GBP\",\n\t\t\"end_to_end_reference\": \"Wil piano Jan\",\n\t\t\"numeric_reference\": \"1002001\",\n\t\t\"payment_id\": \"123456789012345678\",\n\t\t\"payment_purpose\": \"Paying for goods/services\",\n\t\t\"payment_scheme\": \"FPS\",\n\t\t\"payment_type\": \"Credit\",\n\t\t\"processing_date\": \"2017-01-18\",\n\t\t\"reference\": \"Payment for Em\u0027s piano lessons\",\n\t\t\"scheme_payment_sub_type\": \"InternetBanking\",\n\t\t\"scheme_payment_type\": \"ImmediatePayment\",\n\t\t\"beneficiary_party\": {\"account_name\": \"W Owens\",\"account_number\": \"31926819\",\"account_number_code\": \"BBAN\",\"account_type\": 0,\"address\": \"1 The Beneficiary Localtown SE2\",\"bank_id\": \"403000\",\"bank_id_code\": \"GBDSC\",\"name\": \"Wilfred Jeremiah Owens\"},\n\t\t\"charges_information\": {\"bearer_code\": \"SHAR\",\"sender_charges\": [{\"amount\": \"5.00\",\"currency\": \"GBP\"}, {\"amount\": \"10.00\",\"currency\": \"USD\"}],\"receiver_charges_amount\": \"1.00\",\"receiver_charges_currency\": \"USD\"},\n\t\t\"debtor_party\": {\"account_name\": \"EJ Brown Black\",\"account_number\": \"GB29XABC10161234567801\",\"account_number_code\": \"IBAN\",\"address\": \"10 Debtor Crescent Sourcetown NE1\",\"bank_id\": \"203301\",\"bank_id_code\": \"GBDSC\",\"name\": \"Emelia Jane Brown\"},\n\t\t\"fx\": {\"contract_reference\": \"FX123\",\"exchange_rate\": \"2.00000\",\"original_amount\": \"200.42\",\"original_currency\": \"USD\"},\n\t\t\"sponsor_party\": {\"account_number\": \"56781234\",\"bank_id\": \"123123\",\"bank_id_code\": \"GBDSC\"}\n\t\t}\n\t}"
  }
});
formatter.step({
  "line": 1434,
  "name": "the attribute \"$.attributes.charges_information.receiver_charges_currency\" is not present",
  "keyword": "And "
});
formatter.step({
  "line": 1435,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 1436,
  "name": "the attribute \"$.attributes.charges_information.receiver_charges_currency\" is incorrectly set to \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 1437,
  "name": "the request is sent and fails and the error code is \"400\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 3
    },
    {
      "val": "/api/v1/resource",
      "offset": 44
    }
  ],
  "location": "ResourceSteps.a_request_is_prepared_to_be_sent_to(String,String)"
});
formatter.result({
  "duration": 110076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 5
    },
    {
      "val": "application/json",
      "offset": 55
    }
  ],
  "location": "ResourceSteps.theAttributeOfTheRequestHeaderIs(String,String)"
});
formatter.result({
  "duration": 36403,
  "status": "passed"
});
formatter.match({
  "location": "ResourceSteps.the_content_is(String)"
});
formatter.result({
  "duration": 22470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.receiver_charges_currency",
      "offset": 15
    }
  ],
  "location": "ResourceSteps.the_attribute_is_not_present(String)"
});
formatter.result({
  "duration": 151222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 4078610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$.attributes.charges_information.receiver_charges_currency",
      "offset": 15
    },
    {
      "val": "",
      "offset": 98
    }
  ],
  "location": "ResourceSteps.the_attribute_is_incorrectly_set_to(String,String)"
});
formatter.result({
  "duration": 254224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 53
    }
  ],
  "location": "ResourceSteps.the_request_is_sent_and_fails_and_the_error_code_is(String)"
});
formatter.result({
  "duration": 20825420,
  "status": "passed"
});
});