'use strict';

var generatePictureRandomData = function () {
  var COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];
  var DESCRIPTIONS = [
    'Тестим новую камеру!',
    'Затусили с друзьями на море',
    'Как же круто тут кормят',
    'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!',
  ];

  var likes = 15 + Math.floor(Math.random() * 185);
  var comments = [COMMENTS[Math.floor(Math.random() * COMMENTS.length)]];
  var description = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];

  var picture = {
    url: null,
    likes: likes,
    comments: comments,
    description: description,
  };

  return picture;
};

var assemblePictureNode = function (pictureData) {
  var picture = document.querySelector('#picture-template').content.cloneNode(true).querySelector('.picture');
  var img = picture.querySelector('img');
  var comments = picture.querySelector('.picture-comments');
  var likes = picture.querySelector('.picture-likes');

  img.setAttribute('src', pictureData.url);
  comments.textContent = pictureData.comments.length;
  likes.textContent = pictureData.likes;

  return picture;
};


var pictureData = [];
for (var i = 0; i < 25; i++) {
  var picture = generatePictureRandomData();
  picture.url = 'photos/' + parseInt(i + 1) + '.jpg';
  pictureData[i] = picture;
}

var sectionPictures = document.querySelector('.pictures');
for (var i = 0; i < 25; i++) {
  sectionPictures.append(assemblePictureNode(pictureData[i]));
}


var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');
