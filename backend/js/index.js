let elem = document.getElementById('output-one');
elem.innerHTML = "text";


// async function gunc() {
//     let test = {
//         test1: 'test1',
//         test2: 'test2'
//     };
//
//     let promise = await fetch('/backend/js/index.js/test', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(test)
//     });
//
//     let result = await promise.json();
//     alert(result.message);
// }

const gunc = event => {
        let promise = await fetch('/backend/js/index.js/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(test)
        });
};

const submitEl = document.getElementById('button');

submitEl.addEventListener('click', gunc);