package com.youngrich.oliveold.user.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoDto {

    private Long userId;
    private String name;
    private String profileImg;
    private String nickname;
}
