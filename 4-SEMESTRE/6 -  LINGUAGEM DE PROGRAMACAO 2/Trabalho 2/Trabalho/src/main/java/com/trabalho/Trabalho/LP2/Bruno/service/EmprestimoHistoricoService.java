package com.trabalho.Trabalho.LP2.Bruno.service;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.EmprestimoHistorico;
import com.trabalho.Trabalho.LP2.Bruno.repository.EmprestimoHistoricoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmprestimoHistoricoService {

    private final EmprestimoHistoricoRepository emprestimoHistoricoRepository;

    @Autowired
    public EmprestimoHistoricoService(EmprestimoHistoricoRepository emprestimoHistoricoRepository) {
        this.emprestimoHistoricoRepository = emprestimoHistoricoRepository;
    }

    public EmprestimoHistorico salvarEmprestimoHistorico(EmprestimoHistorico emprestimoHistorico) {
        return emprestimoHistoricoRepository.save(emprestimoHistorico);
    }

    public List<EmprestimoHistorico> listarEmprestimosHistoricos() {
        return emprestimoHistoricoRepository.findAll();
    }

    public EmprestimoHistorico buscarEmprestimoHistoricoPorId(Long id) throws Exception {
        return emprestimoHistoricoRepository.findById(id)
                .orElseThrow(() -> new Exception("Histórico de Empréstimo não encontrado com o ID: " + id));
    }

    public void excluirEmprestimoHistorico(Long id) {
        emprestimoHistoricoRepository.deleteById(id);
    }
}
