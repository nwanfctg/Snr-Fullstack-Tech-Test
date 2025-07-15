package com.example.usermanagementbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "privileges")
public class Privilege {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String name; // e.g., CREATE_USER, READ_USER

    // Getters, setters, constructors omitted for brevity
}