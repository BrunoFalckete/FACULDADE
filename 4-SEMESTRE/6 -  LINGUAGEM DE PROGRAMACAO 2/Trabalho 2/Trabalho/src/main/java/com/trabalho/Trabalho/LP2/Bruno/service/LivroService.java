package com.trabalho.Trabalho.LP2.Bruno.service;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Livro;
import com.trabalho.Trabalho.LP2.Bruno.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivroService {

    private final LivroRepository livroRepository;

    @Autowired
    public LivroService(LivroRepository livroRepository) {
        this.livroRepository = livroRepository;
    }

    public Livro salvarLivro(Livro livro) {
        return livroRepository.save(livro);
    }

    public List<Livro> listarLivros() {
        return livroRepository.findAll();
    }

    public Livro buscarLivroPorId(Long id) throws Exception {
        return livroRepository.findById(id)
                .orElseThrow(() -> new Exception("Livro não encontrado com o ID: " + id));
    }

    public void excluirLivro(Long id) {
        livroRepository.deleteById(id);
    }
}
