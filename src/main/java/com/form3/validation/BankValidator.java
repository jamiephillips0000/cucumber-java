package com.form3.validation;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.form3.entity.Resource;
/**
 * used to validate bank ids
 * @author jamie
 *
 */
@Service
public class BankValidator implements Validator{

	/**
	 * holds the state of the bank records in a map that can be looked up by bankId
	 */
	private static final Map<String, String> BANKS = new HashMap<String,String>();
	
	/**
	 * Constructor populates the state
	 */
	public BankValidator() {
		BANKS.put("123123", "GBDSC");
		BANKS.put("403000", "GBDSC");
		BANKS.put("203301", "GBDSC");
		
	}
	
	/**
	 * validate a records banking details 
	 * @param httpMethod - one of POST, GET, PUT, DELETE
	 * @param resource - the new resource we wish to evaluate
	 * @param dbResource - the record persisted in Mongo
	 */
	@Override
	public void validate(final String httpMethod, final Resource resource, final Resource dbResource) {
		if(BANKS.containsKey(resource.getAttributes().getSponsorParty().getBankId())){
			if(!BANKS.get(resource.getAttributes().getSponsorParty().getBankId()).equals(resource.getAttributes().getSponsorParty().getBankIdCode())){
				throw new RuntimeException("$.attriutes.sponsor_party.bank_id_code'" + resource.getAttributes().getSponsorParty().getBankIdCode() + " is unknown");
			}
		}else {
			throw new RuntimeException("$.attriutes.sponsor_party.bank_id'" + resource.getAttributes().getSponsorParty().getBankId() + " is unknown");
		}
		
		if(BANKS.containsKey(resource.getAttributes().getDebtorParty().getBankId())){
			if(!BANKS.get(resource.getAttributes().getDebtorParty().getBankId()).equals(resource.getAttributes().getDebtorParty().getBankIdCode())){
				throw new RuntimeException("$.attriutes.debtor_party.bank_id_code'" + resource.getAttributes().getDebtorParty().getBankIdCode() + " is unknown");
			}
		}else {
			throw new RuntimeException("$.attriutes.debtor_party.bank_id'" + resource.getAttributes().getDebtorParty().getBankId() + " is unknown");
		}
		if(BANKS.containsKey(resource.getAttributes().getBeneficiaryParty().getBankId())){
			if(!BANKS.get(resource.getAttributes().getBeneficiaryParty().getBankId()).equals(resource.getAttributes().getBeneficiaryParty().getBankIdCode())){
				throw new RuntimeException("$.attriutes.beneficiary_party.bank_id_code'" + resource.getAttributes().getBeneficiaryParty().getBankIdCode() + " is unknown");
			}
		}else {
			throw new RuntimeException("$.attriutes.beneficiary_party.bank_id'" + resource.getAttributes().getBeneficiaryParty().getBankId() + " is unknown");
		}
		
	}

}
