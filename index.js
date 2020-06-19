// Code your solutions in this file

const names = [ 'Lisa', 'Kaitlin', 'Jan' ]

const writeCards = (names) => {
    let message = []
    let i = 0; 
    while (i < names.length){
        message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        i++
        }
    return message
}
writeCards(names)



// countDown( 10 );
// expect( spy.callCount, "Expected countDown(10) to invoke 11 console.logs" )
//   .to.eq( 11 );
// } );

// it( 'logs each number when counting down, starting from the number provided', () => {
// countDown( 4 );
// expect( spy.calledWithExactly( 4 ), "Expected countDown(4) to log 4 first" )
//   .to.be.true;
// expect( spy.calledWithExactly( 3 ), "Expected countDown(4) to log 3 after 4" )
//   .to.be.true;
// expect( spy.calledWithExactly( 2 ), "Expected countDown(4) to log 2 after 3" )
//   .to.be.true;
// expect( spy.calledWithExactly( 1 ), "Expected countDown(4) to log 1 after 2" )
//   .to.be.true;
// expect( spy.calledWithExactly( 0 ), "Expected countDown(4) to log 0 after 1" )
//   .to.be.true;

const countDown = (num) => {
    let i = num;
    while (i >= 0){
        console.log(i)
    i--
}
}

countDown(10)