let color = 'green';
if (color === 'green') console.log('Go');
else if (color === 'yellow') console.log('Slow');
else if (color === 'red') console.log('Stop');
else console.log('Whatever');

// exercise 1 
for (let i = 0; i < 50; i++) {
    console.log(i);
}

//exercise 2 
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) console.log(`${i} is even`);
    else console.log(`${i} is odd`);
}