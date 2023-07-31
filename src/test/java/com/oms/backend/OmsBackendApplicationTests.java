package com.oms.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.oms.backend.entities.User;
import com.oms.backend.repositories.UserRepo;
import com.oms.backend.services.UserService;

@SpringBootTest
class OmsBackendApplicationTests {

	@Mock
	UserRepo userRepo;
	
	@InjectMocks
	UserService userService;
	
	public List<User>myUsers;
	
	@Test
	@Order(1)
	public void testGetAllUsers() {
		
		List<User> myUsers=new ArrayList<User>();
		
		myUsers.add(new User(1,"shiv","shiv@mail.com","meluha","12345678","9561660687"));
		myUsers.add(new User(2,"shani","shani@mail.com","meluha","12345678","9561660687"));
		
		
		when(userRepo.findAll()).thenReturn(myUsers);
		assertEquals(2,userService.getAllUsers().size());
	}
	@Test 
	@Order(2)
	void testGetUserById() {
		
		List<User> myUsers=new ArrayList<User>();
		myUsers.add(new User(1,"shiv","shiv@mail.com","meluha","12345678","9561660687"));
		myUsers.add(new User(2,"shani","shani@mail.com","meluha","12345678","9561660687"));
		
		int userId=2;
		when(userRepo.findAll()).thenReturn(myUsers);
		assertEquals(2,userService.getAllUsers().size());
		//assertEquals(2,userService.getUserById(userId).getUserId());
		
	}
	@Test 
	@Order(2)
	void testAddUser() {
		
		User user =new User(1,"shiv","shiv@mail.com","meluha","12345678","9561660687");
		
		when(userRepo.save(user)).thenReturn(user);
		assertEquals(user,userService.createUser(user));
		//assertEquals(2,userService.getUserById(userId).getUserId());
		
	}

}
