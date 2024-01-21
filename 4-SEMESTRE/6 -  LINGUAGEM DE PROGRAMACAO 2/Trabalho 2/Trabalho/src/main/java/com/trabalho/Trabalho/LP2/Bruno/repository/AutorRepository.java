package com.trabalho.Trabalho.LP2.Bruno.repository;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Autor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutorRepository extends JpaRepository<Autor, Long> {

}