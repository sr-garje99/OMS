package com.oms.backend.services;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import com.oms.backend.repositories.OrderRepo;
//import com.oms.backend.services.impl.OrderServiceImpl;

@SpringBootTest(classes= {OrderServiceTest.class})
public class OrderServiceTest {
	
	@Mock
	private OrderRepo orderRepo;
	
	@InjectMocks
	private OrderService orderService;
	
	@Test
	void getAllOrders() {
		
		this.orderService = new OrderService(orderRepo);
		orderService.getAllOrders();
		verify(orderRepo).findAll();
		
		
	}
	@Test 
	void addOrder(){
		
	}

}
