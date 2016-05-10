####trying to solve katas in python
Write a function multiply that takes two positive integers as arguments and returns the product of the two numbers. You are only allowed to use

left and right shifts <<, >>,
addition and subtraction +, -
logical operators ^, &, |, ~
comparisons <, <=, >=, >.
You may not use the * operator or a builtin or imported multiplication function.

Also, you may not use any integer litteral. Use the preprovided zero and one to denote the numbers 0 and 1 respectively.


pseudo code :
step 1: convert numbers into bits
step 2: use bitwise operators to add number to other number
step 3: convert back to integer 
step 4: return result

so first i googled what >> and << does in the process i found out what bitwise operators are and I thought I should share that first:

######The Operators:

x << y (left shift)

Returns x with the bits shifted to the left by y places (and new bits on the right-hand-side are zeros).
This is the same as multiplying x by 2**y.


x >> y(right shift)

Returns x with the bits shifted to the right by y places. This is the same as //'ing x by 2**y.

x & y( and )

Does a "bitwise and". Each bit of the output is 1 if the corresponding bit of x AND of y is 1, otherwise it's 0.

x | y (or)

Does a "bitwise or". Each bit of the output is 0 if the corresponding bit of x AND of y is 0, otherwise it's 1.

~ x 

Returns the complement of x - the number you get by switching each 1 for a 0 and each 0 for a 1. This is the same as -x - 1.

x ^ y

Does a "bitwise exclusive or". Each bit of the output is the same as the corresponding bit in x if that bit in y is 0, and it's the complement of the bit in x if that bit in y is 1.



Just remember about that infinite series of 1 bits in a negative number, and these should all make sense.
