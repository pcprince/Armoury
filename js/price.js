/****************************************************************************
 * price.js
 * November 2024
 *****************************************************************************/

/* global requestAnimationFrame */

let basePrice = 0;
let masterworkTotalPrice = 0;
let currentPrice = 0;

function resetPrice () {

    basePrice = 0;
    masterworkTotalPrice = 0;
    currentPrice = 0;

}

function getCurrentPrice () {

    return currentPrice;

}

function formatNumberWithCommas (number) {

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

}

class NumberAnimator {

    constructor (element, duration = 1000) {

        this.element = element;
        this.duration = duration;
        this.currentValue = 0;
        this.targetValue = 0;
        this.animationFrame = null;
        this.startTime = null;

    }

    // Start or update the animation to a new target value
    animateTo (target) {

        this.targetValue = target;
        if (!this.animationFrame) {

            this.startAnimation();

        }

    }

    // Begin the animation loop
    startAnimation () {

        this.startTime = null; // Reset the start time
        this.animationFrame = requestAnimationFrame(this.updateAnimation.bind(this));

    }

    // Update the number based on elapsed time
    updateAnimation (timestamp) {

        if (!this.startTime) this.startTime = timestamp;

        const elapsed = timestamp - this.startTime;
        const progress = Math.min(elapsed / this.duration, 1); // Ensure we don't exceed 1
        const newValue = Math.round(
            this.currentValue + (this.targetValue - this.currentValue) * progress
        );

        this.element.textContent = formatNumberWithCommas(newValue);

        // Continue or finish the animation
        if (progress < 1) {

            this.animationFrame = requestAnimationFrame(this.updateAnimation.bind(this));

        } else {

            this.currentValue = this.targetValue; // Snap to the final value
            this.animationFrame = null; // Clear the animation frame

        }

    }

}

const priceSpan = document.getElementById('price-span');
const animator = new NumberAnimator(priceSpan, 500);

function updateTotalPrice () {

    currentPrice = basePrice + masterworkTotalPrice;

    animator.animateTo(currentPrice);

}

function setBasePrice (newBasePrice) {

    basePrice = newBasePrice;

    updateTotalPrice();

}

function resetBasePrice () {

    setBasePrice(0);

}

function setMasterworkTotalPrice (newMasterworkTotalPrice) {

    masterworkTotalPrice = newMasterworkTotalPrice;

    updateTotalPrice();

}

function resetMasterworkTotalPrice () {

    setMasterworkTotalPrice(0);

}
