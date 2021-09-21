package org.test.com;

public class Phone {
    private String name;
    private int screenSize;
    private int ram;
    private String operator;
    private int phnumber;

    public Phone(String name, int screenSize, int ram, String operator, int phnumber) {
        this.name = name;
        this.screenSize = screenSize;
        this.ram = ram;
        this.operator = operator;
        this.phnumber = phnumber;
    }

    public String getName() {
        return name;
    }

    public int getScreenSize() {
        return screenSize;
    }

    public int getRam() {
        return ram;
    }

    public String getOperator() {
        return operator;
    }

    public int getPhnumber() {
        return phnumber;
    }
}
