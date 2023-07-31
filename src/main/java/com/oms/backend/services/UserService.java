package com.oms.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oms.backend.entities.User;
import com.oms.backend.exceptions.ResourceNotFoundException;
//import com.oms.backend.payloads.LoginRequestDto;
import com.oms.backend.repositories.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	public UserService(UserRepo repo) {
		this.userRepo =repo;
	}
	
public User createUser(User user) {
		
		
		User savedUser = this.userRepo.save(user);
		
		return savedUser;
	}
public User updateUser(User user, Integer userId) {

	User updatedUser= this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));
	
	updatedUser.setName(user.getName());
	updatedUser.setAddress(user.getAddress());
	updatedUser.setEmail(user.getEmail());
	updatedUser.setPassword(user.getPassword());
	
	 
	return this.userRepo.save(updatedUser);
	
}
public User getUserById(Integer userId) {
	
	User user = this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));
	
	return user;
}
public List<User> getAllUsers() {
	
	List<User> users = this.userRepo.findAll();
	
	//List<User> userDtos = users.stream().map(user -> this.userToDto(user)).collect(Collectors.toList());
	
	return users;
}
public void deleteUser(Integer userId) {
	
	User user = this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));
	
	this.userRepo.delete(user);
}
public User login(User user) {
	// user log in
	 User loginUser = this.userRepo.findByEmailAndPassword(user.getEmail(),user.getPassword());
	
	return loginUser;
}

}
