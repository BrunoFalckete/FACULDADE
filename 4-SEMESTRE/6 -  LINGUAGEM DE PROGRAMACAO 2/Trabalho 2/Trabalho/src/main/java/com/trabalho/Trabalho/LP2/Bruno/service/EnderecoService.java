package com.trabalho.Trabalho.LP2.Bruno.service;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Endereco;
import com.trabalho.Trabalho.LP2.Bruno.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnderecoService {

    private final EnderecoRepository enderecoRepository;

    @Autowired
    public EnderecoService(EnderecoRepository enderecoRepository) {
        this.enderecoRepository = enderecoRepository;
    }

    public Endereco salvarEndereco(Endereco endereco) {
        return enderecoRepository.save(endereco);
    }

    public List<Endereco> listarEnderecos() {
        return enderecoRepository.findAll();
    }

    public Endereco buscarEnderecoPorId(Long id) throws Exception {
        return enderecoRepository.findById(id)
                .orElseThrow(() -> new Exception("Endereço não encontrado com o ID: " + id));
    }

    public void excluirEndereco(Long id) {
        enderecoRepository.deleteById(id);
    }
}
