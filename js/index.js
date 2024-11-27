/****************************************************************************
 * index.js
 * November 2024
 *****************************************************************************/

/* global disableNameInput, resetBasicSelection, resetMasterworkSelection, hideOverviewCard */
/* global basicSelectionDiv, masterworkSelectionDiv */

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {

    resetBasicSelection();
    resetMasterworkSelection();

    disableNameInput();
    hideOverviewCard();
    basicSelectionDiv.style.display = '';
    masterworkSelectionDiv.style.display = 'none';

});
