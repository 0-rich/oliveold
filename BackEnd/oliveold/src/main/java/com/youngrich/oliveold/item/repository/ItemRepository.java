package com.youngrich.oliveold.item.repository;

import com.youngrich.oliveold.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long>, ItemRepositoryCustom {

    Optional<Item> findByItemSeq(Long itemSeq);

}
