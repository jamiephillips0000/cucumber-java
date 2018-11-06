package com.form3.entity;

import java.math.BigDecimal;
import java.util.LinkedList;
import java.util.List;

import javax.validation.Valid;
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
public class ChargesInformation {
	
	@NotNull @NonNull @JsonProperty("bearer_code") @Size(min = 4) private String bearerCode;
	@Valid @NotNull @NonNull @JsonProperty("sender_charges") private List<SenderCharge> senderCharges = new LinkedList<SenderCharge>();
	@PositiveOrZero @NotNull  @JsonProperty("receiver_charges_amount")  private BigDecimal receiverChargesAmount;
	@NotNull @NonNull @JsonProperty("receiver_charges_currency") @Size(min = 3 , max = 3) private String receiverChargesCurrency;
}
