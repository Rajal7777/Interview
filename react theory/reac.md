1. What is React?
✅ English Answer
React is a JavaScript library for building user interfaces.
It uses reusable components to create dynamic and interactive web applications.
React updates only the necessary parts of the UI by using the Virtual DOM, which improves performance.
React はユーザーインターフェースを構築するための JavaScript ライブラリです。
コンポーネントベースで開発できるため、再利用性が高く、保守しやすいアプリケーションを作ることができます。
また、Virtual DOM を利用して必要な部分だけを更新するため、パフォーマンスも向上します。
/*------------------------------------------------------------------------*/

2. What is the Virtual DOM?
✅ English Answer

The Virtual DOM is a lightweight copy of the real DOM.

When the state changes, React compares the new Virtual DOM with the previous one and updates only the changed parts in the real DOM.

🇯🇵 Japanese Interview Answer

Virtual DOM は実際の DOM の軽量(けいりょう light weight)なコピーです。

State が変更されると(へんこう)、新しい Virtual DOM と以前の Virtual DOM を比較します。

変更された部分だけを実際の DOM に反映するため、効率よく画面を更新できます(こうしん)。

/*------------------------------------------------------------------------*/

3. What is the difference between State and Props?
✅ English Answer

Props are read-only data passed from a parent component to a child component.

State is data managed inside a component and can change over time.

When state changes, React re-renders the component.

🇯🇵 Japanese Interview Answer

Props は親コンポーネントから子コンポーネントへ渡される読み取り専用のデータです。

State はコンポーネント自身が管理するデータで、変更できます。

State が更新されると、そのコンポーネントは再レンダリングされます。

/*------------------------------------------------------------------------*/

4. What is useState?
✅ English Answer

useState is a React Hook that allows functional components to manage state.

It returns the current state and a function to update that state.

When the state is updated, React re-renders the component.

In React, a component re-renders (updates the UI) when its data changes. However, regular JavaScript variables reset every time a component re-renders. useState is a React Hook that solves this by allowing components to remember and update data over time.It returns two things: the current state value and a setter function to update it. When you call the setter function, React automatically triggers a re-render to reflect the new data on the screen.

useState は関数コンポーネントで State を管理するための React Hook です。

現在の State と、それを更新する関数を返します。

State が更新されると、コンポーネントは再レンダリングされます。
/*------------------------------------------------------------------------*/

5. What is useEffect?
✅ English Answer

useEffect is a React Hook used to perform side effects.

Examples include fetching data, calling APIs, setting timers, or adding event listeners.

The dependency array controls when the effect runs.
In React, a component's primary job is to take data and render UI. Anything that happens outside of that main rendering flow is called a "side effect." This includes fetching data from an API, manually changing the DOM, setting up a timer, or subscribing to an external service.useEffect is a React Hook that lets you synchronize your component with these external systems. It runs after the component renders on the screen, ensuring that heavy operations do not block the visual loading of your app

useEffectとは、関数コンポーネントにおいて『副作用ふくさよう（サイドエフェクト）』を実行するためのReacthookです

                 Component Starts
                        │
                        ▼
            function App() executes
                        │
                        ▼
       React reads useState() values
                        │
                        ▼
            JSX is returned (Render)
                        │
                        ▼
        React updates the Real DOM
                 (Browser Paint)
                        │
                        ▼
         ✅ useEffect() runs here
        (After the screen updates)
                        │
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
No state update                 setState() called
        │                               │
        ▼                               ▼
      Finish                  React schedules
                              a new render
                                      │
                                      ▼
                         Component function
                           executes again
                                      │
                                      ▼
                         Reads new state value
                                      │
                                      ▼
                              Returns new JSX
                                      │
                                      ▼
                           Updates only changed
                             parts of the DOM
                                      │
                                      ▼
                            useEffect runs again
                     (if dependencies changed)