package com.oms.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oms.backend.entities.Order;
//import com.oms.backend.payloads.ApiResponse;
//import com.oms.backend.payloads.OrderDto;
//import com.oms.backend.payloads.ProductDto;
//import com.oms.backend.payloads.UserDto;
import com.oms.backend.services.OrderService;
import com.oms.backend.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	//post user
//	@CrossOrigin
//	@PostMapping("/user/{userId}/product/{productId}/")
//	public ResponseEntity<OrderDto> createOrder(
//		 @RequestBody OrderDto orderDto, @PathVariable Integer userId, @PathVariable Integer productId )
//	{
//		OrderDto createOrder = this.orderService.createOrder(orderDto,userId,productId);
//		return new ResponseEntity<OrderDto>(createOrder,HttpStatus.CREATED);
//	}
	
	@CrossOrigin
	@PostMapping("/")
	public ResponseEntity<Order>postOrder(@RequestBody Order order){
		Order newOrder = this.orderService.postOrder(order);
		return new ResponseEntity<Order>(newOrder,HttpStatus.CREATED);
		
	}
	@CrossOrigin
	@PostMapping("/product/{productId}")
	public ResponseEntity<Order>postOrderByproduct(@RequestBody Order order, @PathVariable Integer productId ){
		Order newOrder = this.orderService.postOrderByProduct(order,productId);
		return new ResponseEntity<Order>(newOrder,HttpStatus.CREATED);
		
	}
	
//	@CrossOrigin
//	@GetMapping("/user/{userId}/")
//	public ResponseEntity<List<OrderDto>> getOrderByUser( @PathVariable Integer userId )
//	{
//		List<OrderDto> orders = this.orderService.getOrderByUser(userId);
//		return new ResponseEntity<List<OrderDto>>(orders,HttpStatus.OK);
//	}
	
	@CrossOrigin
	@GetMapping("/product/{productId}/")
	public ResponseEntity<List<Order>> getOrderByProduct( @PathVariable Integer productId )
	{
		List<Order> orders = this.orderService.getOrderByProduct(productId);
		return new ResponseEntity<List<Order>>(orders,HttpStatus.OK);
	}
	
//	@CrossOrigin
//	@DeleteMapping("/{orderId}")
//	public ApiResponse deleteOrder(@PathVariable Integer orderId) {
//		
//		this.orderService.deleteOrder(orderId);
//		return new ApiResponse("Post is deleted succesfully !",true);
//		
//	}
	
	@CrossOrigin
	@PutMapping("/{orderId}")
	public ResponseEntity<Order> updateOrder(@RequestBody Order order,@PathVariable Integer orderId) {
		
		Order updateOrder = this.orderService.updateOrder(order, orderId);
		return new ResponseEntity(updateOrder,HttpStatus.OK);
	}
	//get All orders
			@CrossOrigin
			@GetMapping("/")
			public ResponseEntity<List<Order>> getAllOrders(){
				return ResponseEntity.ok(this.orderService.getAllOrders());
				
			}
			//get All orders
			@CrossOrigin
			@GetMapping("/{orderId}")
			public ResponseEntity<Order> getOrderById(@PathVariable Integer orderId){
				return ResponseEntity.ok(this.orderService.getOrderById(orderId) );
				
			}
			@CrossOrigin
			@GetMapping("/mbn/{mobno}")
			public ResponseEntity<List<Order>> getOrderByMobno(@PathVariable String mobno){
				return ResponseEntity.ok(this.orderService.getOrderByMobno(mobno) );
				
			}
	
	
}
