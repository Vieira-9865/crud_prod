package com.example.springboot.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.*;


import java.io.Serializable;
import java.io.StreamTokenizer;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "TB_PRODUCTS")
public class ProductModel implements Serializable {
    private static final long serialVersionUID = 1L;

    public UUID getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(UUID idProduct) {
        this.idProduct = idProduct;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getValue() {
        return value;
    }

    public void setValue(BigDecimal value) {
        this.value = value;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;

    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private UUID idProduct;
    private String name;
    private BigDecimal value;
    private String description;
}
