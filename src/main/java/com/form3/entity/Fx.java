package com.form3.entity;

import java.math.BigDecimal;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@NoArgsConstructor @RequiredArgsConstructor  @ToString @Data
public class Fx {
	@NotNull @NonNull @JsonProperty("contract_reference") @Size(min = 1) private String contractReference;
	@PositiveOrZero @NotNull @NonNull @JsonProperty("exchange_rate")  private BigDecimal exchange_rate;
	@PositiveOrZero @NotNull @NonNull @JsonProperty("original_amount") private BigDecimal original_amount;
	@NotNull @NonNull @JsonProperty("original_currency") @Size(min=3, max=3) private String originalCurrency;
}
