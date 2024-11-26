package com.youngrich.oliveold.account.repository;

import com.youngrich.oliveold.domain.Account;
import com.youngrich.oliveold.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long>, AccountRepositoryCustom {

    public List<Account> findByUser(User user);

}
