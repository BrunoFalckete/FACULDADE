package com.trabalho.Trabalho.LP2.Bruno.HttpRequest;

import com.trabalho.Trabalho.LP2.Bruno.record.Role;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "roles", url = "http://localhost:8080")
public interface RoleRequest {

    @GetMapping("/roles")
    List<Role> getRoles();

    @GetMapping("/roles/{id}")
    Role getRoleById(@PathVariable("id") Long id);

    @PostMapping("/roles")
    Role createRole(@RequestBody Role role);

    @PutMapping("/roles/{id}")
    Role updateRole(@PathVariable("id") Long id, @RequestBody Role role);

    @DeleteMapping("/roles/{id}")
    void deleteRole(@PathVariable("id") Long id);
}
