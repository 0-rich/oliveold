package com.youngrich.oliveold.user.service;

import com.youngrich.oliveold.domain.User;
import com.youngrich.oliveold.user.dto.Request.PaymentInfoDto;
import com.youngrich.oliveold.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class PayService {

    private final UserRepository userRepository;

    // 5. 결제 비밀번호 생성
    // 6. 결제 비밀번호 수정
    public void createPinPw(PaymentInfoDto paymentInfoDto, Authentication authentication) {
        User user = userRepository.findById(Long.parseLong(authentication.getName())).orElse(null);
        if(user != null){
            user.setPinPw(paymentInfoDto.getPinPw());
        }else{
            throw new IllegalArgumentException("회원 정보가 없습니다");
        }
    }

}
