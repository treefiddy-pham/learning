// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    uint public x;
    constructor(uint _x) {
        x = _x;
    }

    function increment() external {
        x++;
    }

    function add(uint number) external view returns(uint) {
        return number + x;
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {

    function double(uint x) external pure returns(uint y)
    {
        y = x * 2;
    }
}

//Overloading functions
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {

    function double(uint x) public pure returns(uint)
    {
        return x * 2;
    }

    function double(uint x, uint y) external pure returns(uint, uint)
    {
        return (double(x), double(y));
    }
}