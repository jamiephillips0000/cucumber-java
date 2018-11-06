package com.form3.entity;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@NoArgsConstructor @RequiredArgsConstructor  @ToString @Data
public class DebtorParty {
	@NotNull @NonNull @JsonProperty("account_number") @Size(min=1) private String accountNumber;
	@NotNull @NonNull @JsonProperty("bank_id") @Size(min=1) private String bankId;
	@NotNull @NonNull @JsonProperty("bank_id_code") @Size(min=1) private String bankIdCode;
	
	@NotNull @NonNull @JsonProperty("account_name") @Size(min=1) private String accountName;
	@NotNull @NonNull @JsonProperty("account_number_code") @Size(min=1) private String accountNumberCode;
	@NotNull @NonNull @JsonProperty("address") @Size(min=1) private String address;
	@NotNull @NonNull @JsonProperty("name") @Size(min=1) private String name;
	


}
