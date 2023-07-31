package com.oms.backend.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.oms.backend.entities.Product;
import com.oms.backend.entities.User;
//import com.oms.backend.payloads.ProductDto;
import com.oms.backend.repositories.ProductRepo;
//import com.oms.backend.services.impl.ProductServiceImpl;
//import com.oms.backend.services.impl.UserServiceImpl;

@SpringBootTest(classes= {ProductServiceTest.class})
public class ProductServiceTest {
	@Mock
	private ProductRepo productRepo;
	
//	@Mock
//	private Product product;
	
	@InjectMocks
	private ProductService productService;
	
	@Test
	void getAllProducts() {
		
		this.productService = new ProductService(productRepo);
		productService.getAllProducts();
		verify(productRepo).findAll();
		
	}
	@Test
	void getProductById() {
		
//		
		
	}
	@Test
	void testAddProduct() {
		Product product =new Product(1,"book",10,"","","",2);
		
		when(productRepo.save(product)).thenReturn(product);
		assertEquals(product,productService.createProduct(product));
	}

}
