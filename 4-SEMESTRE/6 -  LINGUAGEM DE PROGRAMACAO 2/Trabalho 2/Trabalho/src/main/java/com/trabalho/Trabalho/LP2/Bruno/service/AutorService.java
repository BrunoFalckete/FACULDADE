package com.trabalho.Trabalho.LP2.Bruno.service;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Autor;
import com.trabalho.Trabalho.LP2.Bruno.repository.AutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutorService {

    private final AutorRepository autorRepository;

    @Autowired
    public AutorService(AutorRepository autorRepository) {
        this.autorRepository = autorRepository;
    }

    public Autor salvarAutor(Autor autor) {
        return autorRepository.save(autor);
    }

    public List<Autor> listarAutores() {
        return autorRepository.findAll();
    }

    public Autor buscarAutorPorId(Long id) throws Exception {
        return autorRepository.findById(id)
                .orElseThrow(() -> new Exception("Autor não encontrado com o ID: " + id));
    }

    public void excluirAutor(Long id) {
        autorRepository.deleteById(id);
    }
}