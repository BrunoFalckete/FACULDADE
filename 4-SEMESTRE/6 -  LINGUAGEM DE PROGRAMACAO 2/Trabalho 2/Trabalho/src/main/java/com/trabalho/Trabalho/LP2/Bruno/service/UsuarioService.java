package com.trabalho.Trabalho.LP2.Bruno.service;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Usuario;
import com.trabalho.Trabalho.LP2.Bruno.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public Usuario salvarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    public Usuario buscarUsuarioPorId(Long id) throws Exception {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new Exception("Usuário não encontrado com o ID: " + id));
    }

    public void excluirUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
}
