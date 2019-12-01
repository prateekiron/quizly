## What is Quizly?

Quizly is a web based student response system.  

A “Student Response Systems” use a combination of software and hardware to present questions, record responses and enables a speaker to interact with his audience by collecting and analyzing responses to questions. A Student Response System is also called Audience Response System or Classroom Response System. Unlike asking students to raise their hands in response to a question, with an Student Response System, faculty/instructor can receive immediate classroom feedback. A Student Response System tells you if listeners are struggling with a topic or understanding it, and allows you to modify your lecture on the fly. The instructor uses a computer and a video projector to project a presentation for the audience to see. Most commonly Audience Response software display questions with several possible answers, more commonly referred to as multiple choice questions. During the presentation, the questions automatically display from a web browser, and is displayed only on the participant's tablet computer or smartphone. The audience participates by selecting the answer they believe to be correct and pushing the corresponding key on their individual wireless keypad. Their answer is then sent to receiver that is also attached to the presenter's computer. The audience response software collects the results, and display within the presentation for all to see. By integrating and enhancing the capabilities of these essential technologies, we are introducing the ‘QUIZLY’ and contribute to the current system. It is the type of a classroom response system specifically designed for the use in education at the university level. It would provide a platform for students to give quizzes and learned more about the topic, and remembered key points long after the presentation.

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