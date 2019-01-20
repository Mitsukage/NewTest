# Frontend Test

This is a test project for client

I see on image 2 main components - side bar with menu and main bar with 
header, where are title, authorization components, notifications; with 
presentation block, where major info about current building; with
items list, where customer can see all status on market.

# Used:

angular-cli v.7 - for fast start projecti used new version of Angular

NodeJS - for use npm package manager

sass - it uses nested syntax

local style - because libraries use too much memory. For make the same color and images
I used Adobe Photoshop. Start point for analize size of elements 
was - image in presentation. I used some fixed size for best visual effect
on ultra wide monitors.

flex - because it do design responsive

svg - best format for icons

@nrx/store - for creating redux system. Its important if you want to create 
optimal CRUD structure

# Steps

1 - cut image on blocks

2 - create components for every block

3 - create approximate design

4 - create CRUD for items (it will use in future API requests)

# My propositions how do this design better

"Investment Type", "Holding Period" and "Expected Return on Equity" - all words have
first capital letter but "Interest rate" and other Names in items - are not. So
need to choose standard of names.

"12" in orange box - text of notifications not centered by div box

First button "More details" don`t have border-radius but other buttons
have.

# Size

Size of all project without npm modules and dist = 988 KB

Size of production folder = 968 KB
