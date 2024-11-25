package com.youngrich.oliveold.user.repository;

import com.youngrich.oliveold.domain.User;

public interface UserRepositoryCustom {

    public User findOne(Long id);

}
