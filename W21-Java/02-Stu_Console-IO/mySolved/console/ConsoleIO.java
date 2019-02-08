package console;

import java.util.Scanner;

/* ****************************************************************************
 *
 * BRIEF //
 *
 *   Your firm is implementing its student management prototype in Java.
 *   It's a command-line program, which the registrar's office will use to
 *   add students to the database upon enrollment.
 *
 *   The program should prompt the user for a student's first name; last name;
 *   middle initial; physical address; email address; and phone number.
 *
 *   After each prompt, the program should wait for the user's input.
 *
 *   Once the user has entered every piece of information, the program should
 *   print it all back to the console, and prompt the user to enter Y if the
 *   information is correct, or any other key otherwise.
 *
 *   For now, you should collect the user's response--i.e., y or otherwise--but
 *   don't worry about handling it. We'll get to that shortly.
 *
 *****************************************************************************/

public class ConsoleIO {

  public static void main(String[] args) {

    // You need to instantiate something to read user input. Do that here.
    
    /* Print a message to the screen prompting the user for a student's first
     *   name. Then, store their response in a String variable.
     *
     *   Repeat this for each of the student's attribute: first/last/middle
     *   name; address; email; and phone number (which you'll store as a
     *   String).
     */
    
    // Create a new Scanner that reads from the System's standard input stream.
    Scanner input = new Scanner(System.in);

    System.out.println("Enter your First Name. ");
    String first_name = input.nextLine();

    System.out.println("Enter your Middle Name. ");
    String middle_name = input.nextLine();

    System.out.println("Enter your Last Name. ");
    String last_name = input.nextLine();

    System.out.println("Enter your Address. ");
    String address = input.nextLine();

    System.out.println("Enter your email. ");
    String email = input.nextLine();

    System.out.println("Enter your Phone Number. ");
    String phone = input.nextLine();

    /* Once you've gotten all the information, print the value of each
     *   variable. Use String.format, and %s to indicate a string
     *   substitution. */

     System.out.println(String.format(
       "Hello %s %s %s!", first_name, middle_name, last_name
      ));

    System.out.println(String.format(
      "Your Contact Information is:\nAddress: %s\nEmail: %s\nPhone: %s\n", address, email, phone
    ));

    /* Finally, print a message asking the user if this is correct information.
     *   Collect their response in a variable called confirmation. Don't do
     *   anything with it yet, though. */

  }

}
