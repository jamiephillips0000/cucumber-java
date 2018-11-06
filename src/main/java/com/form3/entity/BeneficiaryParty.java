package com.form3.entity;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@NoArgsConstructor @RequiredArgsConstructor  @ToString @Data
public class BeneficiaryParty {

	@NotNull @NonNull @NotBlank @JsonProperty("account_number")  private String accountNumber;
	@NotNull @NonNull @NotBlank @JsonProperty("bank_id") private String bankId;
	@NotNull @NonNull @NotBlank @JsonProperty("bank_id_code")  private String bankIdCode;
	
	@NotNull @NonNull @NotBlank @JsonProperty("account_name")  private String accountName;
	@NotNull @NonNull @NotBlank @JsonProperty("account_number_code")  private String accountNumberCode;
	@NotNull @NonNull @NotBlank @JsonProperty("address")  private String address;
	@NotNull @NonNull @NotBlank @JsonProperty("name")  private String name;
	
	@NotNull @NonNull @NotBlank @JsonProperty("account_type") @Min(0) private String accountType;
	
	

}
