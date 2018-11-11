package com.form3.validation;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.form3.entity.Resource;

@Service
public class LookupTableValidator implements Validator{

private static final Set<String> TYPE = new HashSet<String>();
private static final Set<String> SCHEMES = new HashSet<String>();
private static final Set<String> PAYMENT_TYPES = new HashSet<String>();
private static final Set<String> SCHEME_SUB_PAYMENT_TYPES = new HashSet<String>();
private static final Set<String> SCHEME_PAYMENT_TYPES = new HashSet<String>();
private static final Set<String> BEARER_CODE = new HashSet<String>();	
private static final Set<String> ACCOUNT_TYPE = new HashSet<String>();
private static final Set<String> ACCOUNT_NUMBER_CODE = new HashSet<String>();
private static final Set<String> CURRENCIES = new HashSet<String>();


	/**
	 * holds state of various look up tables needed for a valid record
	 */
	public LookupTableValidator() {
		TYPE.add("Payment");
		SCHEMES.add("FPS");
		PAYMENT_TYPES.add("Credit");
		SCHEME_SUB_PAYMENT_TYPES.add("InternetBanking");
		SCHEME_PAYMENT_TYPES.add("ImmediatePayment");
		BEARER_CODE.add("SHAR");
		ACCOUNT_TYPE.add("0");
		ACCOUNT_NUMBER_CODE.add("IBAN");
		ACCOUNT_NUMBER_CODE.add("BBAN");
		CURRENCIES.add("USD");
		CURRENCIES.add("GBP");
		
		
	}
	
	/**
	 * validate a record against lookup tables 
	 * @param httpMethod - one of POST, GET, PUT, DELETE
	 * @param resource - the new resource we wish to evaluate
	 * @param dbResource - the record persisted in Mongo
	 */
	@Override
	public void validate(final String httpMethod, final Resource resource, final Resource dbResource) {
		if(!TYPE.contains(resource.getType())){
			throw new RuntimeException("Resource Validation Error : type must be equal 'Payment' and not '" + resource.getType()+"'");
		}
		if(!CURRENCIES.contains(resource.getAttributes().getCurrency())){
			throw new RuntimeException("Resource Validation Error : $.attriutes.currency '" + resource.getAttributes().getCurrency() + " is not one of the known currencies " + CURRENCIES.stream().collect(Collectors.joining( "," ) ));
		}else if(!CURRENCIES.contains(resource.getAttributes().getChargesInformation().getReceiverChargesCurrency())){
			throw new RuntimeException("Resource Validation Error : $.attriutes.charges_information.receiver_charges_currency" + resource.getAttributes().getChargesInformation().getReceiverChargesCurrency() + " is not one of the known currencies " + CURRENCIES.stream().collect(Collectors.joining( "," ) ));
		}else if(!CURRENCIES.contains(resource.getAttributes().getChargesInformation().getSenderCharges().get(0).getCurrency())){
			throw new RuntimeException("Resource Validation Error : $.attributes.charges_information.sender_charges.[0].currency" + resource.getAttributes().getChargesInformation().getSenderCharges().get(0).getCurrency() + " is not one of the known currencies " + CURRENCIES.stream().collect(Collectors.joining( "," ) ));
		}else if(!CURRENCIES.contains(resource.getAttributes().getChargesInformation().getSenderCharges().get(1).getCurrency())){
			throw new RuntimeException("Resource Validation Error : $.attributes.charges_information.sender_charges.[1].currency'" + resource.getAttributes().getChargesInformation().getSenderCharges().get(1).getCurrency() + " is not one of the known currencies " + CURRENCIES.stream().collect(Collectors.joining( "," ) ));					
		}
		
		if(!SCHEMES.contains(resource.getAttributes().getPaymentScheme())){
			throw new RuntimeException("Resource Validation Error : $.attriutes.payment_schemes'" + resource.getAttributes().getPaymentScheme() + " is not one of the known payment schemes " + SCHEMES.stream().collect(Collectors.joining( "," ) ));
		}
		
		if(!PAYMENT_TYPES.contains(resource.getAttributes().getPaymentType())){
			throw new RuntimeException("Resource Validation Error : $.attriutes.payment_type'" + resource.getAttributes().getPaymentType() + " is not one of the known payment schemes " + PAYMENT_TYPES.stream().collect(Collectors.joining( "," ) ));
		}
		if(!SCHEME_SUB_PAYMENT_TYPES.contains(resource.getAttributes().getSchemePaymentSubType())){
			throw new RuntimeException("Resource Validation Error : $.attriutes.scheme_payment_sub_type'" + resource.getAttributes().getSchemePaymentSubType() + " is not one of the known scheme payment sub types " + SCHEME_SUB_PAYMENT_TYPES.stream().collect(Collectors.joining( "," ) ));
		}
		if(!SCHEME_PAYMENT_TYPES.contains(resource.getAttributes().getSchemePaymentType())){
			throw new RuntimeException("Resource Validation Error : $.attriutes.scheme_payment_type'" + resource.getAttributes().getSchemePaymentType() + " is not one of the known scheme payment types " + SCHEME_PAYMENT_TYPES.stream().collect(Collectors.joining( "," ) ));
		}
		
		if(!ACCOUNT_NUMBER_CODE.contains(resource.getAttributes().getBeneficiaryParty().getAccountNumberCode())){
			throw new RuntimeException("Resource Validation Error : $.attriutes.beneficiary_party.account_number_code'" + resource.getAttributes().getBeneficiaryParty().getAccountNumberCode() + " is not one of the known scheme payment types " + ACCOUNT_NUMBER_CODE.stream().collect(Collectors.joining( "," ) ));
		}
		if(!ACCOUNT_TYPE.contains(""+resource.getAttributes().getBeneficiaryParty().getAccountType())){
			throw new RuntimeException("Resource Validation Error : $.attriutes.beneficiary_party.account_type'" + resource.getAttributes().getBeneficiaryParty().getAccountType() + " is not one of the known scheme payment types " + ACCOUNT_TYPE.stream().collect(Collectors.joining( "," ) ));
		}
		if(!BEARER_CODE.contains(resource.getAttributes().getChargesInformation().getBearerCode())){
			throw new RuntimeException("Resource Validation Error : $.attriutes.charges_information.bearer_code'" + resource.getAttributes().getChargesInformation().getBearerCode() + " is not one of the known scheme payment types " + BEARER_CODE.stream().collect(Collectors.joining( "," ) ));
		}
		
		

		
		
	}
	

}
