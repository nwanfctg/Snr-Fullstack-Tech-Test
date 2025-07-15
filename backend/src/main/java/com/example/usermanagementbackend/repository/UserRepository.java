package com.example.usermanagementbackend.repository;

import com.example.usermanagementbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
