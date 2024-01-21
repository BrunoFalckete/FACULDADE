package com.trabalho.Trabalho.LP2.Bruno.controller;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Editora;
import com.trabalho.Trabalho.LP2.Bruno.service.EditoraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/editoras")
public class EditoraController {

    private final EditoraService editoraService;

    @Autowired
    public EditoraController(EditoraService editoraService) {
        this.editoraService = editoraService;
    }

    @PostMapping
    public ResponseEntity<Editora> salvarEditora(@RequestBody Editora editora) {
        Editora novaEditora = editoraService.salvarEditora(editora);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaEditora);
    }

    @GetMapping
    public ResponseEntity<List<Editora>> listarEditoras() {
        List<Editora> editoras = editoraService.listarEditoras();
        return ResponseEntity.ok(editoras);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Editora> buscarEditoraPorId(@PathVariable Long id) throws Exception {
        Editora editora = editoraService.buscarEditoraPorId(id);
        return ResponseEntity.ok(editora);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirEditora(@PathVariable Long id) {
        editoraService.excluirEditora(id);
        return ResponseEntity.noContent().build();
    }
}
