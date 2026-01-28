function Message() {
    //JSX: Javascript XML. Will compile to JS
    const name = '';
    if (name) {
      return <h1>Hello {name}</h1>;
    }
    else {
      return <h1>Hello World</h1>;
    }

}

export default Message;
