package org.test.com;

public class organ {
    String name;
    String medcond;

    public organ(String name, String medcond) {
        this.name = name;
        this.medcond = medcond;
    }

    public void details() {
        System.out.println("\tName: "+this.getName());
        System.out.println("\tMedical condition: "+this.getMedcond());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMedcond() {
        return medcond;
    }

    public void setMedcond(String medcond) {
        this.medcond = medcond;
    }
}
