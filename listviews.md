###Listviews implementation according to Derek Banas

I was using Derek Bantors as example to do my own implementaion of listviews with a customized row layout.
I did everything just as Derek Banas did but I kept getting a bug in my Main_Activity. 
I had tried everything there were no underlined lines anywhere, when  built there was no error but
when I run the app I got the dialog box that says " Unfortunately , App has failed to start"
It turns out i needn't have added LinearLayout to my row_layout.xml file.
what you need to bear in mind when using these tutorials is that The Tutors Use versions of 
Android Studio that are older than yours. Which is the reason why Derek's Emulator could ignore the 
linearlayout code in the Row_Layout.xml and mine did not.  
