package com.oms.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oms.backend.entities.User;

public interface UserRepo extends JpaRepository<User,Integer> {

	User findByEmailAndPassword(String email, String password);

}
