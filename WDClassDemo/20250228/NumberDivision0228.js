function handleClick() {
    const numeratorNode = document.querySelector("#numerator");
    const numeratorValue = Number.parseFloat(numeratorNode.value);
    const denominatorNode = document.querySelector("#denominator");
    const denominatorValue = Number.parseFloat(denominatorNode.value);
    const result = numeratorValue / denominatorValue;
    // console.log(result);
    const resultNode =
    document.querySelector("#result");
    resultNode.innerHTML = `<span>The result is ${result}</span>`;
    
   }