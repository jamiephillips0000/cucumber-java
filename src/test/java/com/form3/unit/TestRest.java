package com.form3.unit;

import static org.junit.Assert.assertEquals;

import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestClientException;

import com.form3.Application;
import com.form3.config.Config;
import com.form3.entity.Resource;
import com.form3.repository.ResourceRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class , webEnvironment=WebEnvironment.RANDOM_PORT)
public class TestRest {

	/**
	 * random local port that spring boot is started on
	 */
	@Value("${local.server.port}")
    private int port;
	
	/**
	 * Endpoint location
	 */
	private URL base;
	
    /**
     * A REST Template
     */
	private TestRestTemplate template;
	

    @Autowired private ResourceRepository resourceReposirory;
    
    @Before
    public void setUp() throws Exception {
        this.base = new URL("http://localhost:" + port + "/"+Config.API_PREFIX+"/resource");
        template = new TestRestTemplate();      
        
        resourceReposirory.deleteAll();     
               
    }
    
    
    
	/**
	 * make 2 post requests and then select the results back
	 * @throws RestClientException
	 * @throws URISyntaxException
	 */
	@Test
	public void testGet() throws RestClientException, URISyntaxException {
		post();
		post();
		ResponseEntity<List<Resource>> resources = get();
        assertEquals(resources.getStatusCode(), HttpStatus.OK);
        assertEquals(resources.getBody().size(), 2);
	}
	/**
	 * pake a post request and select it back by ID
	 * @throws RestClientException
	 * @throws URISyntaxException
	 */
	@Test
	public void testGetById() throws RestClientException, URISyntaxException {
		
		ResponseEntity<Resource> resources = getById(post().getBody().get_Id());
        assertEquals(resources.getStatusCode(), HttpStatus.OK);
	}
	
	/**
	 * Utility method to get all records in the datastore for this service
	 * @return a ResponseEntity wrapping a list of Resources and a HTTP Status
	 * @throws RestClientException
	 * @throws URISyntaxException
	 */
	private ResponseEntity<List<Resource>> get() throws RestClientException, URISyntaxException{
		URI endpoint = this.base.toURI();
		ResponseEntity<List<Resource>> response = template.exchange(endpoint,HttpMethod.GET,
				  null,
				  new ParameterizedTypeReference<List<Resource>>(){});
		return response;
	}
	/**
	 * A utility method to get a resource by provided ID
	 * @param id
	 * @return
	 * @throws RestClientException
	 * @throws URISyntaxException
	 */
	private ResponseEntity<Resource> getById(String id) throws RestClientException, URISyntaxException{
		URI endpoint = new URI(this.base.toURI()+"/"+id);
		ResponseEntity<Resource> response = template.exchange(endpoint,HttpMethod.GET,
				  null,
				  new ParameterizedTypeReference<Resource>(){});
		return response;
	}
	
	/**
	 * Tests delete functionality
	 * @throws RestClientException
	 * @throws URISyntaxException
	 */
	@Test
	public void testDelete() throws RestClientException, URISyntaxException {
		ResponseEntity<Resource> responseEntity = post();
		delete(responseEntity.getBody().get_Id());
	}
	
