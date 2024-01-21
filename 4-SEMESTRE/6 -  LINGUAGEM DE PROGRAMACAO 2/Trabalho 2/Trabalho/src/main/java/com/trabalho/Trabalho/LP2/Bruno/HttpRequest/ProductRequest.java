package com.trabalho.Trabalho.LP2.Bruno.HttpRequest;

import com.trabalho.Trabalho.LP2.Bruno.record.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "products", url = "http://localhost:8080")
public interface ProductRequest {

    @GetMapping("/products")
    List<Product> getProducts();

    @GetMapping("/products/{id}")
    Product getProductById(@PathVariable("id") Long id);

    @PostMapping("/products")
    Product createProduct(@RequestBody Product product);

    @PutMapping("/products/{id}")
    Product updateProduct(@PathVariable("id") Long id, @RequestBody Product product);

    @DeleteMapping("/products/{id}")
    void deleteProduct(@PathVariable("id") Long id);
}