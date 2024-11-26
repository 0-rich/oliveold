package com.youngrich.oliveold.account.service;

import com.youngrich.oliveold.account.dto.request.AccountInfoDto;
import com.youngrich.oliveold.account.dto.request.DeleteAccountInfo;
import com.youngrich.oliveold.account.repository.AccountRepository;
import com.youngrich.oliveold.domain.Account;
import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class AccountService {

    private final UserRepository userRepository;
    private final AccountRepository accountRepository;

    // 1. 빠른 결제 계좌 등록
    public void registAccount(AccountInfoDto accountInfo, Authentication authentication) {
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElse(null);
        if(user != null){
            Account account = Account.builder()
                    .accountNumber(accountInfo.getAccountNumber())
                    .bank(accountInfo.getBank())
                    .user(user)
                    .repAccount(false)
                    .build();
            accountRepository.save(account);
        }else{
            throw new IllegalArgumentException("회원 정보가 없습니다");
        }
    }

    // 2. 빠른 결제 대표 계좌 조회
    public AccountInfoDto getPrimaryAccount(Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 대표 계좌 조회
        Account account = accountRepository.findOne(user.getUserSeq());
        if(account == null) throw new IllegalArgumentException("대표 계좌 정보가 없습니다.");
        // Dto 반환
        return new AccountInfoDto(account.getAccountSeq(), account.getAccountNumber(), account.getBank(), account.isRepAccount());
    }

    // 3. 빠른 결제 전체 계좌 조회
    public List<AccountInfoDto> getAllAccount(Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 전체 계좌 조회
        List<Account> accounts = accountRepository.findByUser(user);
        if(accounts.isEmpty()) throw new IllegalArgumentException("계좌 정보가 없습니다.");
        //Dto 반환
        List<AccountInfoDto> accountInfoDtos = new ArrayList<>();
        for(Account account : accounts){
            AccountInfoDto accountInfoDto = AccountInfoDto.builder()
                    .accountSeq(account.getAccountSeq())
                    .accountNumber(account.getAccountNumber())
                    .bank(account.getBank())
                    .repAccount(account.isRepAccount())
                    .build();
            accountInfoDtos.add(accountInfoDto);
        }
        return accountInfoDtos;
    }

    // 4. 빠른 결제 계좌 삭제
    public void deleteAccount(DeleteAccountInfo deleteAccountInfo, Authentication authentication) {
        // 회원 정보 조회
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElseThrow(() -> new IllegalArgumentException("회원 정보가 없습니다."));
        // 계좌 조회
        Account account = accountRepository.findByIdAndUserId(deleteAccountInfo.getAccountSeq(), user.getUserSeq()).orElseThrow(() -> new IllegalArgumentException("계좌 정보를 찾을 수 없거나 권한이 없습니다."));
        // 계좌 삭제
        accountRepository.delete(account);
    }


    // 5. 대표 결제 계좌 설정

}
