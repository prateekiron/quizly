## What is Quizly?

Quizly is an acronym for "**we**b based **cla**ssroom **re**sponse system".  

It is the prototype(!) of a classroom response system specifically designed for the use in computer science education at the university level.

Quizly was designed to fulfill these high-level requirements:

- **Web based**: No downloads necessary for both, students and instructor (using [Create React App](https://github.com/facebook/create-react-app) and [Redux](https://github.com/reduxjs/redux))
- **No server required**: Direct connection between participating browsers. Minimal (only for signalling) server interaction required (based on WebRTC using [PeerJS](https://github.com/peers/peerjs))
- **Code Execution**: Java code snippets within questions can be compiled and executed right in the browser (using [Doppio](https://github.com/plasma-umass/doppio/))
- **Code Formatting**: Formatting options (indentation, syntax highlighting) for Java code snippets (using [react-quill](https://github.com/zenoamaro/react-quill) and [react-codemirror2](https://github.com/scniro/react-codemirror2))

## How to run locally
1. Download and install `npm` on your machine
2. Clone/copy the content of this repository to an empty folder
3. Navigate to the new folder and run `npm install`
4. Run `npm start`
5. Open your browser at `localhost:3000` to see the app