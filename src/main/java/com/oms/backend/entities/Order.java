package com.oms.backend.entities;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Table(name="orders")
@Getter
@Setter
@NoArgsConstructor
public class Order {
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderId;
	
	//@Column( nullable=false,length=100)
	private String order_status;
	
	//@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date order_date;
	
	private int order_cost;
	private int quantity;
	private String mobno;
	private String address;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name="product_id")
	private Product product;
	
	public Order(int orderId, String order_status, Date order_date, int order_cost, int quantity, String mob_no,
			String address) {
		super();
		this.orderId = orderId;
		this.order_status = order_status;
		this.order_date = order_date;
		this.order_cost = order_cost;
		this.quantity = quantity;
		this.mobno = mobno;
		this.address = address;
	}

	@ManyToOne
	@JsonIgnore
	@JoinColumn(name="user_id")
	private User user;

}
