package com.trabalho.Trabalho.LP2.Bruno.HttpRequest;

import com.trabalho.Trabalho.LP2.Bruno.record.Customer;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "customers", url = "http://localhost:8080/api")
public interface CustomerRequest {

    @GetMapping("/customers")
    List<Customer> getCustomers();

    @GetMapping("/customers/{id}")
    Customer getCustomerById(@PathVariable("id") Long id);

    @PostMapping("/customers")
    Customer createCustomer(@RequestBody Customer customer);

    @PutMapping("/customers/{id}")
    Customer updateCustomer(@PathVariable("id") Long id, @RequestBody Customer customer);

    @DeleteMapping("/customers/{id}")
    void deleteCustomer(@PathVariable("id") Long id);
}