package org.test.com;

import java.util.ArrayList;

public class Student {
    String name;
    private static int total = 1;
    int id;
    String course;


    public Student(String name, String course) {
        this.name = name;
        this.id = total;
        this.total++;
        this.course = course;

    }



    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();
        students.add(new Student("juls", "history"));
        students.add(new Student("kitti","english"));

        for(Student s: students) {
            System.out.println(students.indexOf(s)+"\nId: "+s.id+"\nName: "+s.name+"\nCourse: "+s.course+"\n");
            System.out.println();
        }
    }
}
