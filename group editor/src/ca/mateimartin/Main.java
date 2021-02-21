package ca.mateimartin;

import jdk.swing.interop.SwingInterOpUtils;

import java.math.BigInteger;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.Random;

public class Main {

    public static void main(String[] args) {
        // write your code here
        randomPhone();
  }


    public static String randomPhoneNumber(int lenght){
        String builder = "";
        if(lenght > 10)
            builder += new Random().nextInt((int) Math.round(Math.pow(10,(lenght-10))));
        for (int i = 0; i < 10; i++) {
            builder += new Random().nextInt(9);
        }
        return builder;
    }

    public static void randomPhone(){

        try {
            Connection con;
            Properties properties = new Properties();
            properties.setProperty("user", "user");
            properties.setProperty("password", "passw0rd");
            properties.setProperty("autoReconnect", "true");
            properties.setProperty("verifyServerCertificate", "false");
            properties.setProperty("useSSL", "false");
            properties.setProperty("requireSSL", "false");
            //Connect to database
            con = DriverManager.getConnection("jdbc:mysql://web.martin:3306/skiv2", properties);

            //DriverManager.getConnection("jdbc:mysql://web.martin:3306/skiv2", "user", "passw0rd");
            //here sonoo is database name, root is username and password
            List<Integer> students = new ArrayList();

            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT `StudentId` FROM `Student` ");
            while (rs.next())
                students.add(rs.getInt(1));

            for (int j = 0; j < students.size(); j++) {
                stmt.executeUpdate("UPDATE `Student` SET `Phone`= " + randomPhoneNumber(13) + " WHERE StudentID = " + students.get(j));
            }
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void randomTeacher(){
        try {
            Connection con;
            Properties properties = new Properties();
            properties.setProperty("user", "user");
            properties.setProperty("password", "passw0rd");
            properties.setProperty("autoReconnect", "true");
            properties.setProperty("verifyServerCertificate", "false");
            properties.setProperty("useSSL", "false");
            properties.setProperty("requireSSL", "false");
            //Connect to database
            con = DriverManager.getConnection("jdbc:mysql://web.martin:3306/skiv2", properties);

            //DriverManager.getConnection("jdbc:mysql://web.martin:3306/skiv2", "user", "passw0rd");
            //here sonoo is database name, root is username and password
            String[] test = {"99407", "114603", "114627", "115636", "116314", "117308", "117315"};
            List<Integer> groups = new ArrayList<Integer>();

            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT `GroupID`FROM `Group` ");
            while (rs.next())
                groups.add(rs.getInt(1));

            for (Integer group : groups) {
                stmt.executeUpdate("UPDATE `Group` SET `TeacherID`= " + test[new Random().nextInt(test.length)] + " WHERE GroupID = " + group);
            }
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

