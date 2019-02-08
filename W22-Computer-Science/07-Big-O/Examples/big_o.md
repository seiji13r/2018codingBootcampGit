# Big O Analysis

Express the running times of the following algorithms in Big O notation. Justify your responses.

Some of these are just review. A few apply Big O to algorithms we saw before.

Assume the _worst case_ running time—i.e., consider only the _maximum_ number of instructions the algorithm could take.

What is the running time of...

* Selection sort? 
    O(n^2)
* Insertion sort?
    O(n^2)
* Linear search?
    O(n)
* Binary search?
    O(log2 n)
* Finding duplicates in an array?
    O(n^2)

### BONUSES

If you're mathematically inclined, you might find these interesting. If not, feel free to take a stab anyway, but don't worry too much about proving your solution.

What is the running time for an algorithm that—

* Finds all triplets `(x, y, z)` such that `x + y + z = n`, where `n` is specified by the user?

  * E.g.: `threeSum(list, search)` will find all possible triplets of numbers in `list` that sum to `search`.

    list = [1, 2, 3, 4]
    n = 6

    1 + 2 + 3 = n
    2 + 3 + 4 = n
    2 + 3 + 4 = n 


    O(n^3)

* Same question, but for doubles?
    
    O(n^2)

  * In general, what is the running time for finding n-tuples in `list` that sum to `search`?

    O(n^n)