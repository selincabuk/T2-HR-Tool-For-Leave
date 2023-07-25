package com.t2software.demo.model;

public enum Gender {
    ERKEK("Erkek"),
    KADIN("Kadın");


    private final String displayName;

    Gender(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
