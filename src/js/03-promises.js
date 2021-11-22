const refs = {
    form: document.querySelector(".form"),
}

refs.form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    let delayValue = Number(event.target.delay.value);
    const stepValue = Number(event.target.step.value);
    const amountValue = Number(event.target.amount.value);


    for (let i = 1; i <= amountValue; i++) {
        createPromise(i, delayValue)
            .then(({ position, delay }) => {
                console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                console.log(`❌ Rejected promise ${position} in ${delay}ms`);
            });
        delayValue += stepValue;
    }
}

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve({position, delay});
            } 
                reject({position, delay});
        }, delay)
    })
}