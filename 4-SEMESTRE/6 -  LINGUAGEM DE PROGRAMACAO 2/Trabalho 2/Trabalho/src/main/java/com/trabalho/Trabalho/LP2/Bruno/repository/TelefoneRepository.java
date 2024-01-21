package com.trabalho.Trabalho.LP2.Bruno.repository;

import com.trabalho.Trabalho.LP2.Bruno.javabeans.Telefone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TelefoneRepository extends JpaRepository<Telefone, Long> {

}
