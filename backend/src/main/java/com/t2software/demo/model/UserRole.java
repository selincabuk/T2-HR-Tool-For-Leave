package com.t2software.demo.model;

public enum UserRole {
    ADMIN("Admin"),
    User("User");


    private final String displayName;

    UserRole(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
