package com.form3.validation;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.stereotype.Service;

import com.form3.entity.Resource;
import com.form3.entity.SenderCharge;

/**
 * Used to validate amount figures for integrity in a Resource 
 * @author jamie
 *
 */
@Service
public class AmountsValidator implements Validator{

	/**
	 * validate a record
	 * @param httpMethod - one of POST, GET, PUT, DELETE
	 * @param resource - the new resource we wish to evaluate
	 * @param dbResource - the record persisted in Mongo
	 */
	@Override
	public void validate(final String httpMethod, final Resource resource, final Resource dbResource) {
		
		if(resource.getAttributes().getAmount().compareTo(BigDecimal.ZERO) == -1) {
			throw new RuntimeException("Resource Validation Error :  Resource Validation Error : Amount to move must be greater than zero" + resource.getVersion()+ "'");
		}
		// sender charges
		BigDecimal amtOrigCurrency = resource.getAttributes().getAmount().add(BigDecimal.ZERO);
		BigDecimal amtSenderChargesOrigCurrency = null;
		BigDecimal amtReceiverChargesOrigCurrency = null;
		List<SenderCharge> senderCharges = resource.getAttributes().getChargesInformation().getSenderCharges();
		for(SenderCharge charge : senderCharges) {
			if(charge.getCurrency().equals(resource.getAttributes().getCurrency())) {
				amtSenderChargesOrigCurrency = charge.getAmount();
			}else {
				amtReceiverChargesOrigCurrency = charge.getAmount();
			}
			
		}
		if(amtSenderChargesOrigCurrency == null || amtSenderChargesOrigCurrency.compareTo(BigDecimal.ZERO) == -1) {
			throw new RuntimeException("Resource Validation Error : Amount of sender charges cannot be zero or less" );
		}
		if(amtReceiverChargesOrigCurrency == null || amtReceiverChargesOrigCurrency.compareTo(BigDecimal.ZERO) == -1) {
			throw new RuntimeException("Resource Validation Error : Amount of receiver charges cannot be zero or less");
		}
		BigDecimal senderAmtLeftAfterSenderCharges = amtOrigCurrency.subtract(amtSenderChargesOrigCurrency);
		if(senderAmtLeftAfterSenderCharges.compareTo(BigDecimal.ZERO) == -1) {
			throw new RuntimeException("Resource Validation Error : Amount left after sender charges has been chanrged cannot be less than zero" );
		}
		BigDecimal amtInDestinationCurrency = 
				senderAmtLeftAfterSenderCharges.multiply(resource.getAttributes().getFx().getExchange_rate());
		
		if(amtInDestinationCurrency.subtract(amtReceiverChargesOrigCurrency).subtract(resource.getAttributes().getChargesInformation().getReceiverChargesAmount()).compareTo(BigDecimal.ZERO) == -1){
			throw new RuntimeException("Resource Validation Error : Amount in destination currency must be greater than the sender and receiver charges" + resource.getVersion()+ "'");
		}
		
		
	}

}
