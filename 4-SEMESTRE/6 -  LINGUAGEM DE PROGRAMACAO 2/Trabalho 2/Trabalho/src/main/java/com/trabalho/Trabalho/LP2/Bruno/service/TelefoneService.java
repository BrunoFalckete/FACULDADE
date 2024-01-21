package com.trabalho.Trabalho.LP2.Bruno.service;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Telefone;
import com.trabalho.Trabalho.LP2.Bruno.repository.TelefoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TelefoneService {

    private final TelefoneRepository telefoneRepository;

    @Autowired
    public TelefoneService(TelefoneRepository telefoneRepository) {
        this.telefoneRepository = telefoneRepository;
    }

    public Telefone salvarTelefone(Telefone telefone) {
        return telefoneRepository.save(telefone);
    }

    public List<Telefone> listarTelefones() {
        return telefoneRepository.findAll();
    }

    public Telefone buscarTelefonePorId(Long id) throws Exception {
        return telefoneRepository.findById(id)
                .orElseThrow(() -> new Exception("Telefone não encontrado com o ID: " + id));
    }

    public void excluirTelefone(Long id) {
        telefoneRepository.deleteById(id);
    }
}