	/**
	 * Utility method to make post requests 
	 * @return a ResponseEntity wrapping a Resource and a HTTP Status
	 * @throws RestClientException
	 * @throws URISyntaxException
	 */
	private ResponseEntity<Resource> post() throws RestClientException, URISyntaxException {
		String rec = "{\n" + 
				"    \"type\": \"Payment\",\n" + 
				"    \"version\": \"0\",\n" + 
				"    \"organisation_id\": \"oojooj\",\n" + 
				"    \"attributes\": {\n" + 
				"        \"amount\": 44444.02,\n" + 
				"        \"currency\": \"USD\",\n" + 
				"        \"end_to_end_reference\": \"my E2E Ref\",\n" + 
				"        \"numeric_reference\": \"11222333\",\n" + 
				"        \"payment_id\": \"123456789012345678\",\n" + 
				"        \"payment_purpose\": \"payment\",\n" + 
				"        \"payment_scheme\": \"FPS\",\n" + 
				"        \"payment_type\": \"Credit\",\n" + 
				"        \"processing_date\": \"2012-04-23\",\n" + 
				"        \"reference\": \"my ref\",\n" + 
				"        \"scheme_payment_sub_type\": \"InternetBanking\",\n" + 
				"        \"scheme_payment_type\": \"ImmediatePayment\",\n" + 
				"        \"beneficiary_party\": {\n" + 
				"            \"account_number\": \"31926819\",\n" + 
				"            \"bank_id\": \"403000\",\n" + 
				"            \"bank_id_code\": \"GBDSC\",\n" + 
				"            \"account_name\": \"W Owens\",\n" + 
				"            \"account_number_code\": \"BBAN\",\n" + 
				"            \"address\": \"1 The Beneficiary Localtown SE2\",\n" + 
				"            \"name\": \"Wilfred Jeremiah Owens\",\n" + 
				"            \"account_type\": \"0\"\n" + 
				"        },\n" + 
				"        \"charges_information\": {\n" + 
				"            \"bearer_code\": \"SHAR\",\n" + 
				"            \"sender_charges\": [\n" + 
				"                {\n" + 
				"                    \"amount\": 5,\n" + 
				"                    \"currency\": \"GBP\"\n" + 
				"                },\n" + 
				"                {\n" + 
				"                    \"amount\": 10,\n" + 
				"                    \"currency\": \"USD\"\n" + 
				"                }\n" + 
				"            ],\n" + 
				"            \"receiver_charges_amount\": 1,\n" + 
				"            \"receiver_charges_currency\": \"USD\"\n" + 
				"        },\n" + 
				"        \"debtor_party\": {\n" + 
				"            \"account_number\": \"31926819\",\n" + 
				"            \"bank_id\": \"403000\",\n" + 
				"            \"bank_id_code\": \"GBDSC\",\n" + 
				"            \"account_name\": \"W Owens\",\n" + 
				"            \"account_number_code\": \"BBAN\",\n" + 
				"            \"address\": \"1 The Beneficiary Localtown SE2\",\n" + 
				"            \"name\": \"Wilfred Jeremiah Owens\"\n" + 
				"        },\n" + 
				"        \"fx\": {\n" + 
				"            \"contract_reference\": \"FX123\",\n" + 
				"            \"exchange_rate\": 2,\n" + 
				"            \"original_amount\": 200.42,\n" + 
				"            \"original_currency\": \"USD\"\n" + 
				"        },\n" + 
				"        \"sponsor_party\": {\n" + 
				"            \"account_number\": \"31926819\",\n" + 
				"            \"bank_id\": \"403000\",\n" + 
				"            \"bank_id_code\": \"GBDSC\"\n" + 
				"        }\n" + 
				"    }\n" + 
				"}";
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);

		HttpEntity<String> entity = new HttpEntity<String>(rec, headers);
		ResponseEntity<Resource> response = template.postForEntity(this.base.toURI(),
				  entity,
				  Resource.class);
		
