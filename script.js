"use strict";

//chạy nội dung
const theo_doi = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.25
});

document.querySelectorAll('.run_text_off, .run_text_left, .run_text_right, .run_row_right, .run_row_left').forEach(el => theo_doi.observe(el));



//trượt nội dung ngang
const track = document.querySelector('.carousel_track');
const items = document.querySelectorAll('.carousel_item');
const prev = document.querySelector('.prev_box');
const next = document.querySelector('.next_box');
let index = 1;

function updateCarousel() {
    const offset = -(index - 1) * 100 / 3;
    track.style.transform = `translateX(${offset}%)`;
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

prev.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

next.addEventListener('click', () => {
    if (index < items.length - 1) {
        index++;
        updateCarousel();
    }

});

updateCarousel();


const track_1 = document.querySelector('.carousel_track_1');
const items_1 = document.querySelectorAll('.carousel_item_1');
const prev_1 = document.querySelector('.prev_box_1');
const next_1 = document.querySelector('.next_box_1');
let index_1 = 1;

function updateCarousel_1() {
    const offset = -(index_1 - 1) * 100 / 3;
    track_1.style.transform = `translateX(${offset}%)`;
    items_1.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index_1) {
            item.classList.add('active');
        }
    });
}

prev_1.addEventListener('click', () => {
    if (index_1 > 0) {
        index_1--;
        updateCarousel_1();
    }
});

next_1.addEventListener('click', () => {
    if (index_1 < items_1.length - 1) {
        index_1++;
        updateCarousel_1();
    }

});

updateCarousel_1();


//đổi con trỏ

function mousemoverLeft(div) {
    const arrow_prev = div.querySelector('.prev');
    if (!arrow_prev) {
        console.error("Không tìm thấy phần tử .prev bên trong div!");
        return;
    }

    // Gắn sự kiện mousemove

    div.addEventListener('mousemove', (event) => {
        document.querySelector('.prev').classList.add('in');

        const offset = 30; // nửa kích thước SVG
        arrow_prev.style.transform = `translate(${event.clientX - offset}px, ${event.clientY - offset}px)`;
    });

    div.addEventListener('mouseout', () => {
        document.querySelector('.prev').classList.remove('in');
    });
}

function mousemoverRight(div) {
    const arrow_next = document.querySelector('.next');
    if (!arrow_next) {
        console.error("Không tìm thấy phần tử .next bên trong div!");
        return;
    }

    // Gắn sự kiện mousemove
    div.addEventListener('mousemove', (event) => {
        document.querySelector('.next').classList.add('in');

        const offset = 30; // nửa kích thước SVG
        arrow_next.style.transform = `translate(${event.clientX - offset}px, ${event.clientY - offset}px)`;
    });

    div.addEventListener('mouseout', () => {
        document.querySelector('.next').classList.remove('in');
    });
}



