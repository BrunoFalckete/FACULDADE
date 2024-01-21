package com.trabalho.Trabalho.LP2.Bruno.service;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Funcionario;
import com.trabalho.Trabalho.LP2.Bruno.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {

    private final FuncionarioRepository funcionarioRepository;

    @Autowired
    public FuncionarioService(FuncionarioRepository funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
    }

    public Funcionario salvarFuncionario(Funcionario funcionario) {
        return funcionarioRepository.save(funcionario);
    }

    public List<Funcionario> listarFuncionarios() {
        return funcionarioRepository.findAll();
    }

    public Funcionario buscarFuncionarioPorId(Long id) throws Exception {
        return funcionarioRepository.findById(id)
                .orElseThrow(() -> new Exception("Funcionário não encontrado com o ID: " + id));
    }

    public void excluirFuncionario(Long id) {
        funcionarioRepository.deleteById(id);
    }
}
