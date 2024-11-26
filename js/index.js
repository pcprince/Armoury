/****************************************************************************
 * index.js
 * November 2024
 *****************************************************************************/

/* global resetBasicSelection, resetMasterworkSelection */
/* global basicSelectionDiv, masterworkSelectionDiv */

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {

    resetBasicSelection();
    resetMasterworkSelection();

    basicSelectionDiv.style.display = '';
    masterworkSelectionDiv.style.display = 'none';

});
