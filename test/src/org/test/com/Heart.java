package org.test.com;

public class Heart extends organ{
    private int rate;

    public Heart(String name, String medcond, int rate) {
        super(name, medcond);
        this.rate = rate;
    }

    @Override
    public void details() {
        super.details();
        System.out.println("Heart rate: "+this.getRate());
    }

    public void changerate(int newrate) {
        this.setRate(newrate);
        System.out.println("Heart rate changed into "+newrate);
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }
}
