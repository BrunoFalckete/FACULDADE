package com.trabalho.Trabalho.LP2.Bruno.service;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Editora;
import com.trabalho.Trabalho.LP2.Bruno.repository.EditoraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EditoraService {

    private final EditoraRepository editoraRepository;

    @Autowired
    public EditoraService(EditoraRepository editoraRepository) {
        this.editoraRepository = editoraRepository;
    }

    public Editora salvarEditora(Editora editora) {
        return editoraRepository.save(editora);
    }

    public List<Editora> listarEditoras() {
        return editoraRepository.findAll();
    }

    public Editora buscarEditoraPorId(Long id) throws Exception {
        return editoraRepository.findById(id)
                .orElseThrow(() -> new Exception("Editora não encontrada com o ID: " + id));
    }

    public void excluirEditora(Long id) {
        editoraRepository.deleteById(id);
    }
}
