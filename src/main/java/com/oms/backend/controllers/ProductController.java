package com.oms.backend.controllers;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.oms.backend.entities.Product;
//import com.oms.backend.payloads.ApiResponse;
//import com.oms.backend.payloads.FileResponse;
//import com.oms.backend.payloads.ProductDto;
//import com.oms.backend.payloads.UserDto;
import com.oms.backend.services.FileService;
import com.oms.backend.services.ProductService;
import com.oms.backend.services.UserService;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins="http://localhost:3000",allowedHeaders="*")
@RequestMapping("/api/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
//	@Autowired
//	private FileService fileService;
//	@Value("${project.image}")
//	private String path;
	
	//post user
	@CrossOrigin(origins="*",allowedHeaders="*")
	@PostMapping("/")
	public ResponseEntity<Product> createProduct( @RequestBody Product product){
		Product createProduct = this.productService.createProduct(product);
		return new ResponseEntity<>(createProduct,HttpStatus.CREATED);
	}
	//put product
		@CrossOrigin
		@PutMapping("/{productId}")
		public ResponseEntity<Product> updateProduct(@RequestBody Product product,@PathVariable("productId")  Integer pid){
			Product updatedProduct = this.productService.updateProduct(product,pid);
			return  ResponseEntity.ok(updatedProduct);
		}
		
		//delete product
//		@CrossOrigin
//		@DeleteMapping("/{productId}")
//		public ResponseEntity<ApiResponse> deleteProduct(@PathVariable("productId")  Integer pid){
//			this.productService.deleteProduct(pid);
//			return  new ResponseEntity<ApiResponse>(new ApiResponse("Product deleted sucessfully !",true),HttpStatus.OK);
//		}
		
		//get All users
		@CrossOrigin
		@GetMapping("/")
		public ResponseEntity<List<Product>> getAllProducts(){
			return ResponseEntity.ok(this.productService.getAllProducts());
			
		}
		
		//get single user
		@CrossOrigin
		@GetMapping("/{productId}")
		public ResponseEntity<Product> getSingleProduct(@PathVariable("productId")  Integer pid){
			return ResponseEntity.ok(this.productService.getProductById(pid));
		}
		
//		@PostMapping("/image/upload/{productId}")
//		public ResponseEntity<Product> uploadProductImage(
//				@RequestParam("image") MultipartFile image,
//				@PathVariable Integer productId
//				){
//			String fileName=null;
//			Product product=this.productService.getProductById(productId);
//			try {
//				  fileName = this.fileService.uploadImage(path,image);
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//				return new ResponseEntity<Product>(product,HttpStatus.INTERNAL_SERVER_ERROR);
//				//return new ResponseEntity<>(new FileResponse(null,"Image not uploaded due to error on server !"),HttpStatus.INTERNAL_SERVER_ERROR);
//			}		
//			product.setImage(fileName);
//			Product updatedProduct = this.productService.updateProduct(product, productId);
//			//return null;
//			return new ResponseEntity<Product>(updatedProduct,HttpStatus.OK);
//	
//			
//		}
//		
//		@GetMapping(value="/product/{imageName}",produces= MediaType.IMAGE_JPEG_VALUE)
//		public void downloadImage
//		(	@PathVariable("imageName") String imageName,
//				HttpServletResponse response
//				) throws IOException{
//			InputStream resource = this.fileService.getResource(path, imageName);
//			response.setContentType(MediaType.IMAGE_JPEG_VALUE);
//			StreamUtils.copy(resource, response.getOutputStream());
//			
//		}

}
