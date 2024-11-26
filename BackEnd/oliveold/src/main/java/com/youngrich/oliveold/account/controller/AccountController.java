package com.youngrich.oliveold.account.controller;

import com.youngrich.oliveold.account.dto.request.AccountInfoDto;
import com.youngrich.oliveold.account.dto.request.AccountSeqInfo;
import com.youngrich.oliveold.account.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountService accountService;

    // 1. 빠른 결제 계좌 등록
    @PostMapping()
    public ResponseEntity<?> registAccount(@RequestBody AccountInfoDto accountInfo, Authentication authentication){
        try{
            accountService.registAccount(accountInfo, authentication);
            return ResponseEntity.status(HttpStatus.OK).build();
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 2. 빠른 결제 대표 계좌 조회
    @GetMapping()
    public AccountInfoDto getPrimaryAccount(Authentication authentication){
        try{
            return accountService.getPrimaryAccount(authentication);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 3. 빠른 결제 전체 계좌 조회
    @GetMapping("/all")
    public List<AccountInfoDto> getAllAccount(Authentication authentication){
        try{
            return accountService.getAllAccount(authentication);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 4. 빠른 결제 계좌 삭제
    @DeleteMapping()
    public ResponseEntity<?> deleteAccount(@RequestBody AccountSeqInfo accountSeqInfo, Authentication authentication){
        try{
            accountService.deleteAccount(accountSeqInfo, authentication);
            return ResponseEntity.status(HttpStatus.OK).build();
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // 5. 대표 결제 계좌 설정
    @PostMapping("/primary")
    public ResponseEntity<?> setPrimaryAccount(@RequestBody AccountSeqInfo accountSeqInfo, Authentication authentication){
        try{
            accountService.setPrimaryAccount(accountSeqInfo, authentication);
            return ResponseEntity.status(HttpStatus.OK).build();
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
