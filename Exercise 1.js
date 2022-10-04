// try to grab our prime list out of browser localstorage
try {
    window.primes = JSON.parse(window.localStorage["primes"]);
    console.log("retrieved " + window.primes.length + " primes from storage");
    // print the seed primes to the console in case of bug
    console.log(window.primes);
} catch (e) { };

// seed it with a few primes if empty
if (typeof (window.primes) !== "object") window.primes = [2, 3, 5, 7];

function isPrime(x) {
    // isPrime takes x and returns a Boolean if x is Prime
    var prime = false, i = 0, l = primes.length;
    var maxprime = primes[l - 1];
    var reqprime = Math.floor(Math.sqrt(x));
    if (reqprime > maxprime) {
        findPrimes(reqprime);
        l = primes.length;
    }
    while ((i < l) && (x % primes[i] !== 0) && (primes[i] <= reqprime)) ++i;
    prime = ((i === l) || (primes[i] > reqprime));
    // if i is l then x is prime
    // if we have checked all the primes up to sqrt(x) then x is prime
    return prime
};

function findPrimes(x) {
    // findPrimes finds new primes up to and including x
    // returns an Array of prime numbers
    var i = 0, result = [], l = primes.length;
    var maxprime = primes[l - 1];
    if (x > maxprime) {
        for (i = maxprime + 2; i <= x; i += 2) {
            if (isPrime(i)) primes.push(i);
        }
        l = primes.length;
        // try to set browser localstorage
        // fail with console message only
        try {
            window.localStorage["primes"] = JSON.stringify(primes);
        } catch (e) { console.log("cant set primes in localStorage"); };
    }
    i = 0;
    while ((i < l) && (primes[i] <= x)) {
        result.push(primes[i]);
        ++i;
    }
    return result;
}

$('#run').on('click', function () {
    var total = $('#number').val();
    var answer = findPrimes(total);
    $('#answer').html("<ul><li>" +
        answer.join("</li><li>") +
        "</li></ul>"
    );
});
