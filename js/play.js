window.onload = () => {
    let allKey = document.querySelectorAll('#keyName');
    allKey.forEach(e => {
        eval(`window['${
            e.innerText.includes('#')
            ? e.innerText.slice(1) + 's'
            : e.innerText
        }'] = new Audio('https://midivoca.github.io/piano-tone/${
            e.innerText.includes('#')
            ? e.innerText.slice(1) + 's'
            : e.innerText
        }.wav');`);
    });
};
