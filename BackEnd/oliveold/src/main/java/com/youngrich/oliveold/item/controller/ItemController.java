package com.youngrich.oliveold.item.controller;

import com.youngrich.oliveold.item.dto.SearchItemInfo;
import com.youngrich.oliveold.item.dto.SearchItemKeyword;
import com.youngrich.oliveold.item.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/items")
public class ItemController {

    private final ItemService itemService;

    // 1. 상품 검색
    @GetMapping()
    public List<SearchItemInfo> getSearchItemInfo(@RequestBody SearchItemKeyword searchItemKeyword){
        try{
            return itemService.getSearchItemInfo(searchItemKeyword);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 2. 상품 상세 조회

}
