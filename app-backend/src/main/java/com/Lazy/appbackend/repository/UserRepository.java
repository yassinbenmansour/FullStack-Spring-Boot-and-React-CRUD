package com.Lazy.appbackend.repository;
import com.Lazy.appbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User,Long> {

}
