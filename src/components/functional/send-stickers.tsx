import { useState } from 'react';

import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

const stickerCategory = [
  {
    categoryImage: '/sticker-category-1.webp',
    stickers: [
      '/sticker-set-1/sticker1.png',
      '/sticker-set-1/sticker2.png',
      '/sticker-set-1/sticker3.png',
    ],
  },
  {
    categoryImage: '/sticker-category-2.webp',
    stickers: [
      '/sticker-set-2/sticker4.png',
      '/sticker-set-2/sticker5.png',
      '/sticker-set-2/sticker6.png',
    ],
  },
  {
    categoryImage: '/sticker-category-3.webp',
    stickers: [
      '/sticker-set-3/sticker7.png',
      '/sticker-set-3/sticker8.png',
      '/sticker-set-3/sticker9.png',
    ],
  },
];

export function SendStickers() {
  const [stickerSelected, setStickerSelected] = useState(false);
  const [selectedSticker, setSelectedSticker] = useState('');
  const [stickerCategoryIndex, setStickerCategoryIndex] = useState(0);

  if (stickerSelected) {
    return (
      <div className="send-sticker py-8">
        <div className="sticker-header flex justify-between rounded-lg bg-border px-2 py-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/images/man-profile.png" alt="user name" />
          </Avatar>
          <p className="text-md flex flex-col items-center font-semibold text-white">
            <span>Username</span>
            <span> 100/-</span>
          </p>
          <img src={selectedSticker} alt="sticker" className="h-12 w-12" />
        </div>
        <div className="send-button mt-8 flex justify-center px-2">
          <Button
            size="lg"
            className="w-full rounded-full"
            onClick={() => {
              setSelectedSticker('');
              setStickerSelected(false);
            }}>
            Send for 100/-
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="send-sticker px-2">
      <div className="category-header flex items-center gap-2 border-b border-primary py-2">
        {stickerCategory.map((category, index) => (
          <Button
            size="icon"
            variant="link"
            onClick={() => setStickerCategoryIndex(index)}
            className={`${stickerCategoryIndex === index ? 'border-b-2' : ''}`}>
            <img
              src={category.categoryImage}
              alt="sticker category"
              className="h-6 w-6"
            />
          </Button>
        ))}
      </div>
      <div className="flex py-2">
        {stickerCategory[stickerCategoryIndex].stickers.map((sticker) => (
          <Button
            key={sticker}
            size="icon"
            variant="link"
            onClick={() => {
              setStickerSelected(true);
              setSelectedSticker(sticker);
            }}
            className="flex flex-col gap-2">
            <img src={sticker} alt="sticker" className="h-16 w-16" />
            <p className="rounded-2xl bg-secondary px-4 py-1"> 100 /-</p>
          </Button>
        ))}
      </div>
    </div>
  );
}
