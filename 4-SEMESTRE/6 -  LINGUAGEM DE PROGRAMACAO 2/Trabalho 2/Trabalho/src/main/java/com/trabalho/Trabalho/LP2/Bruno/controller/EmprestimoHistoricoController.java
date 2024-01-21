package com.trabalho.Trabalho.LP2.Bruno.controller;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.EmprestimoHistorico;
import com.trabalho.Trabalho.LP2.Bruno.service.EmprestimoHistoricoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/emprestimos-historicos")
public class EmprestimoHistoricoController {

    private final EmprestimoHistoricoService emprestimoHistoricoService;

    @Autowired
    public EmprestimoHistoricoController(EmprestimoHistoricoService emprestimoHistoricoService) {
        this.emprestimoHistoricoService = emprestimoHistoricoService;
    }

    @PostMapping
    public ResponseEntity<EmprestimoHistorico> salvarEmprestimoHistorico(@RequestBody EmprestimoHistorico emprestimoHistorico) {
        EmprestimoHistorico novoEmprestimoHistorico = emprestimoHistoricoService.salvarEmprestimoHistorico(emprestimoHistorico);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoEmprestimoHistorico);
    }

    @GetMapping
    public ResponseEntity<List<EmprestimoHistorico>> listarEmprestimosHistoricos() {
        List<EmprestimoHistorico> emprestimosHistoricos = emprestimoHistoricoService.listarEmprestimosHistoricos();
        return ResponseEntity.ok(emprestimosHistoricos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmprestimoHistorico> buscarEmprestimoHistoricoPorId(@PathVariable Long id) throws Exception {
        EmprestimoHistorico emprestimoHistorico = emprestimoHistoricoService.buscarEmprestimoHistoricoPorId(id);
        return ResponseEntity.ok(emprestimoHistorico);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirEmprestimoHistorico(@PathVariable Long id) {
        emprestimoHistoricoService.excluirEmprestimoHistorico(id);
        return ResponseEntity.noContent().build();
    }
}