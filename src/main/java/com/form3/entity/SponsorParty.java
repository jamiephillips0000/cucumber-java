package com.form3.entity;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@NoArgsConstructor @RequiredArgsConstructor  @ToString @Data
public class SponsorParty {
	@NotNull @NonNull @JsonProperty("account_number") private String accountNumber;
	@NotNull @NonNull @JsonProperty("bank_id") private String bankId;
	@NotNull @NonNull @JsonProperty("bank_id_code") private String bankIdCode;
}