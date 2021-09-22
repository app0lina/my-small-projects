package org.test.com;

public class eyes extends organ{
    String color;
    String lr;

    public eyes(String name, String medcond, String color, String lr) {
        super(name, medcond);
        this.color = color;
        this.lr = lr;
    }

    public void closeeye() {
        System.out.println("The "+this.lr+ " eye is closed");
    }
}
