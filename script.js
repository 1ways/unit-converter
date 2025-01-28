const valueInput = document.getElementById('value-input')
const converBtn = document.getElementById('convert-btn')

const lengthText = document.getElementById('length')
const volumeText = document.getElementById('volume')
const massText = document.getElementById('mass')

lengthConvertion(valueInput.value)
volumeConvertion(valueInput.value)
massConvertion(valueInput.value)

converBtn.addEventListener('click', () => {
    lengthConvertion(valueInput.value)
    volumeConvertion(valueInput.value)
    massConvertion(valueInput.value)
})

function lengthConvertion(value) {
    const metersToFeet = (Number(value) * 3.281).toFixed(3)

    const feetToMeters = (Number(value) / 3.281).toFixed(3)

    lengthText.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`
}

function volumeConvertion(value) {
    const litersToGallons = (Number(value) * 0.264).toFixed(3)

    const gallonsToLiters = (Number(value) / 0.264).toFixed(3)

    volumeText.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} litters`
}

function massConvertion(value) {
    const kilosToPounds = (Number(value) * 2.204).toFixed(3)

    const poundsToKilos = (Number(value) / 2.204).toFixed(3)

    massText.textContent = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`
}
