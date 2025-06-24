"use client";
import TextArea from 'antd/es/input/TextArea';
import { ArrowUp } from 'lucide-react';
import React, { useState } from 'react';

const TextAreaCom = () => {

    const [value, setValue] = useState('');

    return (
        <div className=' max-w-[600px] drop-shadow-bloom2 mx-auto bg-black/5 rounded-xl '>
          <div className='w-full flex  flex-col'>
            <TextArea
            value={value}
            size='large'
            style={{borderBottomLeftRadius: '0px', border: 'none', borderBottomRightRadius: '0px', padding: '14px'}}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask anything"
            autoSize={{ minRows: 2, maxRows: 5 }}
          />
          <div className='w-full py-2 px-2 flex rounded-xl justify-end'>
            <button className='rounded-full cursor-pointer border p-1.5 bg-primaryBg text-white'><ArrowUp size={18} /></button>
          </div>
          </div>
        </div>
    );
};

export default TextAreaCom;