package com.trabalho.Trabalho.LP2.Bruno;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.*;
import com.trabalho.Trabalho.LP2.Bruno.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;

@Component
public class DataLoader implements CommandLineRunner {

    private final AutorRepository autorRepository;
    private final EditoraRepository editoraRepository;
    private final LivroRepository livroRepository;
    private final UsuarioRepository usuarioRepository;

    private final EnderecoRepository enderecoRepository;
    private final FuncionarioRepository funcionarioRepository;
    private final EmprestimoRepository emprestimoRepository;


    private final TelefoneRepository telefoneRepository;

    @Autowired
    public DataLoader(AutorRepository autorRepository, EditoraRepository editoraRepository,
                      LivroRepository livroRepository, UsuarioRepository usuarioRepository, EnderecoRepository enderecoRepository, FuncionarioRepository funcionarioRepository, EmprestimoRepository emprestimoRepository, TelefoneRepository telefoneRepository) {
        this.autorRepository = autorRepository;
        this.editoraRepository = editoraRepository;
        this.livroRepository = livroRepository;
        this.usuarioRepository = usuarioRepository;
        this.enderecoRepository = enderecoRepository;
        this.funcionarioRepository = funcionarioRepository;
        this.emprestimoRepository = emprestimoRepository;
        this.telefoneRepository = telefoneRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        popularAutores();
        popularEditoras();
        popularLivros();
        popularUsuarios();
        carregarEnderecos();
        carregarFuncionarios();
        carregarEmprestimos();
        carregarTelefone();
    }

    private void popularAutores() {
        Autor autor1 = Autor.builder()
                .nome("João Silva")
                .email("joao@example.com")
                .build();
        Autor autor2 = Autor.builder()
                .nome("Maria Santos")
                .email("maria@example.com")
                .build();

        autorRepository.saveAll(Arrays.asList(autor1, autor2));
    }

    private void popularEditoras() {
        Editora editora1 = Editora.builder()
                .nome("Editora A")
                .endereco("Rua A, 123")
                .build();
        Editora editora2 = Editora.builder()
                .nome("Editora B")
                .endereco("Rua B, 456")
                .build();

        editoraRepository.saveAll(Arrays.asList(editora1, editora2));
    }

    private void popularLivros() {

        Livro livro1 = Livro.builder()
                .titulo("Livro 1")
                .disponivel(true)
                .build();
        Livro livro2 = Livro.builder()
                .titulo("Livro 2")
                .disponivel(false)
                .build();

        livroRepository.saveAll(Arrays.asList(livro1, livro2));
    }

    private void popularUsuarios() {
        Usuario usuario1 = Usuario.builder()
                .nome("Fulano de Tal")
                .email("fulano@example.com")
                .build();
        Usuario usuario2 = Usuario.builder()
                .nome("Ciclano da Silva")
                .email("ciclano@example.com")
                .build();

        usuarioRepository.saveAll(Arrays.asList(usuario1, usuario2));
    }


    private void carregarEnderecos() {
        for (int i = 1; i <= 10; i++) {
            Endereco endereco = Endereco.builder()
                    .nomeRua("Rua " + i)
                    .build();
            enderecoRepository.save(endereco);
        }
    }

    private void carregarFuncionarios() {
        for (int i = 1; i <= 10; i++) {
            Funcionario funcionario = Funcionario.builder()
                    .nome("Funcionário " + i)
                    .email("funcionario" + i + "@example.com")
                    .senha("senha" + i)
                    .build();
            funcionarioRepository.save(funcionario);
        }
    }

    private void carregarEmprestimos() {
        for (int i = 1; i <= 10; i++) {
            Emprestimo emprestimo = Emprestimo.builder()
                    .dataEmprestimo(LocalDate.now())
                    .dataDevolucao(LocalDate.now().plusDays(7))
                    .build();
            emprestimoRepository.save(emprestimo);
        }
    }

    private void carregarTelefone(){
        for (int i = 1; i <= 10; i++) {
            Telefone telefone = Telefone.builder()
                    .numero("Telefone " + i)
                    .build();
            telefoneRepository.save(telefone);
        }
    }

}
