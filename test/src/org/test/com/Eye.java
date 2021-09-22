package org.test.com;

public class Eye extends organ{
    private String color;
    private boolean isOpened;

    public Eye(String name, String medcond, String color, boolean isOpened) {
        super(name, medcond);
        this.color = color;
        this.isOpened = isOpened;
    }

    @Override
    public void details() {
        super.details();
        System.out.println("Color: "+this.getColor());
    }

    public void open() {
        this.setOpened(true);
        System.out.println( this.getName() +" opened");
    }

    public void close() {
        this.setOpened(false);
        System.out.println( this.getName() +" closed");
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public boolean isOpened() {
        return isOpened;
    }

    public void setOpened(boolean opened) {
        isOpened = opened;
    }
}
