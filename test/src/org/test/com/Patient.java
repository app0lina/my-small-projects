package org.test.com;

public class Patient {
    private String name;
    private int age;
    private Eye lefteye;
    private Eye righteye;
    private Heart heart;

    public Patient(String name, int age, Eye lefteye, Eye righteye, Heart heart) {
        this.name = name;
        this.age = age;
        this.lefteye = lefteye;
        this.righteye = righteye;
        this.heart = heart;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Eye getLefteye() {
        return lefteye;
    }

    public void setLefteye(Eye lefteye) {
        this.lefteye = lefteye;
    }

    public Eye getRighteye() {
        return righteye;
    }

    public void setRighteye(Eye righteye) {
        this.righteye = righteye;
    }

    public Heart getHeart() {
        return heart;
    }

    public void setHeart(Heart heart) {
        this.heart = heart;
    }
}
