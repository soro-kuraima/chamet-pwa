import { useState } from 'react';

import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Slider } from '../ui/slider';

export function SendCoins() {
  const [value, setValue] = useState([40]);

  return (
    <>
      <div className="flex flex-col items-center py-8">
        <Label className="text-lg font-semibold" htmlFor="coins">
          Coins
        </Label>
        <span className="text-md flex items-center rounded-md border border-transparent px-2 py-0.5 text-right  text-muted-foreground hover:border-border">
          <img
            src="/images/rupee.png"
            alt="rupeee"
            className="mr-2 inline h-4 w-4"
          />
          {value}/-
        </span>
      </div>
      <Slider
        id="coins"
        max={100}
        defaultValue={value}
        step={10}
        onValueChange={(val) => setValue(val)}
        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4 px-2"
        aria-label="coins"
      />

      <div className="send-button mt-8 flex justify-center px-2 mb-4">
        <Button
          size="lg"
          className="w-full rounded-full"
          onClick={() => setValue([40])}>
          Buy and Send
        </Button>
      </div>
    </>
  );
}
