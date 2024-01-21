package com.trabalho.Trabalho.LP2.Bruno.record;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class Product {

    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
}

