package com.oms.backend.entities;

import java.util.ArrayList;
import java.util.List;

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
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	
	@Column( nullable=false,length=100)
	private String name;
	
	private String email;
	private String address;
	
	public User(int userId, String name, String email, String address, String password, String mob_no) {
		super();
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.address = address;
		this.password = password;
		this.mob_no = mob_no;

	}

	private String password;
	private String mob_no;
	
	@OneToMany(mappedBy = "user",cascade=CascadeType.ALL)
	private List<Order> order= new ArrayList<>();

}
