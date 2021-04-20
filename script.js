'use strict';

/* 1. Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.
createElement
remove
Итоговая разметка:
<input>
<div>
    <input>
        *****
    <input>
</div> */

/* let input = document.createElement("input");

input.setAttribute("type", "text");
document.body.prepend(input);

input.addEventListener("blur", () => {
    if (document.getElementById("div")) {
        document.getElementById("div").remove();
    }
    let div = document.createElement("div");
    div.setAttribute("id", "div");
    document.body.append(div);

    for (let i = 0; i < input.value.length; i++) {
        let inputs = document.createElement("input");
        inputs.value = input.value[i];
        div.append(inputs);
    }
}); */

/* 2.Дана кнопка.
<div>
    <button>
        Hide parent
    </button>
</div>
Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки. */

/* let div = document.getElementById('div');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    div.remove();
}) */

/* 3. Дан инпут. Дана кнопка.
<input>
    <button>
        Create copy
    </button>
По нажатию на кнопку клонируйте этот инпут.  Клонированный инпут, добавить после начального инпута.
Пример.
    var copy_item = document.getElementById("div").cloneNode(true); */

/* let input = document.getElementById('input');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let input2 = input.cloneNode();
    input.after(input2);
}) */

/* 4. Сделать загрузку картинки
<div>
    <div class="preview">
        <img id="image" src="#" alt="" />		
    </div>  
    <div class="input-file">
        <input type="file" id="imgInput" />
        <button>Upload image</button>
    </div>	
</div> */

let inputImg = document.getElementById('input');
let btn = document.getElementById('btn');
let preview = document.querySelector('.preview');
let loader = document.querySelector('.lds-spinner');

if (document.querySelector('img')) {
	document.querySelector('img').remove();
}
let img = document.createElement('img');
function readURL(input) {
	if (input.files && input.files[0]) {
		let reader = new FileReader();
		reader.onload = function (e) {
			img.src = e.target.result;
			preview.append(img);
		};
		reader.readAsDataURL(input.files[0]);
	}
}

btn.addEventListener('click', function () {
	if (input.files.length != 0) {
		loader.classList.add('active');
	}
	if (img.src) {
		document.querySelector('img').remove();
	}
	setTimeout(readURL, 2000, inputImg);
});
