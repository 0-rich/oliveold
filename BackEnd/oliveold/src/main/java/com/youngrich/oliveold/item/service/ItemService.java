package com.youngrich.oliveold.item.service;

import com.youngrich.oliveold.domain.Item;
import com.youngrich.oliveold.item.dto.SearchItemInfo;
import com.youngrich.oliveold.item.dto.SearchItemKeyword;
import com.youngrich.oliveold.item.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ItemService {

    private final ItemRepository itemRepository;

    // 1. 상품 검색
    public List<SearchItemInfo> getSearchItemInfo(SearchItemKeyword searchItemKeyword) {
        // 검색어를 포함하는 모든 상품 조회
        List<Item> items = itemRepository.searchByContent(searchItemKeyword.getKeyword());

        if(items.isEmpty()) throw new IllegalArgumentException("검색어에 해당하는 상품이 없습니다.");

        // Dto 반환
        List<SearchItemInfo> searchItemInfos = new ArrayList<>();
        for(Item item : items){
            SearchItemInfo searchItemInfo = SearchItemInfo.builder()
                    .itemSeq(item.getItemSeq())
                    .category(item.getCategory())
                    .itemName(item.getItemName())
                    .itemImg(item.getItemImg())
                    .itemDetailImg(item.getItemDetailImg())
                    .price(item.getPrice())
                    .build();
            searchItemInfos.add(searchItemInfo);
        }
        return searchItemInfos;

    }


    // 2. 상품 상세 조회
    public SearchItemInfo getSearchItemOneInfo(Long itemSeq){
        // 상품 조회
        Item item = itemRepository.findByItemSeq(itemSeq).orElseThrow(() -> new IllegalArgumentException("상품 정보가 없습니다."));

        // Dto 반환
        return SearchItemInfo.builder()
                .itemSeq(item.getItemSeq())
                .category(item.getCategory())
                .itemName(item.getItemName())
                .itemImg(item.getItemImg())
                .itemDetailImg(item.getItemDetailImg())
                .price(item.getPrice())
                .build();
    }

}
