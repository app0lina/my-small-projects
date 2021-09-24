package org.test.com;

import java.util.ArrayList;

public class Student {
    String name;
    int id;
    String course;

    public Student(String name, int id, String course) {
        this.name = name;
        this.id = id;
        this.course = course;
    }

    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();
        students.add(new Student("juls", 34, "history"));
        students.add(new Student("kitti", 23, "english"));

        for(Student s: students) {
            System.out.println(students.indexOf(s)+"\nId: "+s.id+"\nName: "+s.name+"\nCourse: "+s.course+"\n");
            System.out.println();
        }
    }
}
