// Output is : 3 3 3
// Reason : when loop is working then due to setTimeout function
// it goes to sync mode then the opperation has to wait then the value of i is increased then again it goes to
// setTimeout function again and again till the loop is end the last value of i is 3 this value have check the condition and 
// decline then it goes back to the async function and print the out to comple all the 
// remain working function so the out was  3 3 3 because the last valueof i is 3.
//  Second Output is : 0,1,2
// Reason: let has not change the event or the value of the existing working Code.     