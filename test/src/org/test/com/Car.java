package org.test.com;

public class Car {
    private String name;
    private int maxpass;
    private String color;
    private Engine eng;

    public Car(String name, int maxpass, String color, Engine eng) {
        this.name = name;
        this.maxpass = maxpass;
        this.color = color;
        this.eng = eng;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMaxpass() {
        return maxpass;
    }

    public void setMaxpass(int maxpass) {
        this.maxpass = maxpass;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Engine getEng() {
        return eng;
    }

    public void setEng(Engine eng) {
        this.eng = eng;
    }
}
