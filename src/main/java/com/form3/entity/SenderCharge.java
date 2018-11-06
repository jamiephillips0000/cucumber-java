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
public class SenderCharge {
	@PositiveOrZero @JsonProperty("amount")  private BigDecimal amount;
	@NotNull @NonNull @JsonProperty("currency") @Size(min = 3 , max = 3) private String currency;
	
}
