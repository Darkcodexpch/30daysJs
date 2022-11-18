const inputs = document.querySelectorAll('.controls input');
// console.log(inputs)

function handleUpdate() {
    const px = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+ px);
    // console.log(this.value)
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate))
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate))
