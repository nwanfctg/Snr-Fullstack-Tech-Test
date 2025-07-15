package com.example.usermanagementbackend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    // Skeleton endpoints

    @PostMapping
    public String createUser() {
        throw new UnsupportedOperationException("Create user endpoint not implemented yet");
    }

    @GetMapping
    public String getAllUsers() {
        throw new UnsupportedOperationException("Get all users endpoint not implemented yet");
    }

    @GetMapping("/{id}")
    public String getUserById(@PathVariable Long id) {
        throw new UnsupportedOperationException("Get user by ID endpoint not implemented yet");
    }

    @PutMapping("/{id}")
    public String updateUser(@PathVariable Long id) {
        throw new UnsupportedOperationException("Update user endpoint not implemented yet");
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        throw new UnsupportedOperationException("Delete user endpoint not implemented yet");
    }
}