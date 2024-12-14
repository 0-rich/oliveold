package com.youngrich.oliveold.history.repository;

import com.youngrich.oliveold.domain.UserLatest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLatestRepository extends JpaRepository<UserLatest, Long> {
}
