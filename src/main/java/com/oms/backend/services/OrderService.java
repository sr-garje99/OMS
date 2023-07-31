package com.oms.backend.services;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oms.backend.entities.Order;
import com.oms.backend.entities.Product;
import com.oms.backend.entities.User;
import com.oms.backend.exceptions.ResourceNotFoundException;
//import com.oms.backend.payloads.OrderDto;
import com.oms.backend.repositories.OrderRepo;
import com.oms.backend.repositories.ProductRepo;
import com.oms.backend.repositories.UserRepo;

@Service
public class OrderService {
	@Autowired
	private OrderRepo orderRepo;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private ProductRepo productRepo;
	
	public OrderService(OrderRepo repo) {
		this.orderRepo=repo;
		
	}
	
	public Order createOrder(Order order,Integer userId,Integer productId) {
		
		User user= this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","userId",userId));
		
		Product product= this.productRepo.findById(productId).orElseThrow(()-> new ResourceNotFoundException("Product","productId",productId));
		
		order.setOrder_date(new Date());
		
		
		order.setUser(user);
		order.setProduct(product);
		
		Order newOrder = this.orderRepo.save(order);
		
		return newOrder;
	}
	
	public Order postOrder(Order order) {
		
		
		order.setOrder_date(new Date());
		
		
		
		Order newOrder = this.orderRepo.save(order);
		
		return newOrder;
	}
	
	public Order postOrderByProduct(Order order,Integer productId) {
		
		
		order.setOrder_date(new Date());
		Product product= this.productRepo.findById(productId).orElseThrow(()-> new ResourceNotFoundException("Product","productId",productId));
		order.setProduct(product);
		
		
		Order newOrder = this.orderRepo.save(order);
		
		return newOrder;
	}

	
	public Order updateOrder(Order order, Integer orderId) {
		// update order
		Order updatedOrder = this.orderRepo.findById(orderId).orElseThrow(()-> new ResourceNotFoundException("Order","orderId",orderId));
		
		
		
//		order.setUser(orderDto.getUser());
//		order.setProduct(orderDto.getProduct());
		updatedOrder.setMobno(order.getMobno());
		updatedOrder.setOrder_status(order.getOrder_status());
		updatedOrder.setOrder_cost(order.getOrder_cost());
		updatedOrder.setQuantity(order.getQuantity());
		updatedOrder.setOrder_date(order.getOrder_date());
		
		
		  
		
		return this.orderRepo.save(updatedOrder);
	
	}

	
	public void deleteOrder(Integer orderId) {
		// TODO Auto-generated method stub
		Order order = this.orderRepo.findById(orderId).orElseThrow(()-> new ResourceNotFoundException("Order","orderId",orderId));
		
		this.orderRepo.delete(order);

	}

	
	public List<Order> getAllOrders() {
		// get all orders
		List<Order> orders = this.orderRepo.findAll();
		
		
		return orders;
	}

	
	public Order getOrderById(Integer orderId) {
		// get order by id
		Order order = this.orderRepo.findById(orderId).orElseThrow(()-> new ResourceNotFoundException("Order","orderId",orderId));
		
		return order;	
		}

	
	public List<Order> getOrderByUser(Integer userId) {
		// get list of orders by userid
		User user = this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));
		
		List<Order> orders = this.orderRepo.findByUser(user);
		
		
		return orders;
	}

	
	public List<Order> getOrderByProduct(Integer productId) {
		// get list of orders by product id
		Product product = this.productRepo.findById(productId).orElseThrow(()-> new ResourceNotFoundException("Prodyct","productId",productId));
		
		List<Order> orders = this.orderRepo.findByProduct(product);
		
		return orders;
	}
	
	public List<Order> getOrderByMobno(String mobno) {
		// get list of orders by userid
		
		
		List<Order> orders = this.orderRepo.findByMobno(mobno);
		
		
		return orders;
	}
	
	


}
