/* 
1
*
2
*0.  Operators: 
3
* -   Operators can take action on datatypes like assigning them, comparing them, 
4
* or include them in arthimetic operators. Operators are categorized by 
5
* what they can do and how many operands they require. Operands are the values that 
6
* operators act on. 
7
* Ternary - three values
8
* Binary  - two values 
9
* Unary - one values 
10
* 
11
*
12
*1. Assignment operators:  =, +=, -=, *=, /=, %= 
13
* - assigns a value to its left over operand based on the value to  whats on the right operand. 
14
* 
15
*2. Arithmetic operators: addition (+), subtract (-), divide (/), multiplication (*). 
16
* - takes a numberical value as their operands and return a new single value.
17
*
18
*
19
*3. Comparsion & Binary comparsion operators:[  <, >, <=, >=,  ===, !== ]
20
* - compare two values that evaluates to boolean, true or false 
21
*
22
*
23
*4. Logical operators: &&, ||, !.
24
*-  && And operator:checks to see if both condtions are true. 
25
*- || Or operator: checks to see if one of the conditions are true
26
* - ! Bang operator: flips the value truthiness 
27
* 
28
*5. Unary operators: typeof, !, - 
29
* - is a operator with only one operand
30
* - flips the truthiness of a value or check
31
* - can check the type of a value
32
* - can turn a value negative
33
* 
34
*
35
*6. Ternary operators: condition ? value1 : value2;
36
* - its a conditional operator thats three operand. 
37
* - the operator can have one or two values based on a condition
38
* - if the condition is true, the operator has value of value1 or 
39
* otherwise it has the value of value2.
40
*/
41
42
// Assignment operator: assign a datatype to a variable 
43
// the operators: =, +=,-=, /=, %=, *=
44
45
// assignment operator: assign a datatype to a variable
46
// the operator: = 
47
48
var name = "khalil"; // I assign khalil to the variable name.
49
50
// additional  assignment operator: adds value assigned to the variable and assigns the result to the variable
51
// the operator: +=
52
53
var num = 0;
54
num += 5;
55
console.log(num); // prints  5 
56
57
//  subtraction assignment operator: subtracts value assigned to the variable and assigns the result to the variable
58
// the operator: -=
59
60
var total = 100;
61
total -= 55;
62
console.log(total); // prints 45
63
64
/* multiplication assignment operator: multiplies the value assigned to the variable 
65
and assigns the result to the variable */ 
66
// the operator: *=
67
68
var multi = 9;
69
multi *= 9;
70
console.log(multi); // prints 81
71
72
// divison assignment operator: divides the value assigned to the variable and assigns the result to the variable
73
// the operator: /=
74
75
var div = 49;
76
div /= 7;
77
console.log(div); // prints 7
78
79
// remainder assignment operator: divides the value assigned to the variable and assigns the remainder to the variable
80
// the operator: %= 
81
82
var remain = 11; 
83
remain %= 5;
84
console.log(remain); // prints 1
85
86
87
// Arithmetic operator: { +, - , /, * }
88
89
// addition: add two numbers. 
90
// the operator: + 
91
92
console.log(5 + 8); // prints 13
93
94
// subtract: subtract two numbers. 
95
// the operator: - 
96
97
console.log(20 - 10); // prints 10
98
99
// divide: divide two numbers 
100
// the operator: / 
101
102
console.log(49 / 7); // prints 7
103
104
// Comparsion & Binary comparsion operator: [  <, >, <=, >=,  ===, !==, /,]
105
106
// less than: the number on the left of the less than operator is less than the number of right operator.
107
// the operator: < 
108
// returns boolean: true or false. 
109
110
console.log(5 < 7); // prints true
111
console.log(3573289771224 < 3); // prints false
112
113
// less than or equal to: the number on the left of the operator is less than or equal to the number of right operator
114
// the operator: <= 
115
// return boolean: true or false
116
117
console.log(6 <= 10); // prints true
118
console.log(8 <= 5); // prints false
119
120
// greater than: the number on the left of the operator is greater than the number of right operator
121
// the operator: >
122
// return boolean: true or false
123
124
console.log(8 > 3); // prints true
125
console.log(4 > -1); // prints false
126
127
/*greater than or equal to: the number on the left of the operator is greater than or equal to the numnber right of the 
128
operator.
129
the operator: >= 
130
returns booleans: true or false
131
*/
132
console.log(5 >= 4); // prints true
133
console.log(7 >= 33); // prints false 
134
135
// strict equal to: checks to see if the datatype is stricty equal to the datatype left of the operator
136
// the operator: === 
137
// returns boolean: true or false
138
139
console.log(98 === 98); // prints true
140
console.log(22 === "22"); // prints false
141
142
// srictly not equal to : checks to see if the dataype is not strictly equal to the datatype on the left of the operator
143
// the operator: !== 
144
// returns booleans: true or false
145
146
console.log( 2 !== 3); // prints true
147
console.log(2 !== 2); // prints false
148
149
150
// Logical operators: { &&, ||, ! }
151
152
// And operator: && 
153
// both conditions have to be true
154
// returns boolean: true or false
155
156
console.log(5 > 4 && 67 < 100); // prints true
157
console.log("william" === "william" && 5 < 2); // prints false
158
159
// Or operator: || 
160
// one of the condtions have to be true
161
// returns boolean: true or false
162
163
console.log(21 > 5 || 5 < 2); // prints true
164
console.log(44 < 32 || 55 > 111); // prints false
165
166
// Bang operator: !
167
// flips the truthiness of the value
168
// returns boolean: true or false 
169
170
console.log(!true); // prints false
171
console.log(!false); // prints true
172
173
// Unary operator: typeof
174
// returns a string of type of datatype the value are 
175
176
console.log(typeof 2); // prints "number"
177
console.log(typeof "2"); // prints "string"
178
179
// Ternary operator: condition ? value1 : value2
180
// based on the condition is true
181
var myAge = 19;
182
var age = (myAge < 21) ? "my age" : "not my age";
183
console.log(age); // prints "my age"