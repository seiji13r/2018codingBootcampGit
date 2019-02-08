package console;

// You need to import the HashMap type. How does that import statement look?

import java.util.Scanner;
import java.util.ArrayList;
import java.util.HashMap;

/* *************************************************************************** 
 *
 * To start, wrap your code in an infinite loop. What does this look like?
 *
 *****************************************************************************/

/* *************************************************************************** 
 *
 * Next, create a map to store student information. Put the key/value pairs
 *   as you collect information from the user.
 *
 *****************************************************************************/

public class ConsoleIO {

  public static void main(String[] args) {

    // Wrap everything you have in an infinite loop.
    
    /* ************************************************************************
     *
     * Initialize the Scanner we'll need. 
     *
     *   You'll also want to create your student HashMap here. What key/value 
     *   types do you use for it? 
     *
     *   Finally, initialize an ArrayList of students. Inside of the 
     *   <Type Brackets>, put the type of the HashMap you created. This isn't
     *   hard, but it will look weird--ask a TA to verify if your solution is 
     *   correct!
     *
     *************************************************************************/
    
    ArrayList<String> db = new ArrayList<>();
    HashMap<String, String> data = new HashMap<>();

    Scanner input = new Scanner(System.in);

    String confirmation = "";

    while (confirmation!="N") {
      System.out.print("Please enter the student's first name. ");
      data.put("First Name", input.next());

      System.out.print("Please enter the student's last name. ");
      data.put("Last Name", input.next());

      System.out.print("Please enter the student's middle initial. ");
      data.put("Middle Name", input.next());

      input.nextLine(); // Strip the newline.

      // ---- CONTACT INFORMATION ----
      
      System.out.print("Please enter the student's address. ");
      data.put("Address", input.next());

      System.out.print("Please enter the student's email. ");
      data.put("Email", input.next());

      System.out.print("Please enter the student's phone number. ");
      data.put("Address", input.next());

      // ---- PRINT  ----

      /* Refactor this to print the value of each key iteratively. Use
      *   String.format, and substitute the key/value names into the string.
      */
      data.forEach((key, value) -> {
        System.out.println(String.format(" The student's %s is %s.", key, value));
      });

      // Don't change this confirmation code just yet!
      System.out.print("Is this information correct?");
      confirmation = input.next();
    }
    
    db.add(data);

    // System.out.print("Is this information correct?");
    //   confirmation = input.next();
  }
}
