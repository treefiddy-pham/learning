//Prime.sol 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

library Prime {

    function dividesEvenly(uint x, uint y) public pure returns(bool) {
        return (x % y == 0);
    }

    function isPrime(uint x) public pure returns(bool) {
        uint i;
        bool divisible;

        for(i = 2; i < x && divisible==false; i++){
            divisible = dividesEvenly(x,i);
        }
        return !divisible;
    }
}
