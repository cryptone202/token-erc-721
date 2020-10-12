// SPDX-License-Identifier: MIT

pragma solidity ^0.6.8;

    interface ERC721TokenReceiver {
        function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes _data) external returns(bytes4);
    }
