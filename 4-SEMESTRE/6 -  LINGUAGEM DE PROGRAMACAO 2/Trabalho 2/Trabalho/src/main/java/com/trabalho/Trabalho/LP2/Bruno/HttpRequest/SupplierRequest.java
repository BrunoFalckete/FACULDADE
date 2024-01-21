package com.trabalho.Trabalho.LP2.Bruno.HttpRequest;

import com.trabalho.Trabalho.LP2.Bruno.record.Supplier;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(name = "suppliers", url = "http://localhost:8080")
public interface SupplierRequest {

    @RequestMapping(method = RequestMethod.GET, value = "/suppliers")
    List<Supplier> getSuppliers();

    @RequestMapping(method = RequestMethod.GET, value = "/suppliers/{id}")
    Supplier getSupplierById(@PathVariable("id") Long id);

    @RequestMapping(value = "/suppliers", method = RequestMethod.POST)
    Supplier createSupplier(@RequestBody Supplier supplier);

    @RequestMapping(value = "/suppliers/{id}", method = RequestMethod.PUT)
    Supplier updateSupplier(@PathVariable("id") Long id, @RequestBody Supplier supplier);

    @RequestMapping(value = "/suppliers/{id}", method = RequestMethod.DELETE)
    void deleteSupplier(@PathVariable("id") Long id);
}