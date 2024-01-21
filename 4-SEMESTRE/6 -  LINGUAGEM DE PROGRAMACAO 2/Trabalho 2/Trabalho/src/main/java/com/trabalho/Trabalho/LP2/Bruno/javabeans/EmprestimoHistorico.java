package com.trabalho.Trabalho.LP2.Bruno.javabeans;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Livro;
import com.trabalho.Trabalho.LP2.Bruno.javabeans.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmprestimoHistorico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate dataEmprestimo;

    private LocalDate dataDevolucao;

    @ManyToOne
    private Usuario usuario;

    @ManyToOne
    private Livro livro;

}