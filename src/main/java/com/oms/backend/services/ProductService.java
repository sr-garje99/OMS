package com.oms.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.oms.backend.entities.Product;
import com.oms.backend.exceptions.ResourceNotFoundException;
//import com.oms.backend.payloads.ProductDto;
import com.oms.backend.repositories.ProductRepo;

@Service
public class ProductService {
	@Autowired
	private ProductRepo productRepo;
	
	public ProductService(ProductRepo repo) {
		this.productRepo=repo;
		
	}
	
public Product createProduct(@RequestBody Product product) {
		
		//product.setImage("/D:/OMS/Front/public/images/zenbook.jpg");
		Product newProduct = this.productRepo.save(product);
		return newProduct;
	}
public Product updateProduct(Product product, Integer productId) {
	
	 Product updatedProduct =  this.productRepo.findById(productId).orElseThrow(()-> new ResourceNotFoundException("Product","productId",productId));
	
	 updatedProduct.setName(product.getName());
	 updatedProduct.setAvailability(product.getAvailability());
	 updatedProduct.setDescription(product.getDescription());
	 updatedProduct.setImage(product.getImage());
	 updatedProduct.setPrice(product.getPrice());
	 updatedProduct.setStock(product.getStock());
	
	
	
	return  this.productRepo.save(updatedProduct);
	
	
}
public void deleteProduct(Integer productId) {
	// delete product
	Product product = this.productRepo.findById(productId).orElseThrow(()-> new ResourceNotFoundException("Product","productId",productId));
			
	this.productRepo.delete(product);
}
public Product getProductById(Integer productId) {
	// get product by id
	Product product = this.productRepo.findById(productId).orElseThrow(()-> new ResourceNotFoundException("Prodyct","productId",productId));
	
	return product;
}
public List<Product> getAllProducts() {
	// get list of all products
	List<Product> products = this.productRepo.findAll();
	
	
	return products;
}


}
