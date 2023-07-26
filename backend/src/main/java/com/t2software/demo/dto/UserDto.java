package com.t2software.demo.dto;

import com.t2software.demo.model.Gender;
import com.t2software.demo.model.UserRole;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@Builder
public class UserDto {

    private UUID id;

    private String email;

    private String firstname;

    private String lastname;

    private Date birthday;

    private Gender gender;

    private UserRole role;

    private String activity;

    @Column(name = "start_date")
    private Date startDate;

    private Boolean locked;
    private Boolean enabled;
}
