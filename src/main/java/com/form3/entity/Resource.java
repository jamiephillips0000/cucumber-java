package com.form3.entity;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.ToString;


@Document(collection = "resource")
@NoArgsConstructor @AllArgsConstructor @ToString @Data
public class Resource {
	
    @Id @JsonProperty("id")  private String _Id;
    @NotNull @NonNull @NotBlank @JsonProperty("type") private String type;
    @NotNull @NonNull @NotBlank  @JsonProperty("version") private String version;
    @NotNull @NonNull @NotBlank @JsonProperty("organisation_id")private String organisationId;
    
    @Valid @NotNull @NonNull @JsonProperty("attributes") private Attributes attributes;
	
		
}
