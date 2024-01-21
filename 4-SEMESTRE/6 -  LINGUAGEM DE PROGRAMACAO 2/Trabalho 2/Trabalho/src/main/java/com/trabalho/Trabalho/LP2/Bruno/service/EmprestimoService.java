package com.trabalho.Trabalho.LP2.Bruno.service;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Emprestimo;
import com.trabalho.Trabalho.LP2.Bruno.repository.EmprestimoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmprestimoService {

    private final EmprestimoRepository emprestimoRepository;

    @Autowired
    public EmprestimoService(EmprestimoRepository emprestimoRepository) {
        this.emprestimoRepository = emprestimoRepository;
    }

    public Emprestimo salvarEmprestimo(Emprestimo emprestimo) {
        return emprestimoRepository.save(emprestimo);
    }

    public List<Emprestimo> listarEmprestimos() {
        return emprestimoRepository.findAll();
    }

    public Emprestimo buscarEmprestimoPorId(Long id) throws Exception {
        return emprestimoRepository.findById(id)
                .orElseThrow(() -> new Exception("Empréstimo não encontrado com o ID: " + id));
    }

    public void excluirEmprestimo(Long id) {
        emprestimoRepository.deleteById(id);
    }
}
