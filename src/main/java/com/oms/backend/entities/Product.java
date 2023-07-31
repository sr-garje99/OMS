package com.oms.backend.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="product")
@Getter
@Setter
@NoArgsConstructor
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int productId;
	
	@Column( nullable=false,length=100)
	private String name;
	
	private int price;
	private String description;
	
	public Product(int productId, String name, int price, String description, String image, String availability,
			int stock) {
		super();
		this.productId = productId;
		this.name = name;
		this.price = price;
		this.description = description;
		this.image = image;
		this.availability = availability;
		this.stock = stock;
	}

	private String image;
	
	private String availability;
	private int stock;
	
	@JsonIgnore
	@OneToMany(mappedBy = "product",cascade=CascadeType.ALL)
	private List<Order> order= new ArrayList<>();


}
