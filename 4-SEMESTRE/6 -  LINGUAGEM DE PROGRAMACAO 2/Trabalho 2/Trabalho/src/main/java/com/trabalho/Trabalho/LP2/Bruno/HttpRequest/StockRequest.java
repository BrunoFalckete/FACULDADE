package com.trabalho.Trabalho.LP2.Bruno.HttpRequest;

import com.trabalho.Trabalho.LP2.Bruno.record.Stock;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "stocks", url = "http://localhost:8080")
public interface StockRequest {

    @GetMapping("/stocks")
    List<Stock> getStocks();

    @GetMapping("/stocks/{id}")
    Stock getStockById(@PathVariable("id") Long id);

    @PostMapping("/stocks")
    Stock createStock(@RequestBody Stock stock);

    @PutMapping("/stocks/{id}")
    Stock updateStock(@PathVariable("id") Long id, @RequestBody Stock stock);

    @DeleteMapping("/stocks/{id}")
    void deleteStock(@PathVariable("id") Long id);
}
