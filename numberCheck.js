function isPerfectSquare( x)
{
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
} // javascript function to check if x is a perfect square. It returns true if x is perfect square


function isFibonacci( n)
{
    return isPerfectSquare(5 * n * n + 4) ||
        isPerfectSquare(5 * n * n - 4);
} //Returns true if n is a Fibonacci Number, else false. n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both is a perfect square