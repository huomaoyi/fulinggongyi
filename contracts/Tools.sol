pragma solidity ^0.4.24;

library Tools {

    function stringConcat(string stringA, string stringB)
        public
        pure
        returns (string)
    {
        bytes memory bytesA = bytes(stringA);
        bytes memory bytesB = bytes(stringB);
        string memory length_ab = new string(bytesA.length + bytesB.length);
        bytes memory bytesC = bytes(length_ab);
        uint k = 0;
        for (uint i = 0; i < bytesA.length; i++) bytesC[k++] = bytesA[i];
        for (i = 0; i < bytesB.length; i++) bytesC[k++] = bytesB[i];
        return string(bytesC);
    }

    function uintToString(uint _number)
        internal
        pure
        returns (string)
    {
        if (_number == 0) return "0";
        uint number = _number;
        uint length;
        while (number != 0){
            length++;
            number /= 10;
        }
        bytes memory result = new bytes(length);
        uint k = length - 1;
        while (_number != 0){
            result[k--] = byte(48 + _number % 10);
            _number /= 10;
        }

        return string(result);
    }

}