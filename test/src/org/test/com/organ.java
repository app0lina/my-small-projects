package org.test.com;

public class organ {
    String name;
    String medcond;

    public organ(String name, String medcond) {
        this.name = name;
        this.medcond = medcond;
    }

    class heart extends organ {
        int heartrate;

        public heart(String name, String medcond, int heartrate) {
            super(name, medcond);
            this.heartrate = heartrate;
        }

        public void changerate(int heartrate) {
            this.heartrate = heartrate;
            System.out.println("Heart rate changed to "+heartrate);
        }
    }
}
