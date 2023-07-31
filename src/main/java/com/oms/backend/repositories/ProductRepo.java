package com.oms.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oms.backend.entities.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

}
