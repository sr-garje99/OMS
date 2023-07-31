package com.oms.backend.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.oms.backend.entities.User;
//import com.oms.backend.payloads.ApiResponse;
//import com.oms.backend.payloads.LoginRequestDto;
//import com.oms.backend.payloads.UserDto;
import com.oms.backend.services.UserService;

import jakarta.validation.Valid;

@CrossOrigin(origins="http://localhost:3000",allowedHeaders="*")
@RestController
@RequestMapping(value="/api/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	//post user
	@CrossOrigin(origins="*",allowedHeaders="*")
	@PostMapping("/")
	//@RequestMapping(value = "/api/users/", method = RequestMethod.POST, headers = "Accept=application/json")
	public ResponseEntity<User> createUser( @Valid @RequestBody User user){
		User createdUser = this.userService.createUser(user);
		return new ResponseEntity<>(createdUser,HttpStatus.CREATED);
	}
	
	//put user
	@CrossOrigin("*")
	@PutMapping("/{userId}")
	public ResponseEntity<User> updateUser(@Valid @RequestBody User user,@PathVariable("userId")  Integer uid){
		User updatedUser = this.userService.updateUser(user,uid);
		return  ResponseEntity.ok(updatedUser);
	}
	
	//delete user
//	@CrossOrigin
//	@DeleteMapping("/{userId}")
//	public ResponseEntity<ApiResponse> deleteUser(@PathVariable("userId")  Integer uid){
//		this.userService.deleteUser(uid);
//		return  new ResponseEntity<ApiResponse>(new ApiResponse("User deleted sucessfully !",true),HttpStatus.OK);
//	}
	
	//get All users
	@CrossOrigin
	@GetMapping("/")
	public ResponseEntity<List<User>> getAllUsers(){
		return ResponseEntity.ok(this.userService.getAllUsers());
		
	}
	
	//get single user
	@CrossOrigin
	@GetMapping("/{userId}")
	public ResponseEntity<User> getSingleUser(@PathVariable("userId")  Integer uid){
		return ResponseEntity.ok(this.userService.getUserById(uid));
	}
	@CrossOrigin
	@PostMapping("/login")
	public ResponseEntity<User> getSingleUserByEmail(@RequestBody User user){
		User loginUser = this.userService.login(user);
//		ApiResponse apiResponse = new ApiResponse();
//		if(user == null) {
//			
//			return  new ResponseEntity<ApiResponse>(new ApiResponse("User login failed !",false),HttpStatus.BAD_REQUEST);
//		}else {
//		
//			return  new ResponseEntity<ApiResponse>(new ApiResponse("User logged in sucessfully !",true),HttpStatus.OK);
//			
//		}
	//}
	return ResponseEntity.ok(loginUser);
	}
}
