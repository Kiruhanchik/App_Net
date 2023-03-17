let callback = () => {
    // TODO: check fields
    var name = document.getElementById('name').value; // TODO: get name
    var comment = document.getElementById('comment').value; // TODO: get comment
    var dt = document.getElementById('date').value; // TODO: get dt
    if (dt.length == 0){
        dt = new Date().toLocaleTimeString().slice(0,-3);
        dt = 'сегодня в ' + dt;
    } else {
        dt = 'Выложен ' + dt;
    }

    if (name == '') {
        let nav = document.createElement('nav');
        nav.innerHTML = 'Введите имя!';
        document.getElementById('name').after(nav);
        document.getElementById('name').style.borderColor = 'red';
        document.getElementById('share').disabled = true;
    }
    if (comment == '') {
        let nav = document.createElement('nav');
        nav.innerHTML = 'Введите комментарий!';
        document.getElementById('comment').after(nav);
        document.getElementById('comment').style.border = '2px solid red';
        document.getElementById('share').disabled = true;
    }

    let div = document.createElement('div');
    let cname = document.createElement('h4');
    let ccomment = document.createElement('h5');
    let ctime = document.createElement('h5');
    let heart = document.createElement('button');
    let trash = document.createElement('button');
    let h = document.createElement('p');
    h.innerHTML = '🧡';
    h.style.marginLeft = '10%';
    h.style.display = 'none';

    if (name != '' && comment != '') {
        alert('Комментарий опубликован✌!');
        cname.innerHTML = name;
        ccomment.innerHTML = comment;
        ctime.innerHTML = dt;
        comments.append(div);

        div.append(cname);
        div.append(ccomment);
        div.append(ctime);
        div.append(h);
        div.append(heart);
        div.append(trash);

        heart.addEventListener('click', function() {
            if (h.style.display == 'block') {
                h.style.display = 'none';
            } else {
                h.style.display = 'block';
            }
        });

        trash.addEventListener('click', function() {
            div.remove();
        });

        heart.style.marginLeft = '10%';
        heart.style.width = '3%';
        heart.style.height = '35px';
        heart.innerHTML = '🧡';

        trash.style.marginLeft = '1%';
        trash.style.width = '3%';
        trash.style.height = '35px';
        trash.innerHTML = '🗑️';
    
        cname.style.marginLeft = '10%';
        cname.style.color = 'red';
        cname.style.fontSize = '180%';
        cname.style.fontWeight = '700';
        cname.style.fontFamily = 'Roboto', 'sans-serif;';

        ccomment.style.marginLeft = '10%';
        ccomment.style.fontSize = '140%';
        ccomment.style.fontWeight = '700';
        ccomment.style.fontFamily = 'Roboto', 'sans-serif;';

        ctime.style.marginLeft = '10%';
        ctime.style.color = 'blue';
        ctime.style.fontSize = '120%';
        ctime.style.fontWeight = '700';
        ctime.style.fontFamily = 'Roboto', 'sans-serif;';

    }
    // TODO: add comment
};


window.addEventListener("load", function(){
    let button = document.querySelector('#share');

    
    button.addEventListener('click', callback);
    document.getElementById('name').addEventListener('click', () => { 
        document.getElementById('name').style.borderColor = '';
        document.getElementById('share').disabled = false;
        let elementList = document.querySelectorAll('nav');
        for (let elem of elementList) {
            elem.remove();
        }
    });
    document.getElementById('comment').addEventListener('click', () => { 
        document.getElementById('comment').style.border = '';
        document.getElementById('share').disabled = false;
        let elementList = document.querySelectorAll('nav');
        for (let elem of elementList) {
            elem.remove();
        }
    });    
});