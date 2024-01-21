package com.trabalho.Trabalho.LP2.Bruno.HttpRequest;

import com.trabalho.Trabalho.LP2.Bruno.record.Category;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "categories", url = "http://localhost:8080")
public interface CategoryRequest {

    @GetMapping("/categories")
    List<Category> getCategories();

    @GetMapping("/categories/{id}")
    Category getCategoryById(@PathVariable("id") Long id);

    @PostMapping("/categories")
    Category createCategory(@RequestBody Category category);

    @PutMapping("/categories/{id}")
    Category updateCategory(@PathVariable("id") Long id, @RequestBody Category category);

    @DeleteMapping("/categories/{id}")
    void deleteCategory(@PathVariable("id") Long id);
}