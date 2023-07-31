package com.oms.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oms.backend.entities.Order;
import com.oms.backend.entities.Product;
import com.oms.backend.entities.User;


public interface OrderRepo extends JpaRepository<Order, Integer> {

	List<Order> findByUser(User user);
	List<Order> findByProduct(Product product);
	List<Order> findByMobno(String mobno);
}
