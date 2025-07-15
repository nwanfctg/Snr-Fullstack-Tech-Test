package com.example.usermanagementbackend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @PostMapping("/login")
    public String login() {
        return "Login endpoint (returns JWT)";
    }

    @GetMapping("/login")
    public String loginPage() {
        return "Login endpoint (returns JWT)";
    }
}