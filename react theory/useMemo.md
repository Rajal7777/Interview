1. What is the difference between useMemo and useCallback?

useMemo memoizes a calculated value, while useCallback memoizes a function instance.

I use useMemo when I want to avoid expensive calculations, and useCallback when I want to maintain the same function reference between renders, especially when passing functions to memoized child components.

useMemo は計算結果をメモ化するための Hook で、useCallback は関数自体をメモ化するための Hook です。

useMemo はコストの高い計算を必要以上に実行しないようにする場合に使用し、useCallback は再レンダリング時に同じ関数を参照（さんしょう　reference）として保持(ほじretention)したい場合に使用します。特に、メモ化した子コンポーネントに関数を渡す場合などに有効です。

const result = useMemo(() => expensiveCalculation(data), [data]);
result chai calculated value ho.

const handleClick = useCallback(() => {
  console.log("clicked");
}, []);

/*------------------------------------------------------------------------*/

2. What is React.memo?
React.memo is a higher-order component that prevents a functional component from re-rendering when its props have not changed.

React.memo は、Props に変更がない場合に、コンポーネントの不要な再レンダリングを防ぐための機能です。

コンポーネントが頻繁に再レンダリングされる場合や、Props が変わらない場合にパフォーマンス改善のために使用できます。

const User = React.memo(({ name }) => {
  return <h1>{name}</h1>;
});
Parent component feri render bhayo.
tara name = "Rajal" smae nai ca vanay child component re-render huna bata rokxa

/*------------------------------------------------------------------------*/
What are Controlled and Uncontrolled Components?
Controlled and Uncontrolled components are the two primary ways to handle and manage form data (like inputs, checkboxes, and textareas) in React.The core difference lies in where the source of truth for the data lives: inside React state (Controlled) or inside the browser's Document Object Model (Uncontrolled).
controlled 
the form input value is controlled by the react state.(input, checkbox, textarea)

Controlled components provide more control over form data and validation, so I generally use them when I need to manage form state in React.
import { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Name:', name); // Data is already in state
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

Uncontrolled Components (DOM)
An uncontrolled component stores its value in the DOM itself, and we usually access it using a ref.

import { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Name:', inputRef.current.value); // Grabbed directly from DOM
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} defaultValue="John Doe" />
      <button type="submit">Submit</button>
    </form>
  );
}

Controlled Component は、フォームの値を React の State で管理するコンポーネントです。

一方、Uncontrolled Component は、フォームの値を DOM 側で管理し、必要に応じて ref を使って値を取得します。

フォームの状態やバリデーションを React で管理したい場合は、Controlled Component を使用することが多いです。
