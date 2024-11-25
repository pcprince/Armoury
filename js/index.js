/****************************************************************************
 * index.js
 * November 2024
 *****************************************************************************/

/* global resetBasicSelection */
/* global basicSelectionDiv */

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {

    resetBasicSelection();
    basicSelectionDiv.style.display = '';

});
