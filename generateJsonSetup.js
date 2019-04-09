/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */

const link = 'https://www.json-generator.com/';

[
  '{{repeat(30)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    isActive: '{{bool()}}',
    firstname: '{{firstName()}}',
    surname: '{{surname()}}',
    image(tags) {
      let images = [
        'https://www.gstatic.com/webp/gallery/1.jpg',
        'https://www.gstatic.com/webp/gallery/2.jpg',
        'https://www.gstatic.com/webp/gallery/3.jpg',
        'https://www.gstatic.com/webp/gallery/3.jpg',
        'https://www.gstatic.com/webp/gallery/3.jpg',
      ];
      return images[tags.integer(0, images.length - 1)];
    },
    content: '{{lorem(1, "paragraphs")}}',
    title: '{{lorem(1, "word")}}',
    tags: ['{{repeat(7)}}', '{{lorem(1, "words")}}'],
    comments: [
      '{{repeat(3 , 29)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}',
        comment: '{{lorem(1, "paragraphs")}}',
      },
    ],
    likes: [
      '{{repeat(3 , 120)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}',
      },
    ],
  },
];
