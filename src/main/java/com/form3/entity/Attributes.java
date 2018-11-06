package com.form3.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.ToString;

@NoArgsConstructor @AllArgsConstructor @ToString @Data
public class Attributes {
	
	@PositiveOrZero @NotNull @NonNull @JsonProperty("amount") private BigDecimal amount;
	@NotNull @NonNull @JsonProperty("currency") @Size(min = 3 , max = 3) private String currency;
	@NotNull @NonNull @JsonProperty("end_to_end_reference") @Size(min = 1) private String endToEndReference;
	@NotNull @NonNull @JsonProperty("numeric_reference") @Size(min = 1) private String numericReference;
	@NotNull @NonNull @JsonProperty("payment_id") @Size(min = 1) private String payment_id;
	@NotNull @NonNull @JsonProperty("payment_purpose") @Size(min = 1) private String paymentPurpose;
	@NotNull @NonNull @JsonProperty("payment_scheme") @Size(min = 1) private String paymentScheme;
	@NotNull @NonNull @JsonProperty("payment_type") @Size(min = 1) private String paymentType;
	@NotNull @NonNull @DateTimeFormat(iso = DateTimeFormat.ISO.TIME) @JsonFormat(pattern = "yyyy-MM-dd") @JsonProperty("processing_date") @Past  private LocalDate processing_date;
	@NotNull @NonNull @JsonProperty("reference") @Size(min = 1) private String reference;
	@NotNull @NonNull @JsonProperty("scheme_payment_sub_type") @Size(min = 1) private String schemePaymentSubType;
	@NotNull @NonNull @JsonProperty("scheme_payment_type") @Size(min = 1) private String schemePaymentType;
	@Valid @NotNull @NonNull @JsonProperty("beneficiary_party") private BeneficiaryParty beneficiaryParty;
	@Valid @NotNull @NonNull @JsonProperty("charges_information") private ChargesInformation chargesInformation;
	@Valid @NotNull @NonNull @JsonProperty("debtor_party") private DebtorParty debtorParty;
	@Valid @NotNull @NonNull @JsonProperty("fx") Fx fx;
	@Valid @NotNull @NonNull @JsonProperty("sponsor_party") SponsorParty sponsorParty	;
	
	
	
}