		return response;
	}
	
	/**
	 * Utility method to delete resouces by ID
	 * @param id
	 * @throws RestClientException
	 * @throws URISyntaxException
	 */
	private void delete(String id) throws RestClientException, URISyntaxException {
		template.delete(this.base.toURI()+ "/" + id);		
	}
	
	
	/**
	 * Utility method to update a resource by ID
	 * @param id 
	 * @return a ResponseEntity wrapping a Resource and a HTTP Status
	 * @throws RestClientException
	 * @throws URISyntaxException
	 */
	private ResponseEntity<Resource> put(String id) throws RestClientException, URISyntaxException {
		String rec = "{\n" + 
				"    \"id\": \"" +id +"\" ,\n" + 
				"    \"type\": \"Payment\",\n" + 
				"    \"version\": \"1\",\n" + 
				"    \"organisation_id\": \"oojooj\",\n" + 
				"    \"attributes\": {\n" + 
				"        \"amount\": 44444.02,\n" + 
				"        \"currency\": \"USD\",\n" + 
				"        \"end_to_end_reference\": \"my E2E Ref\",\n" + 
				"        \"numeric_reference\": \"11222333\",\n" + 
				"        \"payment_id\": \"123456789012345678\",\n" + 
				"        \"payment_purpose\": \"payment\",\n" + 
				"        \"payment_scheme\": \"FPS\",\n" + 
				"        \"payment_type\": \"Credit\",\n" + 
				"        \"processing_date\": \"2012-04-23\",\n" + 
				"        \"reference\": \"my ref\",\n" + 
				"        \"scheme_payment_sub_type\": \"InternetBanking\",\n" + 
				"        \"scheme_payment_type\": \"ImmediatePayment\",\n" + 
				"        \"beneficiary_party\": {\n" + 
				"            \"account_number\": \"31926819\",\n" + 
				"            \"bank_id\": \"403000\",\n" + 
				"            \"bank_id_code\": \"GBDSC\",\n" + 
				"            \"account_name\": \"W Owens\",\n" + 
				"            \"account_number_code\": \"BBAN\",\n" + 
				"            \"address\": \"1 The Beneficiary Localtown SE2\",\n" + 
				"            \"name\": \"Wilfred Jeremiah Owens\",\n" + 
				"            \"account_type\": \"0\"\n" + 
				"        },\n" + 
				"        \"charges_information\": {\n" + 
				"            \"bearer_code\": \"SHAR\",\n" + 
				"            \"sender_charges\": [\n" + 
				"                {\n" + 
				"                    \"amount\": 5,\n" + 
				"                    \"currency\": \"GBP\"\n" + 
				"                },\n" + 
				"                {\n" + 
				"                    \"amount\": 10,\n" + 
				"                    \"currency\": \"USD\"\n" + 
				"                }\n" + 
				"            ],\n" + 
				"            \"receiver_charges_amount\": 1,\n" + 
				"            \"receiver_charges_currency\": \"USD\"\n" + 
				"        },\n" + 
				"        \"debtor_party\": {\n" + 
				"            \"account_number\": \"31926819\",\n" + 
				"            \"bank_id\": \"403000\",\n" + 
				"            \"bank_id_code\": \"GBDSC\",\n" + 
				"            \"account_name\": \"W Owens\",\n" + 
				"            \"account_number_code\": \"BBAN\",\n" + 
				"            \"address\": \"1 The Beneficiary Localtown SE2\",\n" + 
				"            \"name\": \"Wilfred Jeremiah Owens\"\n" + 
				"        },\n" + 
				"        \"fx\": {\n" + 
				"            \"contract_reference\": \"FX123\",\n" + 
				"            \"exchange_rate\": 2,\n" + 
				"            \"original_amount\": 200.42,\n" + 
				"            \"original_currency\": \"USD\"\n" + 
				"        },\n" + 
				"        \"sponsor_party\": {\n" + 
				"            \"account_number\": \"31926819\",\n" + 
				"            \"bank_id\": \"403000\",\n" + 
				"            \"bank_id_code\": \"GBDSC\"\n" + 
				"        }\n" + 
				"    }\n" + 
				"}";
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<String> entity = new HttpEntity<String>(rec, headers);
		ResponseEntity<Resource> putResponse = template.exchange(this.base.toURI()+"/"+id, HttpMethod.PUT, entity, Resource.class);
		return putResponse;
	}
	
	/**
	 * Tests POST functionality
	 * @throws RestClientException
	 * @throws URISyntaxException
	 */
	@Test
	public void testPost() throws RestClientException, URISyntaxException {
		ResponseEntity<Resource> response = post();     
        assertEquals(response.getStatusCode(), HttpStatus.CREATED);
	}

	
	/**
	 * Tests PUt functionality
	 * @throws RestClientException
	 * @throws URISyntaxException
	 */
	@Test
	public void testPut() throws RestClientException, URISyntaxException {
		ResponseEntity<Resource> response = post();
		ResponseEntity<Resource> putResource = put(response.getBody().get_Id());
		assertEquals(putResource.getStatusCode(), HttpStatus.CREATED);
	}
	
}
