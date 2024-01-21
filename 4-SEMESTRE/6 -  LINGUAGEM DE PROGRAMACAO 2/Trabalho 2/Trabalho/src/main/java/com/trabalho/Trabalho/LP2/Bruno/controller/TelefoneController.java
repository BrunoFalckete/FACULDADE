package com.trabalho.Trabalho.LP2.Bruno.controller;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Telefone;
import com.trabalho.Trabalho.LP2.Bruno.service.TelefoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/telefones")
public class TelefoneController {

    private final TelefoneService telefoneService;

    @Autowired
    public TelefoneController(TelefoneService telefoneService) {
        this.telefoneService = telefoneService;
    }

    @PostMapping
    public ResponseEntity<Telefone> salvarTelefone(@RequestBody Telefone telefone) {
        Telefone novoTelefone = telefoneService.salvarTelefone(telefone);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoTelefone);
    }

    @GetMapping
    public ResponseEntity<List<Telefone>> listarTelefones() {
        List<Telefone> telefones = telefoneService.listarTelefones();
        return ResponseEntity.ok(telefones);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Telefone> buscarTelefonePorId(@PathVariable Long id) throws Exception {
        Telefone telefone = telefoneService.buscarTelefonePorId(id);
        return ResponseEntity.ok(telefone);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirTelefone(@PathVariable Long id) {
        telefoneService.excluirTelefone(id);
        return ResponseEntity.noContent().build();
    }
}
