***How to run*** 
after installing packages by 'yarn install' / 'npm install' 
you could run dev server with mocked api by 'npm start'.

***How much time I spend***
I'm not sure how much time I spend, but I think not more than 20 hours

***Documentation of the process***
When I just started, I wanted to do it without using html table because it isn't regular table.
I tried to develop it just with css and html elements, but I faced a problem that I needed 
to bind scroll between 3 elements and make it work correctly. I made a decision what, 
it's too weird for tasks like that and it looks like black magic.

After i started to develop it with tables and met new problems
1) I needed to render channel programs in one row without columns. I solved it by using `colspan`
2) when i put a time stamp on the table it was scrollable and worked incorrectly. I chose to separate it by two pieces. 
time stamp head in TimeScale(table header) and time stamp body in programTable. 
3) I didn't know what if you're using position sticky in table header its border will be scrollable.
I solve it with box-shadow
4) For correct rendering i needed strict sizes for elements because programs could be long 
so i converted its duration to pixels on the table, but there is exist issue that in different 
browsers even strict sizes no so strict and I caught the cumulative computation error. 
There's must be another way how to do it or I need just get sizes from dom.
5) I chose to not separate program table by components because there is no interactions with it 
and it's just plain rendering. I see no reasons to separate it until I'll see how and where it'll grow.
6) Therese duplicated constants in constants.js and styles/variables.css. I needed sizes for calculations 
and I didn't want to interact with dom.
7) I also thought to use css-grid and scss for this task, but I could need to generate lots of cells 
for this task and it's too hard for managing

Also, i added some test for showing my skills in testing. I used there pageObject way for writing tests. 
My colleague and I used it on prev project and i really enjoy this way.