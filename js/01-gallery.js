import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

function createGalleryMarkup(items) {
    return items
        .map(
            (item) => `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img 
        class="gallery__image"
         src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
/>
        </a> 
        </li>`
        )
        .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

galleryList.innerHTML = addGalleryMarkup; // Use galleryList instead of divRef

galleryList.addEventListener("click", onImageClick);

function onImageClick(evt) {
    evt.preventDefault(); // Prevent the default action of anchor tags

    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`);

    instance.show();

    window.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    });
}




// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.
//  Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі
//     < img >, і вказуватися в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

//     Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням 
// користувач буде перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.