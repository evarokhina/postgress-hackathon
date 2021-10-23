
    let output_text = document.getElementById('output-one');
    let output_text2 = document.getElementById('output-two');

    let promise = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: output_text2.innerHTML = "Хуй",
    });
